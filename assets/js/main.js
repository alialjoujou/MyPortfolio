/*================ SHOW MENU ==================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*========== MENU SHOW ===========*/
/* Validate if contant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

/*========== MENU HIDDEN ===========*/
/* Validate if contant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}


/*================ REMOVE MENU MOBILE ==================*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    //When we click on each nav__link, we remove the show-menu class 
    navMenu.classList.remove('show-menu') 
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*================ SHADOW HEADER ==================*/
const shadowHeader = () => {
  const header = document.getElementById('header')
  //when the scroll is greater than 50 viewport height, add the shadow-header class to the header tag
  this.scrollY >= 50 ? header.classList.add('shadow-header')
                     : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*================ EMAIL JS ==================*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')


const sendEmail = (e) =>{
    e.preventDefault()

    //serviceID - templateID - #form - publickey
    emailjs.sendForm('service_w0a582k','template_qia32xa','#contact-form','aoyPtdfrkA1QSoMoE')
    .then(() =>{
        //Show sent message
        contactMessage.textContent = 'Message sent successfully ✅'

        //Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        }, 5000)

        //Clear input fields 
        contactForm.reset()

    }, ()=>{
         //Show error message
         contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)


/*================ SHOW SCROLL UP ==================*/
const scrollUp = () =>{
const scrollUp = document.getElementById('scroll-up')
// When the scroll is hiegher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    : scrollUp.classList.remove('show-scroll')

}
window.addEventListener('scroll', scrollUp)


/*================ SCROLL SECTIONS ACTIVE LINK ==================*/
const sections = document.querySelectorAll('section[id')



const scrollActive= () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass =document.querySelector('.nav__menu a[href*=' +sectionId + ']')


        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)



/*================ DARK LIGHT THEME ==================*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme classdark
const getCurrentTheme = () => 'dark' 
const getCurrentIcon = () => 'ri-moon-line' 

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/*================ SCROLL REVEAL ANIMATION ==================*/
const sr = ScrollReveal({
    origin: 'top',
    distance:'60px',
    duration:2500,
    delay:400,
    // reset: true // Animations repeat
})

sr.reveal('.home__perfil, .about__image,.skills-table, .contact__mail',{origin:'right'})
sr.reveal('.home__name, .home__info, .about__container, .section__title-1,.skill-container, .about__info, .contact__social, .contact__data', {origin:'left'})
sr.reveal('.services__card, .projects__card',{interval:800})