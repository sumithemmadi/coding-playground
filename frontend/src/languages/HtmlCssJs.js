import Playground from 'javascript-playgrounds'
import NavBar from '../components/NavBar'



export default function HcjPlayground() {

  //   const defaultHtml = ```

  // <!DOCTYPE html>
  // <html lang="en">

  // <head>
  //     <meta charset="UTF-8" />
  //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  //     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  //     <meta name="Description" content="this is my portfolio" />
  //     <meta name="keyboards" content="sumithemmadi,sumith,emmadi,iiit,iiitsurat,warangal" />
  //     <meta name="theme-color" content="#000000" />
  //     <meta http-equiv="X-UA-Compatible" content="IE=edge" />

  //     <!--CSS Styles -->
  //     <link rel="stylesheet" href="https://sumithemmadi.github.io/CSS/style.css" />

  //     <!-- Favicons -->
  //     <link rel="apple-touch-icon" sizes="180x180" href="https://sumithemmadi.github.io/assets/icons/ruby.svg" />
  //     <link rel="icon" type="image/png" sizes="32x32" href="https://sumithemmadi.github.io/assets/icons/ruby.svg" />

  //     <!-- Animate CSS CDN -->
  //     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" />
  //     <title>Sumith Emmadi | Developer </title>
  //     <script src="https://cdn.jsdelivr.net/npm/vue@2.5.13/dist/vue.min.js"></script>
  //     <script src="https://sumithemmadi.github.io/js/app.js"></script>
  //     <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
  //     <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9130356177596122" crossorigin="anonymous"></script>
  // </head>

  // <body>
  //     <script>
  //         function contactme() {
  //             window.location = "#contact"
  //         }
  //         function gotoProject(projectName) {
  //             if (projectName == "truecallerjs") {
  //                 window.location.href = "https://www.npmjs.com/package/truecallerjs"
  //             } else if (projectName == "j2pt") {
  //                 window.location.href = "https://www.npmjs.com/package/json-to-plain-text"
  //             } else {
  //                 window.location.href = "https://github.com/sumithemmadi/Tor-Onion-Service-On-Heroku"
  //             }
  //         }

  //         $(document).ready(function () {
  //             $("#card1").hover(function () {
  //                 $("#truecallerjs-project-logo").css("display", "none");
  //                 $(".truecallerjs-terminal").css("display", "block");
  //                 setTimeout(callTruecallerjs, 1000);
  //             }, function () {
  //                 $(".truecallerjs-terminal").css("display", "none");
  //                 $("#truecallerjs-project-logo").css("display", "block");
  //             });
  //         });
  //         $(document).ready(function () {
  //             $("#card2").hover(function () {
  //                 $("#j2pt-project-logo").css("display", "none");
  //                 $(".j2pt-terminal").css("display", "block");
  //             }, function () {
  //                 $(".j2pt-terminal").css("display", "none");
  //                 $("#j2pt-project-logo").css("display", "block");
  //             });
  //         });

  //     </script>
  //     <header class="site-header site-width">
  //         <!-- Navbar -->
  //         <nav>
  //             <h1>SUMITH EMMADI</h1>
  //             <ul class="navigation">
  //                 <li><a href="#about" class="nav-link">About</a></li>
  //                 <li><a href="#skills" class="nav-link">Skills</a></li>
  //                 <li><a href="#projects" class="nav-link">Projects</a></li>
  //                 <li><a href="#contact" class="nav-link">Contact</a></li>
  //             </ul>
  //             <button class="burger-menu" id="burger-menu">
  //                 <ion-icon class="bars" name="menu-outline"></ion-icon>
  //             </button>
  //         </nav>
  //     </header>
  //     <div class="site-width">
  //         <!-- home Section -->
  //         <section class="home" id="about">
  //             <div class="profic-pic-container">
  //                 <img src="https://sumithemmadi.github.io/assets/images/profile-pic.png" alt="sumith-image" loading="lazy" class="home-img" />
  //             </div>
  //             <div class="bio">
  //                 <span class="bio-hey">Hey, I'm</span><br>
  //                 <span class="bio-name"><strong>Sumith Emmadi</strong></span>
  //                 <p class="bio-text">
  //                     Hey I'm sumith I'm web developer and undergraduate student at Indian Institute of Information
  //                     Technology, Surat.
  //                     <span class="bio-text-extra">
  //                         I like to build things with JavaScript , PHP , Python
  //                         Dreaming up ideas and making them come true is where my passion lies.
  //                         Check out my full projects list here.
  //                     </span>
  //                 </p>
  //                 <div class="bio-social-account">
  //                     <a href="mailto:sumithemmadi244@gmail.com" target="_blank">
  //                         <img src="https://sumithemmadi.github.io/assets/icons/Gmail-Logo.wine.svg" alt="Gmail-Logo" loading="lazy"
  //                             class="Gmail-Logo" />
  //                     </a>
  //                     <a href="https://in.linkedin.com/in/sumithemmadi" target="_blank">
  //                         <img src="https://sumithemmadi.github.io/assets/icons/LinkedIn-Icon-Logo.wine.svg" alt="LinkedIn-Logo" loading="lazy"
  //                             class="LinkedIn-Logo" />
  //                     </a>

  //                     <a href="https://github.com/sumithemmadi/" target="_blank">
  //                         <img src="https://sumithemmadi.github.io/assets/icons/GitHub-Logo.wine.svg" alt="GitHub-Logo" loading="lazy"
  //                             class="GitHub-Logo" />
  //                     </a>

  //                     <a href="https://www.facebook.com/sumithemmadi" target="_blank">
  //                         <img src="https://sumithemmadi.github.io/assets/icons/Facebook-f_Logo-Blue-Logo.wine.svg" alt="Facebook-Logo" loading="lazy"
  //                             class="Facebook-Logo" />
  //                     </a>

  //                     <a href="https://www.instagram.com/sumithemmadi/" target="_blank">
  //                         <img src="https://sumithemmadi.github.io/assets/icons/Instagram-Logo.wine.svg" alt="Instagram-Logo" loading="lazy"
  //                             class="Instagram-Logo" />
  //                     </a>

  //                     <!-- <a href="https://t.me/sumithemmadi/" target="_blank">
  //                         <img src="https://sumithemmadi.github.io/assets/icons/Telegram_(software)-Logo.wine.svg" alt="Telegram_-Logo" loading="lazy"
  //                             class="Telegram_-Logo" />
  //                     </a> -->
  //                 </div>
  //                 <button class="contactme-btn" onClick="contactme()">CONTACT ME</button>
  //             </div>
  //         </section>
  //         <!-- More about -->

  //         <!-- Skills section -->
  //         <section class="skills" id="skills">
  //             <h1>My Skills</h1>
  //             <div class="skill-cards4">
  //                 <div class="skills-container">
  //                     <div class="skill-cards2">

  //                         <div class="skill-container">
  //                             <div class="skill-logo-container">
  //                                 <img src="https://sumithemmadi.github.io/assets/icons/c-1.svg">
  //                             </div>
  //                             <div class="skill-name-container">
  //                                 <strong>C language</strong>
  //                             </div>
  //                         </div>
  //                         <div class="skill-container">
  //                             <div class="skill-logo-container">
  //                                 <img src="https://sumithemmadi.github.io/assets/icons/cpp.svg">
  //                             </div>
  //                             <div class="skill-name-container">
  //                                 <strong>CPP</strong>
  //                             </div>
  //                         </div>
  //                     </div>
  //                     <div class="skill-cards2">

  //                         <div class="skill-container">
  //                             <div class="skill-logo-container">
  //                                 <img src="https://sumithemmadi.github.io/assets/icons/PHP-logo.svg">
  //                             </div>
  //                             <div class="skill-name-container">
  //                                 <strong>PHP</strong>
  //                             </div>
  //                         </div>
  //                         <div class="skill-container">
  //                             <div class="skill-logo-container">
  //                                 <img src="https://sumithemmadi.github.io/assets/icons/Python-logo-notext.svg">
  //                             </div>
  //                             <div class="skill-name-container">
  //                                 <strong>Python</strong>
  //                             </div>
  //                         </div>
  //                     </div>
  //                 </div>
  //                 <div class="skills-container">
  //                     <div class="skill-cards2">
  //                         <div class="skill-container">
  //                             <div class="skill-logo-container">
  //                                 <img src="https://sumithemmadi.github.io/assets/icons/HTML5_Logo.svg">
  //                             </div>
  //                             <div class="skill-name-container">
  //                                 <strong>HTML</strong>
  //                             </div>
  //                         </div>
  //                         <div class="skill-container">
  //                             <div class="skill-logo-container">
  //                                 <img src="https://sumithemmadi.github.io/assets/icons/css.svg">
  //                             </div>
  //                             <div class="skill-name-container">
  //                                 <strong>CSS</strong>
  //                             </div>
  //                         </div>
  //                     </div>
  //                     <div class="skill-cards2">
  //                         <div class="skill-container">
  //                             <div class="skill-logo-container">
  //                                 <img src="https://sumithemmadi.github.io/assets/icons/js_logo.svg">
  //                             </div>
  //                             <div class="skill-name-container">
  //                                 <strong>JavaScript</strong>
  //                             </div>
  //                         </div>
  //                         <div class="skill-container">
  //                             <div class="skill-logo-container">
  //                                 <img src="https://sumithemmadi.github.io/assets/icons/nodejs-new-pantone-black.svg">
  //                             </div>
  //                             <div class="skill-name-container">
  //                                 <strong>NodeJS</strong>
  //                             </div>
  //                         </div>
  //                     </div>
  //                 </div>
  //                 <div class="skills-container">
  //                     <div class="skill-cards2">
  //                         <div class="skill-container">
  //                             <div class="skill-logo-container">
  //                                 <img src="https://sumithemmadi.github.io/assets/icons/Bash_Logo.svg">
  //                             </div>
  //                             <div class="skill-name-container">
  //                                 <strong>Bash</strong>
  //                             </div>
  //                         </div>
  //                         <!-- <div class="skill-container">
  //                             <div class="skill-logo-container">
  //                                 <img src="https://sumithemmadi.github.io/assets/icons/css.svg">
  //                             </div>
  //                             <div class="skill-name-container">
  //                                 <strong>CSS</strong>
  //                             </div>
  //                         </div> -->
  //                     </div>
  //                     <!-- <div class="skill-cards2">
  //                         <div class="skill-container">
  //                             <div class="skill-logo-container">
  //                                 <img src="https://sumithemmadi.github.io/assets/icons/js_logo.svg">
  //                             </div>
  //                             <div class="skill-name-container">
  //                                 <strong>JavaScript</strong>
  //                             </div>
  //                         </div>
  //                         <div class="skill-container">
  //                             <div class="skill-logo-container">
  //                                 <img src="https://sumithemmadi.github.io/assets/icons/Bash_Logo.svg">
  //                             </div>
  //                             <div class="skill-name-container">
  //                                 <strong>Bash</strong>
  //                             </div>
  //                         </div>
  //                     </div> -->
  //                 </div>
  //             </div>
  //         </section>
  //         <!-- Projects section -->
  //         <section class="projects-mobile" id="projects">
  //             <h1>My Recent Projects</h1>
  //             <div class="project-container">
  //                 <div class="card" id="card1">
  //                     <div class="card-image">
  //                         <img src="https://sumithemmadi.github.io/assets/icons/truecaller-logo-vector.png" alt="truecaller-logo"
  //                             id="truecallerjs-project-logo">
  //                         <div class="terminal truecallerjs-terminal">
  //                             <div class="terminal-text">
  //                                 <span id="cmd1" style="color:white"><span style="color:rgb(57, 231, 65)">~</span>$
  //                                 </span>
  //                             </div>
  //                         </div>
  //                     </div>
  //                     <div class="card-text">
  //                         <span class="date" id="truecallerjs-updated-time"></span>
  //                         <h2>TRUECALLER-JS</h2>
  //                         <p>A simple package to search phone number details.</p><br>
  //                         <button class="gotoproject-btn" onClick='gotoProject("truecallerjs")'
  //                             style="background-color:rgb(26, 146, 245);border: 1.6px solid rgb(26, 146, 245)">GO TO
  //                             PROJECT</button>
  //                     </div>
  //                     <div class="card-stats">
  //                         <div class="stat">
  //                             <div class="value" id="truecallerjs-downloads"></div>
  //                             <div class="type">Downloads</div>
  //                         </div>
  //                         <div class="stat border">
  //                             <div class="value" id="truecallerjs-stars"></div>
  //                             <div class="type">Stars</div>
  //                         </div>
  //                         <div class="stat">
  //                             <div class="value" id="truecallerjs-forks"></div>
  //                             <div class="type">Forks</div>
  //                         </div>
  //                     </div>
  //                 </div>
  //                 <div class="card" id="card2">
  //                     <div class="card-image">
  //                         <img src="https://sumithemmadi.github.io/assets/icons/json-logo.jpg" alt="json-logo" id="j2pt-project-logo">
  //                         <div class="terminal j2pt-terminal">
  //                             <div class="terminal-text">
  //                                 <span id="cmd2" style="color:white">
  //                                     <span style="color: green;">~</span>$
  //                                     <span style="color: yellow;">npm </span> install
  //                                     <span style="color: rgb(18, 223, 238);"> json-to-plain-text </span><br>
  //                                     +json-to-plain-text@1.0.2
  //                                     <br> changed 2 packages, and audited 1 packages in 5s<br>found

  //                                     <span style="color: green;">0</span> vulnerabilities<br><br>
  //                                     <span style="color: green;">~</span>$
  //                                     <span style="color: yellow;"> node </span>
  //                                     <span style="color: rgb(18, 223, 238);"> node.js </span>
  //                                     <table>
  //                                         <tr>
  //                                             <td style="color: yellow">name</td>
  //                                             <td style="color: rgb(18, 223, 238);">: Sumith Emmadi</td>
  //                                         </tr>
  //                                         <tr>
  //                                             <td style="color: yellow">score</td>
  //                                             <td style="color: rgb(18, 223, 238);">: 0.35793555</td>
  //                                         </tr>
  //                                         <tr>
  //                                             <td style="color: yellow">access</td>
  //                                             <td style="color: rgb(18, 223, 238);">: PUBLIC</td>
  //                                         </tr>
  //                                         <tr>
  //                                             <td style="color: yellow">enhanced</td>
  //                                             <td style="color: rgb(18, 223, 238);">: true</td>
  //                                         </tr>
  //                                         <tr>
  //                                             <td style="color: yellow">phones</td>
  //                                             <td style="color: rgb(18, 223, 238);">:</td>
  //                                         </tr>
  //                                         <tr>
  //                                             <td style="color: yellow">e164Format</td>
  //                                             <td style="color: rgb(18, 223, 238);">: +919912345678</td>
  //                                         </tr>
  //                                         <tr>
  //                                             <td style="color: yellow">numberType</td>
  //                                             <td style="color: rgb(18, 223, 238);">: MOBILE</td>
  //                                         </tr>
  //                                         <tr>
  //                                             <td style="color: yellow">nationalFormat</td>
  //                                             <td style="color: rgb(18, 223, 238);">: 099123 45678</td>
  //                                         </tr>
  //                                         <tr>
  //                                             <td style="color: yellow">dialingCode</td>
  //                                             <td style="color: rgb(18, 223, 238);">: 91</td>
  //                                         </tr>
  //                                         <tr>
  //                                             <td style="color: yellow">countryCode</td>
  //                                             <td style="color: rgb(18, 223, 238);">: IN</td>
  //                                         </tr>
  //                                         <tr>
  //                                             <td style="color: yellow">carrier</td>
  //                                             <td style="color: rgb(18, 223, 238);">: Vodafone Idea</td>
  //                                         </tr>
  //                                         <tr>
  //                                             <td style="color: yellow">type</td>
  //                                             <td style="color: rgb(18, 223, 238);">: openPhone</td>
  //                                         </tr>
  //                                         <tr>
  //                                             <td style="color: yellow">addresses</td>
  //                                             <td style="color: rgb(18, 223, 238);">:</td>
  //                                         </tr>
  //                                         <tr>
  //                                             <td style="color: yellow">city</td>
  //                                             <td style="color: rgb(18, 223, 238);">: Andhra Pradesh</td>
  //                                         </tr>
  //                                         <tr>
  //                                             <td style="color: yellow">countryCode</td>
  //                                             <td style="color: rgb(18, 223, 238);">: IN</td>
  //                                         </tr>
  //                                         <tr>
  //                                             <td style="color: yellow">sourceStats</td>
  //                                             <td style="color: rgb(18, 223, 238);">: []</td>
  //                                         </tr>
  //                                     </table>
  //                                 </span>
  //                             </div>
  //                         </div>
  //                     </div>
  //                     <div class="card-text">
  //                         <span class="date" id="j2pt-updated-time" style="color: rgb(255, 7, 110)"></span>
  //                         <h2>JSON TO PLAIN TEXT</h2>
  //                         <p>Convert any json to plain text</p>
  //                         <button class="gotoproject-btn" onClick='gotoProject("j2pt")'
  //                             style="background-color:rgb(255, 7, 110);border: 1.6px solid rgb(255, 7, 110)">GO TO
  //                             PROJECT</button>

  //                     </div>
  //                     <div class="card-stats" style="color: rgb(255, 7, 110);background-color:rgb(255, 7, 110)">
  //                         <div class="stat">
  //                             <div class="value" id="j2pt-downloads"></div>
  //                             <div class="type">Downloads</div>
  //                         </div>
  //                         <div class="stat border"
  //                             style="border-left: 1px solid rgb(172, 26, 87);border-right: 1px solid rgb(172, 26, 87);">
  //                             <div class="value" id="j2pt-stars"></div>
  //                             <div class="type">Stars</div>
  //                         </div>
  //                         <div class="stat">
  //                             <div class="value" id="j2pt-forks"></div>
  //                             <div class="type">Forks</div>
  //                         </div>
  //                     </div>
  //                 </div>
  //                 <div class="card" id="card3">
  //                     <div class="card-image">
  //                         <img src="https://sumithemmadi.github.io/assets/icons/tor-1200.png" alt="tor-logo">
  //                     </div>
  //                     <div class="card-text">
  //                         <span class="date" id="tosoh-updated-time" style="color: rgb(144, 21, 245);"></span>
  //                         <h2 style="font-size: 25px;">TOR ONION SERVICE ON HEROKU</h2>
  //                         <p>Host Tor v3 Hidden Service in dark web using heroku</p>
  //                         <button class="gotoproject-btn" onClick='gotoProject("tosoh")'
  //                             style="background-color:rgb(144, 21, 245);border: 1.6px solid rgb(144, 21, 245);">GO TO
  //                             PROJECT</button>
  //                     </div>
  //                     <div class="card-stats" style="color: rgb(144, 21, 245);background-color:rgb(144, 21, 245);">
  //                         <div class="stat">
  //                             <div class="value" id="tosoh-downloads">-</div>
  //                             <div class="type">Downloads</div>
  //                         </div>
  //                         <div class="stat border"
  //                             style="border-left: 1px solid rgb(42, 1, 75);border-right: 1px solid rgb(42, 1, 75);">
  //                             <div class="value" id="tosoh-stars"></div>
  //                             <div class="type">Stars</div>
  //                         </div>
  //                         <div class="stat">
  //                             <div class="value" id="tosoh-forks"></div>
  //                             <div class="type">Froks</div>
  //                         </div>
  //                     </div>
  //                 </div>
  //             </div>
  //         </section>

  //         <!-- Contact section -->
  //         <section class="contact" id="contact">
  //             <h1 style="text-align: center; margin: 15px;">Get In Touch With Me</h1>
  //             <div class="contact-form-card">
  //                 <div class="contact-form-container">
  //                     <div class="contact-my-details">
  //                         <img src="https://sumithemmadi.github.io/assets/images/profile-pic.png" class="myprofile-img" />
  //                         <h2>Emmadi Sumith Kumar</h2>
  //                         <!-- <h3>sumithemmadi</h3> -->
  //                         <div class="follow-btn">
  //                             <a href="https://github.com/login?return_to=https%3A%2F%2Fgithub.com%2Fsumithemmadi">Follow
  //                                 me on github</a>
  //                         </div>
  //                         <div class="mb-3">
  //                             <a href="https://github.com/sumithemmadi?tab=followers">
  //                                 <svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1"
  //                                     width="16" data-view-component="true">
  //                                     <path fill-rule="evenodd"
  //                                         d="M5.5 3.5a2 2 0 100 4 2 2 0 000-4zM2 5.5a3.5 3.5 0 115.898 2.549 5.507 5.507 0 013.034 4.084.75.75 0 11-1.482.235 4.001 4.001 0 00-7.9 0 .75.75 0 01-1.482-.236A5.507 5.507 0 013.102 8.05 3.49 3.49 0 012 5.5zM11 4a.75.75 0 100 1.5 1.5 1.5 0 01.666 2.844.75.75 0 00-.416.672v.352a.75.75 0 00.574.73c1.2.289 2.162 1.2 2.522 2.372a.75.75 0 101.434-.44 5.01 5.01 0 00-2.56-3.012A3 3 0 0011 4z">
  //                                     </path>
  //                                 </svg>
  //                                 <span id="followers"></span> followers
  //                             </a> ·
  //                             <a href="https://github.com/sumithemmadi?tab=following">
  //                                 <span id="following"></span> following
  //                             </a><br>
  //                             <a href="https://github.com/sumithemmadi?tab=repositories">
  //                                 <svg text="muted" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1"
  //                                     width="16" data-view-component="true">
  //                                     <path fill-rule="evenodd"
  //                                         d="M8 .25a.75.75 0 01.673.418l1.882 3.815 4.21.612a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L8 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.194L.818 6.374a.75.75 0 01.416-1.28l4.21-.611L7.327.668A.75.75 0 018 .25zm0 2.445L6.615 5.5a.75.75 0 01-.564.41l-3.097.45 2.24 2.184a.75.75 0 01.216.664l-.528 3.084 2.769-1.456a.75.75 0 01.698 0l2.77 1.456-.53-3.084a.75.75 0 01.216-.664l2.24-2.183-3.096-.45a.75.75 0 01-.564-.41L8 2.694v.001z">
  //                                     </path>
  //                                 </svg>
  //                                 <span id="total_stargazers_count"></span> stars earned
  //                             </a><br>
  //                             <a href="https://github.com/sumithemmadi?tab=repositories">
  //                                 <img style="width: 16px;" src="https://sumithemmadi.github.io/assets/icons/github-icon-1.svg" />
  //                                 <span id="total-repos"></span> repositories
  //                             </a>
  //                             <div class="my-details">
  //                                 <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
  //                                     <path fill-rule="evenodd"
  //                                         d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z">
  //                                     </path>
  //                                 </svg>
  //                                 <a href="https://en.wikipedia.org/wiki/Warangal">warangal</a><br>
  //                                 <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
  //                                     data-view-component="true">
  //                                     <path fill-rule="evenodd"
  //                                         d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z">
  //                                     </path>
  //                                 </svg>
  //                                 <a href="https://sumithemmadi.me">sumithemmadi.me</a><br>
  //                                 <svg style="width: 16px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3"
  //                                     role="img" aria-labelledby="bhryjyngr2t6i4i4carlsogpjo30n8l">
  //                                     <title id="bhryjyngr2t6i4i4carlsogpjo30n8l">Twitter</title>
  //                                     <path
  //                                         d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1"
  //                                         fill="currentColor"></path>
  //                                 </svg>
  //                                 <a href="https://twitter.com/sumithemmadi">@sumithemmadi</a>
  //                             </div>
  //                         </div>
  //                     </div>
  //                     <div class="contact-seperator"></div>
  //                     <div class="contact-form">
  //                         <form action="/post.php" method="POST">
  //                             <div class="form-control">
  //                                 <label for="name">Name</label>
  //                                 <input type="text" id="name" name="sender-name" placeholder="Enter Your Name"
  //                                     class="input-field" required />
  //                             </div>
  //                             <div class="form-control">
  //                                 <label for="email">Email</label>
  //                                 <input type="email" id="email" name="sender-email" placeholder="Enter Your Email"
  //                                     class="input-field" required />
  //                             </div>
  //                             <div class="form-control">
  //                                 <label for="message">Message</label>
  //                                 <textarea id="message" cols="40" rows="10" placeholder="Enter Your Message"
  //                                     name="message" class="input-field" required></textarea>
  //                             </div>
  //                             <input type="submit" value="Submit" id="submit-btn" class="submit-btn" />
  //                         </form>
  //                     </div>

  //                 </div>
  //             </div>
  //         </section>
  //         <!-- Social accounts - Fixed to the right -->

  //         <!-- Scroll to top -->
  //     </div>
  //     <!-- Footer section -->
  //     <footer>
  //         <p class="copy">&copy; Copyright 2021</p>
  //         <p class="copy">
  //             Built with &#x2661; by
  //             <a href="https://github.com/sumithemmadi" target="_blank">sumithemmadi</a>
  //         </p>
  //     </footer>

  //     <!-- Website scripts -->
  //     <script src="https://sumithemmadi.github.io/js/app.js"></script>
  //     <script src="https://sumithemmadi.github.io/js/menu.js"></script>
  //     <script src="https://sumithemmadi.github.io/js/github/githubUser.js"></script>
  //     <script src="https://sumithemmadi.github.io/js/github/githubCounter.js"></script>
  //     <script src="https://sumithemmadi.github.io/js/truecallerjs-npm-downloads.js"></script>
  //     <script src="https://sumithemmadi.github.io/js/j2pt-npm-downloads.js"></script>

  //     <!-- Ion icons scripts -->
  //     <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  //     <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
  // </body>

  // </html>

  // ```

  return (
    <div>
      <NavBar />
      <div className="grid place-items-center px-6 py-24 sm:py-32 lg:px-8" style={{ "height": "100vh" }}>
        <Playground style={{ width: "90%", height: 500 }} preset='html' code='hello' />
      </div>
    </div>
  )
}