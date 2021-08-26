/* eslint-disable no-console */
import { Storage } from './Storage';

class Authentication {
  static async signUp() {
    try {
      // TODO: implementar a lógica do cadastro
      return new Promise((resolve) => resolve('Cadastro realizado'));
    } catch (err) {
      console.error(err);
      return new Promise((resolve) => resolve(null));
    }
  }

  static async signIn() {
    try {
      // TODO: implementar a lógica do login
      return new Promise((resolve) => resolve('Sessão iniciada'));
    } catch (err) {
      console.error(err);
      return new Promise((resolve) => resolve(null));
    }
  }

  static async signOut() {
    return new Promise((resolve) => resolve(Storage.removeItem('user_token')));
  }
}

export { Authentication };
