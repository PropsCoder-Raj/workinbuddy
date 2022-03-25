import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.anamk.workinbuddy',
  appName: 'WorkinBuddy',
  webDir: 'www',
  bundledWebRuntime: false,
  plugins: {
    GoogleAuth: {
      scopes: ['profile', 'email'],
      serverClientId: '1032809104603-r6rs3bilu4fc1mbfumkmk660bmhq5c92.apps.googleusercontent.com',
      forceCodeForRefreshToken: true,
    },
    PushNotifications: {
      presentationOptions: ["badge", "sound", "alert"],
    },
  },
};

export default config;
