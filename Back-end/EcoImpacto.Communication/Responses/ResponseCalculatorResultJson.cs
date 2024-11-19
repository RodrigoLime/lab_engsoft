using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace EcoImpacto.Communication.Responses
{
    [Table("EcoImpactoResults")]
    public class ResponseCalculatorResultJson
    {
        [Key]
        public double result { get; set; }
        public string worstSector { get; set; } = string.Empty;

    }
}
