function Calculate() {
    if (ValidateValues()) {
        var probabilityOne = parseFloat($('#ProbabilityOne').val());
        var probabilityTwo = parseFloat($('#ProbabilityTwo').val());
        var selectedOption = $('#SelectedFunction').val();

        var result = GetResult(probabilityOne, probabilityTwo, selectedOption);
        $('#resultLabel').html("Probability result is: " + result);

        //SaveResult(probabilityOne, probabilityOne, selectedOption, result);
    }
}

function ValidateValues() {
    var value1 = false;
    var value2 = false;
    var errorMessage = 'Value must be between 0.0 and 1.0';
    var probabilityOne = parseFloat($('#ProbabilityOne').val());
    var probabilityTwo = parseFloat($('#ProbabilityTwo').val());

    if (isNaN(probabilityOne) || (probabilityOne < 0.0 || probabilityOne > 1.0)) {
        $('#probabilityOneError').html(errorMessage);
        $('#resultLabel').html('');
    } else {
        $('#probabilityOneError').html('');
        value1 = true;
    }

    if (isNaN(probabilityTwo) || (probabilityTwo < 0.0 || probabilityTwo > 1.0)) {
        $('#probabilityTwoError').html(errorMessage);
        $('#resultLabel').html('');
    } else {
        $('#probabilityTwoError').html('');
        value2 = true;
    }

    return value1 && value2;
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


