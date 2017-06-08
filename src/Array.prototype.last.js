/** Return the last element of this Array
*/
if (!('last' in Array.prototype)) {
    Array.prototype.last = function() {
        return this[this.length - 1];
    };
}
