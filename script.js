//define

let body = document.querySelector("body");
let profiles = document.querySelector("#profiles");
let submitButton = document.querySelector(".submit");
let firstNameButton = document.querySelector(".firstSubmit");
let secondNameButton = document.querySelector(".secondSubmit");
let inputField = document.querySelector("#gender");
let inputFieldF = document.querySelector("#firstName");
let inputFieldL = document.querySelector("#lastName");
let formDiv = document.querySelector("#form")


let randDec = Math.random();
let randInt = Math.floor((randDec * 51) + 50)

formDiv.style.display = "flex";
formDiv.style.justifyContent = "space-evenly"


body.style.backgroundColor = "lightblue";
profiles.style.padding = "20px";

// call
fetch("https://randomuser.me/api/?results=" + randInt)
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(myJson);

        submitButton.onclick = function(event) {
            event.preventDefault();
            profiles.innerHTML = "";

            for (let i=0; i<randInt; i++) {
                if (myJson.results[i].gender == inputField.value) {
                    console.log(myJson.results[i]);

                    let newDiv = document.createElement("div")
                    let name = document.createElement("h1");
                    let image = document.createElement("img")
                    let text = document.createElement("p")

                    
                    name.innerHTML = myJson.results[i].name.first + " " + myJson.results[i].name.last;
                    image.src = myJson.results[i].picture.large;
                    text.innerHTML = myJson.results[i].phone;

                    image.style.width = "25%";
                    image.style.float = "left";

                    name.style.marginLeft = "175px";
                    text.style.marginLeft = "175px";

                    text.style.fontWeight = "bold";
                    text.style.fontFamily = "Arial, Helvetica, sans-serif"
                    text.style.fontSize = "14px";
    
                    newDiv.style.border = "double black 5px";
                    newDiv.style.borderRadius = "15px";
                    newDiv.style.padding = "7px";
                    newDiv.style.margin = "7px";
                    newDiv.style.float = "left";
                    newDiv.style.width = "31%";
                    newDiv.style.backgroundColor = "goldenrod";

                    newDiv.appendChild(image);
                    newDiv.appendChild(name);
                    newDiv.appendChild(text);
                    profiles.appendChild(newDiv);
            
                }
            } 

        }

        firstNameButton.onclick = function(event) {
            event.preventDefault();
            profiles.innerHTML = "";

            for (let i=0; i<randInt; i++) {
            if (myJson.results[i].name.first == inputFieldF.value) {
                event.preventDefault();
               
                console.log(myJson.results[i]);

                let newDiv = document.createElement("div")
                let name = document.createElement("h1");
                let image = document.createElement("img")
                let text = document.createElement("p")

                
                name.innerHTML = myJson.results[i].name.first + " " + myJson.results[i].name.last;
                image.src = myJson.results[i].picture.large;
                text.innerHTML = myJson.results[i].phone;

                image.style.width = "25%";
                image.style.float = "left";

                name.style.marginLeft = "175px";
                text.style.marginLeft = "175px";

                text.style.fontWeight = "bold";
                text.style.fontFamily = "Arial, Helvetica, sans-serif"
                text.style.fontSize = "14px";

                newDiv.style.border = "double black 5px";
                newDiv.style.borderRadius = "15px";
                newDiv.style.padding = "7px";
                newDiv.style.margin = "7px";
                newDiv.style.float = "left";
                newDiv.style.width = "31%";
                newDiv.style.backgroundColor = "goldenrod";

                newDiv.appendChild(image);
                newDiv.appendChild(name);
                newDiv.appendChild(text);
                profiles.appendChild(newDiv);
            }        
        }
        }
        
    secondNameButton.onclick = function(event) {
        event.preventDefault();
        profiles.innerHTML = "";

        for (let i=0; i<randInt; i++) {
        if (myJson.results[i].name.last == inputFieldL.value) {
            event.preventDefault();

            console.log(myJson.results[i]);

            let newDiv = document.createElement("div")
            let name = document.createElement("h1");
            let image = document.createElement("img")
            let text = document.createElement("p")

            
            name.innerHTML = myJson.results[i].name.first + " " + myJson.results[i].name.last;
            image.src = myJson.results[i].picture.large;
            text.innerHTML = myJson.results[i].phone;

            image.style.width = "25%";
            image.style.float = "left";

            name.style.marginLeft = "175px";
            text.style.marginLeft = "175px";

            text.style.fontWeight = "bold";
            text.style.fontFamily = "Arial, Helvetica, sans-serif"
            text.style.fontSize = "14px";

            newDiv.style.border = "double black 5px";
            newDiv.style.borderRadius = "15px";
            newDiv.style.padding = "7px";
            newDiv.style.margin = "7px";
            newDiv.style.float = "left";
            newDiv.style.width = "31%";
            newDiv.style.backgroundColor = "goldenrod";

            newDiv.appendChild(image);
            newDiv.appendChild(name);
            newDiv.appendChild(text);
            profiles.appendChild(newDiv);
         }
        }
    }

            // if (inputField.value == "male") {
            //     fetch("https://randomuser.me/api/?gender=male")
            //         .then(function(response){
            //             return response.json();
            //         }) 
            //         .then(function(myJson){
            //             console.log(myJson);
            //         })

            // } else if (inputField.value == "female") {
            //     fetch("https://randomuser.me/api/?gender=female")
            //         .then(function(response){
            //         return response.json();
            //     }) 
            //         .then(function(myJson){
            //         console.log(myJson);
            //     }) 
            // } else {
            //     alert("You did not enter female or male.")
            // }
    })
