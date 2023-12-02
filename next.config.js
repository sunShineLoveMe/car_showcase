/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['cdn.imagin.studio']
    },
    /**ignore the build error */
    typescript: {
        ignoreBuildErrors: true
    }    
}

module.exports = nextConfig
