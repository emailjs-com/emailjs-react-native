import AsyncStorage from '@react-native-async-storage/async-storage';
import type { StorageProvider } from '@emailjs/browser';

export const createReactNativeStorage = (): StorageProvider => {
  return {
    get: (key) => AsyncStorage.getItem(key),
    set: (key, value) => AsyncStorage.setItem(key, value),
    remove: (key) => AsyncStorage.removeItem(key),
  };
};
