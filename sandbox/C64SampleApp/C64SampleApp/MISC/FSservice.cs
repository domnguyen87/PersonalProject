using Eleveight.Data;
using Eleveight.Data.Providers;
using Eleveight.Models.Domain;
using Eleveight.Models.Requests;
using Eleveight.Services.Interfaces;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace Eleveight.Services.FileStorage
{
    public class FileStorageService : IFileStorageService
    {
        IDataProvider _dataProvider;

        public int Create(FileStorageAddRequest fileStorageAddRequest)
        {
            int returnVal = 0;
            _dataProvider.ExecuteNonQuery(
                "file_storage_create",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    SqlParameter parm = new SqlParameter
                    {
                        ParameterName = "@Id",
                        SqlDbType = System.Data.SqlDbType.Int,
                        Direction = System.Data.ParameterDirection.Output
                    };
                    paramCol.Add(parm);
                    paramCol.AddWithValue("@UserFileName", fileStorageAddRequest.UserFileName);
                    paramCol.AddWithValue("@BasePath", fileStorageAddRequest.BasePath);
                    paramCol.AddWithValue("@SystemFileName", fileStorageAddRequest.SystemFileName);
                    paramCol.AddWithValue("@FileTypeId", fileStorageAddRequest.FileTypeId);
                    paramCol.AddWithValue("@ModifiedBy", fileStorageAddRequest.ModifiedBy);
                },
                returnParameters: delegate (SqlParameterCollection paramCol)
                {
                    returnVal = (int)paramCol["@Id"].Value;
                }
            );
            return returnVal;
        }

        public FileStorageDomain SelectById(int Id)
        {
            FileStorageDomain returnVal = new FileStorageDomain();
            _dataProvider.ExecuteCmd(
                "file_storage_select_by_id",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", Id);
                },
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    int idx = 0;
                    returnVal.Id = reader.GetSafeInt32(idx++);
                    returnVal.UserFileName = reader.GetSafeString(idx++);
                    returnVal.BasePath = reader.GetSafeString(idx++);
                    returnVal.SystemFileName = reader.GetSafeString(idx++);
                    returnVal.FileType = reader.GetSafeString(idx++);
                    returnVal.CreatedDate = reader.GetSafeDateTime(idx++);
                    returnVal.ModifiedDate = reader.GetSafeDateTime(idx++);
                    returnVal.ModifiedBy = reader.GetSafeString(idx++);
                }
                );
            return returnVal;
        }

        public List<FileStorageDomain> SelectAll()
        {
            List<FileStorageDomain> result = new List<FileStorageDomain>();
            _dataProvider.ExecuteCmd(
                "file_storage_select_all",
                inputParamMapper: null,
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    FileStorageDomain model = new FileStorageDomain();
                    int idx = 0;
                    model.Id = reader.GetSafeInt32(idx++);
                    model.UserFileName = reader.GetSafeString(idx++);
                    model.BasePath = reader.GetSafeString(idx++);
                    model.SystemFileName = reader.GetSafeString(idx++);
                    model.FileType = reader.GetSafeString(idx++);
                    model.CreatedDate = reader.GetSafeDateTime(idx++);
                    model.ModifiedDate = reader.GetSafeDateTime(idx++);
                    model.ModifiedBy = reader.GetSafeString(idx++);
                    result.Add(model);
                }
            );
            return result;
        }

        public void Update(FileStorageUpdateRequest model)
        {
            _dataProvider.ExecuteNonQuery(
                "file_storage_update",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", model.Id);
                    paramCol.AddWithValue("@UserFileName", model.UserFileName);
                    paramCol.AddWithValue("@BasePath", model.BasePath);
                    paramCol.AddWithValue("@SystemFileName", model.SystemFileName);
                    paramCol.AddWithValue("@FileTypeId", model.FileTypeId);
                    paramCol.AddWithValue("@ModifiedBy", model.ModifiedBy);
                }
            );
        }

        public void Delete(int Id)
        {
            _dataProvider.ExecuteNonQuery(
                "file_storage_delete",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", Id);
                }
            );
        }

        public FileStorageService(IDataProvider dataProvider)
        {
            _dataProvider = dataProvider;
        }
    }
}
