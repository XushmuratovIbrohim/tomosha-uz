/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { 
    remotePatterns: [
      {
        protocol: "https",
        hostname: "image.tmdb.org",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "media.thenerdstash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "gauokzjbwdzovotccymx.supabase.co",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "movieservice.mymovies.dk",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "viasat-small.cdnvideo.ru",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "fonoteka.top",
        pathname: "**",
      },
    ],
  }
};

export default nextConfig;
