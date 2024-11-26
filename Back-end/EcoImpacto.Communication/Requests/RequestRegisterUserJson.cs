using System.ComponentModel.DataAnnotations;

namespace EcoImpacto.Communication.Requests
{
    public class RequestRegisterUserJson
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public double Result { get; set; }
    }
}
