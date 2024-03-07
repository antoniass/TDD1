import { createHeading } from './createHeading';

describe('createHeading.ts tests', () => {
    it(' create heading "H1" with the text "Hello"', () =>  {
        const result = createHeading(1, "Hello");
        expect(result).toContain('<h1>Hello</h1>');
    });
    it(' create heading "H2" with the text "Next Level"', () => {
        const result = createHeading(2, "Next Level");
        expect(result).toContain('<h2>Next Level</h2>');
    });
});
