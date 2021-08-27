/* eslint-disable no-console */
import { Storage } from './Storage';
// http
import { Request } from '../http';

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

  static async signIn({ email, password }) {
    try {
      // SignIn fake
      if (!String(email).trim() || !String(password).trim()) {
        return new Promise((resolve) => resolve(null));
      }

      const response = await Request.getData('/users');

      if (response.status !== 200)
        return new Promise((resolve) => resolve(null));

      const { data: users } = response;
      const [currentUser] = users.filter(
        (user) => user.email === email && user.password === password,
      );

      if (!currentUser) return new Promise((resolve) => resolve(null));

      return new Promise((resolve) => resolve(currentUser));
    } catch (err) {
      console.error(err);
      return new Promise((resolve) => resolve(null));
    }
  }

  static async signOut() {
    return new Promise((resolve) =>
      resolve(Storage.removeItem('authenticated_user')),
    );
  }
}

export { Authentication };
