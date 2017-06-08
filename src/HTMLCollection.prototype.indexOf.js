/** A Polyfill for {Array.prototype.indexOf} for use on {HTMLCollection}
 */
if (!('indexOf' in HTMLCollection.prototype)) {
    HTMLCollection.prototype.indexOf = function(el) {
        if (!(el instanceof Element)) {
            return;
        }
        for (var i = 0; i < this.length; i++) {
            if (this[i] === el) {
                return i;
            }
        }
        return -1;
    };
}
