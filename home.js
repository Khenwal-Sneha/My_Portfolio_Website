
// Javascript for image animation
document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.scroll-animate');

  function checkIfInView() {
    const triggerBottom = window.innerHeight / 1.2; // Adjust this value to change when the animation triggers

    images.forEach(image => {
      const imageTop = image.getBoundingClientRect().top;

      if (imageTop < triggerBottom) {
        image.classList.add('in-view');
      } else {
        image.classList.remove('in-view');
      }
    });
  }

  window.addEventListener('scroll', checkIfInView);
  checkIfInView(); // Initial check in case any images are already in view
});


//Javascript to make website responsive
// Function to change the content of the element
function changeContent() {
  let skills2 = document.querySelector('.skills2');
  let mediaQuery = window.matchMedia('(min-width: 780px) and (max-width: 1000px)');

  if (mediaQuery.matches) {
    // If the screen width is 1000px or less
    skills2.innerHTML = `
    <h1>My Development Arsenal!</h1>
        <p>
            <li> I leverage the latest technologies like HTML5, CSS3, JavaScript, and React to create responsive web experiences.</li><br>
            <li>Expertise in Node.js, Express.js, MySQL, MongoDB. I also develop and integrate RESTful APIs.</li><br>
            <li>Proficient in version control systems such as Git and GitHub.</li>
        </p>`;

  }
  else {
    skills2.innerHTML =
      `<h1>My Development Arsenal!</h1>
            <p>
                <li>Crafting visually stunning and intuitive user interfaces is my forte. I leverage the latest
                    technologies like HTML5, CSS3, JavaScript,and React to create responsive, engaging, and dynamic web
                    experiences.</li><br>
                <li>Expertise in server-side technologies such as Node.js, Express.js, MySQL, MongoDB.I develop and
                    integrate RESTful APIs, enabling seamless communication between different parts of application and
                    third-party services.</li><br>
                <li>Proficient in version control systems such as Git and GitHub. Adept at managing code repositories,
                    collaborating with teams, and ensuring high-quality code through effective version control
                    practices.</li>
            </p>`
  }
}

changeContent();
window.addEventListener('resize', changeContent);


//Javascript for 780px screen
function changeContent780() {
  let intro11 = document.querySelector('.intro11');
  let skills2 = document.querySelector('.skills2');
  let work1= document.querySelector('.work1');
  let contact2 = document.querySelector('.contact2');
  let nav=document.querySelector(".nav");
  let mediaQuery = window.matchMedia(' (min-width:450px) and (max-width: 780px)');

  if(mediaQuery.matches){
    intro11.innerHTML=
           `<h2>Hi! I am Sneha,</h2>
            <p>
                A passionate tech enthusiast with a knack for problem-solving and innovation. My journey in the tech
                world began with a fascination for how technology can transform ideas into reality.
                I believe in the power of technology to drive meaningful change.
            </p>`

    skills2.innerHTML=
           `<h2>My Skills!</h2>
            <p>
                <li>HTML5, CSS3, JavaScript,and React</li>
                <li>Node.js, Express.js, MySQL, MongoDB.</li>
                <li>Restful APIs</li>
                <li>Git and GitHub.</li>
            </p>`

    work1.innerHTML=
           `<h2>Git Repos</h2>
            <ul>
                <li><a href="">E. Exploration website</a></li>
                <li><a href="">Lorem ipsum </a></li>
                <li><a href="">Lorem ips</a></li>
            </ul>`

    contact2.innerHTML=
           `<h2>Contact:</h2>
            <p>
                <b>Mail:</b>khenwalsnehas@gmail.com
                <br><br>
                <b>Phone:</b>9370452304
                <br><br>
                <b>Linkden:</b><a href="https: //www.linkedin.com/in/sneha-khenwal/">Sneha-Khenwal</a>
                    <br><br>
            </p>`

    nav.innerHTML=
           `<a href="#skills">Skills</a>
            <a href="#work">Projects</a>
            <a href="#contact">Contact</a>`
  }
}

changeContent780();
window.addEventListener('resize', changeContent780);


