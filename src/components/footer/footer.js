import React from "react"
import logo from "../../assets/img/icon/footer-logo.svg"

const Footer = () => {
  return (
    <>
      <section className="c-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="c-footer__inner">
                <div className="c-footer__logo">
                  <img src={logo} alt="" />
                </div>
                <div className="c-footer__title">Наш адрес</div>
                <address className="c-footer__adress">
                  Polar Forwarding Oy Laivanvarustajankatu 8A B34 Helsinki 00140
                  Finland
                </address>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="c-footer__inner-map">map</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
