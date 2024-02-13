 export function getFirstProperty(obj , numProperties) {
    // Check if the object is empty
    if (Object.keys(obj).length === 0) {
        return undefined; // Return undefined if the object is empty
    }
    
    // If numProperties is not provided, default it to the number of properties in the object
    if (numProperties === undefined) {
        numProperties = Object.keys(obj).length;
    }

    // Get the properties of the object
    const keys = Object.keys(obj);

    // Calculate the actual number of properties to retrieve
    const actualNumProperties = Math.min(numProperties, keys.length);

    // Return the values of the specified number of properties
    return keys.slice(0, actualNumProperties).map(key => obj[key]);
}