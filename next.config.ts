import {NextConfig} from 'next'
import createNextIntlPlugin from 'next-intl/plugin'

const nextConfig: NextConfig = {}
const withNextIntl = createNextIntlPlugin()

export default withNextIntl(nextConfig)

// const createNextIntlPlugin = require('next-intl/plugin')
// const withNextIntl = createNextIntlPlugin()

// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = withNextIntl(nextConfig)
