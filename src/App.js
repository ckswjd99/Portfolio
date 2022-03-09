import { useState } from "react";
import CareerPage from "./components/pages/CareerPage";
import GalleryPage from "./components/pages/GalleryPage";
import MainPage from "./components/pages/MainPage";

import GalleryDetail from "./components/organisms/GalleryDetail";
import BlankRow from "./components/organisms/BlankRow";

function App() {
  const pages = [<MainPage />, <CareerPage />, <GalleryPage />]
  const [pageNum, setPageNum] = useState(0);
  const [overlayVisible, setOverlayVisible] = useState(true);
  const nextPage = () => setPageNum(former => (former + 1) % pages.length)
  const toggleOverlayVisible = () => setOverlayVisible(former => !former)
  return (
    <div>
      <button onClick={nextPage}>Next</button>
      {pages[pageNum]}
      <GalleryDetail src='images/IMG_5750.jpg' visible={overlayVisible} onBackgroundClick={toggleOverlayVisible}>
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
      </GalleryDetail>
    </div>
  );
}

export default App;
