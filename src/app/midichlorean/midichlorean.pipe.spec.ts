import { MidichloreanPipe } from './midichlorean.pipe';

describe('Midichlorean Pipe', () => {

  let sut: MidichloreanPipe;

  beforeEach(() => {
    sut = new MidichloreanPipe();
  });

  describe('transform', () => {
    it('should format 42 as 42 midichlorean when formatting with "long"', () => {
      // Act
      const actual = sut.transform(42, 'long');

      // Assert
      expect(actual).toBe('42 midichloreans');
    });

    it('should format 42 as 42 mc when formatting with "short"', () => {
      // Act
      const actual = sut.transform(42, 'short');

      // Assert
      expect(actual).toBe('42 mc');
    });

    it('should choose "short" formatting by default', () => {
      // Act
      const actual = sut.transform(42);

      // Assert
      expect(actual).toBe('42 mc');
    });
  });
});
