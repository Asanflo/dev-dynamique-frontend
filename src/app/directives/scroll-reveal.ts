import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollReveal {
  @Input() revealDelay: string = '0ms';
  @Input() revealDirection: 'up' | 'right' | 'fade' | 'left' = 'up';

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const element = this.el.nativeElement;

    const setHidden = () => {
      element.style.opacity = '0';
      switch (this.revealDirection) {
        case 'up':    element.style.transform = 'translateY(40px)'; break;
        case 'left':  element.style.transform = 'translateX(-40px)'; break;
        case 'right': element.style.transform = 'translateX(40px)'; break;
        case 'fade':  element.style.transform = 'none'; break;
      }
    };

    const setVisible = () => {
      element.style.opacity = '1';
      element.style.transform = 'translate(0)';
    };

    element.style.transition = `opacity 0.7s ease ${this.revealDelay}, transform 0.7s ease ${this.revealDelay}`;
    setHidden(); // État initial

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible();
        } else {
          setHidden();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(element);
  }
}
