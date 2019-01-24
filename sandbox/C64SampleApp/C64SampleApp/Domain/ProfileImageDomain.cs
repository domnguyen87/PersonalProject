using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace C64SampleApp.Domain
{
    public class ProfileImageDomain
    {
        public int Id { get; set; }
        public int ProfileId { get; set; }
        public int FileStorageId { get; set; }
    }
}