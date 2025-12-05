import { AfterViewInit, Component, ElementRef, ViewChild, ViewEncapsulation } from '@angular/core';
import lottie, { AnimationItem } from 'lottie-web';

@Component({
  selector: 'ui-dna-loader',
  imports: [],
  templateUrl: './ui-dna-loader.html',
  styleUrl: './ui-dna-loader.scss',
  encapsulation: ViewEncapsulation.None,
})
export class UiDnaLoader implements AfterViewInit {
  @ViewChild('estimate', { static: true })
  estimateRef!: ElementRef<HTMLDivElement>;

  private anim?: AnimationItem;

  ngAfterViewInit(): void {
    // Just in case, destroy any previous animation on this container
    if (this.anim) {
      this.anim.destroy();
      this.anim = undefined;
    }

    this.anim = lottie.loadAnimation({
      container: this.estimateRef.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      rendererSettings: {
        progressiveLoad: true,
        preserveAspectRatio: 'xMidYMid meet',
      },
      path: 'https://labs.nearpod.com/bodymovin/demo/al_boardman/articulation/estimate.json',
    });

    this.anim.setSubframe(false);
  }

  ngOnDestroy(): void {
    // Important for HMR / route changes / component removal
    if (this.anim) {
      this.anim.destroy();
      this.anim = undefined;
    }
  }
}
