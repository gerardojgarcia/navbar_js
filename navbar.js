const navLinks = document.querySelector('.links')
const navBtn = document.querySelector('.nav-toggle')



navBtn.addEventListener('click', () => {
    toggleNav()

    console.log(navLinks.classList)

})



function toggleNav() {
    

    navLinks.classList.toggle('show-links')
}