/**
 * Remove all occurrences of {deleteValue} from the Array {this}
 */
Array.prototype.clean = function(deleteValue) {
    var i = 0;
    while ((i = this.indexOf(deleteValue)) > -1) {
        this.splice(i, 1);
    }
    return this;
};
