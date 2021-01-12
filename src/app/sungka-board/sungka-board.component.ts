import { Component, OnInit } from '@angular/core';
import { Sungka} from '../sungka-model';
import { SungkaService } from '../service/sungka.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-sungka-board',
  templateUrl: './sungka-board.component.html',
  styleUrls: ['./sungka-board.component.css']
})
export class SungkaBoardComponent implements OnInit {

  // sungka: Sungka = {
  //   gameId: "xxx-id-1",
  //   currentPlayer: "A",
  //   pits: [
  //     {index: 1, value: 6},
  //     {index: 2, value: 6},
  //     {index: 3, value: 6},
  //     {index: 4, value: 6},
  //     {index: 5, value: 6},
  //     {index: 6, value: 6},
  //     {index: 7, value: 0},
  //     {index: 8, value: 6},
  //     {index: 9, value: 6},
  //     {index: 10, value: 6},
  //     {index: 11, value: 6},
  //     {index: 12, value: 6},
  //     {index: 13, value: 6},
  //     {index: 14, value: 0}
  //   ],
  //   winningPlayer: "null"
  // };

  sungka: Sungka;

  constructor(private api: SungkaService) { }

  ngOnInit(): void {
    this.createGame();
    console.log(this.sungka);

  }

  createGame(): void {
   this.api.initGame()
   .subscribe(sungka => this.sungka = sungka);
 }

  update(gameId, index) {
    console.log(index);
  }

}
