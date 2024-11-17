function checkWin(array: string[]) {
  //  8 number of combinations
  const combinations: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];

  for (let i = 0; i < 8; i++) {
    if (
      array[combinations[i][0] - 1] === array[combinations[i][1] - 1] &&
      array[combinations[i][0] - 1] === array[combinations[i][2] - 1] &&
      array[combinations[i][0] - 1] !== ""
    ) {
      // console.log("winnnnnn!!!!!!!!");
      return true;
    }
  }
  return false;
}

export default checkWin;
