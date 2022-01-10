import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  @Input() faceSnap!:FaceSnap;
  // title!:string;
  // description!:string;
  // createdDate!:Date;
  // snaps!:number;
  // imageUrl!:string;
  isSnapped!:boolean;
  buttonName!: string;
  
  constructor(private faceSnapService:FaceSnapsService,
              private route:ActivatedRoute){

  }
  ngOnInit(): void {
    // this.title ="Archibald";

    // this.description='Mon meilleur ami depuis tout petit';
    // this.createdDate=new Date();
    // this.snaps = 6 ;
    this.buttonName="Oh Snaps";
    this.isSnapped=false;
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getSnapBtId(faceSnapId);
   // this.imageUrl='https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'

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
