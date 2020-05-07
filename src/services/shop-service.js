export default class ShopService {

  _apiBase = 'http://127.0.0.1:8000/api/v1';

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
    const product = await this.getResource(`/products/${id}/`)
    product.currentSize = product.sizes[0]
    return product
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
    console.log(size)
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
