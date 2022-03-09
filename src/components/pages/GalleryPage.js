import HiddenA from "../atoms/HiddenA"
import ImageGrid from "../organisms/ImageGrid"
import BlankRow from "../organisms/BlankRow"
import Page from "../templates/Page"

const GalleryPage = () => {
  return (
    <Page>
      <h1>Gallery</h1>
      <p>All photos are taken by me, creations are made by me.</p>
      <ul>
        <li id='li_travel'><HiddenA href='#h2_travel'><strong>Travel</strong></HiddenA></li>
        <li id='li_food'><HiddenA href='#h2_food'><strong>Food</strong></HiddenA></li>
        <li id='li_weird'><HiddenA href='#h2_weird'><strong>Weird</strong></HiddenA></li>
      </ul>

      <BlankRow height='20' />

      <h2 id='h2_travel'><HiddenA href='#li_travel'>Travel</HiddenA></h2>
      <ImageGrid colNum='4' images={[
        { src: 'images/zala.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/award.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/20181201_223218.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/loveplanet.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/snu.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/snu.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/snu.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/snu.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/snu.jpg', onClick: () => console.log('clicked image') },
      ]} />

      <BlankRow height='20' />

      <h2 id='h2_food'><HiddenA href='#li_food'>Food</HiddenA></h2>
      <ImageGrid colNum='4' images={[
        { src: 'images/zala.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/award.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/20181201_223218.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/loveplanet.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/snu.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/snu.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/snu.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/snu.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/snu.jpg', onClick: () => console.log('clicked image') },
      ]} />

      <BlankRow height='20' />

      <h2 id='h2_weird'><HiddenA href='#li_weird'>Weird</HiddenA></h2>
      <ImageGrid colNum='4' images={[
        { src: 'images/zala.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/award.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/20181201_223218.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/loveplanet.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/snu.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/snu.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/snu.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/snu.jpg', onClick: () => console.log('clicked image') },
        { src: 'images/snu.jpg', onClick: () => console.log('clicked image') },
      ]} />

      <BlankRow height='200' />

    </Page>
  )
}

export default GalleryPage