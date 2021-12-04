let button = document.getElementsByTagName("button");
let giris = document.getElementsByClassName("giris")[0];
let hesapla = document.getElementById("hesapla");
let clean = document.getElementsByClassName("clean")[0];
for (var i=0; i<16; i++)
{
  if (i!=12 && i!=14) 
  {
    button[i].addEventListener("click", yazdir);
  }
}
function yazdir() 
{
  giris.value=giris.value+this.value;
}
hesapla.addEventListener("click", hesap);
function hesap() 
{
  giris.value=eval(giris.value);
}
clean.addEventListener("click", temiz);
function temiz() 
{
  giris.value = "";
}
