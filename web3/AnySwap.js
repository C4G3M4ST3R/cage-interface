class AnySwap {
  constructor(axios) {
    this.$axios = axios;
  }

  async getBridgeInfo(chainId) {
    const res = await this.$axios.get(`/serverInfo/${chainId}`);
    console.log({ res });
  }

  async registerAccount(address, chainId, pairId) {
    const res = await this.$axios.get(
      `/register/${address}/${chainId}/${pairId}`,
    );

    return res.data.info.P2shAddress;
  }

  async getTransactionStatus(transactionId) {
    const res = await this.$axios.get(
      `/history/details?params=${transactionId}`,
    );

    return res.data.info.P2shAddress;
  }
}

export default AnySwap;
