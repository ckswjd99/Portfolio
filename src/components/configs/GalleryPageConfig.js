import BlankRow from "../organisms/BlankRow"

const colNum = 4
const categories = [
  'Travel', 'Foods', 'Arts', 'Weird'
]
const rawOverlayList = [
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
    category: 'Travel',
    src: 'images/gallery/travel/20180831_132105.jpg',
    content: (
      <div>
        <h2>Torii on a Water</h2>
        <p>2018/08/30 ~ 09/01<br />Hiroshima, Japan,<br />alone.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/20180830_173137.jpg',
    content: (
      <div>
        <h2>Hiroshima Streetcar</h2>
        <p>2018/08/30 ~ 09/01<br />Hiroshima, Japan,<br />alone.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/20180821_095738.jpg',
    content: (
      <div>
        <h2>DAB on a Road</h2>
        <p>2018/08/19 ~ 22<br />Aso, Japan,<br />with my highschool friend.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/2018-08-02-15-36-49.jpg',
    content: (
      <div>
        <h2>Kyotogyoen</h2>
        <p>2018/08/02 ~ 04<br />Kyoto, Japan,<br />with my parents.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/1532943678130.jpg',
    content: (
      <div>
        <h2>Street of Takamatsu</h2>
        <p>2018/07/17 ~ 20<br />Takamatsu, Japan,<br />with my cousin.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/20180718_195425.jpg',
    content: (
      <div>
        <h2>Enterance of Dogo Onsen Street</h2>
        <p>Hot spring is always pleasing!</p>
        <p>2018/07/17 ~ 20<br />Matsuyama, Japan,<br />with my cousin.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/20180717_181113.jpg',
    content: (
      <div>
        <h2>Kawaii-est Station in the World</h2>
        <p>What an adorable smile!</p>
        <p>2018/07/17 ~ 20<br />Takamatsu, Japan,<br />with my cousin.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/20180705_192306.jpg',
    content: (
      <div>
        <h2>Jilong Night Market</h2>
        <p>Full of local foods.</p>
        <p>2018/07/02 ~ 06<br />Jilong, Taiwan,<br />with highschool friends.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/20180527_130602.jpg',
    content: (
      <div>
        <h2>Rest in Shinjuku Gyoen</h2>
        <p>2018/05/25 ~ 28<br />Tokyo, Japan,<br />with university alumni.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/20180402_113313.jpg',
    content: (
      <div>
        <h2>Sakura Flower in Moat</h2>
        <p>Moat of Kokura castle.</p>
        <p>2018/03/31 ~ 04/02<br />Kitakyushu, Japan,<br />alone.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/20180401_130051.jpg',
    content: (
      <div>
        <h2>Unknown Sculpture</h2>
        <p>At local park.</p>
        <p>2018/03/31 ~ 04/02<br />Shimonoseki, Japan,<br />alone.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/20180401_082453.jpg',
    content: (
      <div>
        <h2>Big Torii at Mojico</h2>
        <p>Little suburb area of Mojico, exotic village.</p>
        <p>2018/03/31 ~ 04/02<br />Kitakyushu, Japan,<br />alone.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/20180127_104655.jpg',
    content: (
      <div>
        <h2>Gero Onsen Village</h2>
        <p>I love snowy village.</p>
        <p>2018/01/26 ~ 28<br />Nagoya, Japan,<br />with university alumni.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/20171218_143609.jpg',
    content: (
      <div>
        <h2>Snowy Hill Road without any Life</h2>
        <p>I thought it would be a daily life for people in Wakkanai.</p>
        <p>But wasn't.</p>
        <p>2017/12/15 ~ 20<br />Hokkaido of Japan,<br />alone.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/20171216_182031.jpg',
    content: (
      <div>
        <h2>Happy Christmas Season</h2>
        <p>2017/12/15 ~ 20<br />Hokkaido of Japan,<br />alone.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/20171216_095752.jpg',
    content: (
      <div>
        <h2>Bullying a Bear</h2>
        <p>
          The bear is clever, so flirt visitors looking for food.
        </p>
        <p>2017/12/15 ~ 20<br />Hokkaido of Japan,<br />alone.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/20170824_190105.jpg',
    content: (
      <div>
        <h2>Local Festival of Japan</h2>
        <p>
          Introducing local mascot.
        </p>
        <p>2017/02/22 ~ 25<br />Kansai of Japan,<br />with a highschool alumni.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/20170616_130009.jpg',
    content: (
      <div>
        <h2>Kawaii-days of Mine</h2>
        <p>
          Camoflague in the bamboo forest.
        </p>
        <p>2017/08/23 ~ 31<br />Northern Kyushu,<br />with a university alumni.</p>
      </div>
    )
  },
  {
    category: 'Travel',
    src: 'images/gallery/travel/20170224_054737.jpg',
    content: (
      <div>
        <h2>Kawaii-days of Mine</h2>
        <p>
          Wake up at 5:00 A.M., have a bite of bread.
        </p>
        <p>2017/02/22 ~ 25<br />Kansai of Japan,<br />with a highschool alumni.</p>
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
    category: 'Foods',
    src: 'images/gallery/foods/20170717_112749.jpg',
    content: (
      <div>
        <h2>Ramyeon Donkatsu</h2>
        <p>Simple idea, Dontaksu on ramyeon.<br/>This is one of my soul food, big part of my highschool memories.</p>
        <p>2017/07/17<br />Rodem Tree,<br />In front of highschool where I graduated.</p>
      </div>
    )
  },

  {
    category: 'Arts',
    src: 'images/gallery/arts/IMG_5750.jpg',
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
    src: 'images/gallery/arts/20181201_223218.png',
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
    category: 'Arts',
    src: 'images/gallery/arts/20180212_152201.jpg',
    content: (
      <div>
        <h2>Nagoya Castle</h2>
        cardboard<br />
        made in Daejeon, 2018<br /><br />
        Bought a making kit at Nagoya Castle.
      </div>
    )
  },
  {
    category: 'Arts',
    src: 'images/gallery/arts/mid_mountain.jpg',
    content: (
      <div>
        <h2>Around Mid Mountain</h2>
        digital illustration<br />
        1500 x 2667 px.<br />
        Painted in Seoul, 2018<br /><br />
        Typically idyllic, so nostalgic. Drawn mainly to practice drawing flowers.
      </div>
    )
  },
  {
    category: 'Arts',
    src: 'images/gallery/arts/student_hall.jpg',
    content: (
      <div>
        <h2>Magic Rabbit over Student Hall</h2>
        digital illustration<br />
        3600 x 4973 px.<br />
        Painted in Seoul, 2018<br /><br />
        Drawn as a part of poster for performance in Monghwan, a magic club in SNU.
      </div>
    )
  },
  {
    category: 'Arts',
    src: 'images/gallery/arts/pinky_spring.jpg',
    content: (
      <div>
        <h2>Pinky Spring</h2>
        digital illustration<br />
        1800 x 3200 px.<br />
        Painted in Seoul, 2018<br /><br />
        Outright spring style illustration.
      </div>
    )
  },
  {
    category: 'Arts',
    src: 'images/gallery/arts/sakuragi_at_kamogawa.jpg',
    content: (
      <div>
        <h2>Sakuragi along Kamogawa</h2>
        digital illustration<br />
        1800 x 3200 px.<br />
        Painted in Seoul, 2018<br /><br />
        Referenced a photo taken by me at Kamogawa, Kyoto.
      </div>
    )
  },
  {
    category: 'Arts',
    src: 'images/gallery/arts/takoyaki.jpg',
    content: (
      <div>
        <h2>Street Takoyaki Vendor</h2>
        miniature<br />
        1800 x 3200 px.<br />
        Made in Daejeon, 2017<br /><br />
        Bought a making kit at Osaka Municipal Housing Information Center. I love delicious takoyaki.
      </div>
    )
  },

  {
    category: 'Weird',
    src: 'images/gallery/weird/IMG_5740.JPG',
    content: (
      <div>
        <h2>Shot over Donut-like Jelly</h2>
        <p>We can see through jelly.</p>
      </div>
    )
  },
  {
    category: 'Weird',
    src: 'images/gallery/weird/1523188468234.jpg',
    content: (
      <div>
        <h2>Sakura over Snow</h2>
        <p>In ChoonCheon.</p>
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

const overlayList = rawOverlayList.map(overlayData => {
  const basenameIndex = overlayData.src.lastIndexOf('/')
  overlayData.srcThumb = overlayData.src.substring(0, basenameIndex) + "/thumbs" + overlayData.src.substring(basenameIndex)
  return overlayData
})

export {
  colNum, categories, overlayList
}