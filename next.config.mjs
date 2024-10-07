/** @type {import('next').NextConfig} */
const nextConfig = {
     env: {
          NEXT_APPWRITE_KEY: process.env.NEXT_APPWRITE_KEY,
          NEXT_PUBLIC_APPWRITE_ENDPOINT: process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT,
          NEXT_PUBLIC_APPWRITE_PROJECT: process.env.NEXT_PUBLIC_APPWRITE_PROJECT,
          NEXT_PUBLIC_DATABASE_ID: process.env.NEXT_PUBLIC_DATABASE_ID,
     }
};

export default nextConfig;
