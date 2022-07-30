import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nizam.materialui',
  appName: 'material-ui',
  webDir: 'dist/material-ui',
  bundledWebRuntime: false,
  server: {
    url: 'http://192.168.1.10:4200',
    cleartext: true
  }
};

export default config;
