import BlankRow from "../organisms/BlankRow"

const colNum = 4
const categories = [
  'Travel', 'Foods', 'Arts', 'Weird'
]
const overlayList = [
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
    category: 'Travel',
    src: 'images/jeju.jpg',
    content: (
      <div>
        <h2>Jeju island</h2>
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
  }
]

export {
  colNum, categories, overlayList
}