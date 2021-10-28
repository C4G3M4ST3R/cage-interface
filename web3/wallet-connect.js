import WalletConnect from "@walletconnect/client";
import QRCodeModal from "@walletconnect/qrcode-modal";

const networks = {
  1: "Ethereum Main Network (Mainnet)",
  3: `Ropsten Test Network`,
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  8545: "Ganache",
};

class WalletConnectService {
  constructor() {
    const connector = new WalletConnect({
      bridge: "https://bridge.walletconnect.org", // Required
      qrcodeModal: QRCodeModal,
    });

    this.connector = connector;
  }

  async init() {
    const { connector } = this;

    // check if already connected
    if (!connector.connected) {
      // create new session
      await connector.createSession();
    }

    await this.subscribeToEvents(connector);
  }

  async subscribeToEvents(connector) {
    try {
      if (!connector) return;

      connector.on("session_update", async (error, payload) => {
        if (error) {
          throw error;
        }

        this.onConnect(payload);
      });
    } catch (e) {
      console.log({ e });
    }

    connector.on("connect", (error, payload) => {
      console.log(`connector.on("connect")`);
      console.log({ payload });

      if (error) {
        throw error;
      }

      this.onConnect(payload);
    });

    connector.on("disconnect", (error, payload) => {
      try {
        if (error) {
          throw error;
        }

        // logout
        this.killSession();
      } catch (e) {
        console.log({ e });
      }
    });

    if (connector.connected) {
      const { chainId, accounts, peerMeta, peerId } = connector;
      const address = accounts[0];

      return {
        address,
        wallet: peerMeta.name,
        peerId,
        network: networks[chainId],
        chainId,
      };
    }
  }

  killSession() {
    const { connector } = this;

    // logout
    if (connector) {
      connector.killSession();
    }
  }

  async onConnect(payload) {
    const { chainId, accounts, peerMeta, peerId } = payload.params[0];
    const address = accounts[0];

    return {
      address,
      wallet: peerMeta.name,
      peerId,
      network: networks[chainId],
      chainId,
    };
  }
}

export default WalletConnectService;
