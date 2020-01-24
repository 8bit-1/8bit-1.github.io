console.log("hello there");
document.querySelector('#boton').addEventListener("click",function(){
  getData();
});

function getData(){
  
 // console.log("soy Datos");
  
  const xhttp = new XMLHttpRequest();

  xhttp.open('GET', 'https://8bit-1.github.io/JsonData/Data.json', true);

  xhttp.send();

  xhttp.onreadystatechange = function(){
    
    if(this.readyState == 4 && this.status == 200){

      //console.log(this.responseText);
      //console.log(JSON.parse(this.responseText));
      let datos = JSON.parse(this.responseText);

      let clases = document.querySelector('#clases')
      clases.innerHTML='';

      for(let item in datos){
          clases.innerHTML += 
          `<tr>
          <th>${item.Codigo}</th>
          <th>${item.Clase}</th>
          <th>${item.UV}</th>
          </tr>`
      }
    }
  }
}
