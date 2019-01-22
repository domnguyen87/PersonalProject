using C64SampleApp.Domain;
using C64SampleApp.Interfaces;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace C64SampleApp.Services.Careers
{
    public class CareersService : ICareersService
    {
        IDataProvider _dataProvider;

        public int Create(CareersDomain careersDomain)
        {
            int returnVal = 0;
            _dataProvider.ExecuteNonQuery(
                "careers_insert",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    SqlParameter parm = new SqlParameter();
                    parm.ParameterName = "@Id";
                    parm.SqlDbType = System.Data.SqlDbType.Int;
                    parm.Direction = System.Data.ParameterDirection.Output;
                    paramCol.Add(parm);

                    paramCol.AddWithValue("@Title", careersDomain.Title);
                    paramCol.AddWithValue("@Department", careersDomain.Department);
                    paramCol.AddWithValue("@Time", careersDomain.Time);
                    paramCol.AddWithValue("@Description", careersDomain.Description);
                },
                returnParameters: delegate (SqlParameterCollection paramCol)
                {
                    returnVal = (int)paramCol["@Id"].Value;
                }
                );
            return returnVal;
        }

        public List<CareersDomain> SelectAll()
        {
            List<CareersDomain> returnVal = new List<CareersDomain>();
            _dataProvider.ExecuteCmd(
                "careers_selectAll",
                inputParamMapper: null,
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    CareersDomain model = new CareersDomain();
                    int idx = 0;
                    model.Id = reader.GetInt32(idx++);
                    model.Title = reader.GetString(idx++);
                    model.Department = reader.GetString(idx++);
                    model.Time = reader.GetString(idx++);
                    model.Description = reader.GetString(idx++);

                    returnVal.Add(model);
                }
                );
            return returnVal;
        }

        public CareersDomain SelectById(int id)
        {
            CareersDomain returnVal = new CareersDomain();
            _dataProvider.ExecuteCmd(
                "careers_selectById",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", id);
                },
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    int idx = 0;
                    returnVal.Id = reader.GetInt32(idx++);
                    returnVal.Title = reader.GetString(idx++);
                    returnVal.Department = reader.GetString(idx++);
                    returnVal.Time = reader.GetString(idx++);
                    returnVal.Description = reader.GetString(idx++);
                }
                );
            return returnVal;
        }

        public void Update(CareersDomain model)
        {
            _dataProvider.ExecuteNonQuery(
                "careers_update",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", model.Id);
                    paramCol.AddWithValue("@Title", model.Title);
                    paramCol.AddWithValue("@Department", model.Department);
                    paramCol.AddWithValue("@Time", model.Time);
                    paramCol.AddWithValue("@Description", model.Description);
                },
                returnParameters: null
                );
        }

        public void Delete(int id)
        {
            _dataProvider.ExecuteNonQuery(
                "careers_delete",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", id);
                }
                );
        }

        public CareersService(IDataProvider dataProvider)
        {
            _dataProvider = dataProvider;
        }
    }
}