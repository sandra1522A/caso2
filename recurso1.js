window.onload=cargarImagen;
var i=0;
var misImagenes=new Array(10);
function cargarImagen(){
     misImagenes[0]="imagenes/1.jpg";
     misImagenes[1]="imagenes/2.jpg";
     misImagenes[2]="imagenes/3.jpg";
     misImagenes[3]="imagenes/4.jpg";
     misImagenes[4]="imagenes/5.jpg";
     misImagenes[5]="imagenes/6.jpg";
     misImagenes[6]="imagenes/7.jpg";
     misImagenes[7]="imagenes/8.jpg";
     misImagenes[8]="imagenes/8.jpg";
     misImagenes[9]="imagenes/10.jpg";
     document.imgSrc.src=misImagenes[i];
}
function siguiente(){
     if(i>=9){
          i=misImagenes.length-1;
          window.alert("Ultima imagen en la galeria");
     }else{
          i++;//i=i+1
     }
     document.imgSrc.src=misImagenes[i];
}
function anterior(){
     if(i<1){
          i=0;
          window.alert("Primera imagen en la galeria");
     }else{
          i--;//i=1-1
     }
     document.imgSrc.src=misImagenes[i];
}