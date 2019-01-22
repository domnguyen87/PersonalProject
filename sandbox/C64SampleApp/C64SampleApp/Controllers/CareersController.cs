using C64SampleApp.Domain;
using C64SampleApp.Responses;
using C64SampleApp.Services.Careers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace C64SampleApp.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/career")]
    public class CareersController : ApiController
    {
        private ICareersService _careerService;

        public CareersController(ICareersService careersService)
        {
            _careerService = careersService;
        }

        [HttpPost]
        [Route]
        public HttpResponseMessage Create(CareersDomain model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    ItemResponse<int> resp = new ItemResponse<int>();
                    resp.Item = _careerService.Create(model);
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
                ItemResponse<List<CareersDomain>> resp = new ItemResponse<List<CareersDomain>>();
                resp.Item = _careerService.SelectAll();
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadGateway, ex);
            }
        }

        [HttpGet]
        [Route("{id:int}")]
        public HttpResponseMessage SelectById(int id)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    ItemResponse<CareersDomain> resp = new ItemResponse<CareersDomain>();
                    resp.Item = _careerService.SelectById(id);
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

        [HttpPut]
        [Route("{id:int}")]
        public HttpResponseMessage Update(CareersDomain model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    _careerService.Update(model);
                    SuccessResponse resp = new SuccessResponse();
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

        [HttpDelete]
        [Route("{id:int}")]
        public HttpResponseMessage Delete(int id)
        {
            try
            {
                _careerService.Delete(id);
                SuccessResponse resp = new SuccessResponse();
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }
    }
}
