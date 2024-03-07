import { primeNumber } from './primeNumber';

describe('primeNumber.ts tests',() => {
    it('return true if number is prime', () => {
        const result = primeNumber(11);
        expect(result).toBe(true);
    });
    it('return false if number is not prime', () => {
        const result = primeNumber(14);
        expect(result).toBe(false);
    })
})
