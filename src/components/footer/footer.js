import React from "react"
import logo from "../../assets/img/icon/footer-logo.svg"

const Footer = () => {
  return (
    <>
      <section className="c-footer">
        <div className="container">
          <div className="row-alt">
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
              <div className="c-footer__inner-map">
                <iframe
                  className="c-footer__map"
                  width="759px"
                  height="401px"
                  frameborder="0"
                  scrolling="no"
                  marginheight="0"
                  marginwidth="0"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=1.3183593750000002%2C53.74871079689897%2C59.32617187500001%2C71.44117085172385&amp;layer=mapnik"
                ></iframe>
              </div>
              <div className="c-footer__mobile-logo">
                <img src={logo} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Footer
