window.onload = function () {
    
    var btnDown = document.getElementById("btnDown");
    var btnRight = document.getElementById("btnRight");

    var btnUpStep =document.getElementById("btnUpStep");
    var btnDownStep =document.getElementById("btnDownStep");

    var block = document.getElementsByClassName("block")[0];
    var numWindow = document.getElementsByClassName("numWindow")[0];

    var positionObject;
    var step = 150;
    numWindow.innerHTML = step;


    function moveDown() {
        positionObject = block.getBoundingClientRect();
        // if(positionObject.top + positionObject.height > 900) return;
        block.style.top = positionObject.top + step + 'px';

    };

    function moveRight() {
        positionObject = block.getBoundingClientRect();
        // if(positionObject.left + positionObject.height > 900) return;
        block.style.left = positionObject.left + step + 'px';

    };

    function moveLeft() {

        positionObject = block.getBoundingClientRect();
        // if(positionObject.right + positionObject.height > 900) return;
        block.style.left = positionObject.left + -step + 'px';

    };

    function moveUp() {
        positionObject = block.getBoundingClientRect();
        // if( positionObject.top < 60 ) return;
        block.style.top = positionObject.top - step + 'px';

    };

    function upStep() {
        step += 15;
        numWindow.innerHTML = step;
    };

    function downStep() {
        step -= 5;
        numWindow.innerHTML = step;
    }

    btnUpStep.addEventListener("mousedown", upStep);
    btnDownStep.addEventListener("mousedown", downStep);

    document.onkeydown = function(e) {
        switch (e.keyCode) {
            case 37:
                console.log('left');
                moveLeft();
                break;
            case 38:
                moveUp();
                break;
            case 39:
                console.log('right');
                moveRight()

                break;
            case 40:
                console.log('down');
                moveDown();
                break;
        }
    };



}