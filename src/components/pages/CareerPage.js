import Page from "../templates/Page"
import BlankRow from "../organisms/BlankRow"
import ImageCaptioned from "../atoms/ImageCaptioned"
import ParagraphWithImage from "../molecules/ParagraphWithImage"

const CareerPage = () => {
  return (
    <Page>
      <h1>Career</h1>
      <ul>
        <li><strong>Undergraduate Student</strong> @ Seoul National University, Electronical and Computer Engineering. (Senior in 2022)</li>
        <li>
          <strong>Minister of National Defense Award</strong> @ <a href="https://osam.kr/hackathon/awards?m=v&wdnId=11">Online Hackathon</a> from Open Source Academy for Military. (20/6~11)
        </li>
        <li><strong>Outsourcing</strong> @ KST Mobility - worked as back-end engineer, developing application <a href="https://play.google.com/store/apps/details?id=com.greegoing.greego&hl=ko&gl=US">GreeGo</a>. (20/12~21/2)</li>
        <li><strong>Intern</strong> @ <a href="https://zalacompany.com/home">ZalaCompany</a> - advancing algorithm for rating live chat data. (21/7~9)</li>
        <li><strong>Crowdfunding</strong> @ <a href="https://tumblbug.com/loveplanet">Movie LovePlanet</a> - worked as website devleoper, minor actor. (21/10~22/2)</li>
        <li><strong>Back-end Engineer</strong> @ <a href="https://nursevillage.com">NurseVillage</a> - startup team making community for nurses. (22/01~22/03) </li>
      </ul>

      <BlankRow height='30' />

      <h2 id='h2_SNUECE'>SNU ECE Undergraduate</h2>
      <ParagraphWithImage src='images/snu.jpg' imageSize='medium' imagePosition='left' alignText='left'>
        <span>I'm now (2022 Spring) <strong>senior</strong> of Seoul National University, Electronical and Computer Engineering.</span><br />
        <span>I <strong>have taken</strong> classes such as</span>
        <ul>
          <li>Digital Logic Design</li>
          <li>Data Structure</li>
          <li>Algorithm</li>
          <li>Computer Architecture</li>
          <li>Compiler</li>
          <li>Computer Vision</li>
        </ul>
        <span>and now <strong>taking</strong> classes below.</span>
        <ul>
          <li>Programming Language</li>
          <li>Machine Learning</li>
          <li>Operating System</li>
        </ul>
      </ParagraphWithImage>

      <BlankRow height='30' />

      <h2 id='h2_OSAM'>OSAM Online Hackathon</h2>
      <img src='images/award.jpg' alt='award' style={{ marginBottom: '20px' }} />
      <span>I served in the military from May 2019 to December 2020.</span>
      <span>
        At the end of 2020, <a href="https://osam.kr" target="_blank" rel="noreferrer">OSAM</a> organized hackathon, so I gathered team members and developed <strong>non-face-to-face smartphone return system</strong>, and at November 2020, I won the <strong>Minister of National Defense Award</strong>(with some prize money!).
      </span>
      <span>In this hackathon, I learned and experienced the following.</span>
      <ul>
        <li>Propose product, define its functionality and limitations</li>
        <li>Cooperate through <strong>Git and Github</strong></li>
        <li>Develop a <strong>new QR code encryption theory</strong>, implement it with <strong>Python</strong> (+OpenCV, Pillow)</li>
        <li>Create MVP with <strong>RaspberryPi</strong> and prove feasibility</li>
        <li>Create documentation for open source project</li>
      </ul>
      <span>You can look around the project with</span>
      <ul>
        <li>
          <a href="https://github.com/osamhack2020/IoT_KookMoBan_PonJohmNaimann" target="_blank" rel="noreferrer">IoT</a>,
          <a href="https://github.com/osamhack2020/WEB_KookMoBan_PonJohmNaimann" target="_blank" rel="noreferrer"> WEB</a>,
          <a href="https://github.com/osamhack2020/APP_KookMoBanUser_PonJohmNaimann" target="_blank" rel="noreferrer"> APP</a> GitHub repository
        </li>
        <li><a href="https://kookmoban.gitbook.io/osam/" target="_blank" rel="noreferrer">GitBook</a> for documentation</li>
        <li><a href="https://coral-moonflower-995.notion.site/OSAM-265735b9b76b4bccbff7ce2c4739acd9" target="_blank" rel="noreferrer">Notion</a> for team communication</li>
        <li><a href="https://youtu.be/Vmh0gduZzPU" target="_blank" rel="noreferrer">Video</a> of MVP</li>
      </ul>

      <BlankRow height='30' />

      <h2>Outsourcing at GreeGo</h2>
      <ParagraphWithImage src='images/jeju.jpg' imagePosition='right' imageSize='medium' alignText='left'>
        wow
      </ParagraphWithImage>

      <BlankRow height='30' />

      <h2>Intern at ZalaCompany</h2>
      <ParagraphWithImage src='images/zala.jpg'>
        holy wow
      </ParagraphWithImage>

      <BlankRow height='30' />

      <h2>Crowdfunding of {`<LovePlanet>`}</h2>
      <ParagraphWithImage src='images/loveplanet.jpg'>
        oh yeah
      </ParagraphWithImage>

      <BlankRow height='30' />

      <h2>Back-end Engineer at NurseVillage</h2>


    </Page>
  )
}

export default CareerPage