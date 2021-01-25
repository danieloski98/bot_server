import { Detail } from './detail';

describe('Detail', () => {
  const detail: Detail = new Detail();

  it('should be defined', () => {
    expect(new Detail()).toBeDefined();
  });

  it('it should have an id', () => {
    expect(detail['api_key']).toBeDefined()
  })
});
