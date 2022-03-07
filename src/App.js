import TopNav from './components/organisms/TopNav'
import MainContent from './components/organisms/MainContent'
import { toCareer, toJournals, toProjects } from './utils/pageLinkers'

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
      </MainContent>
    </div>
  );
}

export default App;
