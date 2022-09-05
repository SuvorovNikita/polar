import React from "react"
import cardIcon1 from "../../assets/img/icon/card-1.svg"
import cardIcon2 from "../../assets/img/icon/card-2.svg"
import cardIcon3 from "../../assets/img/icon/card-3.svg"
import cardIcon4 from "../../assets/img/icon/card-4.svg"
import cardIcon5 from "../../assets/img/icon/card-5.svg"
import cardIcon6 from "../../assets/img/icon/card-6.svg"
import Images from "../../assets/img/photo/image-3.png"

const Card = () => {
  return (
    <>
      <section className="c-section c-section--card">
        <div className="container">
          <div className="c-section__wrapper">
            <h2 className="c-section__title">
              Главные преимущества нашей компании:
            </h2>
          </div>
          <div className="c-section__card">
            <div className="c-section__item">
              <img className="c-section__icon" src={cardIcon1} alt="" />
              <div className="c-section__text">
                Высокий уровень сервиса за счет опыта и профессионализма
                логистов
              </div>
            </div>
            <div className="c-section__item">
              <img className="c-section__icon" src={cardIcon2} alt="" />
              <div className="c-section__text">
                Подбор оптимальной схемы логистики для экономии времени и
                бюджета
              </div>
            </div>
            <div className="c-section__item">
              <img className="c-section__icon" src={cardIcon3} alt="" />
              <div className="c-section__text">
                Мы найдем для вас машину в любом месте
              </div>
            </div>
            <div className="c-section__item">
              <img className="c-section__icon" src={cardIcon4} alt="" />
              <div className="c-section__text">
                100% ответственность за груз
              </div>
            </div>
            <div className="c-section__item">
              <img className="c-section__icon" src={cardIcon5} alt="" />
              <div className="c-section__text">
                Менеджер на связи с вами 24/7
              </div>
            </div>
            <div className="c-section__item">
              <img className="c-section__icon" src={cardIcon6} alt="" />
              <div className="c-section__text">
                Доставляем по всему ЕС в любую точку
              </div>
            </div>
            <div className="c-section__item">
              <img src={Images} alt="" />
            </div>
            <div className="c-section__item">
              <h4 className="c-section__context">
                Для постоянных и проверенных клиентов можем предложить
                сотрудничество на индивидуальных условиях по согласованию с
                руководством
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Card
