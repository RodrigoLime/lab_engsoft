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
        public double energyDifference { get; set; }
        public double gasDifference { get; set; }
        public double fuelDifference { get; set; }
        public double recyclingDifference { get; set; }
        public string worstSector { get; set; } = string.Empty;

    }
}
