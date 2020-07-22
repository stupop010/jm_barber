// next.config.js

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
  env: {
    mapKey: "AIzaSyAcklHGLaqLqlu5Va7gV7VWD82YbHmZpM0",
  },
};
