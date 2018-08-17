var right = document.getElementById("right");
var baseButtonDiv = document.getElementById("base");
var exponentText = document.getElementById("exponentText");
var baseText = document.getElementById("eq");
var exponent = 3;
var base = 2;

var blockwidth = 25;

var exponentWritten = [" to the zeroth power", " to the first power", " squared", " cubed", " to the fourth power"," to the fifth power", " to the sixth power", " to the seventh power", " to the eighth power", " to the ninth power"];
var baseWritten = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];

baseButtonDiv.addEventListener('click', clicks);

function clicks(evt){
  if(evt.target.nodeName!="SPAN") return;

  if(evt.target.classList.contains("green")){ //exponent
    exponent = evt.target.innerText;
  }
  else if(evt.target.classList.contains("blue")){ //base
    base = evt.target.innerText;
  }
  update();
}

function update(){
  baseText.innerHTML = "<span class='basespan' id='baseText'>"+base+"<sup class='expspan'>2</sup></span> = " + Math.pow(base,2);

  while (right.firstChild) {
      right.removeChild(right.firstChild);
  }
  var total = base*base;
  for(var i = 0; i<base; i++){
    for(var j=0; j<base; j++){
      var blockDiv = document.createElement('div');
      blockDiv.id = 'block';
      blockDiv.className = 'block';
      blockDiv.innerText = (i*base) +j+1;
      right.appendChild(blockDiv);
      if(i==(base-1)){
        blockDiv.classList.add("block-bottom-row");
      }
    }
    blockDiv.classList.add("block-right-col");
  }

  right.style.width = base*blockwidth +"px";



}

update(); //initial call
