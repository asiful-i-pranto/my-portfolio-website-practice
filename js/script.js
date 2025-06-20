let navLinks = document.querySelectorAll('header nav ul a');
const logoLink = document.querySelector('.logo');
let sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navBar = document.querySelector('header nav');
let popImgOverlay = document.querySelector('.popup-image');

let scrollProgress = document.getElementById("progress");

let proImage = document.querySelector('.home-img .img-box .img-item img');





menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
})


// proImage.addEventListener('click', () => {
//     popImgOverlay.style.display = 'block';
// })

// popImgOverlay.addEventListener('click', () => {
//     popImgOverlay.style.display = 'none';
// })
// const activePage = () => {
//     const header = document.querySelector("header")
//     const barsBox = document.querySelector(".bars-box")

//     header.classList.remove('active');
//     setTimeout(() => {
//         header.classList.add('active');
//     }, 1100);



//     navLinks.forEach(link => {
//         link.classList.remove('active');
//     });

//     barsBox.classList.remove('active');
//     setTimeout(() => {
//         barsBox.classList.add('active');
//     }, 1100);


//     sections.forEach(section => {
//         section.classList.remove('active');
//     });

//     menuIcon.classList.toggle('bx-x');
//     navBar.classList.toggle('active');

// }

// navLinks.forEach((link, idx) => {
//     link.addEventListener('click', () => {
//         if (!link.classList.contains('active')) {
//             activePage();

//             link.classList.add('active');

//             setTimeout(() => {
//                 sections[idx].classList.add('active');
//             }, 1100);
//         }
//     });
// });

// logoLink.addEventListener('click', () => {
//     if(!navLinks[0].classList.contains('active')) {
//         activePage();

//         navLinks[0].classList.add('active');

//         setTimeout(() => {
//             sections[0].classList.add('active');
//         }, 1100);
//     }

// });

// const activePage = () => {
//     const header = document.querySelector("header")
//     // const barsBox = document.querySelector(".bars-box")

//     header.classList.remove('active');
//     setTimeout(() => {
//         header.classList.add('active');
//     }, 1100);

//     sections.forEach(section => {
//         section.classList.remove('active');
//     });

//     menuIcon.classList.toggle('bx-x');
//     navBar.classList.toggle('active');

// }

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         let scrollProgress = document.getElementById("progress");
//         let progressValue = document.getElementById("progress-value");
//         let pos = document.documentElement.scrollTop;
//         let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//         let scrollValue = Math.round((pos * 100) / calcHeight);


//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');

//             });

//             scrollProgress.style.display = "grid";

//             // barsBox.classList.remove('active');
//             // setTimeout(() => {
//             //     barsBox.classList.add('active');
//             // }, 1100);


            
//         }
//         else {
//             scrollProgress.style.display = "none";
//         }

//         scrollProgress.addEventListener("click", () => {
//             document.documentElement.scrollTop = 0;
//           });
//           scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
//     });


// };

// Selecting elements


// Function to handle scroll-based active navigation
let handleScroll = () => {
    let scrollTop = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (scrollTop >= offset && scrollTop < offset + height) {
            navLinks.forEach(link => link.classList.remove("active"));

            let activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });

    updateScrollProgress();
};

