using C64AdoNetSample.Domain;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C64AdoNetSample.Person
{
    public class PersonService : IPersonService
    {
        public SqlConnection conn;
        //To Handle connection related activities
        public void connection()
        {
            string constr = ConfigurationManager.ConnectionStrings["DefaultConnection"].ToString();
            conn = new SqlConnection(constr);
        }

        //CREATE
        public bool Create(PersonDomain personDomain)
        {
            connection();
            SqlCommand cmd = new SqlCommand("Person_Insert", conn);
            cmd.CommandType = System.Data.CommandType.StoredProcedure;

            SqlParameter parm = new SqlParameter();
            parm.ParameterName = "@Id";
            parm.Direction = System.Data.ParameterDirection.Output;
            parm.SqlDbType = System.Data.SqlDbType.Int;

            cmd.Parameters.Add(parm);
            cmd.Parameters.Add("@FirstName", personDomain.FirstName);
            cmd.Parameters.Add("@LastName", personDomain.LastName);
            cmd.Parameters.Add("@Gender", personDomain.Gender);

            conn.Open();
            int i = cmd.ExecuteNonQuery();
            conn.Close();
            if (i >= 1)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

    }
}
