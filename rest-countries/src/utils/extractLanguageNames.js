export function extractLanguageNames(languagesObject) {
    // Get the property names of the object
    const languageCodes = Object.keys(languagesObject);

    // Map each language code to its corresponding name
    const languageNames = languageCodes.map(code => languagesObject[code]);

    // Join the language names with commas
    return languageNames.join(', ');
}