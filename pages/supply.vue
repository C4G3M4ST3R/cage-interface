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
      const [{ result }, { result: burned }] = await Promise.all([
        (
          await fetch(
            'https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=0xf2ef3551c1945a7218fc4ec0a75c9ecfdf012a4f',
          )
        ).json(),
        (
          await fetch(
            `https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xf2ef3551c1945a7218fc4ec0a75c9ecfdf012a4f&address=0x000000000000000000000000000000000000dead&tag=latest&apikey=998ZUNKYQV81292JI8A4MA5B8PQEI7RX3A`,
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
