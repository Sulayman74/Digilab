import { MyAgePipe } from './my-age.pipe';

describe('MyAgePipe', () => {
  it('create an instance', () => {
    const pipe = new MyAgePipe();
    expect(pipe).toBeTruthy();
  });
});
