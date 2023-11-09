import "./App.css";
import RPG from "/Images/RPG.png";
import Github from "../public/Images/Github.png";
import ffwebsite from "../public/Images/ffwebsite.png";
import calc from "../public/Images/calc3.png";
import html5 from "../public/Images/5847f5bdcef1014c0b5e489c.png";
import css3 from "../public/Images/html5-logo-31822.png";
import javascript from "../public/Images/Javascript_badge.svg.png";
import react from "../public/Images/kisspng-react-javascript-angularjs-ionic-atom-5b154be6947457.3471941815281223426081.png";

function App() {
  window.onscroll = function () {
    if (
      window.innerHeight + Math.round(window.scrollY) >=
      document.body.offsetHeight - 50
    ) {
      document.querySelector("nav").style.position = "relative";
    } else {
      document.querySelector("nav").style.position = "fixed";
    }
  };
  return (
    <>
      <>
        <header id="header">
          <nav>
            <a href="#hero">
              <button>Home</button>
            </a>
            <a href="#about">
              <button>About me</button>
            </a>
            <a href="#work">
              <button>
                <div className="myprojects">
                  My proje <div className="ects">cts</div>
                </div>
              </button>
            </a>
            <a href="#Skills">
              <button className="skillsbutton">My skills</button>
            </a>
            <a href="#Contact">
              <button className="Contactbutton">Contact me</button>
            </a>
          </nav>
        </header>
        <main>
          <section id="hero" className="HeroSection">
            <div className="Logo">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/Magnus-Alexander"
              >
                <img src={Github} alt="Github" />
              </a>
            </div>
            <div className="herodiv">
              <div className="fullName">
                <h1>Magnus Alexander </h1>
                <div className="KB">
                  <h1> Kilvik Bergersen</h1>
                </div>
              </div>
              <div className="h2text">
                <h2>Front-end </h2>{" "}
                <div className="developer">
                  <h2> Developer</h2>
                </div>
              </div>
            </div>
          </section>
          <section id="about" className="about">
            <div className="am">
              <h1>About </h1>{" "}
              <div className="KB">
                {" "}
                <h1>me</h1>
              </div>
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet
              culpa doloremque aut, maxime harum quia provident delectus, quod
              repudiandae, consequatur iste possimus tempora nobis! Assumenda
              inventore natus eius cum, deleniti laudantium obcaecati quisquam
              eos fugiat eligendi, tempora aliquid nemo labore. Nostrum culpa
              tempore, amet sed nulla, cumque aut eos illum dolor, vero
              perferendis suscipit hic. Eveniet quae reiciendis inventore illum,
              id similique in, earum aliquam adipisci modi molestiae, dolorem
              debitis rem saepe nobis laboriosam? Soluta praesentium, ratione
              repellendus fuga doloremque ipsam qui eos, sint asperiores dolore
              ea officia deleniti velit odio nesciunt exercitationem,
              consequuntur sit eius rerum obcaecati placeat.
            </p>
          </section>
          <section id="work" className="myWork">
            <div className="mp">
              <h1>My pro</h1>
              <div className="projects">
                <h1>jects</h1>
              </div>
            </div>
            <div className="space"></div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://kalkulator-vert.vercel.app/"
            >
              <h3>Calculator</h3>
              <div className="space2"></div>
              <img src={calc} alt="Calculator" />
            </a>
            <div className="space"></div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://magnus-alexander.github.io/Turn-based-rpg/"
            >
              <h3>Turn based rpg</h3>
              <div className="space2"></div>
              <img src={RPG} alt="RPG" />
            </a>
            <div className="space"></div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://audunkodehode.github.io/Prosjektarbeid-FinalFantasyX/"
            >
              <h3>Final fantasy character database</h3>
              <div className="space2"></div>
              <img src={ffwebsite} alt="Final Fantasy" />
            </a>
          </section>
          <section id="Skills">
            <div className="skillsText">
              <h1>Skil</h1>
              <div className="S">
                <h1>ls</h1>
              </div>
            </div>
            <div className="mySkills">
              <div className="html5">
                <img src={html5} alt="html5" />
              </div>
              <div className="css3">
                <img src={css3} alt="css3" />
              </div>

              <div className="javascript">
                <img src={javascript} alt="javascript" />
              </div>
              <img src={react} alt="react" />
            </div>
          </section>
          <section id="Contact">
            <div className="contactMe">
              <h1>Contac</h1>{" "}
              <div className="tme">
                {" "}
                <h1> t me</h1>
              </div>
            </div>
            <p>magnus.alexander.kilvik.bergersen@gmail.com</p>
            <p>Tlf: 40035747</p>
          </section>
        </main>
        <footer id="footer">
          <a href="#hero">
            <button>Home</button>
          </a>
          <a href="#about">
            <button>About me</button>
          </a>
          <a href="#work">
            <button>
              <div className="myprojects">
                My proje <div className="ects">cts</div>
              </div>
            </button>
          </a>
          <a href="#Skills">
            <button className="skillsbutton">My skills</button>
          </a>
          <a href="#Contact">
            <button className="Contactbutton">Contact me</button>
          </a>
        </footer>
      </>
    </>
  );
}

export default App;
