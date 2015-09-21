using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ProbabilityCalculator.Models
{
    public class Calculator
    {
        public decimal ProbabilityOne { get; set; }

        public decimal ProbabilityTwo { get; set; }

        public Function SelectedFunction { get; set; }

        public decimal Result { get; set; }

        public enum Function
        {
            CombinedWith,
            Either
        }
    }
}