import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";

import { Button } from 'bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    const [account, setAccount] = useState("");
    const [displayAccount, setDisplayAccount] = useState("");
    const circleStyle = "d-inline-flex bg-dark border border-white-50 text-white-50 rounded-2 mx-2 py-1";

    const changeNetwork = async () => {
        if (window.ethereum) {
          try {
            await window.ethereum.enable();
            window.ethereum._handleChainChanged({
              chainId: 0x1,
              networkVersion: 1,
            });
          } catch (error) {
            console.error(error);
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
                                    Change Network
                                    </a>
                                    <ul class="dropdown-menu">
                                        <li><a class="dropdown-item" href="#">Aurora</a></li>
                                        <li><a class="dropdown-item" href="#">ETH</a></li>
                                        <li><a class="dropdown-item" href="#">what?</a></li>
                                    </ul>
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
