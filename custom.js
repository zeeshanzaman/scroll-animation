// first initializing variable and and get the class from dom
const box = document.querySelectorAll('.box')

// use addEventListener for create function in one line 
// the could be any thing any(section / images/whatever)
window.addEventListener('scroll', checkBoxes)

// function (checkBoxes)
function checkBoxes {
    // for actual calculation
    // console.log(window.innerHeight / 5 * 4)

    // assign value to the triggerBottom
    const triggerBottom = window.innerHeight / 5 * 4

    // Element.getBoundingClientReact() what for
    // methods to returns (DOMRect) object providing information about the size of an element 
    // and its position relative to the viewport
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientReact().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })

}