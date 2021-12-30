import Web3Service from '../web3/Web3Service';
import chains from '../web3/chains.json';

export default {
  data() {
    return {
      chains,
    };
  },
  methods: {
    validateNumbers: value => /^\d+$/.test(value),
    numberWithCommas: x => x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','),
    removeCommas: amount => amount.replace(/,/g, ''),
    formatName: (name, symbol) =>
      symbol === 'BSC' ? 'BSC' : name.split(' ')[0],
    selectNetwork(network) {
      if (this.user.loggedIn) {
        const hexCode = Web3Service.convertStrToHex(network.chainId);
        network.chainId = hexCode;
        this.switchNetwork(network);
        return;
      }

      alert('Please connect to your Metamask wallet before switching!');
    },
    async switchNetwork(params) {
      const vm = this;

      function updateNetwork() {
        vm.$store.commit('set', {
          selectedNetwork: params,
        });
      }

      if (window.ethereum) {
        try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: params.chainId }],
          });

          updateNetwork();
        } catch (error) {
          // This error code indicates that the chain has not been added to MetaMask
          // if it is not, then install it into the user MetaMask
          if (error.code === 4902) {
            try {
              await window.ethereum.request({
                method: 'wallet_addEthereumChain',
                params: [params],
              });

              updateNetwork();
            } catch (addError) {
              console.error(addError);
              const { message } = addError;

              if (message.includes('pending')) {
                alert(
                  'Click on your Metamask extension icon and complete the pending transaction',
                );
              }
            }
          }
          console.error(error);
        }
      } else {
        // if no window.ethereum then MetaMask is not installed
        alert(
          'MetaMask is not installed. Please consider installing it: https://metamask.io/download.html',
        );
      }
    },
  },
};
