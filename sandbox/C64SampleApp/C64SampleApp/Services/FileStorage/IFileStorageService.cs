using System.Collections.Generic;
using C64SampleApp.Domain;
using C64SampleApp.Requests;

namespace C64SampleApp.Services.FileStorage
{
    public interface IFileStorageService
    {
        int Create(FileStorageAddRequest fileStorageAddRequest);
        void Delete(int Id);
        List<FileStorageDomain> SelectAll();
        FileStorageDomain SelectById(int Id);
        void Update(FileStorageUpdateRequest model);
    }
}