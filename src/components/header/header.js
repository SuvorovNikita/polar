import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import logo from "../../assets/img/icon/logo.svg"
import logoMobile from "../../assets/img/icon/logo-mobile.svg"
import menuIcon from "../../assets/img/icon/menu-icon.svg"
import closeIcon from "../../assets/img/icon/close-icon.svg"

const Header = () => {
  const [isOpenedHeader, setIsOpenedHeader] = useState(false)

  const toggleHeader = () => {
    setIsOpenedHeader(value => !value)
  }

  const toggleHtmlOverlay = isOpenedHeader => {
    if (isOpenedHeader) {
      document.documentElement.classList.add("is-overlay")
      return
    }

    document.documentElement.classList.remove("is-overlay")
  }

  useEffect(() => {
    toggleHtmlOverlay(isOpenedHeader)
  }, [isOpenedHeader])

  return (
    <>
      <header class="c-header">
        <div className="container">
          <div className="c-header__inner">
            <div className="c-header__logo">
              <Link to="/">
                <img src={logo} alt="Polar" />
              </Link>
            </div>
            <div className="c-header__navigation">
              <div className="c-header__item">
                <Link to="/" className="c-header__link">
                  О компании
                </Link>
              </div>
              <div className="c-header__item">
                <Link to="#" className="c-header__link">
                  География перевозок
                </Link>
              </div>
              <div className="c-header__item">
                <Link to="#" className="c-header__link">
                  Приемущества
                </Link>
              </div>
              <div className="c-header__item">
                <Link to="#" className="c-header__link">
                  Контакты
                </Link>
              </div>
            </div>
            <div className="c-header__language-select">
              <div className="c-header__lang">
                <Link to="/" className="c-header__link-lang">
                  FI
                </Link>
              </div>
              <div className="c-header__lang">
                <Link to="#" className="c-header__link-lang">
                  ENG
                </Link>
              </div>
              <div className="c-header__lang">
                <Link to="#" className="c-header__link-lang">
                  RU
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section
        className={"c-mobile-header" + (isOpenedHeader ? " is-opened" : "")}
      >
        <div className="c-mobile-header__inner">
          <div className="container">
            <div className="c-mobile-header__top">
              <div className="c-mobile-header__logo">
                <Link to="/">
                  <img src={logoMobile} alt="" />
                </Link>
              </div>
              <div
                className="c-mobile-header__toggle"
                role="button"
                tabIndex="0"
                onClick={() => toggleHeader()}
                onKeyDown={e => (e.key === "Enter" ? toggleHeader() : null)}
              >
                {!isOpenedHeader && <img src={menuIcon} alt="Open Menu" />}
                {isOpenedHeader && <img src={closeIcon} alt="Close Menu" />}
              </div>
            </div>
            <div className="c-mobile-header__body">
              <div className="c-mobile-header__inner-body">
                <div className="container">
                  <div className="c-mobile-header__flex">
                    <div className="c-mobile-header__navigation">
                      <div className="c-mobile-header__item">
                        <Link
                          to="/"
                          activeClassName="is-active"
                          className="c-mobile-header__link"
                        >
                          О компании
                        </Link>
                      </div>
                      <div className="c-mobile-header__item">
                        <Link
                          to="#"
                          activeClassName="is-active"
                          className="c-mobile-header__link"
                        >
                          География перевозок
                        </Link>
                      </div>
                      <div className="c-mobile-header__item">
                        <Link
                          to="#"
                          activeClassName="is-active"
                          className="c-mobile-header__link"
                        >
                          Приемущества
                        </Link>
                      </div>
                      <div className="c-mobile-header__item">
                        <Link
                          to="#"
                          activeClassName="is-active"
                          className="c-mobile-header__link"
                        >
                          Контакты
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
