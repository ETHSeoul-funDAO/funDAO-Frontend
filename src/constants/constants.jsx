// Aurora
export const AURORA_PARAM = [{
    "chainId": "0x4e454152", // 1313161554 in decimal
     // testnet alternative: "chainId": "0x4e454153", // 1313161555 in decimal	
    "chainName": "Aurora",
    "rpcUrls": [
        "https://mainnet.aurora.dev" // testnet alternative: "https://testnet.aurora.dev"
    ],
    "nativeCurrency": {
        "name": "Ether",
        "symbol": "ETH",
        "decimals": 18
    },
    "blockExplorerUrls": [
        // not yet available
    ]
}];

export const CHAINIDS_DEC = {
    polygon: 137,
    gnosisTestnet_Chiado: 10200,
    auroraTestent: 1313161555,

}
export const PARAMS = {
    polygon: [{
        chainName: 'Polygon Mainnet',
        chainId: "0x" + CHAINIDS_DEC.polygon.toString(16),
        nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
        rpcUrls: ['https://polygon-rpc.com/']
    }],
    gnosisTestnet_Chiado: [{
        chainName: 'gnosis Chiado testnet',
        chainId: "0x" + CHAINIDS_DEC.gnosisTestnet_Chiado.toString(16),
        nativeCurrency: { name: 'XDAI', decimals: 18, symbol: 'XDAI' },
        rpcUrls: ['https://rpc.chiadochain.net']
    }],
    auroraTestent: [{
        chainName: 'Aurora Testent',
        chainId: "0x" + CHAINIDS_DEC.auroraTestent.toString(16),
        nativeCurrency: { name: 'Ether', decimals: 18, symbol: 'ETH' },
        rpcUrls: ['https://aurora-testnet.rpc.thirdweb.com']
    }]
}