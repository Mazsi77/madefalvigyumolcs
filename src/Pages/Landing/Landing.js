import ImageSection from './Components/ImageSection/ImageSection';
import TextSection from './Components/TextSection/TextSection';
import Grant from '../../Components/Grant/Grant';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import icon1 from '../../images/icon1.svg';
import icon2 from '../../images/icon2.svg';


const sections = [
  {
    title: "Ma délelőtt a nap éltető sugarai ébresztették az érő gyümölcsöt.",
    text: "UT ENIM AD MINIMA VENIAM",
    img: img1,
  },
  {
    title: 'Madéfalva neve a Szeresd az Istent!',
    texts: [
      'Madéfalva neve a Szeresd az Istent! parancsolat latin nevéből ered. Annak a felismeréséből származik, hogy az Isten szeretete ösztönös, belülről jövő késztetés, hogy az emberi szellemnek úgy része ez a parancsolat, ahogyan a pataknak is van elve, amit követnie kell.'
    ],
    img: icon1,
  },
  {
    title: 'Ma délben a falevelek árnyékukkal védték az almákat.',
    text: 'UT ENIM AD MINIMA VENIAM',
    img: img2,
    float: 'left'
  },
  {
    title: 'Amadéfalva',
    texts: [
      'Eredeti neve Amadéfalva volt. Első birtokosáról kapta a nevét. A falut már 1333-ban említik Csíkrákos fiókegyházaként, de önálló községként csak 1567-ben szerepel még Amadéfalva néven.',
      '1764. január 7-én az osztrák császári katonaság itt mészárolt le több száz székelyt, akik tiltakoztak a határőrezred felállítása ellen, és az adóztatás ellen. Ezt a gyalázatos eseményt „siculicidiumnak” vagy „madéfalvi veszedelemnek” nevezik. Ezután indult meg a székelyek tömeges kivándorlása. 1910-ben 1908, túlnyomórészt magyar lakosa volt.','A trianoni békeszerződésig Csík vármegye Felcsíki járásához tartozott. 1992-ben 2812 lakosából 2644 magyar és 167 román volt.'
    ],
    img: icon2,
  },
  {
    title: 'Ma délután a lemenő nap aranyozta be az érett almákat.',
    text: 'UT ENIM AD MINIMA VENIAM',
    img: img3,
    float: 'right'
  },
  {
    title: 'Jézus Szíve tiszteletére',
    texts: [
      'A település fontosabb részei Patakelve, Alszeg, Vargaszeg, Állomás környéke, és a Főút mellett. A falu plébánosa Bartalus Jakab Zoltán. A „Zöld Péter” Általános Iskola igazgatója Máté Sándor.',
      'Az 1764. évi mészárlás helyén 1905. október 8-án avatták fel az emlékművet Köllő Miklós alkotását, a helyén egykor állt sírkereszt a csíkszentmihályi templom kertjében áll. Római katolikus temploma 1913-14-ben épült Jézus Szíve tiszteletére.'
    ],
    img: icon1
  }
]

function index() {
  return (
    <>
      <ImageSection title={sections[0].title} text={sections[0].text} img={sections[0].img} />
      <TextSection title={sections[1].title} texts={sections[1].texts} img={sections[1].img} />
      <Grant />
      <ImageSection title={sections[2].title} text={sections[2].text} img={sections[2].img} float={sections[2].float} />
      <TextSection title={sections[3].title} texts={sections[3].texts} img={sections[3].img} />
      <ImageSection title={sections[4].title} text={sections[4].text} img={sections[4].img} float={sections[4].float} />
      <TextSection title={sections[5].title} texts={sections[5].texts} img={sections[5].img} />
      <Grant />
    </>
  )
}

export default index