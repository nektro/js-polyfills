/** A Polyfill for {Array.prototype.indexOf} for use on {HTMLCollection}
 */
if (!('indexOf' in HTMLCollection.prototype)) {
    HTMLCollection.prototype.indexOf = function(el) {
        return Array.from(this).indexOf(el);
    };
}
