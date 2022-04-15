const onResponce = (data) =>
  data.ok ? data.json() : Promise.reject(`Error: ${data}`);

class Api {
  constructor({ baseUrl, token }) {
    this._token = token;
    this._baseUrl = baseUrl;
  }

  getAllProducts() {
    return fetch(`${this._baseUrl}/posts`, {
      headers: {
        authorization: this._token,
      },
    }).then(onResponce);
  }

  deletePost(id) {
    return fetch(`${this._baseUrl}/posts/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(onResponce);
  }

  createPost(form) {
    return fetch(`${this._baseUrl}/posts`, {
      method: "POST",
    
      headers: {
        'Content-Type': 'application/json',
        authorization: this._token,
      },
      body: JSON.stringify({...form})
    }).then(onResponce);
  }

  addLike(id) {
    return fetch(`${this._baseUrl}/posts/likes/${id}`, {
      method: "PUT",
      headers: {
        authorization: this._token,
      },
    }).then(onResponce);
  }

  removeLike(id) {
    return fetch(`${this._baseUrl}/posts/likes/${id}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(onResponce);
  }

  getProducts(id) {
    return fetch(`${this._baseUrl}/products/${id}`, {
      headers: {
        authorization: this._token,
      },
    }).then(onResponce);
  }

  getSearchProducts(search) {
    return fetch(`${this._baseUrl}/products/search?query=${search}`, {
      headers: {
        authorization: this._token,
      },
    }).then(onResponce);
  }

  changeProductLike(isLike, id) {
    return fetch(`${this._baseUrl}/products/likes/${id}`, {
      method: isLike ? "PUT" : "DELETE",
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
    }).then(onResponce);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        authorization: this._token,
      },
    }).then(onResponce);
  }

  updateUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
      body: JSON.stringify({ name, about }),
    }).then(onResponce);
  }
}

const config = {
  baseUrl: "https://api.react-learning.ru",
  token:
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYzMiLCJpYXQiOjE2NDcwMTM4ODcsImV4cCI6MTY3ODU0OTg4N30.n-251CNaYWFy4kPd-Qv6vlgDKM9kvnUVNlmkzwpyEeM",
};

const api = new Api(config);

export default api;
