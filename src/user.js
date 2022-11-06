
// Поява блоків
let listBlock = document.querySelectorAll('.fadeBlock')
function showWithDelay(listBlock) {
    for (let i = 0; i < listBlock.length; i++) {
        setTimeout(() => { listBlock[i].classList.add('fadeIn')}, 200 * i);
    }
}
showWithDelay(listBlock);
// Завершення коду появи блоків

let clickExz = document.querySelector('.click_exz')
clickExz.onclick = () =>{
    if( clickExz.style.color === 'black'){
        clickExz.style.color = 'blue'
    } else {
        clickExz.style.color = 'black'
    }
}

let clickExz2 = document.querySelector('.click_exz2')
clickExz2.addEventListener('dblclick', () => {
    if( clickExz2.style.color === 'black'){
        clickExz2.style.color = 'blue'
    } else {
        clickExz2.style.color = 'black'
    }
})