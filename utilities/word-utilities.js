/**
 * Function used to capitalize first letter of a word
 * @param {word} - word to captialize
 * @returns {string} - word with first letter capitalized
 */
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

export { capitalize };
