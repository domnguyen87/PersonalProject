using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace C64AdoNetSample
{
    class Program
    {
        static void Main(string[] args)
        {
            string connString = ConfigurationManager.ConnectionStrings["DefaultConnection"].ConnectionString;
            Console.WriteLine("Hello!");
            using (SqlConnection conn = new SqlConnection(connString))
            {
                conn.Open();
                //using (SqlCommand cmd = new SqlCommand("Person_Insert", conn))
                //{
                //    cmd.CommandType = System.Data.CommandType.StoredProcedure;

                //    //OutParameter
                //    SqlParameter parm = new SqlParameter();
                //    parm.ParameterName = "@Id";
                //    parm.Direction = System.Data.ParameterDirection.Output;
                //    parm.SqlDbType = System.Data.SqlDbType.Int;

                //    cmd.Parameters.Add(parm);
                //    cmd.Parameters.Add("@FirstName", "boooo");
                //    cmd.Parameters.Add("@LastName", "bammmm");
                //    cmd.Parameters.Add("@Gender", "F");

                //    cmd.ExecuteNonQuery();
                //    int id = (int)cmd.Parameters["@Id"].Value;
                //    Console.WriteLine(string.Format("The newest id is: {0}", id));
                //}


                //using (SqlCommand cmd = new SqlCommand("Person_SelectById", conn))
                //{
                //    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                //    cmd.Parameters.Add("@Id", 2);

                //    SqlDataReader reader = cmd.ExecuteReader();
                //    while(reader.Read())
                //    {
                //        int idx = 0;
                //        Console.WriteLine(string.Format("{0}: {1}", reader.GetName(idx), reader.GetInt32(idx)));

                //        idx++;
                //        Console.WriteLine(string.Format("{0}: {1}", reader.GetName(idx), reader.GetString(idx)));

                //        idx++;                                                                     
                //        Console.WriteLine(string.Format("{0}: {1}", reader.GetName(idx), reader.GetString(idx)));

                //        idx++;                                                                     
                //        Console.WriteLine(string.Format("{0}: {1}", reader.GetName(idx), reader.GetString(idx)));

                //    }
                //}


                //using (SqlCommand cmd = new SqlCommand("Person_SelectAll", conn))
                //{
                //    cmd.CommandType = System.Data.CommandType.StoredProcedure;

                //    SqlDataReader reader = cmd.ExecuteReader();
                //    while (reader.Read())
                //    {
                //        int idx = 0;
                //        Console.WriteLine(string.Format("{0}: {1}", reader.GetName(idx), reader.GetInt32(idx)));

                //        idx++;
                //        Console.WriteLine(string.Format("{0}: {1}", reader.GetName(idx), reader.GetString(idx)));

                //        idx++;
                //        Console.WriteLine(string.Format("{0}: {1}", reader.GetName(idx), reader.GetString(idx)));

                //        idx++;
                //        Console.WriteLine(string.Format("{0}: {1}", reader.GetName(idx), reader.GetString(idx)));

                //    }
                //}

                //using (SqlCommand cmd = new SqlCommand("Person_Update", conn))
                //{
                //    cmd.CommandType = System.Data.CommandType.StoredProcedure;

                //    cmd.Parameters.AddWithValue("@Id", 1);
                //    cmd.Parameters.AddWithValue("@FirstName", "aaa");
                //    cmd.Parameters.AddWithValue("@LastName", "bbb");
                //    cmd.Parameters.AddWithValue("@Gender", "F");

                //    cmd.ExecuteNonQuery();

                //}

                //using (SqlCommand cmd = new SqlCommand("Person_SelectUsers", conn))
                //{
                //    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                //    SqlDataReader reader = cmd.ExecuteReader();
                //    do
                //    {
                //        while (reader.Read())
                //        {
                //            int idx = 0;
                //            Console.WriteLine(string.Format("{0}: {1}", reader.GetName(idx), reader.GetValue(idx)));

                //            idx++;
                //            Console.WriteLine(string.Format("{0}: {1}", reader.GetName(idx), reader.GetString(idx)));

                //            idx++;
                //            Console.WriteLine(string.Format("{0}: {1}", reader.GetName(idx), reader.GetString(idx)));

                //            idx++;
                //            Console.WriteLine(string.Format("{0}: {1}", reader.GetName(idx), reader.GetValue(idx)));

                //            Console.WriteLine("");
                //        }
                //    } while (reader.NextResult());
                //}

                using (SqlCommand cmd = new SqlCommand("Person_delete", conn))
                {
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;
                    cmd.Parameters.AddWithValue("@Id", 3);
                    cmd.ExecuteNonQuery();

                }


            }
            Console.Read();
        }
    }
}
