import { Directive, ElementRef, inject, input, OnDestroy, OnInit } from "@angular/core";
import { Subject } from "rxjs";

@Directive({
  selector: '[lib-vcu-lazy-load-video]',
  standalone: true,
})
export class VcuLazyLoadVideoDirective implements OnInit, OnDestroy {
  readonly elementRef = inject<ElementRef<HTMLVideoElement>>(ElementRef);

  rootMargin = input<string>('0px');
  root = input<Element | Document | null>(null);
  threshold = input<number | number[]>(0);

  private observer: IntersectionObserver | null = null;

  ngOnInit(): void {
    this.observe();
  }

  private observe() {
    if (!('IntersectionObserver' in window)) {
      this.load(this.elementRef.nativeElement);
      return;
    }

    const options: IntersectionObserverInit = {
      root: this.root(),
      rootMargin: this.rootMargin(),
      threshold: this.threshold(),
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {

          console.log('intersected');

          this.load(this.elementRef.nativeElement);
          this.observer?.unobserve(this.elementRef.nativeElement);
        }
      });
    }, options)

    this.observer.observe(this.elementRef.nativeElement);
  }

  private load(videoElement: HTMLVideoElement) {
    for (const source in videoElement.children) {
      if (videoElement.children.hasOwnProperty(source)) {
        const sourceElement = this.pipeSourceTag(videoElement.children[source] as HTMLElement);
        if (sourceElement) {
          sourceElement.src = sourceElement.dataset['src'] as string;
        }
      }
    }
    videoElement.load();
  }

  private pipeSourceTag(tag: HTMLElement) {
    if (typeof tag.tagName === 'string' && tag.tagName === 'SOURCE') {
      return tag as HTMLSourceElement;
    }
    return null;
  }

  ngOnDestroy(): void {
    if (this.observer) {
      this.observer.disconnect();
    }
  }
}
