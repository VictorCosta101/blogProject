// lista que armazena as publicações do blog 
txtPadrao = "Sapiens <br> O Homen Que Calculava <br>A Informação  <br>A Arte da Guerra  <br> Cosmos <br> O mundo Assombrado Pelos Demônios<br> O Gene <br>O andar do Bêbado "
let postagens = [{titulo: "Lista de livros Favoritos",data:"Mon Sep 28 2020", post: txtPadrao}];

var gate = false;
// objeto  para  verificacao de datas 

var data = new Date();


// funcao que publica novas publicacoes no blog
// eh chamada por um botao 

function newPost()
{
    
    var dict ={}; // objeto generico que aramazenara as publicacoes 
    var titulo = ( document.getElementById("xa").value); // titulo do post
    var post = (document.getElementById("xb").value); // conteudo do post
    var dia = data.toDateString(); // data da publicação 
    
    // aramzena as variaveis no objeto generico 
    dict.titulo =titulo; 
    dict.data = dia;
    dict.post = post;

    // verifica se ja ha publicacoes no site 
    // como o blog eh um simulacao, ele usa o localStorage para simular o armazenamento das publicacoes 

    try{
        postagens = JSON.parse(localStorage['postagens'])
    }
    catch(erro)
    {
        postagens = [{titulo: "Lista de livros Favoritos",data:"Mon Sep 28 2020", post: txtPadrao}];
    }
    
       
   // objeto generico com a publicacao é adicionado a lista(vetor) postagens
    
    postagens.push(dict);
    
    // Como o localStorage só aceita strings, por segurança toda a lista(vetor) eh transformada em string 
    var JSONReadyUsers = JSON.stringify(postagens);
    localStorage.setItem("postagens", JSONReadyUsers);// armazenamento no localStorage
    load();
    

}

// funcao load carrega as publicacoes assim que a pagina principal é atualizada

function load()
{
    try{
        postagens = JSON.parse(localStorage['postagens'])
    }
    catch(erro)
    {
        postagens = [{titulo: "Lista de livros Favoritos",data:"Mon Sep 28 2020", post: txtPadrao}];
    }
    
    //  postagens = JSON.parse(localStorage['postagens'])// recebe os valores armazenados no localStorage
     var tam = postagens.length;
     console.log(tam);
     var a; 

     //imprime na pagina html as publicacoes 

    for(var i = tam ; i >=0 ; i--){
         a = String (tam-i);
        document.getElementById("Titulo"+a).innerHTML=postagens[i-1].titulo;
        document.getElementById("post"+a).innerHTML=postagens[i-1].post;
        document.getElementById("data"+a).innerHTML=postagens[i-1].data;
        }
        
}

// funcao loadB eh similar a load, somente para a aba de lista de publicacoes/ excluir 

function loadB()
{
    if(gate)
    {
        postagens=[];
    }
    else{
    try{
        postagens = JSON.parse(localStorage['postagens'])
    }
    catch(erro)
    {
        postagens = [{titulo: "Lista de livros Favoritos",data:"Mon Sep 28 2020", post: txtPadrao}];
    }}
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

// funcao excluir eh chamada por um botao e exclui a publicao pelo indice a

function excluir(a)
{
    try{
        postagens = JSON.parse(localStorage['postagens'])
    }
    catch(erro)
    {
        postagens = [{titulo: "Lista de livros Favoritos",data:"Mon Sep 28 2020", post: txtPadrao}];
    }
    var tam = postagens.length;
    if(tam == 1 )
    {
        gate = true;
        console.log(gate);
    }
    if(a<=tam){
    postagens.splice((tam-a-1), 1); // retira o post da lista(vetor) postagens
    }
    var JSONReadyUsers = JSON.stringify(postagens); // lista ==> string
    localStorage.setItem("postagens", JSONReadyUsers);// armazena a nova lista no localStorage
    location.reload();// atualiza a pagina
    return false;

}

function abaSobre()
{
    window.open("sobre.html");
}


