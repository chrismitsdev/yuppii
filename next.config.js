const createNextIntlPlugin = require('next-intl/plugin')
const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {}
// const nextConfig = {
//   experimental: {
//     staleTimes: {
//       dynamic: 0
//     }
//   }
// }

module.exports = withNextIntl(nextConfig)