using Amazon.S3;
using Amazon.S3.Model;
using Amazon.S3.Transfer;
using Eleveight.Models.Domain;
using Eleveight.Models.Requests;
using Eleveight.Models.Responses;
using Eleveight.Models.ViewModels;
using Eleveight.Services.FileStorage;
using Eleveight.Services.Interfaces;
using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Security.Principal;
using System.Web;
using System.Web.Http;

namespace Eleveight.Web.Controllers.Api
{
    [AllowAnonymous]
    [RoutePrefix("api/file-storage")]
    public class FileStorageController : ApiController
    {
        private IFileStorageService _fileStorageService;
        private IProfileImageService _profileImageService;

        readonly string awsResourceUrl = "https://sabio-training.s3.us-west-2.amazonaws.com/";
        // Define Required Parameters for AWS Access
        private const string awsAccessKey = "AKIAJF53EJKW7SJUV55Q";
        private const string awsSecretKey = "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";
        private const string awsBucketName = "sabio-training/C64/profile-images";
        private static readonly Amazon.RegionEndpoint bucketRegion = Amazon.RegionEndpoint.USWest2;
        static readonly AmazonS3Client s3Client = new AmazonS3Client(awsAccessKey, awsSecretKey, bucketRegion);
        TransferUtility fileTransferUtility = new TransferUtility(s3Client);

        // CONSTRUCTOR
        public FileStorageController(IFileStorageService fileStorageService, IProfileImageService profileImageService)
        {
            _fileStorageService = fileStorageService;
            _profileImageService = profileImageService;
        }

        [HttpPost]
        [Route]
        public HttpResponseMessage Upload()
        {
            // GRABBING THE FILE FROM THE HTTP REQUEST & ASSIGNING GUID TO SERVERFILENAME
            var httpRequest = HttpContext.Current.Request;

            if (httpRequest.Files.Count > 0)
            {
                try
                {
                    var postedFile = httpRequest.Files[0];
                    var postedFileName = postedFile.FileName;
                    var serverFileName = Path.GetFileNameWithoutExtension(postedFileName) + "." + Guid.NewGuid() + Path.GetExtension(postedFileName);

                    // AWS Upload
                    TransferUtilityUploadRequest request = new TransferUtilityUploadRequest
                    {
                        BucketName = awsBucketName,
                        Key = serverFileName,
                        InputStream = postedFile.InputStream
                    };
                    fileTransferUtility.Upload(request);

                    // CREATING MODEL TO SEND TO SERVICE TO SAVE FILE DATA TO SQL
                    FileStorageAddRequest newFile = new FileStorageAddRequest
                    {
                        UserFileName = postedFileName,
                        BasePath = "C64/profile-images/",
                        SystemFileName = serverFileName,
                        FileTypeId = 1,
                        ModifiedBy = "Logged In User"
                    };
                    int newFileId = _fileStorageService.Create(newFile);
                    FileStorageDomain newFileUpload = _fileStorageService.SelectById(newFileId);

                    // CREATING PROFILEIMAGE ADDREQUEST TO SQL
                    ProfileImageAddRequest newProfileImage = new ProfileImageAddRequest
                    {
                        //PROFILE ID IS HARDCODED (NEED TO USE GETCURRENTUSER)
                        ProfileId = 1,
                        FileStorageId = newFileId
                    };
                    int profileImageId = _profileImageService.Create(newProfileImage);


                    // CREATING FILE DATA VIEW MODEL RESPONSE DATA TO BE RETURNED
                    FileStorageViewModel fileData = new FileStorageViewModel
                    {
                        Id = newFileUpload.Id,
                        UserFileName = newFileUpload.UserFileName,
                        ImageUrl = awsResourceUrl + newFileUpload.BasePath + newFileUpload.SystemFileName,
                        FileType = newFileUpload.FileType,
                        ModifiedDate = newFileUpload.ModifiedDate,
                        ModifiedBy = newFileUpload.ModifiedBy
                    };

                    ItemResponse<FileStorageViewModel> resp = new ItemResponse<FileStorageViewModel>();
                    resp.Item = fileData;
                    log.Info("Create Successful");
                    return Request.CreateResponse(HttpStatusCode.Created, resp);

                }
                catch (AmazonS3Exception ex)
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
                }
                catch (Exception ex)
                {
                    log.Warn("Create Failed", ex);
                    return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
                }
            }
            else
            {
                log.Warn("Upload Failed - Check the file being uploaded.");
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Upload Failed - Check the file being uploaded.");
            }
        }

