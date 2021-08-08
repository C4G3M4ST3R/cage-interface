const Utils = {
  formatAmount: amount =>
    Number(amount).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 6,
    }),
  thousandsFormatter: num =>
    !num
      ? 0
      : Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + 'k'
      : Math.sign(num) * Math.abs(num),
  async copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(text);

      this.showSuccess('Copied to clipboard!');
    } catch (err) {
      this.showError('This action could not be completed!');
    }
  },

  scrollTo(hash) {
    const elem = document.querySelector(hash);
    let offset = 50;
    window.scroll({
      top: elem.offsetTop - offset,
      left: 0,
      behavior: 'smooth',
    });
  },
};

export default Utils;
