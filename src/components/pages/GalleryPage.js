import { useState } from "react";

import HiddenA from "../atoms/HiddenA"
import ImageGrid from "../organisms/ImageGrid"
import BlankRow from "../organisms/BlankRow"
import GalleryDetail from "../organisms/GalleryDetail";
import Page from "../templates/Page"

import { colNum, categories, overlayList } from './GalleryPageConfig.js'



const GalleryPage = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [overlayIndex, setOverlayIndex] = useState(0);

  return (
    <div>
      <Page>
        <h1>Gallery</h1>
        <p>All photos are taken by me, creations are made by me.</p>

        <ul>
          {
            categories.map(categoryName =>
              <li id={`li_${categoryName}`} key={categoryName}><HiddenA href={`#h2_${categoryName}`}><strong>{categoryName}</strong></HiddenA></li>
            )
          }
        </ul>

        {
          categories.map(categoryName => {
            return (
              <div key={categoryName}>
                <BlankRow height='20' />

                <h2 id={`h2_${categoryName}`}><HiddenA href={`#li_${categoryName}`}>{categoryName}</HiddenA></h2>
                <ImageGrid colNum={colNum} images={
                  overlayList.map((obj, index) => { return { data: obj, index } }).filter(obj => obj.data.category === categoryName).map(obj => {
                    const onClick = () => {
                      setOverlayVisible(true)
                      setOverlayIndex(obj.index)
                    }
                    return { src: obj.data.src, onClick }
                  })
                } />
              </div>
            )
          })
        }

        <BlankRow height='200' />

      </Page>

      <GalleryDetail src={overlayList[overlayIndex].src} visible={overlayVisible} onBackgroundClick={() => setOverlayVisible(false)}>{overlayList[overlayIndex].content}</GalleryDetail>

    </div >
  )
}

export default GalleryPage