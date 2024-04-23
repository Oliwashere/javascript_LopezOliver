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
fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let p = document.getElementById("text4");
    console.log(data);
    p.innerHTML = JSON.stringify(data.hair_color);
})
fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let p = document.getElementById("text5");
    console.log(data);
    p.innerHTML = JSON.stringify(data.skin_color);
})
fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let p = document.getElementById("text6");
    console.log(data);
    p.innerHTML = JSON.stringify(data.eye_color);
})
fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let p = document.getElementById("text7");
    console.log(data);
    p.innerHTML = JSON.stringify(data.birth_year);
})
fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let p = document.getElementById("text8");
    console.log(data);
    p.innerHTML = JSON.stringify(data.gender);
})
fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let p = document.getElementById("text9");
    console.log(data);
    p.innerHTML = JSON.stringify(data.homeworld);
})
fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let p = document.getElementById("text10");
    console.log(data);
    p.innerHTML = JSON.stringify(data.films);
})
fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let p = document.getElementById("text11");
    console.log(data);
    p.innerHTML = JSON.stringify(data.species);
})
fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let p = document.getElementById("text12");
    console.log(data);
    p.innerHTML = JSON.stringify(data.vehicles);
})
fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let p = document.getElementById("text13");
    console.log(data);
    p.innerHTML = JSON.stringify(data.starships);
})
fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let p = document.getElementById("text14");
    console.log(data);
    p.innerHTML = JSON.stringify(data.created);
})
fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let p = document.getElementById("text15");
    console.log(data);
    p.innerHTML = JSON.stringify(data.edited);
})
fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let p = document.getElementById("text16");
    console.log(data);
    p.innerHTML = JSON.stringify(data.url);
})