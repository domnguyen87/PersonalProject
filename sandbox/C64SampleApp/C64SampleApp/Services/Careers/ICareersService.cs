using System.Collections.Generic;
using C64SampleApp.Domain;

namespace C64SampleApp.Services.Careers
{
    public interface ICareersService
    {
        int Create(CareersDomain careersDomain);
        void Delete(int id);
        List<CareersDomain> SelectAll();
        CareersDomain SelectById(int id);
        void Update(CareersDomain model);
    }
}