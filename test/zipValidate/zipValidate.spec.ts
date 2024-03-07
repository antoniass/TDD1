import { zipValidate } from './zipValidate';

describe('zipValidate.ts tests', () => {
    it('validate "12345" as a zip', () => {
        const result = zipValidate("12345");
        expect(result).toBe(true);
    });
    it('not validate "1234" as a zip', () => {
        const result = zipValidate("1234");
        expect(result).toBe(false);
    });
    it('not validate "123456" as a zip', () => {
        const result = zipValidate("123456");
        expect(result).toBe(false);
    });
    it('not validate "abcde" as a zip', () => {
        const result = zipValidate("abcde");
        expect(result).toBe(false);
    })
})
