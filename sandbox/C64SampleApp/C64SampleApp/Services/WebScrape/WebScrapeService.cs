using C64SampleApp.Domain;
using C64SampleApp.Interfaces;
using C64SampleApp.Requests;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace C64SampleApp.Services.WebScrape
{
    public class WebScrapeService : IWebScrapeService
    {
        IDataProvider _dataProvider;

        public int Create(WebScrapeAddRequest webScrapeAddRequest)
        {
            int returnVal = 0;
            _dataProvider.ExecuteNonQuery(
                "webscrape_create",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    var parm = new SqlParameter
                    {
                        ParameterName = "@Id",
                        SqlDbType = System.Data.SqlDbType.Int,
                        Direction = System.Data.ParameterDirection.Output
                    };
                    paramCol.Add(parm);
                    paramCol.AddWithValue("@Title", webScrapeAddRequest.Title);
                    paramCol.AddWithValue("@Description", webScrapeAddRequest.Description);
                    paramCol.AddWithValue("@Image", webScrapeAddRequest.Image);
                    paramCol.AddWithValue("@Url", webScrapeAddRequest.Url);
                },
                returnParameters: delegate (SqlParameterCollection paramCol)
                {
                    returnVal = (int)paramCol["@Id"].Value;
                }
            );
            return returnVal;
        }

        public List<WebScrapeDomain> SelectAll()
        {
            var returnVal = new List<WebScrapeDomain>();
            _dataProvider.ExecuteCmd(
                "webscrape_select_all",
                inputParamMapper: null,
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    var model = new WebScrapeDomain();
                    int idx = 0;
                    model.Id = reader.GetInt32(idx++);
                    model.Title = reader.GetString(idx++);
                    model.Description = reader.GetString(idx++);
                    model.Image = reader.GetString(idx++);
                    model.Url = reader.GetString(idx++);
                    returnVal.Add(model);
                }
            );
            return returnVal;
        }

        public WebScrapeDomain SelectById(int id)
        {
            var returnVal = new WebScrapeDomain();
            _dataProvider.ExecuteCmd(
                "webscrape_select_by_id",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", id);
                },
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    int idx = 0;
                    returnVal.Id = reader.GetInt32(idx++);
                    returnVal.Title = reader.GetString(idx++);
                    returnVal.Description = reader.GetString(idx++);
                    returnVal.Image = reader.GetString(idx++);
                    returnVal.Url = reader.GetString(idx++);
                }
            );
            return returnVal;
        }

        public void Update(WebScrapeUpdateRequest webScrapeUpdateRequest)
        {
            _dataProvider.ExecuteNonQuery(
                "url_links_update",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", webScrapeUpdateRequest.Id);
                    paramCol.AddWithValue("@Title", webScrapeUpdateRequest.Title);
                    paramCol.AddWithValue("@Description", webScrapeUpdateRequest.Description);
                    paramCol.AddWithValue("@Image", webScrapeUpdateRequest.Image);
                    paramCol.AddWithValue("@Url", webScrapeUpdateRequest.Url);
                }
            );
        }

        public void Delete(int id)
        {
            _dataProvider.ExecuteNonQuery(
                "url_links_delete",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", id);
                }
            );
        }

        public WebScrapeService(IDataProvider dataProvider)
        {
            _dataProvider = dataProvider;
        }
    }
}