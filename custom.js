const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4


    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

// first initializing variable and and get the class from dom
// use addEventListener for create function in one line 
// the could be any thing any(section / images/whatever)
// function (checkBoxes)
// assign value to the triggerBottom
// Element.getBoundingClientRect() what for
// methods to returns (DOMRect) object providing information about the size of an element 
// and its position relative to the viewport