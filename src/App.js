import { useState } from "react";
import CareerPage from "./components/pages/CareerPage";
import GalleryPage from "./components/pages/GalleryPage";
import MainPage from "./components/pages/MainPage";

function App() {
  const pages = [<MainPage />, <CareerPage />, <GalleryPage />]
  const [pageNum, setPageNum] = useState(0);

  const nextPage = () => setPageNum(former => (former + 1) % pages.length)
  return (
    <div>
      {pages[pageNum]}

      <button onClick={nextPage}>Next</button>
    </div>
  );
}

export default App;
