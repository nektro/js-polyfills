Array.prototype.powerSet = function() {
    var res = new Array();
    var max = Math.pow(2, this.length);
    for (var i = 0; i < max; i++) {
        var that = this;
        var sub = i.toString(2).split('').map(function(x,i) { return x === '1' ? that[i] : undefined; }).clean(undefined).toString();
        res.push(sub);
    }
    return res;
};
