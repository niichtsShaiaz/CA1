var boys = ["Peter", "lars", "Ole"];
var girls = ["Janne","hanne","Sanne"];
var sorted = false;
document.getElementById("")
function addBoy(){
    if(document.getElementById("newboy").value != ""){
    boys.push(document.getElementById("newboy").value);
    updateLists();
}
}
function removeBoy(){
    if(document.getElementById("first").checked){
        boys.shift();
    }
    if(document.getElementById("last").checked){
        boys.pop();
    }
    updateLists();
}
function addGirl() {
    if(document.getElementById("newgirl")){
    girls.push(document.getElementById("newgirl").value);
    console.log(boys);
    console.log(girls);
    
    updateLists();
}
}
function removeGirl(){
    if(document.getElementById("first").checked){
        girls.shift();
    }
    if(document.getElementById("last").checked){
        girls.pop();
    }
    updateLists();
}

function updateLists() {
    girlList = girls.map(function(name){return "<p>" + name + "</p>"}).join("");
    document.getElementById("girls").innerHTML = girlList;
    
    boyList = boys.map(function(name){return "<p>" + name + "</p>"}).join("");
    document.getElementById("boys").innerHTML = boyList;
    
    both = boys.concat(girls);
    bothList = both.map(function(name){return "<p>" + name + "</p>"}).join("");
    document.getElementById("all").innerHTML = bothList;
    
    sorted = false;
}
function firstLoad() {
    updateLists();
}

function reverseAll(){
    var bothList = boys.concat(girls).reverse();
    res = bothList.map(function(name){return "<p>" + name + "</p>"}).join("");
    document.getElementById("all").innerHTML = res;
}
function sortAll(){
    var bothList;
    if(!sorted){
        bothList = boys.concat(girls).sort(function(a, b){return a.toLowerCase().localeCompare(b.toLowerCase())});
        sorted = true;
    } else{
        bothList = boys.concat(girls).sort(function(a, b){return b.toLowerCase().localeCompare(a.toLowerCase())});
        sorted = false;
    }
    
    res = bothList.map(function(name){return "<p>" + name + "</p>"}).join("");
    document.getElementById("all").innerHTML = res;
}