
const audioPlayer = document.getElementById('audioPlayer');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;

audioPlayer.addEventListener('click', () => {
    if (isPlaying) {
        bgMusic.pause();
        audioPlayer.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        bgMusic.play();
        audioPlayer.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
});


const fadeElements = document.querySelectorAll('.fade-in');

const fadeObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const fadeObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, fadeObserverOptions);

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});


const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Web Developer", "UI/UX Designer", "Content Creator", "Interface Architect"];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 1500;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#6c63ff"
        },
        shape: {
            type: "circle"
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false
            }
        },
        size: {
            value: 3,
            random: true
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#6c63ff",
            opacity: 0.4,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "push"
            },
            resize: true
        },
        modes: {
            grab: {
                distance: 140,
                line_linked: {
                    opacity: 1
                }
            },
            push: {
                particles_nb: 4
            }
        }
    },
    retina_detect: true
});


window.addEventListener("scroll", function() {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


const skillBars = document.querySelectorAll('.skill-progress');
const skillItems = document.querySelectorAll('.skill-item');

function animateSkillBars() {
    skillItems.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('visible');
            const bar = item.querySelector('.skill-progress');
            const progress = bar.getAttribute('data-progress');
            bar.style.width = progress + '%';
        }, index * 200); 
    });
}


const skillObserverOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
};

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateSkillBars();
            skillObserver.unobserve(entry.target);
        }
    });
}, skillObserverOptions);


const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}


skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const bar = item.querySelector('.skill-progress');
        bar.style.transform = 'scaleX(1.02)';
    });

    item.addEventListener('mouseleave', () => {
        const bar = item.querySelector('.skill-progress');
        bar.style.transform = 'scaleX(1)';
    });
});


const formGroups = document.querySelectorAll('.form-group');

formGroups.forEach(group => {
    const input = group.querySelector('input, textarea');
    const label = group.querySelector('label');

    input.addEventListener('focus', () => {
        label.classList.add('active');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            label.classList.remove('active');
        }
    });
});


const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;


if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-theme');
    const icon = themeToggle.querySelector('i');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const icon = themeToggle.querySelector('i');
    if (body.classList.contains('light-theme')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});


const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});


const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        
        if (window.FormData) {
            e.preventDefault();
            const formData = new FormData(contactForm);
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            })
            .then(response => {
                if (response.ok) {
                    const successMessage = document.createElement('div');
                    successMessage.className = 'success-message';
                    successMessage.textContent = 'Thank you! Your message has been sent.';
                    contactForm.appendChild(successMessage);
                    setTimeout(() => {
                        successMessage.remove();
                    }, 4000);
                    contactForm.reset();
                } else {
                    alert('Oops! There was a problem submitting your form.');
                }
            })
            .catch(() => {
                alert('Oops! There was a problem submitting your form.');
            });
        }
    });
}


let allProjects = [];
let projectsShown = 0;
const PROJECTS_PER_LOAD = 6;

async function loadProjects() {
    try {
        const response = await fetch('projects.json');
        const data = await response.json();
        allProjects = data.projects;
        projectsShown = 0;
        renderProjects();
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (!projectsGrid) return;
    
    const toShow = allProjects.slice(0, projectsShown + PROJECTS_PER_LOAD);
    projectsGrid.innerHTML = '';
    toShow.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card fade-in';
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" class="project-image">
                <div class="project-overlay">
                    <div class="project-links">
                        <a href="${project.liveLink}" class="project-link" title="View Live" target="_blank" rel="noopener">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                        <a href="${project.githubLink}" class="project-link" title="Source Code" target="_blank" rel="noopener">
                            <i class="fab fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="project-info">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.technologies.map(tech => `<span>${tech}</span>`).join('')}
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
        setTimeout(() => projectCard.classList.add('visible'), 10);
    });
    projectsShown = toShow.length;
    
    if (loadMoreBtn) {
        loadMoreBtn.style.display = (projectsShown >= allProjects.length) ? 'none' : 'block';
    }
}

document.getElementById('loadMoreBtn').addEventListener('click', renderProjects);

document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
}); 