/* Replace all occurences of a String in a String (Based on http://stackoverflow.com/a/17606289)
*/
String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};
