export default class ShopService {

  _apiBase = 'http://majeste.pythonanywhere.com//api/v1';

  getResource = async (url, opts) => {
    const res = await fetch(`${this._apiBase}${url}`, opts);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}` +
        `, received ${res.status}`)
    }
    return await res.json();
  };

  getAllProducts = async () => {
    return await this.getResource(`/products/`)
  };

  getProduct = async (id) => {
    return await this.getResource(`/products/${id}/`)
  };

  addOrder = async (body) => {
    return await this.getResource("/orders/", {
      "headers": {
        "accept": "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify(body),
      method: "POST",
    });
}

  checkProductQuantity = async (id, quantity, size) => {
    return await this.getResource("/products/check_quantity/", {
      "headers": {
        "accept": "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({id, quantity, size}),
      method: "POST",
    });
  }

}
