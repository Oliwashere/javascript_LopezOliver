let request = "https://randomuser.me/api/"

fetch(request).then((Response)  => {
    return Response.json();
}).then((data) => {
    let a = document.getElementById("name");
    a.innerHTML = JSON.stringify(data.results[0].name.first + " " + data.results[0].name.last);
    let b = document.getElementById("email");
    b.innerHTML = JSON.stringify(data.results[0].email);
    let c = document.getElementById("date");
    c.innerHTML = JSON.stringify(data.results[0].dob.date);
    let d = document.getElementById("address");
    d.innerHTML = JSON.stringify(data.results[0].location.street.number + " " + data.results[0].location.street.name);
    let e = document.getElementById("phone");
    e.innerHTML = JSON.stringify(data.results[0].phone);
    let f = document.getElementById("password");
    f.innerHTML = JSON.stringify(data.results[0].login.password);
    let g = document.getElementById("pfp");
    g.innerHTML = JSON.stringify(data.results[0].picture.medium);
})  