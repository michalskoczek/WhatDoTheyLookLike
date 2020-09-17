function showLoading(loader) {
  loader.classList.add('loader--visible');
}

function hideLoading(loader) {
  loader.classList.remove('loader--visible')
}

export {
  showLoading,
  hideLoading
};