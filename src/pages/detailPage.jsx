import React, {useState} from "react";
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import rehypeRaw from 'rehype-raw'
import Header from "../components/header/header";
import { useParams } from 'react-router-dom';
import banner from "../assets/banner.png";
import Countdown from "react-countdown";

// Random component
const Completionist = () => <span>is Ended</span>;

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <span>
        ends in {hours}:{minutes}:{seconds}
      </span>
    );
  }
};

const dummy = {
  banner: banner,
  title: "2023 Noname World Tour in Seoul",
  address: "0x00...",
  description: "A mind-blowing musical extravaganza that will leave you spellbound!",
  target_cap: 10000000,
  endtime: 1687786453000,
  basetoken: "USDT",
  ticker: "NWT",
  detail: 
  `### <u>Fundraising Details for "2023 Noname World Tour in Seoul</u>" \

  - **Date: 2023.07.03** 
  - **Location: Jamsil Sports Stadium, Seoul, South Korea** 
  
  We are excited to announce our fundraising campaign for the upcoming "2023 Noname World Tour in Seoul" concert. Our goal is to raise funds to make this concert a reality and provide an incredible experience for music lovers in Seoul.
  
  #### Event Highlights
  - **Noname Live Performance** <br>
    Experience the incredible talent of Noname as she performs her chart-topping hits and mesmerizing stage presence.
  - **Guest Performances** <br>
  Enjoy performances by renowned local and international artists, who will join Noname on stage to create an unforgettable musical experience.
  - **Silent Auction**
  <br> Bid on unique and exclusive items, including autographed memorabilia, VIP experiences, and limited-edition merchandise, with all proceeds going towards the cause.
  - **Meet and Greet** <br>
  Let the opportunity to meet Noname in person, take photos, and receive personalized autographs.
  - **Interactive Activities** <br> 
  Engage in various activities such as photo booths, art installations, and community engagement projects, showcasing the creative spirit and philanthropic vision of our cause.
  
  #### Fundraising Initiatives
  - **Ticket Sales** <br>
  By purchasing tickets to the concert, you will be directly contributing to the fundraising effort. Not only will you secure your spot at the concert, but you will also support the realization of this highly anticipated event.
  - **Sponsorship Opportunities** <br>
  We welcome businesses and organizations to become sponsors of the concert. By partnering with us, you can showcase your brand while supporting the fundraising campaign.
  
  #### Fund Allocation
  All funds raised through this campaign will be dedicated to the "2023 Noname World Tour in Seoul" concert. The funds will be used to cover production expenses and enhance the overall concert experience.
  
  For more information and ticket purchases, please visit [official website](https://naver.com). We appreciate your support and look forward to seeing you at this incredible event.`,
  updates: [
    {
      time: "2023.06.03 12:32:00",
      content: `#### Teaser Video for the "2023 Noname World Tour in Seoul" Released!

We are thrilled to announce the release of the teaser video for the upcoming "2023 Noname World Tour in Seoul" concert! Get a sneak peek of the incredible performances and electrifying atmosphere that await you at this highly anticipated event. Stay tuned for more updates and mark your calendars for an unforgettable experience. Get ready to join us on 2023.07.03 for an extraordinary concert you won't want to miss!
<iframe width="560" height="315" src="https://www.youtube.com/embed/m07vWxmtqcU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       `
    }
  ],
  documents: "https://www.dropbox.com/sh/0b2yxhmeog61bpm/AACwWEafERGSMSPlg9UdgXiVa?dl=0"
}

export default function DetailPage() {
  const { id } = useParams();
  const [tab, setTab] = useState(0);
  return (
    <>
      <Header></Header>
      <div 
        class="border border-dark p-3"
        style={{position: "fixed", bottom: 0, right: 45, backgroundColor: "white", fontSize: "1.2em"}}>
        <div class="fw-bolder" style={{fontSize: "1.2em"}}>
          Fundraising <Countdown date={dummy.endtime} renderer={renderer}/>
        </div>
        <div> Your Balance : 0 {dummy.ticker}</div>
        <div class="mt-3">
          <button type="button" class="btn btn-primary px-5">Deposit</button> &nbsp;
          <button type="button" class="btn btn-outline-danger px-5">Withdraw</button>
          {/* <button type="button" class="btn btn-info">Claim</button> */}
        </div>
      </div>
      <div class="mx-5 mt-5">
        <div class="text-white fw-bolder fst-italic display-1 w-100">
          <img class="w-100" src={dummy.banner} />
        </div>
        <div class="fw-bolder display-5 mt-3" style={{textAlign: "left"}}>
          <p class="border-bottom border-dark" style={{width: "fit-content"}}>{dummy.title}</p>
        </div>
        <div style={{textAlign: "left", fontSize: "1.5em"}}>
          {dummy.description}
        </div>
        <nav class="nav nav-pills nav-fill mt-4">
          <a class={tab!=0?"nav-item nav-link":"nav-item nav-link active"} onClick={() => setTab(0)} href="#">Details</a>
          <a class={tab!=1?"nav-item nav-link":"nav-item nav-link active"} onClick={() => setTab(1)} href="#">Updates</a>
          <a class={tab!=2?"nav-item nav-link":"nav-item nav-link active"} onClick={() => setTab(2)} href="#">Documents</a>
          <a class={tab!=3?"nav-item nav-link":"nav-item nav-link active"} onClick={() => setTab(3)} href="#">Governance</a>
        </nav>
        <div class="my-4 p-4 border">
          {tab==0?(<div>
            <div class="fw-bolder" style={{textAlign: "left", fontSize: "1.5em"}}>Fundraising Status</div>
            <div class="progress mt-2" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar" style={{width: "12%"}}></div>
            </div>
            <div style={{height: "40px"}}>
              <div class="mt-2" style={{textAlign: "left", float: "left"}}>
                <b>Current Funding</b> 0 {dummy.basetoken}
              </div>
              <div class="mt-1" style={{textAlign: "left", float: "right"}}>
                <b>Target Funding Cap</b> {dummy.target_cap} {dummy.basetoken}
              </div>
            </div>
            <div class="mt-2" style={{textAlign: "left"}}>
              <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                {dummy.detail}
              </ReactMarkdown>
            </div>
          </div>):(<></>)}
          {tab==1?(<div>
            <div class="my-1 p-4 border border-dark">
              <div style={{textAlign: "left"}} >{dummy.updates[0].time}</div>
              <div class="mt-2" style={{textAlign: "left"}}>
                <ReactMarkdown rehypePlugins={[rehypeRaw]}>
                  {dummy.updates[0].content}
                </ReactMarkdown>
              </div>
            </div>
          </div>):(<></>)}
          {tab==2?(<div style={{fontSize: "1.2em", textAlign: "left"}}>
            <ul>
              <li> <a href="https://www.dropbox.com/sh/0b2yxhmeog61bpm/AACwWEafERGSMSPlg9UdgXiVa?dl=0">Legal Documents</a> </li>
            </ul>
          </div>):(<></>)}
        </div>
      </div>
    </>
);
}
