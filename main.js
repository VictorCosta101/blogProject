
let postagens = [{titulo: "victor's hobbies", post:"play chess"}];


function newPost()
{
    
    var dict ={};
    var titulo = ( document.getElementById("xa").value);
    var post = (document.getElementById("xb").value);

    dict.titulo =titulo;
    dict.post = post;
    
    postagens = JSON.parse(localStorage['postagens']);
    console.log(dict.titulo);
    console.log(dict.post);
    
    
    postagens.push(dict);
    

    var JSONReadyUsers = JSON.stringify(postagens);
    localStorage.setItem("postagens", JSONReadyUsers);

    

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
        }
        console.log(postagens.length);
}
function abaSobre()
{
    window.open("sobre.html");
}


