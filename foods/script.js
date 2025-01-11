const icons = document.querySelectorAll(".section-1-icons i") 
//this selects all icon elements into icons variable
let i = 1



document.querySelector(".menu").addEventListener(
    "click", () => {
       document.querySelectorAll(".target").forEach((item) => {
           item.classList.toggle("change")
       })
    })

// toggle method - used to add a class to element if it doesn"t have


// this function adds and removes class "change" in an interval,
// if the counter reaches the last element the first element will be added
// with class change and the counter i will again be reset to 1
setInterval(() => {
    i++
    const icon = document.querySelector(".section-1-icons .change")
    // the first icon has class change we should remove it inorder to add it
    // another class
    icon.classList.remove("change") // to remove the class change we need to access 
    if (i > icons.length){
        icons[0].classList.add("change")
        i = 1
    }
    else {
        icon.nextElementSibling.classList.add("change") //adds change class to another elements
    }

},4000)
