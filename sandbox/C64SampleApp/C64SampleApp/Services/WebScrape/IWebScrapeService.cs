using System.Collections.Generic;
using C64SampleApp.Domain;
using C64SampleApp.Requests;

namespace C64SampleApp.Services.WebScrape
{
    public interface IWebScrapeService
    {
        int Create(WebScrapeAddRequest webScrapeAddRequest);
        void Delete(int id);
        List<WebScrapeDomain> SelectAll();
        WebScrapeDomain SelectById(int id);
        void Update(WebScrapeUpdateRequest webScrapeUpdateRequest);
    }
}