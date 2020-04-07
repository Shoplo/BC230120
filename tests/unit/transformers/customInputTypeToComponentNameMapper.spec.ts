import customInputTypeToComponentNameMapper from '@/transformers/customInputTypeToComponentNameMapper.ts';
import { CustomInputType } from '@/types';

describe('customInputTypeToComponentNameMapper', () => {
  it('returns hidden input for HIDDEN input type', () => {
    const customInputType = CustomInputType.HIDDEN;
    const expectedResult = 'VHiddenInput';

    expect(customInputTypeToComponentNameMapper(customInputType)).toMatch(expectedResult);
  });
  it('returns text input for TEXT input type', () => {
    const customInputType = CustomInputType.TEXT;
    const expectedResult = 'VTextInput';

    expect(customInputTypeToComponentNameMapper(customInputType)).toMatch(expectedResult);
  });
  it('returns textarea input for TEXTAREA input type', () => {
    const customInputType = CustomInputType.TEXTAREA;
    const expectedResult = 'VTextareaInput';

    expect(customInputTypeToComponentNameMapper(customInputType)).toMatch(expectedResult);
  });
  it('returns price input for PRICE input type', () => {
    const customInputType = CustomInputType.PRICE;
    const expectedResult = 'VPriceInput';

    expect(customInputTypeToComponentNameMapper(customInputType)).toMatch(expectedResult);
  });
  it('returns select input for SELECT input type', () => {
    const customInputType = CustomInputType.SELECT;
    const expectedResult = 'VSingleSelectInput';

    expect(customInputTypeToComponentNameMapper(customInputType)).toMatch(expectedResult);
  });
});

