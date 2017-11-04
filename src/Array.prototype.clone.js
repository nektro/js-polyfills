/** Return a copy of the current Array
 */
if (!('clean' in Array.prototype)) {
    Array.prototype.clone = function() {
        return this.map(function(x) {
            return x;
        });
    };
}
