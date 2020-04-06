import { VuexModule, Module, Mutation } from 'vuex-module-decorators';
import { Product, ProductByIdGetter } from '@/types';
import ClientStorageService from '@/services/ClientStorageService.ts';

@Module({ namespaced: true, name: 'products' })
export default class Products extends VuexModule {
  public products: Product[] = [];
  private clientStorageService: ClientStorageService = new ClientStorageService(localStorage);

  get getProductById(): ProductByIdGetter {
    return (id: string) => {
      return this.products.find((product: Product) => product.id === id);
    };
  }

  @Mutation
  public add(product: Product): void {
    this.products = [...this.products, product];
    this.clientStorageService.setProducts(this.products);
  }

  @Mutation
  public removeById(productId: string): void {
    this.products = this.products.filter((product: Product) => product.id !== productId);
    this.clientStorageService.setProducts(this.products);
  }

  @Mutation
  public update(product: Product): void {
    const productIndex = this.products.findIndex((p: Product) => p.id === product.id);
    if (productIndex > -1) {
      this.products = [...this.products.slice(0, productIndex), product, ...this.products.slice(productIndex + 1)];
      this.clientStorageService.setProducts(this.products);
    }
  }

  @Mutation
  public setFromStorage(): void {
    const savedProducts: Product[] = this.clientStorageService.getProducts();
    this.products = savedProducts;
  }
}
