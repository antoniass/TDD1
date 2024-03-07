import { emailValidate } from './emailValidate';

describe('emailValidate.ts tests', () => {
    it('validate "jonatan@gmail.com" as an email', () => {
        const actualResult = emailValidate("jonatan@gmail.com");
        const expectedResult = true;
        expect(actualResult).toBe(expectedResult);
    })
    it('validate "jonatan@gmail" not as an email', () => {
        const actualResult = emailValidate("jonatan@gmail");
        const expectedResult = false;
        expect(actualResult).toBe(expectedResult);
    })
    it('validate "jonatan@com" not as an email', () => {
        const actualResult = emailValidate("jonatan@com");
        const expectedResult = false;
        expect(actualResult).toBe(expectedResult);
    })
})
