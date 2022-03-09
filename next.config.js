/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        connect_to_db_url: process.env.CONNECT_TO_DB_URL_DEV,
      }
    }
  }

  return {
    reactStrictMode: true,
    env: {
      connect_to_db_url: process.env.CONNECT_TO_DB_URL,
    }
  }
}

