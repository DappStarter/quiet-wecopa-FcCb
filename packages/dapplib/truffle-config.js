require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'imitate prize flock tribe student razor misery unlock gentle light army gather'; 
let testAccounts = [
"0x1c7f875e2eaca7efa9d2179203ff9f9fb34c78774aaa376a2e84478d159fc09f",
"0xa76558d66f3856540105d86d5d92b20f36004017175b6c5915b16da9629211f9",
"0x6eb6a530fb300bb822020eaa109e37b666b3ce23d26b3bc8d85a8dd68197addd",
"0xbf2aa33e63cb01c84b2311cd839787f1414aaed3e0c690ee2d33d3b50600c75a",
"0x0795343fe83f77f56c1af2ecfddca6ec285b0828cb1544a4101cd3067191262d",
"0x9dd30e13a5eddfcb6e94ff8f39ed052a02ca69effdfc0ea2062b7e9ed02423b0",
"0x97450ed6bafcd9494a86022fa3bf6d2c9da027190443706d45d68bc5ce737218",
"0x8c0d84c828e06d08504576eaca4fe94bc2438a8d303d5bf35803d5b7201959fe",
"0xdc231e3a1de64da502749c32df42a3c671c9fab2ff53645471a2d9bc14b47393",
"0x8d6faf801469f10c9b78a07141ca9598a098004933c4a4efac284f4f7ff53285"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


