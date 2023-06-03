import React from "react";
import Header from "../components/header/header";
import { useState, useEffect, useCallback } from "react";

export default function CreateProjectPage() {

  const [pName, setPName] = useState("");
  const [pDesc, setPDesc] = useState("");

  return (
      <div class="bg-dark">
        <Header></Header>
        <div>
          <div class="row text-white mt-5 pt-3">
              <div>
                  CREATE A PROJECT
              </div>
          </div>
          <div class="row text-white text-start">
            <div class="col"></div>
            <div class="col-5">
              <div class=" mt-3 pt-3">
                <div class=" fs-2 ">
                    Project Details
                </div>
                </div>
                <div class="mt-2">
                  <div class="">
                    Provide the necessary information about your project. You have the flexibility to modify the project details even after deployment, although keep in mind that there will be gas costs associated with these transactions.
                  </div>
                </div>

                <form>
                  <div class="my-3 mt-5">
                    <label for="projectname" class="form-label">*Project name</label>
                    <input type="text" class="form-control" id="p-name" onChange={e => setPName(e.target.value)} aria-describedby="project name"/>
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                  </div>
                  <div class="my-3">
                    <label for="projectdesc" class="form-label">*Project name</label>
                    <textarea style={{size: "100", maxlength: "80"}} rows="5" class="form-control" id="p-desc" onChange={e => setPDesc(e.target.value)} aria-describedby="project desc"/>
                  </div>


                </form>
              </div>
              <div class="col"></div>
            </div>

          </div>
      </div>
  );
}
