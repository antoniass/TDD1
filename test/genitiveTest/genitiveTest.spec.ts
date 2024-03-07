import { genetiveTest } from './genitiveTest'

describe('genetiveTest.ts tests', () => {
    it('return the name in genetive', () => {
        const result = genetiveTest('Jonatan');
        expect(result).toBe('Jonatans');
        });
        it('return the name in genetive', () => {
        const result = genetiveTest('Antonia');
        expect(result).toBe('Antonias');
        });
        it('return the name in genetive', () => {
        const result = genetiveTest('Jens');
        expect(result).toBe('Jens');
        });
});
