import React from "react"
import photo from "../../assets/img/photo/image-1.png"
import iconEmail from "../../assets/img/icon/email.svg"

const Content = () => {
  return (
    <>
      <section className="c-section c-section--base">
        <div className="container">
          <div className="c-section__inner">
            <div className="row">
              <div className="col-lg-6">
                <h1 className="c-section__title">
                  Доставляем грузы по всему ЕС в любую точку
                </h1>
                <h2 className="c-section__subtitle">
                  Kомпания Polar Forwarding Oy как логистическое подразделение
                  компании Timberica Oy существует на рынке логистических услуг
                  более 10 лет. За это время мы наработали огромный опыт в сфере
                  перевозки грузов, и на сегодняшний день мы профессионально
                  трудимся на рынке автомобильных грузоперевозок. <br></br>
                  <br></br>
                  Главный груз для перевозок это пиломатериалы различных
                  размеров и сортов.
                </h2>
              </div>
              <div className="col-lg-6">
                <div className="c-section__contact">
                  <a
                    target="_blank"
                    rel="noreferrer noopener"
                    href="tel:+358505011677"
                    className="c-section__phone"
                  >
                    +358 505 011 677
                  </a>
                  <a
                    href="mailto:xxx"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="c-section__email"
                  >
                    <img className="c-section__icon" src={iconEmail} alt="" />
                    XXXX@polarfor.fi
                  </a>
                </div>
                <div className="c-section__images">
                  <img src={photo} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Content
