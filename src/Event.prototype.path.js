/** Returns the path of this Event target
*/
if (!('path' in Event.prototype)) {
    Object.defineProperty(Event.prototype, 'path', {
        get: function() {
            const res = new Array();
            let elem = this.target;
            while (elem !== null) {
                res.push(elem);
                elem = elem.parentElement;
            }
            return res;
        }
    });
}
