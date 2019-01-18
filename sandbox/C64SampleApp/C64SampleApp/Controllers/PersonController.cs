﻿using C64AdoNetSample.Domain;
using C64AdoNetSample.Person;
using C64SampleApp.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace C64SampleApp.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/person")]
    public class PersonController : ApiController
    {
        private IPersonService _personService;

        [HttpPost]
        [Route]
        public HttpResponseMessage Create(PersonDomain model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    ItemResponse<bool> resp = new ItemResponse<bool>();
                    resp.Item = _personService.Create(model);
                    return Request.CreateResponse(HttpStatusCode.OK, resp);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.BadRequest, ModelState);
                }
            }
            catch (Exception ex)
            {

                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        public PersonController()
        {
            
        }
    }
}
