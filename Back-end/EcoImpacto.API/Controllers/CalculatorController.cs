using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using EcoImpacto.Application.UseCases.Calculator;
using EcoImpacto.Communication.Requests;
using EcoImpacto.Communication.Responses;
using EcoImpacto.Data;

namespace EcoImpacto.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CalculatorController : ControllerBase
    {
        private readonly EcoImpactoDbContext _dbContext;

        public CalculatorController(EcoImpactoDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet]
        [Route("/")]
        public IActionResult Root()
        {
            return Ok("API is running!");
        }

        [HttpPost]
        [ProducesResponseType(typeof(ResponseCalculatorResultJson), StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult Calculator([FromBody] RequestCalculatorResultJson request)
        {
            var useCase = new RegisterCalculatorDataUseCase();
            var response = useCase.Execute(request);

            _dbContext.CalculatorData.Add(request);
            _dbContext.SaveChanges();

            return Ok(response);
        }
    }
}
