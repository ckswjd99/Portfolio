import { useState } from "react";
import CareerPage from "./components/pages/CareerPage";
import MainPage from "./components/pages/MainPage";

function App() {
  const pages = [<MainPage />, <CareerPage />]
  const [pageNum, setPageNum] = useState(0);
  const nextPage = () => setPageNum(former => (former + 1) % pages.length)
  return (
    <div>
      <button onClick={nextPage}>Next</button>
      {pages[pageNum]}
    </div>
  );
}

export default App;
