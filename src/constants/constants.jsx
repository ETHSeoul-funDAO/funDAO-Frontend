
export const CHAINIDS_DEC = {
    polygon: 137,
    gnosis_testnet: 10200,
    aurora_testnet: 1313161555,
}
export const PARAMS = {
    polygon: [{
        chainName: 'Polygon Mainnet',
        chainId: "0x" + CHAINIDS_DEC.polygon.toString(16),
        nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
        rpcUrls: ['https://polygon-rpc.com/']
    }],
    gnosis_testent: [{
        chainName: 'gnosis Chiado testnet',
        chainId: "0x" + CHAINIDS_DEC.gnosis_testnet.toString(16),
        nativeCurrency: { name: 'XDAI', decimals: 18, symbol: 'XDAI' },
        rpcUrls: ['https://rpc.chiadochain.net']
    }],
    aurora_testent: [{
        chainName: 'Aurora Testent',
        chainId: "0x" + CHAINIDS_DEC.aurora_testnet.toString(16),
        nativeCurrency: { name: 'Ether', decimals: 18, symbol: 'ETH' },
        rpcUrls: ['https://aurora-testnet.rpc.thirdweb.com']
    }]
}

export const BASETOKEN = {
    gnosis_testnet: "0x6914899ba042a8c46e898a17993fbe4b9441183d",
    aurora_testnet: "0x",
}

export const CONTRACT_ADDRESS = {
    gnosis_testnet: {
        vaultFactory: "0x7680cd3f1b9b74dfdc4fb4b973290c7a26a0fbb3",
        vault: "0x"
    },
    aurora_testnet: {
        vaultFactory: "0x",
        vault: "0x"
    }
}
