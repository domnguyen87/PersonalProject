using C64SampleApp.Domain;
using C64SampleApp.Interfaces;
using C64SampleApp.Requests;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;

namespace C64SampleApp.Services.FileStorage
{
    public class FileStorageService : IFileStorageService
    {
        IDataProvider _dataProvider;

        public FileStorageService(IDataProvider dataProvider)
        {
            _dataProvider = dataProvider;
        }

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
                    returnVal.Id = reader.GetInt32(idx++);
                    returnVal.UserFileName = reader.GetString(idx++);
                    returnVal.BasePath = reader.GetString(idx++);
                    returnVal.SystemFileName = reader.GetString(idx++);
                    returnVal.FileType = reader.GetString(idx++);
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
                    model.Id = reader.GetInt32(idx++);
                    model.UserFileName = reader.GetString(idx++);
                    model.BasePath = reader.GetString(idx++);
                    model.SystemFileName = reader.GetString(idx++);
                    model.FileType = reader.GetString(idx++);
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

    }

   


}