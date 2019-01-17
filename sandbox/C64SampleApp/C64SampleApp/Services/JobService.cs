using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace C64SampleApp.Services
{
    public class JobService
    {
        IDataProvider dataProvider;

        

        public int Create (Jobdomain jobdomain)
        {

        }

        public JobService(IDataProvider data)
        {
            _dataProvider = data;
        }
    }
}