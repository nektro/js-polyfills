/** Returns the [power set](https://en.wikipedia.org/wiki/Power_set) of this Array
 */
if (!('powerSet' in Array.prototype)) {
    Array.prototype.powerSet = function*() {
        var max = Math.pow(2, this.length);
        for (var i = 0; i < max; i++) {
            var that = this;
            yield i.toString(2).split('').map(function(x,i) { return x === '1' ? that[i] : undefined; }).clean(undefined).toString();
        }
    };
}
