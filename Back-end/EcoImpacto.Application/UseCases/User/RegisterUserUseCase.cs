using EcoImpacto.Communication.Responses;
using EcoImpacto.Communication.Requests;

namespace EcoImpacto.Application.UseCases.User
{
    public class RegisterUserUseCase
    {
        public ResponseRegisterUserJson Execute(RequestRegisterUserJson request)
        {

            return new ResponseRegisterUserJson
            {
                Status = "Sucesso",
                requestEmail = request.Email,
            };
        }

    }
}
