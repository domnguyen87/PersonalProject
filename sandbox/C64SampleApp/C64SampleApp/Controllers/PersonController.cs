
using C64SampleApp.Domain;
using C64SampleApp.Responses;
using C64SampleApp.Services.Person;
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
        private readonly IPersonService _personService;

        public PersonController(IPersonService personService)
        {
            _personService = personService;
        }

        [HttpPost]
        [Route]
        public HttpResponseMessage Create(PersonDomain model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    ItemResponse<int> resp = new ItemResponse<int>();
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

        [HttpGet]
        [Route]
        public HttpResponseMessage SelectAll()
        {
            try
            {
                ItemResponse<List<PersonDomain>> resp = new ItemResponse<List<PersonDomain>>();
                resp.Item = _personService.SelectAll();
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadGateway, ex);
            }
        }
    }
}
