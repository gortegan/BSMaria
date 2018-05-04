import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .round1{
      background: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url("../../assets/images/historia.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .round2{
      background-image: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url("../../assets/images/activitats.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .round3{
      background-image: linear-gradient(rgba(0, 0, 0, .2), rgba(0, 0, 0, .2)), url("../../assets/images/dolors.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .round1:hover{
      background-image: linear-gradient(-90deg, rgb(243, 144, 62, .7), rgb(166, 32, 106, .7)), url("../../assets/images/historia.png");
    }
    .round2:hover{
      background-image: linear-gradient(-90deg, rgb(243, 144, 62, .7), rgb(166, 32, 106, .7)), url("../../assets/images/activitats.png");
    }
    .round3:hover{
      background-image: linear-gradient(-90deg, rgb(243, 144, 62, .7), rgb(166, 32, 106, .7)), url("../../assets/images/dolors.png");
    }
    .divider-div{
      height: 350px;
      background-image: url("../../../assets/images/parallax.png");
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .play{
      width: 200px;
      padding: 80px 0px 80px 0px;
      cursor: pointer;
    }
    .video-div{
      background-image: url("../../../assets/images/frame.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
