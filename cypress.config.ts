import { defineConfig } from 'cypress';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  e2e: {
    chromeWebSecurity: false,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      config.env = {
        ...config.env,
        baseUrl: process.env.BASE_URL,
      };

      return config;
    },
    baseUrl: process.env.BASE_URL, 
  },
});