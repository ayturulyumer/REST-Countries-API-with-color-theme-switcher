 export function getFirstProperty(obj) {
    // Check if the object is empty
    if (Object.keys(obj).length === 0) {
        return undefined; // Return undefined if the object is empty
    }
    
    // Get the first property of the object
    const firstKey = Object.keys(obj)[0];
    
    // Return the value of the first property
    return obj[firstKey];
}