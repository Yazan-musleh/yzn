import { Component } from '@angular/core';
import { delay } from 'rxjs';

declare var anime: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngAfterViewInit(): void {

    let textWrapper = document.querySelector('.c1');
    if (textWrapper?.innerHTML && textWrapper.textContent != null) {
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='el' style='display:inline-block;'>$&</span>");
    }
    delay(1500)
    anime.timeline({ loop: false })
      .add({
        targets: '.c1 .el',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el:number, i:number) => 100 * i
      }).add({
        targets: '.c1',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 100
      });
  }
}
