export function formatPopulation(number) {
    // Convert the number to a string
    let numberString = number.toString();
    
    // Determine the magnitude of the number
    let magnitude;
    if (number >= 1e6) {
        magnitude = "million";
    } else if (number >= 1e3) {
        magnitude = "thousand";
    } else {
        magnitude = "";
    }
    
    // Format the number based on its magnitude
    switch (magnitude) {
        case "million":
            numberString = (number / 1e6).toFixed(2) + "M";
            break;
        case "thousand":
            numberString = (number / 1e3).toFixed(2) + "K";
            break;
        default:
            break;
    }
    
    // Return the formatted string
    return numberString;
}