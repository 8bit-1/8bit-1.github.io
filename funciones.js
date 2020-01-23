console.log("hello there");
document.querySelector('#boton').addEventListener("click",getData());

function getData(){
  
  console.log("soy Datos");
  
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'https://8bit-1.github.io/JsonData/Data.json', true);

  xhttp.send();

  xhttp.onreadystatechange = function(){
    
    if(this.readyState == 4 && this.status == 200){

      //console.log(this.responseText);
      console.log(JSON.parse(this.responseText));
      
    }

  }
}
