/** A Polyfill for {Array.prototype.forEach} for use on {HTMLCollection}
 */
if (!('forEach' in HTMLCollection.prototype)) {
    HTMLCollection.prototype.forEach = function(cb) {
        Array.from(this).forEach(cb);
    };
}
