
namespace DietPlanner.Models
{
    public class Plan
    {
        public int plan_id { get; set; }
        public string day_of_week { get; set; } = string.Empty;
        public string type_of_meal { get; set; } = string.Empty;
        public string title_of_meal { get; set; } = string.Empty;
        public string ingredients { get; set; } = string.Empty;
    }
}

