import { ethers } from "ethers";
import { useCallback } from "react";
import chainIds from "../chainList/chainIds";

const ConnectMetaMaskButton = (props) => {
  const { isConnected, connectWallet, currentBalance, walletAddress, chainId } =
    props;

    const displayWalletAddress = `${walletAddress?.substring(0,10)}...`
    const displayCurrentBalance = `${currentBalance?.toFixed(4)}`


  return (
    <>
      {isConnected ? (
        <div className="buttonContainer">
            <span className="pageButtonBold connectButton">{displayCurrentBalance} {chainIds[chainId].symbol}</span>
            <span className="pageButtonBold connectButton">{chainIds[chainId].name}</span>
            <span className="pageButtonBold connectButton">{displayWalletAddress}</span>
        </div>
      ) : (
        <div
          className="btn connectButton"
          onClick={() => connectWallet()}
        >
          Connect Wallet
        </div>
      )}
    </>
  );
};

export default ConnectButton;