// Function to update the scroll progress indicator
let updateScrollProgress = () => {
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    scrollProgress.style.display = pos > 100 ? "grid" : "none";
    scrollProgress.style.background = `conic-gradient(#03cc65 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

// Scroll to top on click
scrollProgress.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Attach event listeners
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);



// navLinks.forEach((link, idx) => {
//     link.addEventListener('click', () => {
//         if (!link.classList.contains('active')) {
//             activePage();

//             link.classList.add('active');

//             setTimeout(() => {
//                 sections[idx].classList.add('active');
//             }, 1100);
//         }
//     });
// });



navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default jump behavior


        const targetId = link.getAttribute('href').substring(1); // Get section ID
        const targetSection = document.getElementById(targetId);

        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50, // Adjust for fixed header
                behavior: 'smooth' // Smooth scrolling effect
            });

            // Close mobile menu after clicking (optional)
            menuIcon.classList.remove('bx-x');
            navBar.classList.remove('active');

            // Update active link
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        }
    });
});


logoLink.addEventListener('click', () => {
    if(!navLinks[0].classList.contains('active')) {
        // activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');

});




 


const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', ()=> {
        const resumeDetails = document.querySelectorAll(".resume-detail")

        resumeBtns.forEach(btn =>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove("active");
        });
        resumeDetails[idx].classList.add("active");
    });
    
});

const arrowRight = document.querySelector(".portfolio-box .navigation .arrow-right");
const arrowLeft = document.querySelector(".portfolio-box .navigation .arrow-left");

let index = 0;

const activePortfolio = () => {
    const imgSlide = document.querySelector('.portfolio-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach (detail => {
        detail.classList.remove('active');
    });

    portfolioDetails[index].classList.add('active');

}

arrowRight.addEventListener("click", () => {
    if (index <1) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 2;
        arrowRight.classList.add('disabled');
    }

    activePortfolio();
})

arrowLeft.addEventListener("click", () => {
    if (index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }

    activePortfolio();
});

let submitBtn = document.querySelector('#contact .button');
let contactForm = document.querySelector('#contact-form');
let formFields = contactForm.querySelectorAll('input, textarea'); // All form fields'
let emailField = contactForm.querySelector('input[type="email"]'); 


// Function to validate email format
function validateEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
}

function checkFormFields() {
    let allFilled = true;
    formFields.forEach(field => {
        if (field.value.trim() === '') {
            allFilled = false;
        }
    });
    let isValidEmail = validateEmail(emailField.value);

    // Enable/Disable submit button based on form fields and email validity
    submitBtn.disabled = !(allFilled && isValidEmail);
}

// Listen for any change in form fields and check the form
formFields.forEach(field => {
    field.addEventListener('input', checkFormFields);
});


submitBtn.addEventListener('click', function() {
    this.innerHTML = "<div class='loader'></div>";
    this.style = "background:  #323946; pointer-events: none";
})



// This script runs after the page has loaded
window.addEventListener('load', function() {
    // Get the contact section and form
    
    let contactForm = document.querySelector('#contact-form');
    
    // Reset the form
    if (contactForm) {
        contactForm.reset(); // Reset the form fields
    }
});


document.getElementById("year").textContent = new Date().getFullYear();

let servToContbtns = document.querySelectorAll('.services .services-box .serv-to-cont-btn')
let contactSection = document.querySelector('#contact');


servToContbtns.forEach((button) => {
    button.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior

        // Scroll smoothly to the contact section
        contactSection.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
        });
    });
});


const blurDivs = document.querySelectorAll(".blur-load");

blurDivs.forEach(div => {
    const img = div.querySelector("img");

    function loaded() {
        div.classList.add("loaded");
        div.style.backgroundImage = "none"; // Remove background image
    }

    if(img.complete) {
        loaded();
    } else {
        img.addEventListener("load", loaded);
    }
})


document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("imageModal");
    const openModal = document.getElementById("openModal");
    const closeModal = document.querySelector(".close-btn");

    // Open modal on image click
    openModal.addEventListener("click", function () {
        modal.style.display = "flex";
    });

    // Close modal when clicking the close button
    closeModal.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside the image
    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });

    // Close modal with ESC key
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.style.display = "none";
        }
    });
});


const modal = document.getElementById("resumeModal");
const btn = document.getElementById("resumeDownBtn"); // Changed ID
const closeBtn = document.querySelector("#resumeModal .close-btn");

btn.onclick = function() {
    const pdfViewer = document.getElementById("pdfViewer");
    if (!pdfViewer.src) {
        pdfViewer.src = "files/Resume (Web Dev) - Md. Asiful Islam.pdf";
    }
    modal.style.display = "block";
}


closeBtn.onclick = function() {
    modal.style.display = "none";
}

// Close modal if the user clicks outside of it
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}







