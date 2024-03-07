import { priceFormat } from './priceFormat';

describe('priceFormat.ts tests', () => {
    it('return price with two decimals and SEK as currency', () => {
        const result = priceFormat(12.346, "SEK");
        expect(result).toMatch('12.35 SEK');
    });
    it('return correct currency', () => {
        const result = priceFormat(12.346, "NOK");
        expect(result).toMatch('12.35 NOK');
    });
    it('return correct currency', () => {
        const result = priceFormat(10.346, 'USD %PRICE%');
        expect(result).toMatch('USD 10.35');
    });
    it('return correct currency', () => {
        const result = priceFormat(14, '$%PRICE%');
        expect(result).toMatch('$14.00');
    });
    it('return correct currency', () => {
        const result = priceFormat(10.346, 'USD %PRICE%');
        expect(result).toMatch('USD 10.35');
    })
})
