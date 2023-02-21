/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'pbs.twimg.com',
      'cdn.cdnlogo.com',
      'github.githubassets.com',
      'seeklogo.com',
      'img.icons8.com'
    ]
  },
  experimental: {
    appDir: true,
  }
}

module.exports = nextConfig
