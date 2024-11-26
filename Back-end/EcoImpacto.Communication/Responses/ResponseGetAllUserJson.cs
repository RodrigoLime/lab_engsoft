
namespace EcoImpacto.Communication.Responses
{
    public class ResponseGetAllUserJson
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public double Result { get; set; }
    }
}
