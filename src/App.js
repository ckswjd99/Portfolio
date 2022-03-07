import TopNav from './components/organisms/TopNav'
import MainContent from './components/organisms/MainContent'
import ImageCaptioned from './components/atoms/ImageCaptioned'
import { toCareer, toJournals, toProjects } from './utils/pageLinkers'
import ParagraphWithImage from './components/molecules/ParagraphWithImage'

function App() {
  const menus = {
    'Career': toCareer,
    'Projects': toProjects,
    'Journals': toJournals
  }
  return (
    <div>
      <TopNav menu={menus} />
      <MainContent>
        <h1>Hello World!</h1>
        <p>I'm ChanJeong Park, who develops anything.</p>
        <h2>Drawing</h2>
        <ParagraphWithImage src='images/IMG_5750.jpg' caption='ice pretending to be cool'>
          Hello World! I like drawing.
        </ParagraphWithImage>
      </MainContent>
    </div>
  );
}

export default App;
