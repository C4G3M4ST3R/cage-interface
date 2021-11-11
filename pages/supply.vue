<template>
  <div class="m-3">
    {{ result }}
  </div>
</template>

<script>
import bcLibrary from '../mixins/bc';
export default {
  layout: 'none',
  mixins: [bcLibrary],
  data() {
    return {
      result: '',
    };
  },
  async created() {
    try {
      const contractAddress = process.env.CONTRACT_ADDRESS;
      const apiKey = process.env.ETHERSCAN_API_KEY;
      const baseUrl = process.env.ETHERSCAN_API_URL;
      const address = '0x000000000000000000000000000000000000dead';

      const [{ result }, { result: burned }] = await Promise.all([
        (
          await fetch(
            `${baseUrl}?module=stats&action=tokensupply&contractaddress=${contractAddress}&apikey=${apiKey}`,
          )
        ).json(),
        (
          await fetch(
            `${baseUrl}?module=account&action=tokenbalance&contractaddress=${contractAddress}&address=${address}&tag=latest&apikey=${apiKey}`,
          )
        ).json(),
      ]);

      let value = this.bcsub(result, burned);

      let power = Math.pow(10, 18);
      let answer = this.bcdiv(value, power, 18);
      this.result = answer;
    } catch (e) {
      console.log({ e });
    }
  },
};
</script>

<style></style>
