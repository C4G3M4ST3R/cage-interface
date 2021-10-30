import AnySwap from '~/web3/AnySwap';

export default function ({ app: { $axios } }, inject) {
  // Create a custom axios instance
  const api = $axios.create({
    headers: {
      common: {
        Accept: 'text/plain, */*',
      },
    },
  });

  // Set baseURL to something different
  api.setBaseURL('https://bridgeapi.anyswap.exchange/v2');

  const anyswap = new AnySwap(api);

  // Inject to context as $anyswap
  inject('anyswap', anyswap);
}
