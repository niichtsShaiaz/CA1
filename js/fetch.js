document.getElementById("search").onclick = getName;
document.getElementById("searchAll").onclick = getNames;
function getName(){
    var url = "https://jsonplaceholder.typicode.com/users/";
    var resString = "<table>" +
        "<tr>" +
        "<th>Name</th>" +
        "<th>Street</th>" +
        "<th>City</th>" +
        "<th>Zipcode</th>" +
        "<th>Geo (lat, lng):</th>" +
        "</tr>";
    url += 1;
    //console.log(document.getElementById("name").value);
    fetch(url)
            .then(result => result.json())
            .then(function(data){
                //console.log(data);
                resString += "<tr>";
                resString += "<td>"+data.name+"</td>";
                resString += "<td>Street: "+data.address.street+"</td>";
                resString += "<td>City: "+data.address.city+"</td>";
                resString += "<td>Zip: "+data.address.zipcode+"</td>";
                resString += "<td>Geo (lat, lng): "+data.address.geo.lat +" " + data.address.geo.lng +"</td>";
                resString += "</tr>";
                resString += "</table>";
                document.getElementById("res").innerHTML = resString;});
            //console.log(resString);
            //document.getElementById("res").innerHTML = resString;
    
    
}

function getNames()
{
    var url = "https://jsonplaceholder.typicode.com/users/";
    var resString = "<table>" +
        "<tr>" +
        "<th>Name</th>" +
        "<th>Street</th>" +
        "<th>City</th>" +
        "<th>Zipcode</th>" +
        "<th>Geo (lat, lng):</th>" +
        "</tr>";
    //console.log(document.getElementById("name").value);
    fetch(url)
        .then(result => result.json())
.then(function(data){
    //console.log(data);
    for(var i = 0; i < data.length; i++) {
        resString += "<tr>";
        resString += "<td>" + data[i].name + "</td>";
        resString += "<td>Street: " + data[i].address.street + "</td>";
        resString += "<td>City: " + data[i].address.city + "</td>";
        resString += "<td>Zip: " + data[i].address.zipcode + "</td>";
        resString += "<td>Geo (lat, lng): " + data[i].address.geo.lat + " " + data[i].address.geo.lng + "</td>";
        resString += "</tr>";
    }
    resString += "</table>";
    document.getElementById("res").innerHTML = resString;});
}
