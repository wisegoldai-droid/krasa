/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd6scj24zvfbbo.cloudfront.net',
      },
      {
        protocol: 'https',
        hostname: '983301db8e.clvaw-cdnwnd.com',
      },
      {
        protocol: 'https',
        hostname: '983301db8e.cbaul-cdnwnd.com',
      },
    ],
  },
}

module.exports = nextConfig
