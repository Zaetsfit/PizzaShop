var counter = 1;
setInterval(function(){
    try {
        document.getElementById('radio' + counter).checked = true;
    }
    catch (error) {
        return
    }
    counter++;
    if(counter > 4){
    counter = 1;
    }
}, 5000);



// loader mask
let mask = document.querySelector('.mask')
window.addEventListener('load', () => {
    mask.classList.add('hide');
    setTimeout(() => {
        mask.remove();
    }, 600);
});