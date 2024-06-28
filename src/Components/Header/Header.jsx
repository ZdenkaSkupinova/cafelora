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

// showMenu

import "./header.css"

export const Header = ({showMenu}) => {

const isMenu = showMenu ? true : false ;
return (
  <>
  <header>
        <div className="header__content container">
          <div className="site-logo"></div>
          <div className="navigation">
            <button className="nav-btn"></button>
            {isMenu ? (
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
      </>
    )
  }

*/