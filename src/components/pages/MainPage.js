import Page from '../templates/Page'
import ParagraphWithImage from '../molecules/ParagraphWithImage'

const MainPage = () => {
  return (
    <Page>
      <h1>Chan Jeong Park</h1>
      <p>
        I'm Chan Jeong Park, who continuously creates something.
      </p>
      <span>
        If you are interested in me as a<br />
        <ul>
          <li>Developer - visit my <a href="https://github.com/ckswjd99" target="_blank" rel="noreferrer">GitHub</a>.</li>
          <li>Writer - visit my <a href="https://velog.io/@ckswjd99" target="_blank" rel="noreferrer">velog</a>.</li>
          <li>Social Being - visit my <a href="https://instagram.com/ckswjd99" target="_blank" rel="noreferrer">instagram</a>.</li>
          <li>Attention Seeker - visit my <a href="https://www.youtube.com/channel/UCpgFtS2yVgbtk5qgThNAv1Q" target="_blank" rel="noreferrer">YouTube</a>.</li>
        </ul>
      </span>
      <p>
        Or you can see some of my creations below.
      </p>
      <h2>Drawings</h2>
      <ParagraphWithImage src='images/IMG_5750.jpg'>
        <strong>Ice Pretending to be Cool</strong><br />
        watercolour on paper<br />
        21.3 x 15.7 cm.<br />
        Painted in Seoul, 2021<br /><br />
        This work is based on ice that feels cool just by looking at it. However, in the end, i judged it as pretending to be cool because it is only a picture on the drawing paper.
      </ParagraphWithImage>
      <ParagraphWithImage src='images/20181201_223218.png' imagePosition='right' imageSize='big' alignText='right'>
        <strong>A crow staring at the full moon</strong><br />
        pen on paper<br />
        19.6 x 11.2 cm.<br />
        Painted in Daejeon, 2018<br /><br />
        I copied the picture spontaneously without a sketch. A full moon like a halo was added.
      </ParagraphWithImage>
    </Page>
  )
}

export default MainPage