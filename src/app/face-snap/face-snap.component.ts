import { Component, Input, OnInit,  } from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!:FaceSnap;
  // title!:string;
  // description!:string;
  // createdDate!:Date;
  // snaps!:number;
  // imageUrl!:string;
  isSnapped!:boolean;
  buttonName!: string;
  
  constructor(private faceSnapService:FaceSnapsService,
              private router:Router){

  }
  ngOnInit(): void {
    // this.title ="Archibald";

    // this.description='Mon meilleur ami depuis tout petit';
    // this.createdDate=new Date();
    // this.snaps = 6 ;
    this.buttonName="Oh Snaps";
    this.isSnapped=false;
   // this.imageUrl='https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'

  }
  OnViewFaceSnap(){
    this.router.navigateByUrl(`faceSnaps/${this.faceSnap.id}`)
  }
  onAddSnap(){
    if(this.isSnapped==false){
      this.faceSnapService.snapFaceById(this.faceSnap.id,'snap');
      this.isSnapped=true;
      this.buttonName="Oops, un Snap!"
      
    }else{
      this.isSnapped=false;
      this.faceSnapService.snapFaceById(this.faceSnap.id,'unsnap')
      this.buttonName="Oh Snaps";
    }
  }
}
