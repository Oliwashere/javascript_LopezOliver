let request = "https://swapi.py4e.com/api/people/4/"

fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let p = document.getElementById("text");
    console.log(data);
    p.innerHTML = JSON.stringify(data.name);
})
fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let p = document.getElementById("text2");
    console.log(data);
    p.innerHTML = JSON.stringify(data.height);
})
fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let p = document.getElementById("text3");
    console.log(data);
    p.innerHTML = JSON.stringify(data.mass);
})