        [HttpGet]
        [Route]
        public HttpResponseMessage SelectAll()
        {
            try
            {
                ItemsResponse<FileStorageDomain> resp = new ItemsResponse<FileStorageDomain>
                {
                    Items = _fileStorageService.SelectAll()
                };
                log.Info("SelectAll Successful");
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                log.Warn("SelectAll Failed", ex);
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpGet]
        [Route("{id:int}")]
        public HttpResponseMessage SelectById(int id)
        {
            try
            {
                ItemResponse<FileStorageDomain> resp = new ItemResponse<FileStorageDomain>
                {
                    Item = _fileStorageService.SelectById(id)
                };
                log.Info("SelectById Successful");
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                log.Warn("SelectById Failed", ex);
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpPut]
        [Route("{id:int}")]
        public HttpResponseMessage Update(int id)
        {
            try
            {
                ItemResponse<FileStorageDomain> currentResp = new ItemResponse<FileStorageDomain>
                {
                    Item = _fileStorageService.SelectById(id)
                };
                // RETRIEVING FILE THAT IS BEING UPDATED
                var currentBasePath = currentResp.Item.BasePath;

                if (System.IO.File.Exists(currentBasePath))
                {
                    System.IO.File.Delete(currentBasePath);

                    var httpRequest = HttpContext.Current.Request;
                    var postedFile = httpRequest.Files[0];
                    var postedFileName = postedFile.FileName;
                    var uniqueFileGuid = Path.GetFileNameWithoutExtension(postedFileName) + "." + Guid.NewGuid() + Path.GetExtension(postedFileName);
                    var filePath = HttpContext.Current.Server.MapPath("~/Content/uploads/" + uniqueFileGuid);

                    FileStorageUpdateRequest updateFile = new FileStorageUpdateRequest
                    {
                        Id = id,
                        UserFileName = postedFileName,
                        BasePath = filePath,
                        SystemFileName = uniqueFileGuid,
                        FileTypeId = 1,
                        ModifiedBy = "Logged In User"
                    };
                    postedFile.SaveAs(filePath);

                    _fileStorageService.Update(updateFile);
                    SuccessResponse resp = new SuccessResponse();
                    log.Info("Update Successful");
                    return Request.CreateResponse(HttpStatusCode.Created, resp);

                }
                else
                    return Request.CreateResponse(HttpStatusCode.BadRequest, "File may not exist in AWS.");
            }
            catch (Exception ex)
            {
                log.Warn("Update Failed", ex);
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpDelete]
        [Route("{id:int}")]
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                ItemResponse<FileStorageDomain> fileStorageResp = new ItemResponse<FileStorageDomain>
                {
                    Item = _fileStorageService.SelectById(id)
                };

                var systemFileName = fileStorageResp.Item.SystemFileName;
                var fileStorageId = fileStorageResp.Item.Id;

                if (systemFileName != null)
                {
                    var deleteObjectRequest = new DeleteObjectRequest
                    {
                        BucketName = awsBucketName,
                        Key = systemFileName
                    };
                    s3Client.DeleteObject(deleteObjectRequest);
                    _fileStorageService.Delete(fileStorageId);
                    SuccessResponse deleteResp = new SuccessResponse();
                    return Request.CreateResponse(HttpStatusCode.OK, deleteResp);
                }
                log.Info("Delete Successful");
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }
            catch (Exception ex)
            {
                log.Warn("Delete Failed", ex);
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
