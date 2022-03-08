import Page from "../templates/Page"
import BlankRow from "../organisms/BlankRow"
import ParagraphWithImage from "../molecules/ParagraphWithImage"
import HiddenA from "../atoms/HiddenA"

const CareerPage = () => {
  return (
    <Page>
      <h1>Career</h1>
      <ul>
        <li id='li_SNUECE'><HiddenA href='#h2_SNUECE'><strong>Undergraduate Student</strong></HiddenA> @ Seoul National University, Electronical and Computer Engineering. (Senior in 2022)</li>
        <li id='li_OSAM'>
          <HiddenA href='#h2_OSAM'><strong>Minister of National Defense Award</strong></HiddenA> @ <a href="https://osam.kr/hackathon/awards?m=v&wdnId=11">Online Hackathon</a> from Open Source Academy for Military. (20/6~11)
        </li>
        <li id='li_GREEGO'><HiddenA href='#h2_GREEGO'><strong>Outsourcing</strong></HiddenA> @ KST Mobility - worked as back-end engineer, developing application <a href="https://play.google.com/store/apps/details?id=com.greegoing.greego&hl=ko&gl=US">GreeGo</a>. (20/12~21/2)</li>
        <li id='li_ZALA'><HiddenA href='#h2_ZALA'><strong>Intern</strong></HiddenA> @ <a href="https://zalacompany.com/home">ZalaCompany</a> - advancing algorithm for rating live chat data. (21/7~9)</li>
        <li id='li_LOVEPLANET'><HiddenA href='#h2_LOVEPLANET'><strong>Crowdfunding</strong></HiddenA> @ <a href="https://tumblbug.com/loveplanet">Movie LovePlanet</a> - worked as website devleoper, minor actor. (21/10~22/2)</li>
        <li id='li_NURVIL'><HiddenA href='#h2_NURVIL'><strong>Back-end Engineer</strong></HiddenA> @ <a href="https://nursevillage.com">NurseVillage</a> - startup team making community for nurses. (22/01~22/03) </li>
      </ul>

      <BlankRow height='30' />

      <h2 id='h2_SNUECE'><HiddenA src='#li_SNUECE'>SNU ECE Undergraduate</HiddenA></h2>
      <ParagraphWithImage src='images/snu.jpg' imageSize='medium' imagePosition='left' alignText='left'>
        <p><strong>2017.03.~2023.02.</strong> Including military service.</p>
        <p>I'm now (2022 Spring) <strong>senior</strong> of Seoul National University, Electronical and Computer Engineering.</p>
        <p>I <strong>have taken</strong> classes such as</p>
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

      <h2 id='h2_OSAM'><HiddenA href='#li_OSAM'>OSAM Online Hackathon</HiddenA></h2>
      <p><strong>2020.06.~2020.11.</strong> Around the end of my military service.</p>

      <img src='images/award.jpg' alt='award' style={{ marginBottom: '20px' }} />

      <span>I won the <strong>Minister of National Defense Award</strong> at hackathon organized by <a href="https://osam.kr" target="_blank" rel="noreferrer">OSAM</a>, by developing <strong>non-face-to-face smartphone return system</strong>.</span>
      <ul>
        <li>Propose product, define its functionality and limitations</li>
        <li>Gather teammates, communicate online.</li>
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

      <h2 id='h2_GREEGO'><HiddenA href='#li_GREEGO'>Outsourcing at GreeGo</HiddenA></h2>
      <ParagraphWithImage src='images/jeju.jpg' imagePosition='right' imageSize='medium' alignText='left'>
        <p><strong>2020.11.~2021.02.</strong><br />After discharge, before going back to school.</p>
        <p>I joined a team <strong>building application <a href='https://play.google.com/store/apps/details?id=com.greegoing.greego&hl=ko&gl=US' target='_blank' rel='noreferrer'>GreeGo</a></strong>, which is an application for travelers in Jeju island.</p>
        <p>It was first time I <strong>got paid</strong> to development.</p>
        <ul>
          <li><strong>TypeScript + Express.js</strong></li>
          <li>Relative Databese (<strong>MySQL, OraclDB</strong>)</li>
          <li>Analyze <strong>API documentations</strong> for other services, then apply them in our service.<br />(Twizy, evpass, gogoro, Jeju bus, KG Inicis) </li>
          <li>Let users and admins reserve, return, manage exception cases for shared vehicles. </li>
          <li>Let users and admins pay or refund with credit cards.</li>
          <li>Provide realtime locations and routes of every Jeju bus.</li>
          <li>Create documentation for this service, using Postman.</li>
          <li>Communicate with a product manager and a front-end developer.</li>
        </ul>
      </ParagraphWithImage>

      <BlankRow height='30' />

      <h2 id='h2_ZALA'><HiddenA href='#li_ZALA'>Intern at ZalaCompany</HiddenA></h2>
      <ParagraphWithImage src='images/zala.jpg' imageSize='small'>
        <p><strong>2021.07.~2021.09.</strong><br />Summer Vacation of 2021.</p>
        <p><a href='https://zalacompany.com' target='_blank' rel="noreferrer"><strong>ZalaCompany</strong></a> makes application that <strong>automatically analyzes live broadcast and recommends edit points</strong>.</p>
        <p>I worked as a <strong>full-time intern</strong>, position of <strong>algorithm developer</strong>.</p>
        <ul>
          <li><strong>Parse chatting data APIs</strong> of Twitch, Afreeca, YouTube and VLive <strong>manually</strong>.</li>
          <li>Devise a <strong>new algorithm rating live chats</strong>, less rule-based.</li>
          <li>Implement the algorithm with <strong>Node.js</strong>, as a modulized library.</li>
          <li>Apply library to the product by <strong>multithreading and IPC</strong>.</li>
          <li>Create documentation for algorithm and library.</li>
          <li><s>Taste the sweetness of advanced IT corporate culture.</s></li>
        </ul>
      </ParagraphWithImage>

      <BlankRow height='30' />

      <h2 id='h2_LOVEPLANET'><HiddenA href='#li_LOVEPLANET'>Crowdfunding of {`<LovePlanet>`}</HiddenA></h2>
      <ParagraphWithImage src='images/loveplanet.jpg' imageSize='small'>
        <p><strong>2021.10.~2022.02.</strong><br />Indie movie project at 2021 Autumn.</p>
        <p>In SNU movie club YALA, I participated in film project <a href='https://tumblbug.com/loveplanet' target='_blank' rel="noreferrer"><strong>{`<LovePlanet>`}</strong></a>.</p>
        <p>Firstly I made webpages as a prop, then developed it as a <strong>real service providing a real experience related to movie</strong>. So from front-end to back-end, everything is <strong>done by myself</strong>.</p>
        <ul>
          <li>Act as a minor actor!</li>
          <li>Communicate with producer, make decision on design and functionalities.</li>
          <li>HTML5, CSS3, JavaScript</li>
          <li>Node.js + Express.js</li>
          <li>MySQL</li>
          <li>AWS EC2, RDS</li>
        </ul>
        <p>You can look around <a href='https://yala-love-planet.herokuapp.com/' target='_blank' rel="noreferrer">webpages as a prop</a>. Real Service is provided for supporters(will be opened to public soon).</p>
      </ParagraphWithImage>

      <BlankRow height='30' />

      <h2 id='h2_NURVIL'><HiddenA href='#li_NURVIL'>Back-end Engineer at NurseVillage</HiddenA></h2>

      <ParagraphWithImage src='images/nursevillage.png' imageSize='small'>
        <p><strong>2022.01.~2022.03.</strong> Winter Vacation of 2022.</p>
        <p><a href='https://nursevillage.com' target='_blank' rel="noreferrer" ><strong>NurseVillage</strong></a> is a community platform for nurses, providing informations about hospitals and universities.</p>
        <ul>
          <li>Have a meeting with judges from venture capital and outsourcing cooporation.</li>
          <li>Vue.js</li>
          <li>Node.js + Express.js</li>
          <li>MongoDB</li>
          <li>AWS EC2, S3, CloudFront, Route53</li>
        </ul>
      </ParagraphWithImage>

    </Page>
  )
}

export default CareerPage