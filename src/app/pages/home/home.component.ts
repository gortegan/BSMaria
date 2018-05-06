import { Component, OnInit } from '@angular/core';
declare function scroll();
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    #round1{
      background: url("../../assets/images/historia.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    #round2{
      background-image: url("../../assets/images/activitats.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    #round3{
      background-image: url("../../assets/images/dolors.png");
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    #round1:hover{
      background-image: url("../../assets/images/historia_filter.png");
    }
    #round2:hover{
      background-image: url("../../assets/images/activitats_filter.png");
    }
    #round3:hover{
      background-image: url("../../assets/images/dolors_filter.png");
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
    .modal {
      top: 35px !important;
    }

    .modal-body {
        padding: 0 !important;
        height: 330px;
    }

    .modal-dialog {
        max-width: 560px !important;
        margin: 1.75rem auto;
    }
  `]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    scroll();
  }
}
