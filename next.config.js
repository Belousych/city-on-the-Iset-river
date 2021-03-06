const SERVER_URL = process.env.SERVER_URL || "https://iset-city-admin.herokuapp.com";

module.exports = {
  reactStrictMode: true,

  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: "/admin/",
        destination: `${SERVER_URL}/admin`,
      },
    ];
  },

  experimental: {
    scrollRestoration: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["res.cloudinary.com"],
  },
  publicRuntimeConfig: {
    SERVER_URL,
  },
};
