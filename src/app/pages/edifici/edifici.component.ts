import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edifici',
  templateUrl: './edifici.component.html',
  styles: [`
    body{
      background: white;
    }
    #home{
      display: -moz-flex;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      -moz-flex-direction: column;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -moz-justify-content: center;
      -webkit-justify-content: center;
      -ms-justify-content: center;
      justify-content: center;
      cursor: default;
      height: 65vh;
      overflow: hidden;
      position: relative;
      text-align: center;
      background-image: url("../../../assets/images/edifici_home.png");
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    .divider{
      display: -moz-flex;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      -moz-flex-direction: column;
      -webkit-flex-direction: column;
      -ms-flex-direction: column;
      flex-direction: column;
      -moz-justify-content: center;
      -webkit-justify-content: center;
      -ms-justify-content: center;
      justify-content: center;
      cursor: default;
      height: 300px;
      overflow: hidden;
      position: relative;
      text-align: center;
      background-image: url("../../../assets/images/edifici_end.png");
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
    #main h2{
      margin: 0px 0px 50px 0px;
    }
  `]
})
export class EdificiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
