using C64SampleApp.Domain;
using C64SampleApp.Interfaces;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace C64SampleApp.Services.Person
{
    public class PersonService 
    {
        //connections not the ssame as eleveight. check here if there's any problems
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