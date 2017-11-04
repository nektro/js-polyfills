/** The clear() method removes all elements
 */
if (!('clear' in Array.prototype)) {
    Array.prototype.clear = function() {
        if (this.length > 0)
            this.shift();
        return this;
    };
}
