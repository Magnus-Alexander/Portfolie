import "./App.css";
import RPG from "/Images/RPG.png";
import Github from "../public/Images/Github.png";
import ffwebsite from "../public/Images/ffwebsite.png";

function App() {
  return (
    <>
      <header id="header">
        <nav>
          <a href="#hero">
            <button>To hero section</button>
          </a>
          <a href="#about">
            <button>To about</button>
          </a>
          <a href="#work">
            <button>To my work</button>
          </a>
          <a href="#footer">
            <button>To Footer</button>
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
            <h1>Magnus Alexander Kilvik Bergersen</h1>
          </div>
        </section>
        <section id="about" className="about">
          <h1>About me</h1>
        </section>
        <section id="work" className="myWork">
          <h1>My work</h1>
          <div className="space"></div>
          <div className="projects">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://magnus-alexander.github.io/Turn-based-rpg/"
            >
              <h3>Turn based rpg</h3>
              <div className="space2"></div>
              <img src={RPG} alt="RPG" />
            </a>
            <div className="space2"></div>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://audunkodehode.github.io/Prosjektarbeid-FinalFantasyX/"
            >
              <h3>Final fantasy character database</h3>
              <div className="space2"></div>
              <img src={ffwebsite} alt="Final Fantasy" />
            </a>
          </div>
        </section>
      </main>
      <footer id="footer">
        <a href="#header">
          <button>To header</button>
        </a>
        <a href="#hero">
          <button>To hero section</button>
        </a>
        <a href="#about">
          <button>To about me</button>
        </a>
        <a href="#work">
          <button>To my work</button>
        </a>
      </footer>
    </>
  );
}

export default App;
