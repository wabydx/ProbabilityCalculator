using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ProbabilityCalculator.Models
{
    /// <summary>
    /// The ViewModel for Index.cshtml
    /// </summary>
    [Serializable]
    public class IndexViewModel
    {
        /// <summary>
        /// Gets or sets ProbabilityOne.
        /// </summary>
        [DisplayName("Probability A")]
        [Required(ErrorMessage = "{0} is required")]
        [Range(0f, 1f, ErrorMessage = "Value must be between 0.0 and 1.0")]
        public decimal? ProbabilityOne { get; set; }

        /// <summary>
        /// Gets or sets probabilityTwo.
        /// </summary>
        [DisplayName("Probability B")]
        [Required(ErrorMessage = "{0} is required")]
        [Range(0f, 1f, ErrorMessage = "Value must be between 0.0 and 1.0")]
        public decimal? ProbabilityTwo { get; set; }

        /// <summary>
        /// Gets or sets the selected option.
        /// </summary>
        [DisplayName("Selected function")]
        public string SelectedOption { get; set; }
    }
}