const url = "http://localhost:3000/players";

window.addEventListener("load", fetchData);

function fetchData(){
    fetch(url).then((result) => result.json()).then(players => {
        if(players.length > 0) {
            let html = `<ul class="w-3/4 my-3 mx-auto flex flex-wrap gap-2 justify-center">`;
            players.forEach((player) => {
                html += `<li
                class="bg-${player.teamcolor1} basis-1/4 text-${player.teamcolor2} p-2 rounded-md border-2 border-${player.teamcolor2} flex flex-col justify-between">
    
                <h3>${player.firstName} ${player.lastName}</h3>
                <p>Lag: ${player.team}</p>
                <p>Position: ${player.position}</p>
                <div>
                    <button
                      class="border border-${player.teamcolor2} hover:bg-white/100 
                      rounded-md bg-white/50 p-1 text-sm mt-2" onclick="setCurrentPlayer(${player.id})">
                      Ändra
                  
                  </button>
                  <button class="border border-${player.teamcolor2} hover:bg-white/100 
                  rounded-md bg-white/50 p-1 text-sm mt-2" onclick="deletePlayer(${player.id})">
                    Ta bort
                  </button>
                </div>
              </li>`
            });
            html += `</ul>`;
    
            const listContainer = document.getElementById("listContainer");
            listContainer.innerHTML = "";
            listContainer.insertAdjacentHTML("beforeend", html);
            
        }
        
    });
}

function setCurrentPlayer(id) {
    fetch(`${url}/${id}`)
        .then(result => result.json())
        .then((player) => {
            userForm.firstName.value = player.firstName;
            userForm.lastName.value = player.lastName;
            userForm.team.value = player.team;
            userForm.position.value = player.position;
            userForm.teamcolor1.value = player.teamcolor1;
            userForm.teamcolor2.value = player.teamcolor2;
            

            localStorage.setItem("currentId", player.id);
        })
}

function deletePlayer(id) {
    fetch(`${url}/${id}`, {method: 'DELETE'})
        .then((result) => fetchData());
}

console.log(userForm);
userForm.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    const serverPlayerObject = {
        firstName: "",
        lastName: "",
        team: "",
        position: "",
        teamcolor1: "",
        teamcolor2: ""
    };
    let e = document.getElementById("team");
    teamArray = e.value.split(",");
    serverPlayerObject.firstName = userForm.firstName.value;
    serverPlayerObject.lastName = userForm.lastName.value;
    serverPlayerObject.team = teamArray[0];
    serverPlayerObject.position = userForm.position.value;
    serverPlayerObject.teamcolor1 = teamArray[1];
    serverPlayerObject.teamcolor2 = teamArray[2];

    const id = localStorage.getItem("currentId");
    if(id) serverPlayerObject.id = id;


    const request = new Request(url, {
        method: serverPlayerObject.id ? "PUT" : "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(serverPlayerObject)
    });

    fetch(request).then(response => {
        fetchData();
        localStorage.removeItem("currentId");
        userForm.reset();
    });
}