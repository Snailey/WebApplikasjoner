//  Oppgave 5
//  JS Cardio (kun bruk av JavaScript)
//
//  Lage en index.html
//  Lage en script.js fil
//  Peke til script.js filen fra index.html
//  Lage et main HTML element
//  Legge den til body
//  Lage en paragraph
//  Legge til "Jeg trener på JavaScript" i en paragraf
//  Gi denne en klasse
//  Legge den til main elementet
//  Lage en select box
//  Populere selectboksen basert på et objekt
//  I main sentrere selectboksen og sette maksbredde til 500px
//  Lage to knapper (test og reset)
//  Legge disse til etter selectboksen
//  Lage en "click" eventlistener på knappene
//  Klikk på test knappen skal skrive ut teksten i paragrafen. Utskriften skal være reversert og første bokstav er fjernet i hvert ord. (Enten som ny <p> eller i den "gamle" <p>)
//  Lage en ul med 4 listeelementer
//  Legge til en deleteknappe til hvert listeelement
//  Legge til eventlistener for å fjerne et og et element med klikk på delete
//  Klikk på reset for å få tilbake alle listeelementene



//main
var main = document.createElement('main');
document.querySelector('body').appendChild(main);

//paragraph
var p = document.createElement('p');
var text = document.createTextNode('Jeg trener på JavaScript');
p.id = "p";
p.appendChild(text);
p.classList.add('paragraph');
document.querySelector('main').appendChild(p);

//Selectbox
var myParent = document.body;

var array = [
    {
    title: 'The lord of the rings',
    description: 'The Lord of the Rings trilogy is a genuine masterpiece. The most widely read and influential fantasy epic of all time, it is also quite simply one of the most memorable and beloved tales ever told',
    author: 'J. R. R. Tolkien',
              },
    {
    title: 'Moby Dick',
    description: 'First published in 1851, Melvilles masterpiece is, in Elizabeth Hardwicks words, "the greatest novel in American literature." The saga of Captain Ahab and his monomaniacal pursuit of the white whale remains a peerless adventure story but one full of mythic grandeur, poetic majesty, and symbolic power. Filtered through the consciousness of the novels narrator, Ishmael, Moby-Dick draws us into a universe full of fascinating characters and stories, from the noble cannibal Queequeg to the natural history of whales, while reaching existential depths that excite debate and contemplation to this day.',
    author: 'Herman Melville',
              },
    {
    title: ' Gullivers Travels',
    description: 'From the preeminent prose satirist in the English language, a great classic recounting the four remarkable journeys of ships surgeon Lemuel Gulliver. For children it remains an enchanting fantasy; for adults, a witty parody of political life in Swifts time and a scathing send-up of manners and morals in 18th-century England.',
    author: 'Jonathan Swift',
              },
]

//lager en div å legge selectbox i pga sentrering
var div = document.createElement('div');
div.id = "div";
document.querySelector('main').appendChild(div);

var selectList = document.createElement("select");
selectList.id = "selectBox";
document.querySelector('div').appendChild(selectList);

for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.value = array[i].title;
    option.text = array[i].title;
    selectList.appendChild(option);
}

//sentrering og maxbredde
var selectBox = document.querySelector('select');
selectBox.style.margin = ('0 auto');
selectBox.style.maxWidth = ('500px');
document.querySelector('div').style.textAlign = "center";

//Knapper
var btntest = document.createElement('button');
btntest.id = "test";
var btntestText = document.createTextNode('Test');
btntest.appendChild(btntestText);
document.querySelector('div').appendChild(btntest);
document.getElementById("test").addEventListener("click", Test);

var btnreset = document.createElement('button');
btnreset.id = "reset";
var btnresetText = document.createTextNode('Reset');
btnreset.appendChild(btnresetText);
document.querySelector('div').appendChild(btnreset);
document.getElementById("reset").addEventListener("click", Reset);


function Test(){
    
    var word = document.getElementById('p').innerText; 
    var word_array = word.split(' '); 
    var p = '';  

    for(var i = word_array.length - 1; i>=0; i--){
            p += word_array[i].substring(1) + " "; 
    }
    
    var text = document.createTextNode(p);  
    var pa = document.createElement('p')
    pa.classList.add('remove');
    pa.appendChild(text);
    document.querySelector('div').appendChild(pa)
}


function Reset(){
//paragraph
    var elements = document.getElementsByClassName('remove');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }    
//fjerner alle listeelement
    var elements = document.getElementsByClassName('removeList');
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
//lager 4 nye liste element
    MakeList();    
}


//Liste lager 4 listeelementer med delete knapp
function MakeList() {
    
    var ul = document.createElement('ul');
    for (var i = 0; i < 4; i++){
        var li = document.createElement('li');
        var delete_btn = document.createElement("button");
        li.classList.add('removeList');
            
        delete_btn.classList.add("btnDelete");
        delete_btn.innerHTML = "Delete"; 
        delete_btn.addEventListener('click', delList); 

        var text = document.createTextNode(i+1 + '   ');
        li.appendChild(text);
        li.appendChild(delete_btn);
        ul.appendChild(li);
      }
    document.querySelector('main').appendChild(ul);
    var listElements = document.querySelectorAll('li');
 }

    
function delList(){
        this.parentNode.remove();
}

//Lager liste med 4 elementer ved oppstart
MakeList();
