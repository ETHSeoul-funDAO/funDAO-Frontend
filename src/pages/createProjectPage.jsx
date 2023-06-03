import React from "react";
import { useState, useEffect, useCallback } from "react";
import { LangEn, ethers } from "ethers";
import Modal from 'react-modal';

import { BASETOKEN, CHAINIDS_DEC, PARAMS, CONTRACT_ADDRESS} from "../constants/constants";
import ValutFactory_ABI from '../abis/vaultFactory_abi.json';

import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Loading from "../components/spinner/loading";

export default function CreateProjectPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(false)

  const [pName, setPName] = useState("");
  const [pDesc, setPDesc] = useState("");
  const [baseToken, setBaseToken] = useState("");
  const [tokenSymbol, setTokenSymbol] = useState("");
  const [account, setAccount] = useState("");
  const [network, setNetwork] = useState("");

  const modalStyle = {
    content: {
      justifyContent: "center",
      background: "black",
      overflow: "auto",
      top: "30vh",
      left: "35vw",
      right: "35vw",
      bottom: "30vh",
      WebkitOverflowScrolling: "touch",
      borderRadius: "14px",
      outline: "none",
      zIndex: 10,
    },
  };

  // const USDTContract = new ethers.Contract("0xdAC17F958D2ee523a2206206994597C13D831ec7", ValutFactory_ABI, signer)
  useEffect( () => {
    const getAccount = async() => {
      let accounts;
      if(window.ethereum){
        try {
            accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccount(accounts[0]);
        } catch (error) {
            console.log(error)
        }
      } else{ 
        console.log("errorororo");
        alert("need to sign in"); 
      }
    }
    getAccount();
  })
  useEffect(() => {

  }, [loading])
  
  const handleComfirm = async () => {
    const now = new Date();
    const endTimestamp = Math.floor(now.getTime() / 1000);
    const parameter = PARAMS[network];
    const networkId = CHAINIDS_DEC[network];
    const VaultFacotryContractAddress = CONTRACT_ADDRESS[network].vaultFactory;
    const tokenAddress = BASETOKEN[network];
    console.log(VaultFacotryContractAddress);
    console.log(networkId);
    if (window.ethereum) {
          await window.ethereum.request({
              method: 'wallet_switchEthereumChain',
              params: [{ chainId: "0x" + networkId.toString(16) }]
          });
    }else{
      alert("install metamask");
      setModalIsOpen(false);
      return;
    }

    // const provider = new ethers.getDefaultProvider('https://rpc.chiadochain.net');
    // const provider = new ethers.getDefaultProvider('https://aurora-testnet.rpc.thirdweb.com');
    // const signer = new ethers.JsonRpcSigner();
    // const provider = new ethers.JsonRpcProvider('https://rpc.chiado.gnosis.gateway.fm');
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();

    const VaultFactory_Contract = await new ethers.Contract(VaultFacotryContractAddress, ValutFactory_ABI, signer)
    const a = await VaultFactory_Contract.raiseFund(
      account,
      pName,
      tokenSymbol,
      tokenAddress,
      tokenAddress,
      endTimestamp + 31536000
    );
    await a.wait();

    console.log(a);
    setLoading(true);

    setModalIsOpen(false);
    setLoading(false);
    alert("success");

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
                <div class="mt-3 col">
                  <label for="network" class="form-label">Network</label>
                    <select class="form-select" aria-label="fundingToken" onChange={(e) => setNetwork(e.target.value)}> 
                      <option selected>Select Network</option>
                      <option value="aurora_testnet">Aurora testnet</option>
                      <option value="gnosis_testnet">Gnosis testnet</option>
                    </select>
                  </div>
              </div>
              
              <div class="col"></div>
            </div>

          </div>
          
          <button type="button" class="btn btn-primary mt-4 px-4 py-3" onClick={()=> setModalIsOpen(true)} style={{'background-color': '#3771e6'}}>Deploy a Project Vault</button>
          <Modal  ariaHideApp={false} style={modalStyle} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
            <div class="text-white">
              <div class="">
                Project Owner : {account}
              </div>
              <div class="">
                Token Name : {pName}
              </div>
              <div>
                Token Symbol : {tokenSymbol}
              </div>
              <div>
                Funding Token : {BASETOKEN.gnosis_USDC}
              </div>
              <div>
                Reward Token : {BASETOKEN.gnosis_USDC}
              </div>
              <button type="button" class="btn btn-primary mt-4 px-4" onClick={handleComfirm}>comfirm</button>
            </div>
          </Modal>
          

          <Footer></Footer>
      </div>
  );
}
