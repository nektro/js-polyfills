/** A Polyfill for {Array.prototype.indexOf} for use on {HTMLCollection}
 */
HTMLCollection.prototype.indexOf = function(el) {
    if (!(cb instanceof Element)) {
        return;
    }
    for (var i = 0; i < this.length; i++) {
        if (this[i] === el) {
            return i;
        }
    }
    return -1;
};
