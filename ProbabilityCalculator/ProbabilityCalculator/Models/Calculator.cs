using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProbabilityCalculator.Models
{
    public class Calculator
    {
        /// <summary>
        /// Gets or sets ProbabilityOne
        /// </summary>
        public decimal ProbabilityOne { get; set; }

        /// <summary>
        /// Gets or sets ProbabilityTwo
        /// </summary>
        public decimal ProbabilityTwo { get; set; }

        /// <summary>
        /// Gets or sets the selected function
        /// </summary>
        public ProbabilityFunctions SelectedFunction { get; set; }

        /// <summary>
        /// Gets or sets the result
        /// </summary>
        public decimal Result { get; set; }

        /// <summary>
        /// Enum for the probability calculation operations
        /// </summary>
        public enum ProbabilityFunctions
        {
            CombinedWith,
            Either
        }
    }
}