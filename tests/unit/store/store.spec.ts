import Products from '@/store/modules/products';
import { Product } from '@/types';

let store: any;

describe('Products module', () => {
  beforeEach(() => {
    // @ts-ignore - test store as simple container for functions
    store = Products;
  });

  describe('state', () => {
    it('has initial value of empty products array', () => {
      expect(store.state.products.length).toEqual(0);
    });
  });

  describe('mutations', () => {
    describe('add', () => {
      it('adds Product to state', () => {
        const productMock: Product = {
          id: 'test-product-id',
          name: 'test-product-name',
          description: 'test-product-description',
          price: 'test-product-price',
          category: 'test-product-category',
        };

        store.mutations.add(store.state, productMock);
        expect(store.state.products[0]).toMatchObject(productMock)
      });
    });

    describe('removeById', () => {
      it('removes product', () => {
        store.state.products = [
          {
            id: 'first-test-product-id',
            name: 'first-test-product-name',
            description: 'first-test-product-description',
            price: 'first-test-product-price',
            category: 'first-test-product-category',
          },
          {
            id: 'second-test-product-id',
            name: 'second-test-product-name',
            description: 'second-test-product-description',
            price: 'second-test-product-price',
            category: 'second-test-product-category',
          },
          {
            id: 'third-test-product-id',
            name: 'third-test-product-name',
            description: 'third-test-product-description',
            price: 'third-test-product-price',
            category: 'third-test-product-category',
          },
        ];

        const idToRemove = 'second-test-product-id';

        const expectedResult = [
          {
            id: 'first-test-product-id',
            name: 'first-test-product-name',
            description: 'first-test-product-description',
            price: 'first-test-product-price',
            category: 'first-test-product-category',
          },
          {
            id: 'third-test-product-id',
            name: 'third-test-product-name',
            description: 'third-test-product-description',
            price: 'third-test-product-price',
            category: 'third-test-product-category',
          },
        ];

        store.mutations.removeById(store.state, idToRemove);
        expect(store.state.products).toMatchObject(expectedResult)
      });
    });

    describe('update', () => {
      it('updates product if exists in state', () => {
        store.state.products = [
          {
            id: 'first-test-product-id',
            name: 'first-test-product-name',
            description: 'first-test-product-description',
            price: 'first-test-product-price',
            category: 'first-test-product-category',
          },
          {
            id: 'second-test-product-id',
            name: 'second-test-product-name',
            description: 'second-test-product-description',
            price: 'second-test-product-price',
            category: 'second-test-product-category',
          },
          {
            id: 'third-test-product-id',
            name: 'third-test-product-name',
            description: 'third-test-product-description',
            price: 'third-test-product-price',
            category: 'third-test-product-category',
          },
        ];

        const updatedProduct = {
          id: 'second-test-product-id',
          name: 'second-test-product-updated-name',
          description: 'second-test-product-updated-description',
          price: 'second-test-product-updated-price',
          category: 'second-test-product-category',
        };

        const expectedResult = [
          {
            id: 'first-test-product-id',
            name: 'first-test-product-name',
            description: 'first-test-product-description',
            price: 'first-test-product-price',
            category: 'first-test-product-category',
          },
          {
            id: 'second-test-product-id',
            name: 'second-test-product-updated-name',
            description: 'second-test-product-updated-description',
            price: 'second-test-product-updated-price',
            category: 'second-test-product-category',
          },
          {
            id: 'third-test-product-id',
            name: 'third-test-product-name',
            description: 'third-test-product-description',
            price: 'third-test-product-price',
            category: 'third-test-product-category',
          },
        ];

        store.mutations.update(store.state, updatedProduct);
        expect(store.state.products).toMatchObject(expectedResult)
      });
      it('does not update state if product with the same id not exist in state', () => {
        store.state.products = [
          {
            id: 'first-test-product-id',
            name: 'first-test-product-name',
            description: 'first-test-product-description',
            price: 'first-test-product-price',
            category: 'first-test-product-category',
          },
          {
            id: 'second-test-product-id',
            name: 'second-test-product-name',
            description: 'second-test-product-description',
            price: 'second-test-product-price',
            category: 'second-test-product-category',
          },
          {
            id: 'third-test-product-id',
            name: 'third-test-product-name',
            description: 'third-test-product-description',
            price: 'third-test-product-price',
            category: 'third-test-product-category',
          },
        ];

        const updatedProduct = {
          id: 'non-existing-test-product-id',
          name: 'second-test-product-updated-name',
          description: 'second-test-product-updated-description',
          price: 'second-test-product-updated-price',
          category: 'second-test-product-category',
        };

        const expectedResult = [
          {
            id: 'first-test-product-id',
            name: 'first-test-product-name',
            description: 'first-test-product-description',
            price: 'first-test-product-price',
            category: 'first-test-product-category',
          },
          {
            id: 'second-test-product-id',
            name: 'second-test-product-name',
            description: 'second-test-product-description',
            price: 'second-test-product-price',
            category: 'second-test-product-category',
          },
          {
            id: 'third-test-product-id',
            name: 'third-test-product-name',
            description: 'third-test-product-description',
            price: 'third-test-product-price',
            category: 'third-test-product-category',
          },
        ];

        store.mutations.update(store.state, updatedProduct);
        expect(store.state.products).toMatchObject(expectedResult)
      });
    });
  });
});

