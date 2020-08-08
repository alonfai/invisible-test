import { errors } from 'common';
import { parseStringInput } from './input';

describe('services.input', () => {
  describe('parseStringInput', () => {
    it('missing string', () => {
      expect(() => {
        parseStringInput('');
      }).toThrow(new errors.Input('parsing user input failed due to missing input'));
    });

    it('other than default delimeter', () => {
      const results = parseStringInput('new york; london', ';');
      expect(results.length).toBe(2);
    });

    it('standard input with several locations', () => {
      const results = parseStringInput('new york, london,paris');
      expect(results.length).toBe(3);
    });
  });
});
