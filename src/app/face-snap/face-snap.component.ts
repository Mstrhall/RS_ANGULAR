import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../models/face-snap.models";


@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit{
  @Input()facesnap!:FaceSnap
  boutoncliked!:string;
  ngOnInit() {

 this.boutoncliked='like';
  }
  Onlike(){
    if(this.boutoncliked==='like')
    {
      this.boutoncliked='unlike';
      this.facesnap.like++;
    }
    else{
      this.boutoncliked='like';
      this.facesnap.like--;

    }

  }

  protected readonly location = location;
    protected readonly FaceSnap = FaceSnap;
}
