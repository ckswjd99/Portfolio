import BlankRow from "../organisms/BlankRow"

const colNum = 4
const categories = [
  'Travel', 'Foods', 'Arts', 'Weird'
]
const overlayList = [
  {
    category: 'Travel',
    src: 'images/gallery/travel/jeju.jpg',
    content: (
      <div>
        <h2>Jeju island</h2>
        <p>
          Mandarine Mandarine Mandarine...
        </p>
        <p>2022/02/05 ~ 08<br />Jeju island,<br />with my cousin.</p>
      </div>
    )
  },

  {
    category: 'Foods',
    src: 'images/gallery/foods/20200626.jpg',
    content: (
      <div>
        <h2>Pizza at Korea University</h2>
        <p>2020/06/26<br />LeeSuYuong Pizza,<br />during military leave with Jinhyeok.</p>
      </div>
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/2019-04-02-11-03-20.jpg',
    content: (
      <div>
        <h2>Udon at Takamatsu</h2>
        <p><i>Takamatsu-ken is called Udon-ken.</i></p>
        <p>2019/04/02<br />Ueharaya,<br />Traveling west Japan with Sugyeom.</p>
      </div>
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/2019-04-01-20-49-18.jpg',
    content: (
      <div>
        <h2>Honetsuki Dori at Takamatsu</h2>
        <p><i>Local, traditional style of chicken.</i></p>
        <p>2019/04/01<br />Ikkaku,<br />Traveling west Japan with Sugyeom.</p>
      </div>
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/2019-03-31-18-16-19.jpg',
    content: (
      <div>
        <h2>Inarisushi at Okayama</h2>
        <p><i>I'm really serious about Inarisushi.</i></p>
        <p>2019/03/31<br />Okayama Station,<br />Traveling west Japan with Sugyeom.</p>
      </div>
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/20190330_200212.jpg',
    content: (
      <div>
        <h2>Yakisoba at Himeji</h2>
        <p>2019/03/30<br />Traveling west Japan with Sugyeom.</p>
      </div >
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/2019-03-29-12-54-40.jpg',
    content: (
      <div>
        <h2>Cold udon at Kyoto</h2>
        <p>2019/03/29<br />Omen,<br />Traveling west Japan with Sugyeom.</p>
      </div>
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/2019-03-27-21-43-55.jpg',
    content: (
      <div>
        <h2>Ramen at Osaka</h2>
        <p>2019/03/27<br />Ichiran,<br />Traveling west Japan with Sugyeom.</p>
      </div>
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/20190327_115946.jpg',
    content: (
      <div>
        <h2>Meat of Whale at Kii-Katsuura</h2>
        <p><i>Fushigina meat.</i></p>
        <p>2019/03/27<br />traveling west Japan with Sugyeom.</p>
      </div>
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/2019-03-26-12-18-51.jpg',
    content: (
      <div>
        <h2>Chuka Soba at Wakayama</h2>
        <p>2019/03/26<br />Ichiran,<br />Traveling west Japan with Sugyeom.</p>
      </div>
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/1545739351306.jpg',
    content: (
      <div>
        <h2>Sashimi at Yonago</h2>
        <p>Christmas of 2018<br />Traveling Yonago-Tottori with my cousin.</p>
      </div>
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/20181102_183321.jpg',
    content: (
      <div>
        <h2>Burger at Pangyo</h2>
        <p>2018/11/02<br />at Hyundai Depardment Store, with my cousin.</p>
      </div>
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/20180830_202409532.jpg',
    content: (
      <div>
        <h2>Okonomiyaki at Hiroshima</h2>
        <p><i>
          Hiroshima and Osaka are rivals about origin of Okonomiyaki. But Hiroshima won in my mouth.
        </i></p>
        <p>
          2018/08/30<br />Traveling Hiroshima alone.
        </p>
      </div>
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/2018-08-21-19-29-03.jpg',
    content: (
      <div>
        <h2>Basashi at Kumamoto</h2>
        <p><i>Basashi is sashimi of horse meat.</i></p>
        <p>2018/08/21<br />Kenzo,<br />Traveling north Kyushu with Cheonsang.</p>
      </div >
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/2018-08-21-12-39-19.jpg',
    content: (
      <div>
        <h2>Akagyudon at Aso</h2>
        <p>2018/08/21<br />Imakin,<br />Traveling north Kyushu with Cheonsang.</p>
      </div>
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/2018-08-03-21-15-03.jpg',
    content: (
      <div>
        <h2>Yakisoba at Osaka</h2>
        <p>Micherin 3-star restaurant.</p>
        <p>2018/08/03<br />Mizuno,<br />Traveling Kansai with my family.</p>
      </div>
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/20180709_193539.jpg',
    content: (
      <div>
        <h2>Burger at Sharosu-gil</h2>
        <p>
          Sharosu-gil was not so popular as it is now, and there was burger restaurant named 'Journey'. It was the sense of residence on the street. But it's gone now.
        </p>
        <p>2018/07/09<br />Journey,<br />with Sugyeom.</p>
      </div>
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/20171219_192856463.jpg',
    content: (
      <div>
        <h2>Jingiskan at Sapporo</h2>
        <p><i>The first Jingiskan I had.<br />Local restaurant, very pleasing.</i></p>
        <p>2017/12/19<br />traveling Hokkaido alone.</p>
      </div>
    )
  },
  {
    category: 'Foods',
    src: 'images/gallery/foods/20171218_134849304.jpg',
    content: (
      <div>
        <h2>Chicken Curry at Wakkanai</h2>
        <p><i>What's this? Wakaranai~</i></p>
        <p>Wakkanai is Japanese city, located at the northest area of Hokkaido.</p>
        <p>2017/12/18<br />WOO-RIVO,<br />Traveling Hokkaido alone.</p>
      </div>
    )
  },

  {
    category: 'Arts',
    src: 'images/IMG_5750.jpg',
    content: (
      <div>
        <h2>Ice Pretending to be Cool</h2>
        <p>
          watercolour on paper<br />
          21.3 x 15.7 cm.<br />
          Painted in Seoul, 2021
        </p>
        <BlankRow height='20' />
        <p>
          This work is based on ice that feels cool just by looking at it. However, in the end, i judged it as pretending to be cool because it is only a picture on the drawing paper.
        </p>
      </div>
    )
  },
  {
    category: 'Arts',
    src: 'images/20181201_223218.png',
    content: (
      <div>
        <h2>A crow staring at the full moon</h2>
        pen on paper<br />
        19.6 x 11.2 cm.<br />
        Painted in Daejeon, 2018<br /><br />
        I copied the picture spontaneously without a sketch. A full moon like a halo was added.
      </div>
    )
  },

  {
    category: 'Weird',
    src: 'images/gallery/weird/20171218_144703.jpg',
    content: (
      <div>
        <h2>Enjoy Being a Snowman</h2>
        <p>only when I'm traveling snowy village.</p>
      </div>
    )
  },
  {
    category: 'Weird',
    src: 'images/gallery/weird/sc4-img-3.jpg',
    content: (
      <div>
        <h2>Sometimes Lose My Way in Subway</h2>
        <p>Only when I'm drunk.</p>
      </div>
    )
  },
]

export {
  colNum, categories, overlayList
}