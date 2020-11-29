module.exports = {
    typescript: {
      // !! WARN !!
      // Dangerously allow production builds to successfully complete even if
      // your project has type errors.
      // !! WARN !!
      ignoreBuildErrors: true,
    },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'http://192.168.12.166:8080/:path*',
        },
      ]
    },
  }