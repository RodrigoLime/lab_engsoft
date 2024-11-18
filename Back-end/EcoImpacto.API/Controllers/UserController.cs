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

            var uri = Url.Action("GetUser", new { id = response.requestEmail });

            if (uri == null)
            {
                return BadRequest("Não foi possível gerar a uri.");
            }

            return Created(uri, request);
        }

        [HttpGet]
        [ProducesResponseType(typeof(ResponseGetAllUserJson), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public IActionResult GetAllUser([FromBody] RequestGetAllUserJson request)
        {
            var useCase = new GetAllUserUseCase();
            var response = useCase.Execute(request);

            if (response == null)
            {
                return NotFound("Não há usuários cadastrados.");
            }
            return Ok(response);
        }

    }
}
