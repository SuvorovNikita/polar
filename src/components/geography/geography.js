import React from "react"
import map from "../../assets/img/photo/map.png"
import images from "../../assets/img/photo/image-2.png"

const Geography = () => {
  return (
    <>
      <secction className="c-section c-section--geography">
        <div className="container">
          <div className="row-alt">
            <div className="col-lg-7">
              <div className="c-section__images">
                <img src={map} alt="" />
              </div>
              <h2 className="c-section__subtitle">
                Наши сотрудники проконсультируют вас и ответят на все ваши
                вопросы. А также быстро примут ваш заказ, организуют его
                исполнение и будут контролировать каждый этап транспортировки.
                Сотрудники нашей компании компетентны в вопросах логистики,
                поэтому хорошо разбираются в теоретических и практических
                вопросах данной отрасли. Ведущий менеджер груза будет всегда с
                вами на связи, без перерывов и выходных дней. <br></br>
                <br></br>
                Квалифицированные водители и новые автомобили быстро и четко, за
                самое минимальное время доставят ваш груз в любую точку Европы!
              </h2>
            </div>
            <div className="col-lg-5">
              <div className="c-section__inner">
                <h3 className="c-section__title">География перевозок</h3>
              </div>
              <div class="c-section__country">
                <div class="c-section__wrapper">
                  <div class="c-section__element">
                    Страны ЕС
                    <ul class="c-section__list">
                      <li class="c-section__item">Финляндия</li>
                      <li class="c-section__item">Литва</li>
                      <li class="c-section__item">Латвия</li>
                      <li class="c-section__item">Эстония</li>
                      <li class="c-section__item">Венгрия</li>
                      <li class="c-section__item">и др.</li>
                    </ul>
                  </div>
                </div>
                <div class="c-section__wrapper">
                  <div class="c-section__element">
                    Страны СНГ
                    <ul class="c-section__list">
                      <li class="c-section__item">Россия</li>
                      <li class="c-section__item">Белорусия</li>
                      <li class="c-section__item">и др.</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="c-section__images-2">
                <img src={images} alt="" />
              </div>
              <div className="c-section__subtitle-mobile">
                Наши сотрудники проконсультируют вас и ответят на все ваши
                вопросы. А также быстро примут ваш заказ, организуют его
                исполнение и будут контролировать каждый этап транспортировки.
                Сотрудники нашей компании компетентны в вопросах логистики,
                поэтому хорошо разбираются в теоретических и практических
                вопросах данной отрасли. Ведущий менеджер груза будет всегда с
                вами на связи, без перерывов и выходных дней. Квалифицированные
                водители и новые автомобили быстро и четко, за самое минимальное
                время доставят ваш груз в любую точку Европы!
              </div>
            </div>
          </div>
        </div>
      </secction>
    </>
  )
}

export default Geography
