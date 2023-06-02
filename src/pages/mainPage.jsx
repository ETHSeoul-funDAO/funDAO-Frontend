import React from "react";
import Header from "../components/header/header";
import { Container } from "react-bootstrap";

const MainPage = () =>{

    const circleStyle = "d-inline-flex border border-white-50 text-white-50 rounded-pill ps-2 pe-2 ms-1 me-2";
    const Theme = "Fund your thing";
    const desc = "Become part of a vast community of projects leveraging fundDao to transparently fund, operate, and expand their ideas and communities on the various network.";


    const renderProjectCards = () => {
        const result = [];
        for(let i=0; i<4; i++){
            result.push(<div class="card mx-3" style={{width: '18rem'}} key={i}>
                <img src="..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
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
            <div class="row justify-content-md-center mt-3">
                {renderProjectCards()}
            </div>
        </div>
    );
}

export default MainPage;
