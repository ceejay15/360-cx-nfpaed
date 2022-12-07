import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  VERSION,
  ViewChild
} from '@angular/core';
import * as PAN from 'panolens';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  name = 'Angular ' + VERSION.major;
  @ViewChild('PanoViewer') $el: ElementRef<HTMLElement>;
  viewer!: any;
  ngOnInit() {}
  ngAfterViewInit() {
    this.createViewer();
    // const viewer = new Viewer({
    //   container: this.$el.nativeElement,
    //   panorama:
    //     'https://photo-sphere-viewer-data.netlify.app/assets/sphere.jpg',
    //   loadingImg:
    //     'https://photo-sphere-viewer.js.org/assets/photosphere-logo.gif',
    //   defaultLat: 0.3,
    //   touchmoveTwoFingers: true,
    //   captureCursor: true,
    //   mousewheelCtrlKey: true,
    //   // mousewheelCtrlKey : false
    //   navbar: []
    // });
  }

  createViewer() {
    const panorama = new PAN.ImagePanorama(
      'https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/tunnel.jpg'
    );
    const viewer = new PAN.Viewer({
      container: this.$el.nativeElement
    });
    viewer.add(panorama);
    console.log(viewer);
  }
}
