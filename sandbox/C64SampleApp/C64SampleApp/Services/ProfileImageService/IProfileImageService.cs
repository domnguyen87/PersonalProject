using System.Collections.Generic;
using C64SampleApp.Domain;
using C64SampleApp.Requests;

namespace C64SampleApp.Services.ProfileImageService
{
    public interface IProfileImageService
    {
        int Create(ProfileImageAddRequest profileImageAddRequest);
        void Delete(int id);
        List<ProfileImageDomain> SelectAll();
        ProfileImageDomain SelectById(int Id);
        List<ProfileImageDomain> SelectByProfileId(int profileId);
        void Update(ProfileImageUpdateRequest model);
    }
}