let block1 = document.querySelector('.first')
let block2 = document.querySelector('.two')
let block3 = document.querySelector('.three')
let block4 = document.querySelector('.four')
let block5 = document.querySelector('.five')
let block6 = document.querySelector('.six')
let block7 = document.querySelector('.seven')
let block8 = document.querySelector('.eight')


let arrBlock = [block1,block2,block3,block4,block5,block6,block7,block8]

function showWithDelay(arrBlock) {
    for (let i = 0; i < arrBlock.length; i++) {
        setTimeout(() => { arrBlock[i].classList.add('fadeIn')}, 250 * i);
    }
}
showWithDelay(arrBlock);
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