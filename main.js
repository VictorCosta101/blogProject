// lista que armazena as publicações do blog 

let postagens = [{titulo: "victor's hobbies",data:"Mon Sep 28 2020", post:"play chess"}];

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
        postagens = [{titulo: "victor's hobbies",data:"Mon Sep 28 2020", post:"play chess"}];
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
     postagens = JSON.parse(localStorage['postagens'])// recebe os valores armazenados no localStorage
     var tam = postagens.length;
     
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

// funcao excluir eh chamada por um botao e exclui a publicao pelo indice a

function excluir(a)
{
    postagens = JSON.parse(localStorage['postagens']) // recebe os valores armazenados no localStorage
    var tam = postagens.length;

    postagens.splice((tam-a-1), 1); // retira o post da lista(vetor) postagens

    var JSONReadyUsers = JSON.stringify(postagens); // lista ==> string
    localStorage.setItem("postagens", JSONReadyUsers);// armazena a nova lista no localStorage
    location.reload();// atualiza a pagina
    return false;

}

function abaSobre()
{
    window.open("sobre.html");
}


