import React from "react";
import Header from "../components/header/header";
import { useNavigate } from "react-router-dom";

import banner from "../assets/banner.png";

export default function ExplorePage() {
  const navigate = useNavigate();
  return (
      <>
        <Header></Header>
        <div class="mx-5 mt-5">
          <div class="my-2 border w-100" style={{height: "20em", borderRadius: "15px", overflow: "hidden"}}>
            <div class="h-100" style={{backgroundImage: `url(${banner})`, backgroundSize: "cover", float: "left", width: "65%"}}></div>
            <div class="h-100 p-4" style={{float: "right", width: "35%", textAlign: "left"}}>
              <div class="d-inline-flex border border-dark rounded-pill px-3 py-1 ms-1 me-2 mb-2">Concert</div>
              <h3>2023 Noname World Tour in Seoul</h3>
              <div class="progress mt-3" role="progressbar" aria-label="Basic example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar" style={{width: "12%"}}></div>
              </div>
              <div class="mt-2" style={{textAlign: "left"}}>
                <b>Current Funding</b> 0 USDT
              </div>
              <div class="mt-1" style={{textAlign: "left"}}>
                <b>Target Funding Cap</b> 1000000 USDT
              </div>
              <div class="mt-4" style={{textAlign: "right"}}>
                <button type="button" class="btn btn-outline-primary px-5" onClick={() => navigate("/detail/1")}>Detail</button> 
              </div>
            </div>
          </div>
        </div>
      </>
  );
}