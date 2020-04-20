export default class ShopService {

  _apiBase = 'https://majeste.pythonanywhere.com/api/v1';

  getResource = async (url) => {
    const res = await fetch(`${this._apiBase}${url}`);

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

  addOrder = async (data) => {
    return await this.getResource(`/orders/`, {
      method: "POST",
      data
    })
  }

}
