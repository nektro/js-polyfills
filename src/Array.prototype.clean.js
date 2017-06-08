/** Remove all occurrences of {deleteValue} from the Array {this}
 */
if (!('clean' in Array.prototype)) {
    Array.prototype.clean = function(deleteValue) {
        var i = 0;
        while ((i = this.indexOf(deleteValue)) > -1) {
            this.splice(i, 1);
        }
        return this;
    };
}
