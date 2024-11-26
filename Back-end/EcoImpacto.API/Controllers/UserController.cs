using EcoImpacto.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EcoImpacto.Application.UseCases.User;
using EcoImpacto.Communication.Requests;
using EcoImpacto.Communication.Responses;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly EcoImpactoDbContext _dbContext;

        public UserController(EcoImpactoDbContext dbContext)
        {
            _dbContext = dbContext;
        }


        [HttpPost]
        [ProducesResponseType(typeof(ResponseRegisterUserJson), StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult RegisterUser([FromBody] RequestRegisterUserJson request)
        {

            var useCase = new RegisterUserUseCase();
            var response = useCase.Execute(request);

            _dbContext.CalculatorData.Add(request);
            _dbContext.SaveChanges();

            return Created(string.Empty, request);
        }

        [HttpGet]
        [ProducesResponseType(typeof(ResponseGetAllUserJson), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult GetAllUser()
        {

            var users = _dbContext.CalculatorData
            .OrderBy(u => u.Result) // Ordena pelo resultado (maior primeiro)
            .Select(u => new ResponseGetAllUserJson
            {
                Id = u.Id,
                Name = u.Nome,
                Email = u.Email,
                Result = u.Result
            })
            .ToList();

            // Verifica se existem usuários
            if (users.Count == 0)
            {
                return NotFound("Não há usuários cadastrados.");
            }

            return Ok(users); // Retorna a lista de usuários ordenada
        }

    }
}
