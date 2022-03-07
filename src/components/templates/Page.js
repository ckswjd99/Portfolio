import style from './Page.module.css'

import menus from '../menu'
import TopNav from '../organisms/TopNav'
import MainContent from '../organisms/MainContent'
import Footer from '../organisms/Footer'

const Page = (props) => {
  const { children } = props
  return (
    <div className={style.pageArea}>
      <TopNav menu={menus} />
      <MainContent>
        {children}
      </MainContent>
      <Footer />
    </div>
  )
}

export default Page