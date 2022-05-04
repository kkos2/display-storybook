module.exports = function override(config) {
  config.resolve.alias = {
    "remote-component.config.js": `${__dirname}/src/remote-component.config.js`,
  };

  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    http: require.resolve("stream-http"),
    https: require.resolve("https-browserify"),
  });
  config.resolve.fallback = fallback;
  return config;
};
