if ('serviceWorker' in navigator) window.addEventListener(
  'load',
  () => navigator.serviceWorker.register('./service.js')
)