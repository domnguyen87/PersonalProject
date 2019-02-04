using C64SampleApp.Domain;
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
                    model.Id = reader.GetString(index++);
                    model.Email = reader.GetString(index++);
                    model.EmailConfirmed = reader.GetString(index++);
                    model.PasswordHash = reader.GetString(index++);
                    model.SecurityStamp = reader.GetString(index++);
                    model.PhoneNumber = reader.GetString(index++);
                    model.PhoneNumberConfirmed = reader.GetString(index++);
                    model.TwoFactorEnabled = reader.GetString(index++);
                    model.LockoutEndDateUtc = reader.GetDateTime(index++);
                    model.LockoutEnabled = reader.GetString(index++);
                    model.AccessFailedCount = reader.GetInt32(index++);
                    model.UserName = reader.GetString(index++);

                    result.Add(model);
                }
            );
            return result;
        }

        public List<AspNetUsersDomain> SelectAll()
        {
            var result = new List<AspNetUsersDomain>();
            _dataProvider.ExecuteCmd(
                "AspNetUsers_SelectAll",
                inputParamMapper: null,
                singleRecordMapper: delegate (IDataReader reader, short set)
                {

                    AspNetUsersDomain model = new AspNetUsersDomain();
                    int index = 0;
                    model.Id = reader.GetString(index++);
                    model.Email = reader.GetString(index++);
                    model.EmailConfirmed = reader.GetString(index++);
                    model.PasswordHash = reader.GetString(index++);
                    model.SecurityStamp = reader.GetString(index++);
                    model.PhoneNumber = reader.GetString(index++);
                    model.PhoneNumberConfirmed = reader.GetString(index++);
                    model.TwoFactorEnabled = reader.GetString(index++);
                    model.LockoutEndDateUtc = reader.GetDateTime(index++);
                    model.LockoutEnabled = reader.GetString(index++);
                    model.AccessFailedCount = reader.GetInt32(index++);
                    model.UserName = reader.GetString(index++);

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
                        SqlDbType = SqlDbType.Text,
                        Direction = ParameterDirection.Output
                    };
                    paramsList.AddWithValue("@PageNumber", PageNumber);
                    paramsList.AddWithValue("@PageSize", PageSize);
                },
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    AspNetUsersDomain model = new AspNetUsersDomain();
                    int index = 0;
                    model.Id = reader.GetString(index++);
                    model.Email = reader.GetString(index++);
                    model.EmailConfirmed = reader.GetString(index++);
                    model.PasswordHash = reader.GetString(index++);
                    model.SecurityStamp = reader.GetString(index++);
                    model.PhoneNumber = reader.GetString(index++);
                    model.PhoneNumberConfirmed = reader.GetString(index++);
                    model.TwoFactorEnabled = reader.GetString(index++);
                    model.LockoutEndDateUtc = reader.GetDateTime(index++);
                    model.LockoutEnabled = reader.GetString(index++);
                    model.AccessFailedCount = reader.GetInt32(index++);
                    model.UserName = reader.GetString(index++);

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