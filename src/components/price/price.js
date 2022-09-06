import React from "react"

const Price = () => {
  return (
    <>
      <section className="c-section c-section--price">
        <div className="container">
          <div className="row-alt">
            <div className="col-lg-5">
              <div className="c-section__inner">
                <div className="c-section__title">
                  Рассчет выгодных для вас ставок
                </div>
                <div className="c-section__card">
                  <div className="c-section__card-text">
                    Гибкость цен и индивидуальный подход к каждому клиенту не
                    оставит вас равнодушными. Нам нравится то, чем мы
                    занимаемся, поэтому делаем мы это отлично!
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="c-section__logistic">
                <div className="c-section__contact">Отдел логистики</div>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="tel:+358505011677"
                  className="c-section__phone"
                >
                  +358 505 011 677
                </a>
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="tel:+358503313036"
                  className="c-section__phone"
                >
                  +358 50 331 30 36
                </a>
                <a
                  href="mailto:info@timberica.fi"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="c-section__email"
                >
                  info@timberica.fi
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
export default Price
