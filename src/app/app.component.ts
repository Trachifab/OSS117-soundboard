import { Component } from '@angular/core';
import { Sound } from './entities/Sound';
import { Collection } from './entities/Collection';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "J'aime quand ça marche." ;

  data: Sound[];

  collection: Collection = new Collection();

  constructor(private _http: Http) {
    this.collection.sounds = [];
    _http.get('./assets/sounds.json')
        .map(res => res.json())
        .subscribe(data => this.data = data,
                    err => console.log(err),
                    () => this.createCollection(this.data));

  }


  createCollection(data: Sound[]) {
    data.map((sound) => this.collection.sounds.push(new Sound(sound.id, sound.title, sound.description, sound.fileUrl)));
  }

  onClick(sound: any) {
    sound.play();
  }
}
