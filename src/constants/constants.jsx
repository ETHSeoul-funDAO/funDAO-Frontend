
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

export const BASETOKEN = {
    gnosis_USDT: "0x6914899ba042a8c46e898a17993fbe4b9441183d",
    gnosis_USDC: "0x6914899ba042a8c46e898a17993fbe4b9441183d",
}
