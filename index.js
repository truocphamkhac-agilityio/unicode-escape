/**
 * Expose.
 */
const SPECIAL_CHAR = /\u200B/g;

module.exports = (str) => {
    if (typeof str !== 'string') {
        return str;
    }

    if (SPECIAL_CHAR.test(str)) {
      str = str.replace(SPECIAL_CHAR, '');
    }

    return str.trim();
};