/*
    JS DOM (для начинающий);
    ▪ методы getElement(s)...
    ▪ Простая манипуляция dom-коллекцией
    ▪ Events
    ▪ *bubbling and capturing
*/


// ----------------------------------------------------------
// mouse events + event object

// click, mouseover, mouseout, mousemove



window.onload = function(){
    var block = document.querySelector('.block'),
        counter = 0;

    // block.onclick = function(){
    //     // if (counter == 3){
    //     //     // return;
    //     //     this.onclick = null;
    //     //     return;
    //     // }
    //     counter++;
    //     console.log('click');
    // }

    // block.onclick = function(){
    //     console.log('handler 2');
    // }

    // block.addEventListener('click', clickHandler);

    // function clickHandler(event){
    //     console.log('click', event);

    //     console.log(event.target === this);
    // }

    // setTimeout(function(){
    //     block.removeEventListener('click', onClick);
    // }, 3000);


    // block.addEventListener('mousedown', handler);
    // block.addEventListener('mouseup', handler);
    // block.addEventListener('click', handler);
    // block.addEventListener('mousemove', handler);


   

    // ----------------------------------------------------------

    // mousedown, mouseup, mouseenter, mouseleave

    // block.addEventListener('mouseover', handler);
    // block.addEventListener('mouseout', handler);

    // block.addEventListener('mouseenter', handler);
    // block.addEventListener('mouseleave', handler);



    // ----------------------------------------------------------

    // input events and keyboard events
    // change, input + * keypress, keydown, keyup

    // document.querySelector('#text').addEventListener('input', handler);
    // document.querySelector('#text').addEventListener('change', handler);
    // document.querySelector('#text').addEventListener('focus', handler);
    // document.querySelector('#text').addEventListener('blur', handler);

    var clickMe = document.querySelector('[data-some-attr="foo_attribute"]');

    clickMe.addEventListener('click', function(event){
        event.preventDefault();
    });

    document.addEventListener('contextmenu', function(event){
        event.preventDefault();
    });
}









function handler(event){
    console.log(event.type, event);
}