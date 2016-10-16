$(document).ready(function(){

var count=0;

var arr=new Array(3);
   for(i=0;i<3;i++){
      arr[i]=new Array(3);}

//To make sure every cell has different value
var arr=[["e","r","t"],["y","u","q"],["e","n","t"]];

var gameOver=false;

var checkTie=0;

var row;var col;

var winner;

var xWon=0; var oWon=0; var tie=0;

newGame();

//CELLS

   $("#c1").on('click',function(){
      if(gameOver==false && $(this).is(':empty')){
         cell(0,0,"#c1");
      }
   })

   $("#c2").on('click',function(){
      if(gameOver==false && $(this).is(':empty')){
         cell(0,1,"#c2");
      }
   })

   $("#c3").on('click',function(){
      if(gameOver==false && $(this).is(':empty')){
         cell(0,2,"#c3");
      }
   })

   $("#c4").on('click',function(){
      if(gameOver==false && $(this).is(':empty')){
         cell(1,0,"#c4");
      }
   })

   $("#c5").on('click',function(){
      if(gameOver==false && $(this).is(':empty')){
         cell(1,1,"#c5");
      }
   })

   $("#c6").on('click',function(){
      if(gameOver==false && $(this).is(':empty')){
         cell(1,2,"#c6");
      }
   })

   $("#c7").on('click',function(){
      if(gameOver==false && $(this).is(':empty')){
         cell(2,0,"#c7");
      }
   })

   $("#c8").on('click',function(){
      if(gameOver==false && $(this).is(':empty')){
         cell(2,1,"#c8");
      }
   })

   $("#c9").on('click',function(){
      if(gameOver==false && $(this).is(':empty')){
         cell(2,2,"#c9");
      }
   })

// 'CELL' function for operations of cells

   function cell(row,col,divId){
      if(count%2==0){
         $(divId).html("<p>x</p>");
         arr[row][col]="x";
      }else{
         $(divId).html("<p>o</p>");
         arr[row][col]="o";
      }
      count++;
      checkTie++;
      check();
   }

//Checking if the game is over

   function check(){

      //Checking rows
      for(i=0;i<3;i++){
         var j=0;
         if(arr[i][j]==arr[i][j+1] && arr[i][j+1]==arr[i][j+2]){
            winner=arr[i][j];
            gameOver=true;
         }
      }

      //Checking columns
      for(j=0;j<3;j++){
         var i=0;
         if(arr[i][j]==arr[i+1][j] && arr[i+1][j]==arr[i+2][j]){
            winner=arr[i][j];
            gameOver=true;
         }
      }

      //Checking diagonals
      if(arr[0][0]==arr[1][1] && arr[1][1]==arr[2][2]){
            winner=arr[1][1];
            gameOver=true;
      }else if(arr[0][2]==arr[1][1] && arr[1][1]==arr[2][0]){
            winner=arr[1][1];
            gameOver=true;
      }

      //Checking if the game is tie
      if(checkTie==9 && gameOver==false){
         winner="none;"
      }

      //Logging the result
      if(gameOver){
         if(winner=="x"){
            $(".lastWinner p").html("X won the last game!");
            xWon++;
            $("#x p").html("<span>"+xWon+"</span>");
         }else if(winner=="o"){
            $(".lastWinner p").html("O won the last game!");
            oWon++;
            $("#o p").html("<span>"+oWon+"</span>");
         }else if(winner=="none"){
            $(".lastWinner p").html("TIE!");
         }
      }
   }

   function newGame(){
      $(".cell").empty();
      gameOver=false;
      arr=[["e","r","t"],["y","u","q"],["e","n","t"]];
      count=0;
      checkTie=0;
   }

   $("button").on("click",function(){
      newGame();
   })

})
