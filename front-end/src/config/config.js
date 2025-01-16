const config = {
  CDN_URL: 'https://sarah-genge-films-pull-zone.b-cdn.net/',
  getAssetUrl: (path) => `${config.CDN_URL}/${path.replace(/^\//, '')}`
};