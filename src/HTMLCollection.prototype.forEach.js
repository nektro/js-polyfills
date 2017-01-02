HTMLCollection.prototype.forEach = function(cb) {
    if (!(cb instanceof Function)) {
        return;
    }
    for (var i = 0; i < this.length; i++) {
        cb(this[i], i);
    }
};
