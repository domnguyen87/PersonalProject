using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace C64SampleApp.Domain
{
    public class JobDomain
    {
        public int Id { get; set; }
        public string JobTitle { get; set; }
        public string JobDuties { get; set; }
        public string Classification { get; set; }
        public string Time { get; set; }

    }
}