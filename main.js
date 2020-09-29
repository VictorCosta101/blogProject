
let postagens = [{titulo: "victor's hobbies",data:"Mon Sep 28 2020", post:"play chess"}];
var data = new Date();

function newPost()
{
    
    var dict ={};
    var titulo = ( document.getElementById("xa").value);
    var post = (document.getElementById("xb").value);
    var dia = data.toDateString();
    

    dict.titulo =titulo;
    dict.data = dia;
    dict.post = post;

    try{
        postagens = JSON.parse(localStorage['postagens'])
    }
    catch(erro)
    {
        postagens = [{titulo: "victor's hobbies",data:"Mon Sep 28 2020", post:"play chess"}];
    }
    
   
       
   /* postagens = JSON.parse(localStorage['postagens'])*/
    
    console.log(dict.titulo);
    console.log(dict.post);
    
    
    postagens.push(dict);
    
    
    var JSONReadyUsers = JSON.stringify(postagens);
    localStorage.setItem("postagens", JSONReadyUsers);
    load();
    

}
function load()
{
     postagens = JSON.parse(localStorage['postagens'])
     var tam = postagens.length;
     console.log(tam);
     var a; 
    for(var i = tam ; i >=0 ; i--){
         a = String (tam-i);
        document.getElementById("Titulo"+a).innerHTML=postagens[i-1].titulo;
        document.getElementById("post"+a).innerHTML=postagens[i-1].post;
        document.getElementById("data"+a).innerHTML=postagens[i-1].data;
        }
        console.log(postagens.length);
}

function loadB()
{
    postagens = JSON.parse(localStorage['postagens'])
    var tam = postagens.length;
    console.log(tam);
    var a; 
   for(var i = tam ; i >=0 ; i--){
        a = String (tam-i);
       document.getElementById("Titulo"+a).innerHTML=postagens[i-1].titulo;
       
       }
    document.getElementById("Ax0").style.visibility = 'hidden';
    /*
    for(var j = (7-postagens.length); i <=7; i++)
    {
        document.getElementById("button0").disabled=true;
    }*/
}
function excluir(a)
{
    postagens = JSON.parse(localStorage['postagens'])
    var tam = postagens.length;

    postagens.splice((tam-a-1), 1);

    var JSONReadyUsers = JSON.stringify(postagens);
    localStorage.setItem("postagens", JSONReadyUsers);
    location.reload();
    return false;

}

function abaSobre()
{
    window.open("sobre.html");
}


