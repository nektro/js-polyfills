/* Convert a Blob to an Image
 * https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/createImageBitmap
 */
if (!('createImageBitmap' in self)) {
    self.createImageBitmap = async function(blob) {
        return new Promise((resolve,reject) => {
            let img = document.createElement('img');
            img.addEventListener('load', function() {
                resolve(this);
            });
            img.src = URL.createObjectURL(blob);
        });
    }
}
