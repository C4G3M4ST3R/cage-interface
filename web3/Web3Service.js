import Web3 from 'web3';

class Web3Service {
  static convertStrToHex(str) {
    return Web3.utils.toHex(str);
  }

  static async getWalletBalance(walletAddress) {
    const web3 = new Web3(window.ethereum);
    let balance = await web3.eth.getBalance(walletAddress); //Will give value in.
    balance = web3.utils.fromWei(balance, 'ether');
    return balance;
  }
}

export default Web3Service;
