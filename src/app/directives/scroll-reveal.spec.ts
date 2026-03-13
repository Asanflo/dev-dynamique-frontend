import { ScrollReveal } from './scroll-reveal';

describe('ScrollReveal', () => {
  it('should create an instance', () => {
    let directive: ScrollReveal;
    // @ts-ignore
    directive = new ScrollReveal();
    expect(directive).toBeTruthy();
  });
});
