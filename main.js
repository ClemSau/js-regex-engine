function matchOne(pattern, text) {
    if (!pattern) return true; // Any text matches an empty pattern
    if (!text) return false; // If the pattern is defined but the text is empty, there cannot be a match
    if (pattern === ".") return true; // Any inputted text matches the wildcard
    return pattern === text;
  }
