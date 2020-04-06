import { Product } from '@/types';

export default class ClientStorageService {
  private productsKey: string = 'products';
  private storageHandler: Storage;

  constructor(storageHandler: Storage) {
    this.storageHandler = storageHandler;
  }

  public setProducts(products: Product[]): void {
    const productsJson = JSON.stringify(products);
    this.storageHandler.setItem(this.productsKey, productsJson);
  }

  public getProducts(): Product[] {
    const productsJson = this.storageHandler.getItem(this.productsKey);
    try {
      if (productsJson !== null) {
        return JSON.parse(productsJson);
      }
      return [];
    } catch (e) {
      return [];
    }
  }
}
