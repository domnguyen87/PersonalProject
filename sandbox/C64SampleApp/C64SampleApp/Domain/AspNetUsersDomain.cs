using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace C64SampleApp.Domain
{
    public class AspNetUsersDomain
    {
        public string Id { get; set; }
        public string Email { get; set; }
        public string EmailConfirmed { get; set; }
        public string PasswordHash { get; set; }
        public string SecurityStamp { get; set; }
        public string PhoneNumber { get; set; }
        public string PhoneNumberConfirmed { get; set; }
        public string TwoFactorEnabled { get; set; }
        public DateTime LockoutEndDateUtc { get; set; }
        public string LockoutEnabled { get; set; }
        public int AccessFailedCount { get; set; }
        public string UserName { get; set; }
    }
}