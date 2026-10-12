import CharOctane from '../img/images/octane.png'

function Char() {
    return (
        <section className="char">
            <div className="menu">
                <p className="clous">Закрыть</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, exercitationem quasi explicabo aut modi odit sint est possimus ex nulla error odio tempora dolorem iusto eaque. Ab esse itaque earum.</p>
            </div>
            <figure>
                <img src={CharOctane} alt=""/>
                    <figcaption>“Актуальная внешность персонажа”</figcaption>
            </figure>
            <article>
                <h2>ОКТЕЙН</h2>
                <p className="article-title">Скоростной сорвиголова</p>
                <p className="article-hi">Знакомьтесь - это Октейн, <span className="article-span">самый быстрый человек на фронтире</span>.
                    Пришел в игры Апекс за острыми ощущениями и показать себя. По праву считаетсясамым экстремальной легендой и вот почему...</p>
                <details>
                    <summary className="article-sum">подробнее</summary>
                    В один прекрасный день Октавио Сильва заскучал. Впрочем, скука — его нормальное состояние. Сынок
                    вечно занятого директора корпорации «Сильва Фармасьютикалс», золотой мальчик, у которого было
                    все, что только можно пожелать... Единственным занятием, которое хоть как-то развлекало его,
                    было исполнение все более рискованных трюков и съемка головидео для восхищенных фанатов. И в
                    этот самый день он вознамерился преодолеть полосу препятствий за рекордное время, перебросив
                    себя через финишную черту... взрывом гранаты.
                </details>
                <p className="article-date">добавлен в игру 12 апреля 2019</p>
            </article>
            <aside>
                <div className="aside-div">
                    <p><span>Настоящее имя:</span> Октавио Сильва</p>
                    <p><span>Возраст:</span> 24</p>
                    <p><span>Родной мир:</span> Псамат</p>
                    <p><span>Тактическое умение:</span> Ускорение</p>
                    <p><span>Пассивное умение:</span> Регенерация</p>
                    <p><span>Ультимейт:</span> Батут</p>
                </div>
            </aside>
        </section>
    );
}

export default Char;