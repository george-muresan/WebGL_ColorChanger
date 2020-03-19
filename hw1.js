let gl = null;

function initGL() {
    const canvas = document.querySelector("canvas");
    gl = canvas.getContext('webgl2');

    if (!gl) {
        alert('Could not initialize Web GL. Upgrade Browser please...');
        return;
    }

    //this is the default color
    gl.clearColor(0.5, 0.5, 0.5, 1.0);

    gl.clear(gl.COLOR_BUFFER_BIT);
    console.log(canvas);
}



var Redslider = document.getElementById("REDid");
Redslider.addEventListener('input', function () { 
    gl.clearColor(this.value, Greenslider.value, Blueslider.value, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
});

var Greenslider = document.getElementById("GREENid");
Greenslider.addEventListener('input', function () {
    gl.clearColor(Redslider.value, this.value, Blueslider.value, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
});

var Blueslider = document.getElementById("BLUEid");
Blueslider.addEventListener('input', function () {
    gl.clearColor(Redslider.value, Greenslider.value, this.value, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
});