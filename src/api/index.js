// This file contains api calls

const API_DOMAIN = 'https://jsonplaceholder.typicode.com';
class API {
  async getUsers() {
    try {
      let response = await fetch(`${API_DOMAIN}/users`);
      let results = await response.json();
      console.log(response);
      return results;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
  
}

export default new API();
