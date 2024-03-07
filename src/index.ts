import {
  type StorageProvider,
  init as emailjsInit,
  send as emailjsSend,
  sendForm as emailjsSendForm,
} from '@emailjs/browser';
import type { Options } from '@emailjs/browser/es/types/Options';
import { EmailJSResponseStatus } from '@emailjs/browser/es/models/EmailJSResponseStatus';
import { createReactNativeStorage } from './utils/createReactNativeStorage/createReactNativeStorage';
import { createLocation } from './utils/createLocation/createLocation';

/**
 * EmailJS global SDK config
 * @param {object} options - the EmailJS global SDK config options
 * @param {string} origin - the non-default EmailJS origin
 */
const init = (options: Options, origin?: string) => {
  return emailjsInit(
    {
      storageProvider: createReactNativeStorage(),
      ...options,
    },
    origin,
  );
};

/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {object} templateParams - the template params, what will be set to the EmailJS template
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
const send = async (
  serviceID: string,
  templateID: string,
  templateParams?: Record<string, unknown>,
  options?: Options,
): Promise<EmailJSResponseStatus> => {
  createLocation();

  return emailjsSend(serviceID, templateID, templateParams, {
    storageProvider: createReactNativeStorage(),
    ...options,
  });
};

/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {object} options - the EmailJS SDK config options
 * @returns {Promise<EmailJSResponseStatus>}
 */
const sendForm = async (
  serviceID: string,
  templateID: string,
  form: string | HTMLFormElement,
  options?: Options,
): Promise<EmailJSResponseStatus> => {
  createLocation();

  return emailjsSendForm(serviceID, templateID, form, {
    storageProvider: createReactNativeStorage(),
    ...options,
  });
};

export type { StorageProvider };

export { init, send, sendForm, EmailJSResponseStatus };

export default {
  init,
  send,
  sendForm,
  EmailJSResponseStatus,
};
