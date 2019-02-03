using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace C64SampleApp.Domain
{
    public class AspNetUsersSearchDomain
    {
        public string searchTerm { get; set; }
        public int pageNumber { get; set; }
        public int pageSize { get; set; }
        public string sortBy { get; set; }
        public string sortOrder { get; set; }
    }
}