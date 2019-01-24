using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace C64SampleApp.ViewModels
{
    public class FileStorageViewModel
    {
        public int Id { get; set; }
        public string UserFileName { get; set; }
        public string ImageUrl { get; set; }
        public string FileType { get; set; }
    }
}