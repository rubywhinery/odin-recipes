const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  let nextConfig;
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    nextConfig = {
      reactStrictMode: true,
      env: {
        PREFIX: ''
      }
    };
  } else {
    const url = "/odin-recipes";
    nextConfig = {
      reactStrictMode: true,
      basePath: `${url}`,
      assetPrefix: `${url}/`,
      env: {
        PREFIX: `${url}`
      }
    };
  }

  return nextConfig;
}