import { isLowerCase } from './isLowerCase';

describe('isLowerCase.ts tests', () => {
    it('return true if all characters is lowercase', () => {
        const result = isLowerCase('hello');
        expect(result).toBe(true);
    })
    it('return false if all characters is not lowercase', () => {
        const result = isLowerCase('Hello');
        expect(result).toBe(false);
    })
})
