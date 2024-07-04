import "./header.css"

export const Header = () => (
<header>
      <div className="header__content container">
        <div className="site-logo"></div>

        <div className="navigation">
          <button className="nav-btn"></button>
          <nav className="rollout-nav nav-closed">
            <a href="#home">domů</a>
            <a href="#menu">menu</a>
            <a href="#gallery">galerie</a>
            <a href="#contact">kontakt</a>
          </nav>
        </div>
      </div>
    </header>
)

/*
export const Header = ({showMenu}) => (

  <header>
    <div className="header__content container">
      <div className="site-logo"></div>
        <div className="navigation">
          <button className="nav-btn"></button>
            {showMenu ? (
              <nav className="rollout-nav nav-closed">
                <a href="#home">domů</a>
                <a href="#menu">menu</a>
                <a href="#gallery">galerie</a>
                <a href="#contact">kontakt</a>
              </nav>
                ) : (
              <nav className="inline-nav">
                <a href="/">Hlavní stránka</a>
              </nav>
            )}
      </div>
    </div>
  </header>
)

// Odkud e vezme hodnota true? Hlavní stránka = false v obj. 
Pokud bude showMenu mít hodnotu true, komponenta Header zobrazí celé menu
nefunguje mi to, když je menu zobrazené, z obj se nedostanu na home

*/