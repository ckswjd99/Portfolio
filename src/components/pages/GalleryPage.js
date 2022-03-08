import HiddenA from "../atoms/HiddenA"
import ImageSquare from "../atoms/ImageSquare"
import BlankRow from "../organisms/BlankRow"
import Page from "../templates/Page"

const GalleryPage = () => {
  return (
    <Page>
      <h1>Gallery</h1>
      <p>All photos are taken by me, creations are made by me.</p>
      <ul>
        <li><HiddenA href='#h2_travel'>Travel</HiddenA></li>
        <li><HiddenA href='#h2_food'>Food</HiddenA></li>
        <li><HiddenA href='#h2_weird'>Weird</HiddenA></li>
      </ul>

      <BlankRow height='20' />

      <h2 id='h2_travel'>Travel</h2>

      <BlankRow height='20' />

      <h2 id='h2_food'>Food</h2>

      <BlankRow height='20' />

      <h2 id='h2_weird'>Weird</h2>

      <BlankRow height='200' />

    </Page>
  )
}

export default GalleryPage