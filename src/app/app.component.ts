import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  faceSnaps!:FaceSnap[];
  // third!: FaceSnap;
  // mySnap!:FaceSnap;
  // secondSnap!:FaceSnap;
  
  ngOnInit(): void {
    this.faceSnaps=[
      new FaceSnap(1,"Moustapha","Mon meilleur ami depuis l'enfance","https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",new Date(),120,"Meouane"),
      new FaceSnap(2,"Fatou","Une amie a moi","https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg",new Date(),0,"Daya"),
      new FaceSnap(3,"Mbaye","Un ami pas comme les autres ","https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",new Date(),2),      
      
    ]
    // this.mySnap=new FaceSnap("Moustapha","Mon meilleur ami depuis l'enfance","https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",new Date(),4,"Meouane");
    // this.secondSnap = new FaceSnap("Fatou","Une amie a moi","https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",new Date(),0,"Daya")
    // this.third = new FaceSnap("Mbaye","Un ami pas comme les autres ","https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",new Date(),2)
   
    throw new Error('Method not implemented.');
  }
  
  
}
