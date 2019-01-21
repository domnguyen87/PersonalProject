﻿using C64SampleApp.Domain;
using C64SampleApp.Interfaces;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace C64SampleApp.Services.Person
{
    public class PersonService : IPersonService
    {
        IDataProvider _dataProvider;

        public int Create(PersonDomain personDomain)
        {
            int returnVal = 0;
            _dataProvider.ExecuteNonQuery(
                "Person_Insert",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    SqlParameter parm = new SqlParameter();
                    parm.ParameterName = "@Id";
                    parm.SqlDbType = System.Data.SqlDbType.Int;
                    parm.Direction = System.Data.ParameterDirection.Output;
                    paramCol.Add(parm);

                    paramCol.AddWithValue("@FirstName", personDomain.FirstName);
                    paramCol.AddWithValue("@LastName", personDomain.LastName);
                    paramCol.AddWithValue("@Gender", personDomain.Gender);
                },
                returnParameters: delegate (SqlParameterCollection parmaCol)
                {
                    returnVal = (int)parmaCol["@Id"].Value;
                }
            );
            return returnVal;
        }

        public List<PersonDomain> SelectAll()
        {
            List<PersonDomain> returnVal = new List<PersonDomain>();
            _dataProvider.ExecuteCmd(
                "Person_SelectAll",
                inputParamMapper: null,
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    PersonDomain model = new PersonDomain();
                    int idx = 0;
                    model.Id = reader.GetInt32(idx++);
                    model.FirstName = reader.GetString(idx++);
                    model.LastName = reader.GetString(idx++);
                    model.Gender = reader.GetString(idx++);

                    returnVal.Add(model);
                }
            );
            return returnVal;
        }

        public PersonDomain SelectById(int id)
        {
            PersonDomain returnVal = new PersonDomain();
            _dataProvider.ExecuteCmd(
                "Person_SelectById",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", id);
                },
                singleRecordMapper: delegate (IDataReader reader, short set)
                {
                    int idx = 0;
                    returnVal.Id = reader.GetInt32(idx++);
                    returnVal.FirstName = reader.GetString(idx++);
                    returnVal.LastName = reader.GetString(idx++);
                    returnVal.Gender = reader.GetString(idx++);

                }
                );
            return returnVal;
        }

        public void Update(PersonDomain model)
        {
            _dataProvider.ExecuteNonQuery(
                "Person_Update",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", model.Id);
                    paramCol.AddWithValue("@FirstName", model.FirstName);
                    paramCol.AddWithValue("@LastName", model.LastName);
                    paramCol.AddWithValue("@Gender", model.Gender);
                },
                returnParameters: null
                );
        }

        public void Delete(int id)
        {
            _dataProvider.ExecuteNonQuery(
                "Person_Delete",
                inputParamMapper: delegate (SqlParameterCollection paramCol)
                {
                    paramCol.AddWithValue("@Id", id);
                }
                );
        }


        //public SqlConnection conn;
        ////To Handle connection related activities
        //public void connection()
        //{
        //    string constr = ConfigurationManager.ConnectionStrings["DefaultConnection"].ToString();
        //    conn = new SqlConnection(constr);
        //}

        //public bool Create(PersonDomain personDomain)
        //{
        //    connection();
        //    SqlCommand cmd = new SqlCommand("Person_Insert", conn);
        //    cmd.CommandType = System.Data.CommandType.StoredProcedure;

        //    SqlParameter parm = new SqlParameter();
        //    parm.ParameterName = "@Id";
        //    parm.Direction = System.Data.ParameterDirection.Output;
        //    parm.SqlDbType = System.Data.SqlDbType.Int;

        //    cmd.Parameters.Add(parm);
        //    cmd.Parameters.Add("@FirstName", personDomain.FirstName);
        //    cmd.Parameters.Add("@LastName", personDomain.LastName);
        //    cmd.Parameters.Add("@Gender", personDomain.Gender);

        //    conn.Open();
        //    int i = cmd.ExecuteNonQuery();
        //    conn.Close();
        //    if (i >= 1)
        //    {
        //        return true;
        //    }
        //    else
        //    {
        //        return false;
        //    }

        public PersonService(IDataProvider dataProvider)
        {
            _dataProvider = dataProvider;
        }
    }
}