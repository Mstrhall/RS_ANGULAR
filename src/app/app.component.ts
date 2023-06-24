import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "./models/face-snap.models";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements  OnInit{
  TabFaceSnap!:FaceSnap[];
  mySnap!:FaceSnap;
  mySecondeSnap!: FaceSnap;
  mYthreeSnap!:FaceSnap;

  ngOnInit(){
    this.TabFaceSnap=[{
      title: 'Laumond',
      description:'belle photo',
      createDate:new Date(),
      like: 6,
      imageUrl: "https://media.istockphoto.com/id/1139921372/fr/photo/appeler-la-paire-de-kingp%C3%AAcheurs-communs.webp?s=2048x2048&w=is&k=20&c=8MnyjmF8t8J2IRvwIMuiZtf-6Ywqdpjofv62FCDorIM=",
      location:'paris',
    },
      {
        title:'Lajou',
        description: 'quelle Photo',
        createDate:new Date(),
        like:120,
        imageUrl:"https://media.istockphoto.com/id/1049028724/fr/photo/sourire-de-la-grenouille-aux-yeux-rouges.webp?s=2048x2048&w=is&k=20&c=xtuahpgm8iGkfNXVebyL9wW8seyLPqlwtwpGzF0h24I=",
        location:'larochelle'
      },
    {
      title: 'Chaize',
        description: 'amazing picture',
      createDate:new Date(),
      like:1900,
      imageUrl: "https://media.istockphoto.com/id/1297011499/fr/photo/verticale-dun-fermier-m%C3%A2le-restant-sur-sa-ferme-laiti%C3%A8re.webp?s=2048x2048&w=is&k=20&c=FBOrmn3MN9oRitk3xDGEExW2v3FBJ7_N07fHANfeB6s="
    }]


  }


}


