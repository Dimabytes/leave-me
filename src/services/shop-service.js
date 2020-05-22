export default class ShopService {

  _apiBase = 'https://majeste.pythonanywhere.com/api/v1';

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

  getProduct = async (slug) => {
    return await this.getResource(`/products/${slug}/`)
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

  checkProductQuantity = async (id, quantity, size_id) => {
    return await this.getResource("/products/info/check_quantity/", {
      "headers": {
        "accept": "application/json",
        "content-type": "application/json",
      },
      body: JSON.stringify({id, quantity, size: size_id}),
      method: "POST",
    });
  }

}
