function Calculate() {    
    if ($('#frmCalculation').valid()) {
        var probabilityOne = parseFloat($('#ProbabilityOne').val());
        var probabilityTwo = parseFloat($('#ProbabilityTwo').val());
        var selectedOption = $('#SelectedOption').val();

        var result = GetResult(probabilityOne, probabilityTwo, selectedOption);
        $('#resultLabel').html("Probability is: " + result);

        //SaveResult(probabilityOne, probabilityOne, selectedOption, result);
    }
}

function GetResult(probabilityOne, probabilityTwo, selectedOption) {
    var result = "Error calculating probability";

    if (selectedOption === '0') {
        result = probabilityOne * probabilityTwo;
    }
    else if (selectedOption === '1') {
        result = probabilityOne + probabilityTwo - (probabilityOne * probabilityTwo);
    }

    return result;
}

function SaveResult(probabilityOne, probabilityTwo, selectedFunction, result) {
    $.ajax({
        url: '/Home/SaveResult',
        contentType: 'application/json',
        type: 'POST',
        data: JSON.stringify({ probabilityOne: probabilityOne, probabilityTwo: probabilityTwo, selectedFunction: selectedFunction, result: result }),  
        });
}


