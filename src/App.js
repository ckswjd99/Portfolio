import { Route, Routes } from "react-router-dom";

import { CareerPage, GalleryPage, MainPage, OthersPage, ProjectsPage } from './components/pages'

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<MainPage />} />
      <Route path='/career' element={<CareerPage />} />
      <Route path='/projects' element={<ProjectsPage />} />
      <Route path='/gallery' element={<GalleryPage />} />
      <Route path='/others' element={<OthersPage />} />
    </Routes>
  );
}

export default App;
