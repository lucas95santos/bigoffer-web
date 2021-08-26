/* eslint-disable no-console */
const storagePrefix = '@big_offer';

class Storage {
  static setItem(key, value, storageOn = 'local') {
    try {
      let valueToStorage = value;

      if (typeof value === 'object') {
        valueToStorage = JSON.stringify(value);
      }

      if (storageOn === 'local') {
        localStorage.setItem(`${storagePrefix}-${key}`, valueToStorage);
      } else {
        sessionStorage.setItem(`${storagePrefix}-${key}`, valueToStorage);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  static getItem(key, retrieveFrom = 'local') {
    try {
      let item = null;

      if (retrieveFrom === 'local') {
        item = localStorage.getItem(`${storagePrefix}-${key}`);
      } else {
        item = sessionStorage.getItem(`${storagePrefix}-${key}`);
      }

      return JSON.parse(item);
    } catch (error) {
      console.error(error.message);
      return null;
    }
  }

  static removeItem(key, deleteFrom = 'local') {
    try {
      if (deleteFrom === 'local') {
        localStorage.removeItem(`${storagePrefix}-${key}`);
      } else {
        sessionStorage.removeItem(`${storagePrefix}-${key}`);
      }
    } catch (error) {
      console.error(error.message);
    }
  }
}

export { Storage };
