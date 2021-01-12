export interface Sungka {
  gameId: string;
  currentPlayer: string;
  pits: Pit[];
  // pits: {
  //   index1: number;
  //   index2: number;
  //   index3: number;
  //   index4: number;
  //   index5: number;
  //   index6: number;
  //   index7: number;
  //   index8: number;
  //   index9: number;
  //   index10: number;
  //   index11: number;
  //   index12: number;
  //   index13: number;
  //   index14: number;
  // }
  winningPlayer: string;

}

interface  Pit {
    index: number;
    value: number;
}
