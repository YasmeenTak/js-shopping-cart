const { default: axios } = require('axios');

class Cards {
  #baseUrl = 'https://fakestoreapi.com/products';

  async list() {
    return await axios.get(this.#baseUrl);
  }

  async show(id) {
    return await axios.get(`${this.#baseUrl}/${id}`);
  }

  async create(data) {
    return await axios.post(`${this.#baseUrl}`, data);
  }

  async update(id, data) {
    return await axios.put(`${this.#baseUrl}/${id}`, data);
  }

  async delete(id) {
    return await axios.delete(`${this.#baseUrl}/${id}`);
  }
}

module.exports = new Cards();
