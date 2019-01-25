using C64SampleApp.Domain;
using C64SampleApp.Requests;
using C64SampleApp.Responses;
using C64SampleApp.Services.WebScrape;
using HtmlAgilityPack;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace C64SampleApp.Controllers
{
    [AllowAnonymous]
    [RoutePrefix("api/webscrape")]
    public class WebScrapeController : ApiController
    {
        private IWebScrapeService _webScrapeService;

        [HttpPost]
        [Route]
        public HttpResponseMessage Create (WebScrapeRequest model)
        {
            try
            {
                string webUrl = model.Url;
                HtmlWeb web = new HtmlWeb();
                web.UserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.110 Safari/537.36";
                var htmlDoc = web.Load(webUrl);
                var createModel = new WebScrapeAddRequest
                {
                    Title = "",
                    Description = "",
                    Image = "",
                    Url = model.Url
                };

                //&& !htmlDoc.ParseErrors.Any()
                if (htmlDoc.DocumentNode != null && htmlDoc.ParseErrors != null && model.Title == null && model.Description == null && model.Image == null)
                {


                    if (htmlDoc.DocumentNode.SelectSingleNode("//head/meta[@property=\"og:title\"]") != null)
                    {
                        createModel.Title = htmlDoc.DocumentNode.SelectSingleNode("//head/meta[@property=\"og:title\"]").Attributes["content"].Value;
                    }
                    if (string.IsNullOrEmpty(createModel.Title) && htmlDoc.DocumentNode.SelectSingleNode("//head/title") != null)
                    {
                        createModel.Title = htmlDoc.DocumentNode.SelectSingleNode("//head/title").InnerText.Trim();
                    }

                    if (htmlDoc.DocumentNode.SelectSingleNode("//head/meta[@property=\"og:description\"]") != null)
                    {
                        createModel.Description = htmlDoc.DocumentNode.SelectSingleNode("//head/meta[@property=\"og:description\"]").Attributes["content"].Value;
                    }
                    var metaDescription = htmlDoc.DocumentNode.SelectSingleNode("//head/meta[translate(@name, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ', 'abcdefghijklmnopqrstuvwxyz')=\"description\"]");
                    if (string.IsNullOrEmpty(createModel.Description) && metaDescription != null)
                    {
                        createModel.Description = metaDescription.Attributes["content"].Value;
                    }

                    if (htmlDoc.DocumentNode.SelectSingleNode("//head/meta[@property=\"og:image\"]") != null)
                    {
                        createModel.Image = htmlDoc.DocumentNode.SelectSingleNode("//head/meta[@property=\"og:image\"]").Attributes["content"].Value;
                    }

                    if (htmlDoc.DocumentNode.SelectSingleNode("//head/meta[@property=\"og:url\"]") != null)
                    {
                        createModel.Url = htmlDoc.DocumentNode.SelectSingleNode("//head/meta[@property=\"og:url\"]").Attributes["content"].Value;
                    }
                }
                else if (model.Title != null && model.Description != null  && model.Image != null)
                {
                    createModel.Title = model.Title;
                    createModel.Description = model.Description;
                    createModel.Image = model.Image;
                }

                if (ModelState.IsValid)
                {
                    var resp = new ItemResponse<int>
                    {
                        Item = _webScrapeService.Create(createModel)
                    };
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
                var resp = new ItemsResponse<WebScrapeDomain>
                {
                    Items = _webScrapeService.SelectAll()
                };
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpGet]
        [Route("{id:int}")]
        public HttpResponseMessage SelectById(int id)
        {
            try
            {
                var resp = new ItemResponse<WebScrapeDomain>
                {
                    Item = _webScrapeService.SelectById(id)
                };
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        [HttpPut]
        [Route("{id:int}")]
        public HttpResponseMessage Update(WebScrapeUpdateRequest model)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var resp = new SuccessResponse();
                    _webScrapeService.Update(model);
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
                var resp = new SuccessResponse();
                _webScrapeService.Delete(id);
                return Request.CreateResponse(HttpStatusCode.OK, resp);
            }
            catch (Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        public WebScrapeController(IWebScrapeService webScrapeService)
        {
            _webScrapeService = webScrapeService;
        }

    }
}
