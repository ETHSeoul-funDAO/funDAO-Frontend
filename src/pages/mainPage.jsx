import React from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import banner from "../assets/banner.png";
import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

const MainPage = () =>{

    const circleStyle = "d-inline-flex border border-white-50 text-white-50 rounded-pill ps-2 pe-2 ms-1 me-2";
    const circleInCard = "d-inline-flex border border-white-50 bg-dark text-white rounded-pill ps-2 pe-2 ms-1 me-2";
    const Theme = "Fund your thing";
    const desc = "Become part of a vast community of projects leveraging fundDao to transparently fund, operate, and expand their ideas and communities on the various network.";
    const projects = [
        {
            pname: "2023 Noname World Tour in Seoul",
            category: "concert",
            banner: banner,
            volume: "112300 usdc",
            investors: 79
        },
        {
            pname: "Woongnam-i",
            category: "movie",
            banner: banner1,
            volume: "23421 usdc",
            investors: 79

        },
        {
            pname: "2023 Keshi Concerts in Korea",
            category: "concert",
            banner: banner2,
            volume: "59871 usdc",
            investors: 79
        },
        {
            pname: "Hellobot Universe NFT",
            category: "NFT",
            banner: banner3,
            volume: "55 ETH",
            investors: 179
        },
    ]


    const renderProjectCards = () => {
        const result = [];
        for(let i=0; i<4; i++){
            result.push(
            <div class="card mx-3 bg-dark border border-secondary text-white" style={{width: '18rem', height: "25rem"}} key={i}>
                <img src={projects[i].banner} class="card-img-top object-fit-cover" alt="" style={{width: "100%", height: "60%"}}/>
                <div class="card-body">
                    <h5 class="card-title fw-bolder" style={{height: "34%"}}>{projects[i].pname} 
                        <div class={circleInCard} style={{fontSize: "12px"}}>
                            {projects[i].category} 
                        </div>
                    </h5>
                    <div class="row text-start">
                        <div class="col">
                            volume
                        </div>
                        <div class="col">
                            investors
                        </div>
                    </div>
                    <p class="row text-start fw-bolder">
                        <div class="col">
                            {projects[i].volume}
                        </div>
                        <div class="col">
                            {projects[i].investors}
                        </div>
                    </p>
                </div>
            </div>);
        }
        return result;
    }

    return (
        <div class="bg-dark">
            <Header></Header>
            <div>
                <div class="row mt-5 pt-3">
                    <div>
                        <div class={circleStyle}>Concert</div>
                        <div class={circleStyle}>Movie</div>
                        <div class={circleStyle}>Fundraising</div>
                        <div class={circleStyle}>Art</div>
                        <div class={circleStyle}>Business</div>
                        <div class={circleStyle}>All →</div>
                    </div>
                </div>
            <div class="text-white fw-bolder fst-italic display-1 mt-5">
            {Theme}
            </div>
            <div class="row justify-content-md-center">
                <div class="text-white-50 ps-5 pe-5 mt-5" style={{width:'40%'}}>
                    {desc}
                </div>
            </div>
                <button type="button" class="btn btn-primary mt-4 px-4 py-3" style={{'background-color': '#3771e6'}}>Create a project</button>
            </div>
            <div class="row justify-content-md-center mt-5">
                {renderProjectCards()}
            </div>
            <div class="row justify-content-md-center mt-3 mb-5 pb-5">
                {renderProjectCards()}
            </div>
            <Footer></Footer>
        </div>
    );
}

export default MainPage;
