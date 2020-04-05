import { VuexModule, Module, Mutation } from 'vuex-module-decorators';
import { Product } from '@/types';

@Module({ namespaced: true, name: 'products' })
export default class Products extends VuexModule {
  public products: Product[] = [];

  @Mutation
  public add(product: Product): void {
    this.products = [...this.products, product];
  }

  @Mutation
  public removeById(productId: string): void {
    this.products = this.products.filter((product: Product) => product.id !== productId);
  }

  @Mutation
  public update(product: Product): void {
    const productIndex = this.products.findIndex((p: Product) => p.id === product.id);
    if (productIndex) {
      this.products = [...this.products.slice(0, productIndex), product, ...this.products.slice(productIndex + 1)];
    }
  }
}
