/*
    JS DOM (для начинающий);
    ▪ методы getElement(s)...
    ▪ Простая манипуляция dom-коллекцией
    ▪ Events
    ▪ *bubbling and capturing
*/


// ----------------------------------------------------------
/*
    getElementById
    getElementsByName
    getElementsByClassName

    --
    querySelector
    querySelectorAll
*/


window.onload = function() {
    // var elem = document.getElementById('super-block'); // ссылка на element
    // var elems = document.getElementsByClassName('block');
    // console.log(elems);
}


window.onload = function(){
    // var block = document.querySelector('.block');
    // console.dir(block);
    // block.style.backgroundColor = "rgba(13, 203, 167, 0.7)";
    
    
    
    

}


// ----------------------------------------------------------
window.onload = function() {
    // for
    var blocks = document.querySelectorAll('.block');

    // for(var i = 0; i < blocks.length; i++){
    //     blocks[i].style.backgroundColor = "rgba(13, 203, 167, 0.7)";
    // }



// forEach

    blocks.forEach(function(item){
        item.style.backgroundColor = "rgba(13, 203, 167, 0.7)";
        item.addEventListener('click', function(){
            console.log('click', event.target);
        });
    });
}



// ----------------------------------------------------------
// classList

window.onload = function() {
    var block = document.querySelector('.block');
    // block.className += ' target'; // bad
    // block.classList.add('target', 'bar');
    // block.classList.remove('f1', 'f2');

    // setInterval(function(){
    //     block.classList.toggle('target');
    // }, 100);
    console.dir(block);
}