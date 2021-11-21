require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom problem brown turtle chaos rare remember essay include knock brown type'; 
let testAccounts = [
"0x12afa72be89b73c413b8ad568f3323f3eb0400645260be9e7db4e23869b3cebd",
"0x5ae088797479d359dede7f1efa938222b4840a1a76a7bce94d996ce3377de906",
"0x92967fe5981eeff72a7de898ce513cff2c502df404f33f7683aa912e5fe83f79",
"0x1482a3d8f84d74d747826ef6db64b0f5c0c1fe4270deb73a2397f6613ec83f28",
"0xdbb7a1b9c4671fee25a39e71104437584e27ff2fbfecb72edcc55f930f01e434",
"0x99cc884b6f227509dc9909bea802a4cb0642b4de9c62beaee826152f88980d9b",
"0x3814709fa25c31a94364f572a18cdd62731ce0cba19e8a8e7b392226fbec203a",
"0x402741a62dcacdc4a39530da83efd5ee632e726a220bb619333e188c2e5213f5",
"0xc724f4111454d9779000776fe0efa249de808d425e08b5da4a8b6ff93ae6eb75",
"0xf5b4c44006cb4467e1f30324dc1e04b95c7d78fdcd70a88a4b769ea996ab86ec"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

