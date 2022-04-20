module.exports = {
  async rewrites() {
    return [
      {
        source: 'https://anilist.co/graphiql/:path*',
        destination: 'http://localhost:3000/:path*' // Proxy to Backend
      }
    ]
  }
}