//Javascript for 450px screen
function changeContent450(){
  let intro1 = document.querySelector('.intro1');
  let skills2 = document.querySelector('.skills2');
  let work1= document.querySelector('.work1');
  let contact2 = document.querySelector('.contact2');
  let nav=document.querySelector(".nav");
  let mediaQuery = window.matchMedia(' (min-width:260px) and (max-width: 450px)');

  if(mediaQuery.matches){
    intro1.innerHTML=
           `<div class="intro11">
                <h4>Hi! I am Sneha,</h4>
                <p style="font-size:1rem">
                    A passionate tech enthusiast with a knack for problem-solving and innovation. 
                    I believe in the power of technology to drive meaningful change. 
                </p>
                <div class="logos">
                    <a href="./images/linkden_logo.png"><img src="" alt="" class="scroll-animate"></a>
                    <a href="./images/linkden_logo.png"><img src="" alt="" class="scroll-animate"></a>
                </div>
            </div>
            <div class="btns1">
                <button style="font-size:1.3rem" ><a href="./images/Resume-Sneha Khenwal.pdf" target="_blank">My Resume</a></button>
            </div>`

    skills2.innerHTML=
           `<h4>My Skills!</h4>
            <p style="font-size:1rem">
                <li style="font-size:1rem">HTML5, CSS3, JavaScript,and React</li>
                <li style="font-size:1rem">Node.js, Express.js, MySQL, MongoDB.</li>
                <li style="font-size:1rem">Restful APIs</li>
                <li style="font-size:1rem">Git and GitHub.</li>
            </p>`

    work1.innerHTML=
           `<h4>Git Repos</h4>
            <ul style="font-size:1rem">
                <li style="font-size:1rem"><a href="" style="font-size:1rem">E. Exploration website</a></li>
                <li style="font-size:1rem"><a href="" style="font-size:1rem">Lorem ipsum </a></li>
                <li style="font-size:1rem"><a href="" style="font-size:1rem">Lorem ips</a></li>
            </ul>`

    contact2.innerHTML=
           `<h4>Contact:</h4>
            <p style="font-size:1rem">
                <b>Mail:</b>khenwalsnehas@gmail.com
                
                <b>Phone:</b>9370452304
                
                <b>Linkden:</b><a href="https: //www.linkedin.com/in/sneha-khenwal/" style="font-size:1rem">Sneha-Khenwal</a>
                    
            </p>`

    
  }
}

changeContent450();
window.addEventListener('resize', changeContent450);

//Javascript for 260px screen
function changeContent260(){
  let intro1 = document.querySelector('.intro1');
  let skills2 = document.querySelector('.skills2');
  let work1= document.querySelector('.work1');
  let contact2 = document.querySelector('.contact2');
  let mediaQuery = window.matchMedia(' (max-width:260px)');

  if(mediaQuery.matches){
    intro1.innerHTML=
           `<div class="intro11">
                <h4>Hi! I am Sneha,</h4>
                <p style="font-size:1rem">
                    A passionate tech enthusiast with a knack for problem-solving and innovation. 
                </p>
                <div class="logos">
                    <a href="./images/linkden_logo.png"><img src="" alt="" class="scroll-animate"></a>
                    <a href="./images/linkden_logo.png"><img src="" alt="" class="scroll-animate"></a>
                </div>
            </div>
            <div class="btns1">
                <button style="font-size:1rem padding:2px" ><a href="./images/Resume-Sneha Khenwal.pdf" target="_blank">Resume</a></button>
            </div>`

    skills2.innerHTML=
           `<h4>My Skills!</h4>
            <p style="font-size:1rem">
                <li style="font-size:1rem">HTML5, CSS3, JavaScript,and React</li>
                <li style="font-size:1rem">Node.js, Express.js, MySQL, MongoDB.</li>
                <li style="font-size:1rem">Restful APIs</li>
                <li style="font-size:1rem">Git and GitHub.</li>
            </p>`

    work1.innerHTML=
           `<h4>Git Repos</h4>
            <ul style="font-size:1rem">
                <li style="font-size:1rem"><a href="" style="font-size:1rem">E. Exploration website</a></li>
                <li style="font-size:1rem"><a href="" style="font-size:1rem">Lorem ipsum </a></li>
                <li style="font-size:1rem"><a href="" style="font-size:1rem">Lorem ips</a></li>
            </ul>`

    contact2.innerHTML=
           `<h4>Contact:</h4>
            <p style="font-size:1rem">
                <b>Mail:</b><br>khenwalsnehas@gmail.com
                <br><br>
                <b>Phone:</b><br>9370452304
                <br><br>
                <b>Linkden:</b><br><a href="https: //www.linkedin.com/in/sneha-khenwal/" style="font-size:1rem">Sneha-Khenwal</a>
                    <br><br>
            </p>`
  }
}

changeContent260();
window.addEventListener('resize', changeContent260);

