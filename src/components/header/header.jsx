import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";

import { Button } from 'bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    const [account, setAccount] = useState("");
    const [displayAccount, setDisplayAccount] = useState("");
    

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
            <Navbar bg="dark" variant="dark">
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
                            ? <button onClick={connectToMetamask}>MetaMask</button>
                            : <button>{displayAccount}</button>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}


export default Header;
