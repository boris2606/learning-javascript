// let userSec = prompt('Введіть кількість секунд')

// let init = () => {
//     sec = 0;
//     setInterval(tick, 1000);
// }
// // clearInterval(init)
// function tick(){
//     if (sec < userSec){
//         sec++;
//     } else {
//         return clearInterval(init)
//     }
//     console.log(sec)
// }
// init()

// function dispHide () {
//     setTimeout(dispShow, 2000)
// }
// function dispShow (){
//     var element = document.querySelectorAll('.accordion-item');
//     console.log(element)
//     for (let elem of element){
//         elem.classList.add("active_block")
//     }
// }
// dispHide()
// let someElem = document.getElementsByTagName('li')
// for (let p of someElem){
//     p.style.color = 'blue'
// }
// let titText = document.querySelector('.tit_text_learn')

// function addStyles (element,text,color,bg){
//     element.textContent = text
//     element.style.color = color
//     element.style.background = bg
// }
// setTimeout(() => {
//     addStyles(titText, 'Перший текст', 'green', 'black')
// },2000)

// setTimeout(() => {
//     addStyles(titText, 'Другий текст', 'red' ,' green')
// },3000)

// setTimeout(() => {
//     addStyles(titText, 'Третій текст', 'blue' , 'yellow')
// },4000)
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