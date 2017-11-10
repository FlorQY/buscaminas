var board=document.querySelector(".board-js");

var matrixOrigin =[[1,1,1,""],
                   [1,BOMB,1,""],
                   [1,1,2,1],
                   ["","",1,BOMB]];

board.addEventListener('click', displayCell);

function displayCell(event){
  if(event.target.matches('td')){
      var value=getCell(event);

      event.target.textContent=value;
  }
}

function getCell(event) {
   var row =parseInt(event.target.parentElement.dataSet.row);
   var colum=parseInt(event.target.parentElement.colum);

  return matrixOrigin[row-1][colum -1];


}
