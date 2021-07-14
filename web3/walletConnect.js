import WalletConnect from '@walletconnect/client';
import QRCodeModal from '@walletconnect/qrcode-modal';

export default {
  data: () => ({
    walletConnector: null,
    wallet: {},
  }),
  methods: {
    async connectWalletConnect() {
      this.loading = true;
      this.closeModal();

      const connector = new WalletConnect({
        bridge: 'https://bridge.walletconnect.org', // Required
        qrcodeModal: QRCodeModal,
      });

      this.walletConnector = connector;

      // check if already connected
      if (!connector.connected) {
        // create new session
        await connector.createSession();
      }

      await this.subscribeToEvents();
    },
    async subscribeToEvents() {
      try {
        const connector = this.walletConnector;

        if (!connector) return;

        connector.on('session_update', async (error, payload) => {
          if (error) {
            throw error;
          }

          this.onConnect(payload);
        });
      } catch (e) {
        console.log({ e });
      }

      connector.on('connect', (error, payload) => {
        console.log(`connector.on("connect")`);
        console.log({ payload });

        if (error) {
          throw error;
        }

        this.onConnect(payload);
      });

      connector.on('disconnect', (error, payload) => {
        try {
          if (error) {
            throw error;
          }

          // logout
          this.logout();
        } catch (e) {
          console.log({ e });
        }
      });

      if (connector.connected) {
        const { chainId, accounts, peerMeta, peerId } = connector;
        const address = accounts[0];

        this.setUser({
          ethAddress: address,
          wallet: peerMeta.name,
          network: this.networks[chainId],
          peerId,
          chainId,
        });
      }

      this.walletConnector = connector;
    },
    killSession() {
      // logout
      const connector = this.walletConnector;
      if (connector) {
        connector.killSession();
      }
      this.logout();
    },

    async onConnect(payload) {
      const { chainId, accounts, peerMeta, peerId } = payload.params[0];
      const address = accounts[0];

      this.setUser({
        ethAddress: address,
        wallet: peerMeta.name,
        network: this.networks[chainId],
        peerId,
        chainId,
      });
    },
  },
};
