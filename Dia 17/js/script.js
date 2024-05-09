 class crearRandomUser extends HTMLElement{
    constructor(){
        super();
        let miShadow = this.attachShadow({mode:'open'});
        miShadow.innerHTML=`
        <style type="text/css">
        html {
            background-color: rgb(226, 226, 226);
        }
        
        .container {
            position: absolute;
            width: 700px;
            height: 650px;
            background-color: rgba(245, 245, 245, 0.514);
            border-style: solid;
            border-radius: 10px;
            border-width: 2px;
            border-color: rgb(238, 238, 238);
            margin-left: 55vh;
            margin-top: 2vh;
        }
        
        .pfpcontainer {
            position: absolute;
            width: 150px;
            height: 150px;
            margin-left: 30vh;
            margin-top: 5vh;
        }
        
        .pfp {
            position: absolute;
            width: 150px;
            height: 150px;
            border-radius: 100%;
        }
        
        .texto {
            position: absolute;
            margin-left: 12vh;
            margin-top: 20vh;
        }
        
        .txt1 {
            color: rgb(145, 145, 145);
        }
        
        .txt2 {
            color: rgb(145, 145, 145);
        }
        
        .txt3 {
            color: rgb(145, 145, 145);
        }
        
        .txt4 {
            color: rgb(145, 145, 145);
        }
        
        .txt5 {
            color: rgb(145, 145, 145);
        }
        
        .txt6 {
            color: rgb(145, 145, 145);
        }
        
        .imglol {
            position: absolute;
            border-radius: 100%;
            margin-left: -9vh;
        }
        
        .imglol:hover {
            width: 7vh;
            margin-left: -9.5vh;
            margin-top: -0.5vh;
            cursor: pointer;
        }   
        </style>
        <body>
        <div class="container">
        <div class="pfpcontainer">
            <img src="" id="pfp">
        </div>
        <div class="texto">
            <div class="namecontainer">
                <img src="/Dia 16 - Correción/assets/images/nombreimg.png" class ="imglol">
                <p class="txt1">Name</p>
                <p class="name" id="name">x</p>
            </div>
            <div class="emailcontainer">
                <img src="/Dia 16 - Correción/assets/images/emailimg.png" class ="imglol">
                <p class="txt2">Email</p>
                <p class="email" id="email">x</p>
            </div>
            <div class="datecontainer">
                <img src="/Dia 16 - Correción/assets/images/dobimg.png" class ="imglol">
                <p class="txt3">Birthdate</p>
                <p class="date" id="date">x</p>
            </div>
            <div class="addresscontainer">
                <img src="/Dia 16 - Correción/assets/images/direccimg.png" class ="imglol">
                <p class="txt4">Address</p>
                <p class="address" id="address">x</p>
            </div>
            <div class="phonecontainer">
                <img src="/Dia 16 - Correción/assets/images/telefimg.png" class ="imglol">
                <p class="txt5">Phone</p>
                <p class="phone" id="phone">x</p>
            </div>
            <div class="passwordcontainer">
                <img src="/Dia 16 - Correción/assets/images/contraimg.png" class ="imglol">
                <p class="txt6">Password</p>
                <p class="password" id="password">x</p>
            </div>
        </div>
    </div>
        <script>
        fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {

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
            g.src = data.results[0].picture.large;
            
        </script>
        </body>
        `
    }
}

customElements.define('random-user',crearRandomUser)