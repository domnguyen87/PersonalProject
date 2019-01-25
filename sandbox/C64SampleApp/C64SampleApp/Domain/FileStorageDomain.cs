using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace C64SampleApp.Domain
{
    public class FileStorageDomain
    {
        public int Id { get; set; }
        public string UserFileName { get; set; }
        public string BasePath { get; set; }
        public string SystemFileName { get; set; }
        public string FileType { get; set; }
    }
}