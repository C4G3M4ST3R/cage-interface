export default function ({ $axios }, inject) {
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

  // Inject to context as $api
  inject('anyswap', api);
}
