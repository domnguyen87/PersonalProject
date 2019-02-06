using C64SampleApp.Domain;
using C64SampleApp.Extension;
using C64SampleApp.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace C64SampleApp.Services.AspNetUsers
{
    public class AspNetUsersService : IAspNetUsersService
    {
        IDataProvider _dataProvider;

        public List<AspNetUsersDomain> Search(AspNetUsersSearchDomain aspNetUsersSearchDomain)
        {
            List<AspNetUsersDomain> result = new List<AspNetUsersDomain>();
            _dataProvider.ExecuteCmd(
                "AspNetUsers_search",
                inputParamMapper: delegate (SqlParameterCollection paramsList)
                {
                    SqlParameter param = new SqlParameter
                    {
                        ParameterName = "@Id",
                        SqlDbType = System.Data.SqlDbType.Text,
                        Direction = System.Data.ParameterDirection.Output
                    };

                    paramsList.AddWithValue("@searchTerm", aspNetUsersSearchDomain.searchTerm);
                    paramsList.AddWithValue("@pageNumber", aspNetUsersSearchDomain.pageNumber);
                    paramsList.AddWithValue("@pageSize", aspNetUsersSearchDomain.pageSize);
                    paramsList.AddWithValue("@sortBy", aspNetUsersSearchDomain.sortBy);
                    paramsList.AddWithValue("@sortOrder", aspNetUsersSearchDomain.sortOrder);

                },
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    AspNetUsersDomain model = new AspNetUsersDomain();
                    int index = 0;
                    model.Id = reader.GetSafeString(index++);
                    model.Email = reader.GetSafeString(index++);
                    model.EmailConfirmed = reader.GetBoolean(index++);
                    model.PasswordHash = reader.GetSafeString(index++);
                    model.SecurityStamp = reader.GetSafeString(index++);
                    model.PhoneNumber = reader.GetSafeString(index++);
                    model.PhoneNumberConfirmed = reader.GetBoolean(index++);
                    model.TwoFactorEnabled = reader.GetBoolean(index++);
                    model.LockoutEndDateUtc = reader.GetSafeDateTime(index++);
                    model.LockoutEnabled = reader.GetBoolean(index++);
                    model.AccessFailedCount = reader.GetSafeInt32(index++);
                    model.UserName = reader.GetSafeString(index++);

                    result.Add(model);
                }
            );
            return result;
        }

        public List<AspNetUsersDomain> SelectAll()
        {
            List<AspNetUsersDomain> result = new List<AspNetUsersDomain>();
            _dataProvider.ExecuteCmd(
                "AspNetUsers_SelectAll",
                inputParamMapper: null,
                singleRecordMapper: delegate (IDataReader reader, short set)
                {

                    AspNetUsersDomain model = new AspNetUsersDomain();
                    int index = 0;
                    model.Id = reader.GetSafeString(index++);
                    model.Email = reader.GetSafeString(index++);
                    model.EmailConfirmed = reader.GetBoolean(index++);
                    model.PasswordHash = reader.GetSafeString(index++);
                    model.SecurityStamp = reader.GetSafeString(index++);
                    model.PhoneNumber = reader.GetSafeString(index++);
                    model.PhoneNumberConfirmed = reader.GetBoolean(index++);
                    model.TwoFactorEnabled = reader.GetBoolean(index++);
                    model.LockoutEndDateUtc = reader.GetSafeDateTime(index++);
                    model.LockoutEnabled = reader.GetBoolean(index++);
                    model.AccessFailedCount = reader.GetSafeInt32(index++);
                    model.UserName = reader.GetSafeString(index++);

                    result.Add(model);
                }
                );
            return result;
        }
        
        public List<AspNetUsersDomain> SelectByPageNumber(int PageNumber, int PageSize)
        {
            List<AspNetUsersDomain> result = new List<AspNetUsersDomain>();
            _dataProvider.ExecuteCmd(
                "AspNetUsers_totalNumber",
                inputParamMapper: delegate (SqlParameterCollection paramsList)
                {
                    SqlParameter parm = new SqlParameter
                    {
                        ParameterName = "@Id",
                        SqlDbType = SqlDbType.Int,
                        Direction = ParameterDirection.Output
                    };
                    paramsList.AddWithValue("@PageNumber", PageNumber);
                    paramsList.AddWithValue("@PageSize", PageSize);
                },
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    AspNetUsersDomain model = new AspNetUsersDomain();
                    int index = 0;
                    model.Id = reader.GetSafeString(index++);
                    model.Email = reader.GetSafeString(index++);
                    model.EmailConfirmed = reader.GetBoolean(index++);
                    model.PasswordHash = reader.GetSafeString(index++);
                    model.SecurityStamp = reader.GetSafeString(index++);
                    model.PhoneNumber = reader.GetSafeString(index++);
                    model.PhoneNumberConfirmed = reader.GetBoolean(index++);
                    model.TwoFactorEnabled = reader.GetBoolean(index++);
                    model.LockoutEndDateUtc = reader.GetSafeDateTime(index++);
                    model.LockoutEnabled = reader.GetBoolean(index++);
                    model.AccessFailedCount = reader.GetSafeInt32(index++);
                    model.UserName = reader.GetSafeString(index++);

                    result.Add(model);
                }
                );
            return result;
        }

        public AspNetUsersService (IDataProvider dataProvider)
        {
            _dataProvider = dataProvider;
        }
    }
}