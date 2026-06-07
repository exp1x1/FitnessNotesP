import { Component, ElementRef, OnDestroy, ViewChild, ViewEncapsulation } from '@angular/core';
import lottie, { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'ui-dna-loader',
  imports: [LottieComponent],
  templateUrl: './ui-dna-loader.html',
  styleUrls: ['./ui-dna-loader.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UiDnaLoader implements OnDestroy {
  options: AnimationOptions = {
    path: 'https://labs.nearpod.com/bodymovin/demo/al_boardman/articulation/estimate.json',
    loop: true,
    autoplay: true,
    renderer: 'svg',
    rendererSettings: {
      progressiveLoad: true,
      preserveAspectRatio: 'xMidYMid meet',
    },
  };

  private anim?: AnimationItem;

  // Called by ngx-lottie when animation is created
  animationCreated(animationItem: AnimationItem): void {
    this.anim = animationItem;
    this.anim.setSubframe(false);
  }

  ngOnDestroy(): void {
    if (this.anim) {
      this.anim.destroy();
      this.anim = undefined;
    }
  }
}
