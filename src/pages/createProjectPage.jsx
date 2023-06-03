import React from "react";
import Header from "../components/header/header";
import { useState, useEffect, useCallback } from "react";
import Footer from "../components/footer/footer";
import Modal from 'react-modal';
import ValutFactory_ABI from '../abis/vaultFactory_abi.json';

import { ethers } from "ethers";
import { BASETOKEN } from "../constants/constants";

export default function CreateProjectPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [pName, setPName] = useState("");
  const [pDesc, setPDesc] = useState("");
  const [baseToken, setBaseToken] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const modalStyle = {
    content: {
      justifyContent: "center",
      background: "black",
      overflow: "auto",
      top: "30vh",
      left: "38vw",
      right: "38vw",
      bottom: "30vh",
      WebkitOverflowScrolling: "touch",
      borderRadius: "14px",
      outline: "none",
      zIndex: 10,
    },
  };

  // const USDTContract = new ethers.Contract("0xdAC17F958D2ee523a2206206994597C13D831ec7", ValutFactory_ABI, signer)

  const handleComfirm = async () => {
    const now = new Date();
    const endTimestamp = Math.floor(now.getTime() / 1000);
    let accounts;

    if(window.ethereum){
      try {
          accounts = await window.ethereum.request({
              method: "eth_requestAccounts",
          });
      } catch (error) {
          console.log(error)
      }
    } else{ 
      console.log("errorororo");
      alert("need to sign in");
      
    }
    const provider = new ethers.getDefaultProvider('https://rpc.chiadochain.net');
    // const provider = new ethers.getDefaultProvider('https://aurora-testnet.rpc.thirdweb.com');
    // const signer = new ethers.JsonRpcSigner();
    
    // const signer = await provider.
    // console.log(signer);
    const VaultFactory_Contract = await new ethers.Contract("0x7680cd3f1b9b74dfdc4fb4b973290c7a26a0fbb3", ValutFactory_ABI, provider)
    const a = await VaultFactory_Contract.raiseFund(
      accounts,
      pName,
      tokenSymbol,
      BASETOKEN.gnosis_USDC,
      BASETOKEN.gnosis_USDC,
      endTimestamp + 31536000
    );
    console.log(a);
  //   function raiseFund(
  //     address _owner,
  //     string memory _tokenName, 
  //     string memory _symbol, 
  //     address _baseToken,
  //     address _rewardToken, 
  //     uint256 _fundingEnd
  // ) external returns(address) 
    // console.log(accounts);
  }
  
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
                    <label for="projectdesc" class="form-label">*Project Description</label>
                    <textarea style={{size: "100", maxlength: "80"}} rows="5" class="form-control" id="p-desc" onChange={e => setPDesc(e.target.value)} aria-describedby="project desc"/>
                  </div>
                  <div>
                    <label for="formFileLg" class="form-label">Upload Project Details in *MarkDown</label>
                    <input class="form-control form-control-lg" id="formFileLg" type="file" accept=".md"/>
                  </div>


                </form>

                <div class="row">
                  <div class="mt-3 col">
                  <label for="tokenSymbol" class="form-label">Funding Token</label>
                    <select class="form-select" aria-label="fundingToken" onChange={() => setBaseToken(1)}> 
                      <option selected>Select Funding Token</option>
                      <option value="1">USDC</option>
                      <option value="2">USDT</option>
                    </select>
                  </div>
                  <div class="my-3 col">
                    <label for="tokenSymbol" class="form-label">Token Symbol</label>
                    <input type="text" class="form-control" id="tokenSymbol" onChange={e => setTokenSymbol(e.target.value)} aria-describedby="token symbol"/>
                  </div>
                </div>
              </div>
              
              <div class="col"></div>
            </div>

          </div>
          
          <button type="button" class="btn btn-primary mt-4 px-4 py-3" onClick={()=> setModalIsOpen(true)} style={{'background-color': '#3771e6'}}>Deploy a Project Vault</button>
          <Modal  ariaHideApp={false} style={modalStyle} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <div class="text-white">
              <div class="">
                Project Owner : 0x
              </div>
              <div class="">
                Token Name : {pName}
              </div>
              <div>
                Token Symbol : {tokenSymbol}
              </div>
              <div>
                Funding Token : {baseToken}
              </div>
              <div>
                Reward Token : {baseToken}
              </div>
              <button type="button" class="btn btn-primary mt-4 px-4" onClick={handleComfirm}>comfirm</button>
            </div>
          </Modal>
          <Footer></Footer>
      </div>
  );
}
