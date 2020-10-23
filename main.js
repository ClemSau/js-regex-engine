/**
 * Returns true if the pattern is the same as text, else return false
 * @param {*} pattern 
 * @param {*} text 
 * @returns {boolean}
 */
function matchOne(pattern, text) {
    if (!pattern) return true; // Any text matches an empty pattern
    if (!text) return false; // If the pattern is defined but the text is empty, there cannot be a match
    if (pattern === ".") return true; // Any inputted text matches the wildcard
    return pattern === text;
  }

/**
 * Returns true if the pattern is met in text, else return false
 * @param {*} pattern 
 * @param {*} text 
 * @returns {boolean}
 */
function match(pattern, text) {
if (pattern === "") return true;
// Our base case - if the pattern is empty, any inputted text is a match
else
    return (
    matchOne(pattern[0], text[0]) && match(pattern.slice(1), text.slice(1))
    );
}