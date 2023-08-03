const boxes = document.querySelectorAll('.class')

// on scroll event checkBoxes will be called
window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    // using property of window to get the scroll position of the page
    const triggerBottom = window.innerHeight / 5 * 4

    // looping through all the boxes
    boxes.forEach(box => {
        // getting the position of the box using getBoundingClientRect()
        const boxTop = box.getBoundingClientRect().top
            // adding the .show class to the box if the box is in the viewport
        if (boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            // removing the .show class from the box if the box is not in the viewport
            box.classList.remove('show')
        }
    })
}