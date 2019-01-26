using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Mvc;
using Nexmo.Api;

namespace C64SampleApp.Controllers
{
    public class SMSController : ApiController
    {
        [System.Web.Mvc.HttpGet]
        public ActionResult Send()
        {
            return View();
        }

        [System.Web.Mvc.HttpPost]
        public ActionResult Send(string to, string text)
        {
            var results = SMS.Send(new SMS.SMSRequest
            {
                from = Configuration.Instance.Settings["appsettings:NEXMO_FROM_NUMBER"],
                to = to,
                text = text
            });
            return View();
        }
    }
}
