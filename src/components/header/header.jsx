import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import {  CHAINIDS_DEC, PARAMS } from "../../constants/constants";

import Modal from 'react-modal';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    const [account, setAccount] = useState("");
    const [displayAccount, setDisplayAccount] = useState("");
    const [displayNetwork, setDisplayNetwork] = useState("");
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const circleStyle = "d-inline-flex bg-dark border border-white-50 text-white-50 rounded-2 mx-2 py-1";
    const modalStyle = {
        content: {
          justifyContent: "center",
          background: "black",
          overflow: "auto",
          top: "30vh",
          left: "35vw",
          right: "35vw",
          bottom: "48vh",
          WebkitOverflowScrolling: "touch",
          borderRadius: "14px",
          outline: "none",
          zIndex: 10,
        },
      };
    
    useEffect(() => {
        connectToMetamask();
    },[]);

    useEffect(() => {

    }, [displayNetwork]);

    const handleNetworkSwitch = async (networkName, displayName) => {
        const parameter = PARAMS[networkName];
        const networkId = CHAINIDS_DEC[networkName];

        if (window.ethereum) {
            try {
                await window.ethereum.request({
                    method: 'wallet_switchEthereumChain',
                    params: [{ chainId: "0x" + networkId.toString(16) }]
                });
                setDisplayNetwork(displayName);
            } catch (error) {

                if (error.code === 4902) {
                    await window.ethereum.request({
                        method: 'wallet_addEthereumChain',
                        params: parameter
                    });
                }
                else if (error.code === 4001) {}
            }
        }
      };
    
    const connectToMetamask = async() =>  {
        if(window.ethereum){
            try {
                const accounts = await window.ethereum.request({
                    method: "eth_requestAccounts",
                });
                console.log(accounts)    
                setAccount(accounts); 
                let shorten = accounts.toString().substr(0, 6) + "..." + accounts.toString().substr(38, 42);
                setDisplayAccount(shorten);  
            } catch (error) {
                console.log(error)
            }
        }
    }
  
    return (
        <>
            <Navbar bg="dark pt-3" variant="dark">
                <Container >
                    <Navbar.Brand href="/">FunDAO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/explore">Explore</Nav.Link>
                            <Nav.Link href="/mypage">My Page</Nav.Link>
                            <Nav.Link href="/createProject">Create a Project</Nav.Link>
                        </Nav>
                        {                            
                            account === "" 
                            ? <button class={circleStyle} onClick={connectToMetamask}>Connect MetaMask</button>
                            : <div>
                                <div class="dropdown">
                                    <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {displayNetwork === ""
                                        ? "Change Network"
                                        : displayNetwork
                                    }
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li onClick={() => handleNetworkSwitch("aurora_testnet", "Aurora Testnet")}><a class="dropdown-item">Aurora Testnet</a></li>
                                        <li onClick={() => handleNetworkSwitch("polygon", "Polygon Mainnet")}><a class="dropdown-item">Polygon Mainnet</a></li>
                                        <li onClick={() => handleNetworkSwitch("gnosis_testnet", "Gnosis Chiado testnet")}><a class="dropdown-item">Gnosis Chiado testnet</a></li>
                                    </ul>
                                    <button type="button" class={circleStyle} onClick={()=> setModalIsOpen(true)} style={{'background-color': '#3771e6'}}>Go KYC</button>
                                        <Modal  ariaHideApp={false} style={modalStyle} isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                                            <div class="text-white">
                                                <div>KYC with</div>
                                                <button type="button" class="btn btn-primary mt-4 px-4">World Coin</button>
                                                <button type="button" class="btn btn-primary mt-4 px-4">funDAO KYC</button>
                                            </div>
                                        </Modal>
                                    <button class={circleStyle}>{displayAccount}</button>

                                </div>
                            </div>
                        }
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


export default Header;
