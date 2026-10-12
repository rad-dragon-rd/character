import CardAbility1 from '../img/icons/ability1.png'
import CardAbility2 from '../img/icons/ability2.png'
import CardAbility3 from '../img/icons/ability3.png'

function SectionCard() {
    return (
        <section className="section-card">
            <div>
                <img src={CardAbility1} alt=""/>
                    <h2>Тактическое умение</h2>
                    <h3>Стимулятор</h3>
                    <p>Увеличивает скорость движения на 30% на 6 сек, но тратит здоровье при активации</p>
            </div>
            <div>
                <img src={CardAbility2} alt=""/>
                    <h2>Пассивное умение</h2>
                    <h3>Регенерация</h3>
                    <p>Постепенно восстанавливает здоровье вне боя</p>
            </div>
            <div className="section-card-3">
                <img src={CardAbility3} alt="" className="section-card-img3"/>
                    <h2 className="section-card-title3">Ультимейт</h2>
                    <h3>Батут</h3>
                    <p>Размещает портативный батут, который подбрасывает союзников в воздух</p>
            </div>
        </section>
    );
}

export default SectionCard;