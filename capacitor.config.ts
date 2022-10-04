import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nizam.materialui',
  appName: 'Material Task',
  webDir: 'dist/material-ui',
  bundledWebRuntime: false,
  /* server: {
    url: 'http://192.168.1.4:4200', // local ip for live reload
    cleartext: true
  } */
};

export default config;
