import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

    faceSnaps:FaceSnap[]=[
            new FaceSnap(1,"Moustapha","Mon meilleur ami depuis l'enfance","https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg",new Date(),120,"Meouane"),
            new FaceSnap(2,"Fatou","Une amie a moi","https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg",new Date(),0,"Daya"),
            new FaceSnap(3,"Mbaye","Un ami pas comme les autres ","https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg",new Date(),2),      
    ];
    getAllFaceSnap():FaceSnap[]{
      return this.faceSnaps;
    }
    getSnapBtId(faceSnapId:number):FaceSnap{
      const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id=== faceSnapId);
      if (!faceSnap) {
        throw new Error('FaceSnap not found');
      }else{
        return faceSnap;
      }
    }
    snapFaceById(faceSnapId:number ,snapType:'snap'|'unsnap'):void{
      const faceSnap = this.getSnapBtId(faceSnapId);
      snapType==='snap'?faceSnap.snaps++:faceSnap.snaps--;
      
      
    }
}