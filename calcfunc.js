window.onload=function(){

    function add(x,y){

    }
    function subtract(x,y){
    
    }
    function multiply(x,y){
    
    }
    function divide(x,y){
    
    }

const btn = document.querySelectorAll('button');

btn.forEach(function(btn) {
    btn.addEventListener('click', function (e) {
        console.log(btn.textContent);
    });
})

}