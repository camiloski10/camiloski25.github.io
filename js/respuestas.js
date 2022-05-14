function getBotResponse(input) {
    //rock paper scissors
    if (input == "piedra") {
        return "papel";
    } else if (input == "papel") {
        return "tijeras";
    } else if (input == "tijeras") {
        return "piedra";
    }

    // Simple responses
    if (input == "hola") {
        return "Hola bro!";
    } else if (input == "adios") {
        return "eso va pri!";
    } else {
        return "dime alguna vaina!";
    }
}