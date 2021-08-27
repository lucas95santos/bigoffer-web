import Axios from 'axios';

const requester = Axios.create({
  baseURL: 'http://localhost:3333',
});

export class Request {
  static async getData(endPoint = '/', auth = null) {
    try {
      const response = await requester.get(
        endPoint,
        auth
          ? {
              headers: {
                Authorization: `Bearer ${auth}`,
              },
            }
          : null,
      );

      return {
        data: response.data,
        status: response.status,
      };
    } catch (err) {
      return {
        data: 'Erro ao realizar requisição',
        status: 500,
      };
    }
  }

  static async postData(endPoint = '/', data, auth = null) {
    try {
      const response = await requester.post(
        endPoint,
        data,
        auth
          ? {
              headers: {
                Authorization: `Bearer ${auth}`,
              },
            }
          : null,
      );

      return {
        data: response.data,
        status: response.status,
      };
    } catch (err) {
      return {
        data: 'Erro ao realizar requisição',
        status: 500,
      };
    }
  }
}
