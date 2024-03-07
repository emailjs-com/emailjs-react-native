import { it, describe, expect, jest } from '@jest/globals';

import emailjs from './index';

// @ts-expect-error: use global fetch mock
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    status: 200,
    text: () => Promise.resolve('OK'),
  }),
);

describe('send method', () => {
  it('should call the init and the send method successfully', async () => {
    emailjs.init({
      publicKey: 'C2JWGTestKeySomething',
    });

    try {
      const result = await emailjs.send('default_service', 'my_test_template');
      expect(result).toEqual({ status: 200, text: 'OK' });
    } catch (error) {
      expect(error).toBeUndefined();
    }
  });

  it('should call the init and the send method successfully as promise', () => {
    emailjs.init({
      publicKey: 'C2JWGTestKeySomething',
    });

    return emailjs.send('default_service', 'my_test_template').then(
      (result) => {
        expect(result).toEqual({ status: 200, text: 'OK' });
      },
      (error) => {
        expect(error).toBeUndefined();
      },
    );
  });
});

describe('send-form method', () => {
  it('should call the init and the sendForm method successfully', async () => {
    const form: HTMLFormElement = document.createElement('form');

    emailjs.init({
      publicKey: 'C2JWGTestKeySomething',
    });

    try {
      const result = await emailjs.sendForm('default_service', 'my_test_template', form);
      expect(result).toEqual({ status: 200, text: 'OK' });
    } catch (error) {
      expect(error).toBeUndefined();
    }
  });

  it('should call the init and the sendForm method successfully as promise', () => {
    const form: HTMLFormElement = document.createElement('form');

    emailjs.init({
      publicKey: 'C2JWGTestKeySomething',
    });

    return emailjs.sendForm('default_service', 'my_test_template', form).then(
      (result) => {
        expect(result).toEqual({ status: 200, text: 'OK' });
      },
      (error) => {
        expect(error).toBeUndefined();
      },
    );
  });
});
