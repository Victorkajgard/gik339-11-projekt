const url = "http://localhost:3000/players";

window.addEventListener("load", fetchData);


function fetchData(){
    fetch(url).then((result) => result.json()).then(players => {
        if(players.length > 0) {
            let html = `<ul class="w-3/4 my-3 mx-auto flex flex-wrap gap-2 justify-center">`;
            players.forEach((player) => {
                html += `<li
                class="bg-${player.teamcolor1} min-w-32 basis-1/4 text-${player.teamcolor2} p-2 rounded-md border-2 border-${player.teamcolor2} flex flex-col justify-between">
    
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
                  rounded-md bg-white/50 p-1 text-sm mt-2" onclick="createDeleteModal(${player.id})">
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
          userForm.team.value = `${player.team},${player.teamcolor1},${player.teamcolor2}`;
          userForm.position.value = player.position;

          localStorage.setItem("currentId", player.id);
      })
}



function createDeleteModal(id){
  fetch(`${url}/${id}`)
  .then(result => result.json())
  .then((player) => {
     
      html = `<div class="flex justify-center items-center h-screen">
    <div x-data="{ open: true }">
      <!-- Modal Overlay -->
      <div x-show="open" class="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center">
        <div x-show="open" x-transition:enter="transition-opacity ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity ease-in duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <!-- Modal Content -->
        <div x-show="open" x-transition:enter="transition-transform ease-out duration-300" x-transition:enter-start="transform scale-75" x-transition:enter-end="transform scale-100" x-transition:leave="transition-transform ease-in duration-300" x-transition:leave-start="transform scale-100" x-transition:leave-end="transform scale-75" class="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50">
          <!-- Modal Header -->
          <div class="bg-indigo-500 text-white px-4 py-2 flex justify-between">
            <h2 class="text-lg font-semibold">Ta bort</h2>
          </div>
          <!-- Modal Body -->
          <div class="p-4 text-black">
          <p>Vill du ta bort spelaren ${player.firstName} ${player.lastName}?</p>
          </div>
          <!-- Modal Footer -->
          <div class="border-t px-4 py-2 flex justify-end">
            <button x-on:click="deletePlayer(${id})" class="px-3 py-1 bg-indigo-500 text-white mr-1 rounded-md w-full sm:w-auto"> Ta bort </button>
            <button x-on:click="open=false" class="px-3 py-1 bg-indigo-500 text-white  rounded-md w-full sm:w-auto"> Avbryt </button>
          </div>
        </div>
      </div>
    </div>
  </div>`

  document.body.insertAdjacentHTML("beforeend",html);

      localStorage.setItem("currentId", player.id);
  })

    
}

function deletePlayer(id) {
   fetch(`${url}/${id}`, {method: 'DELETE'})
        .then((result) => fetchData());
}


const button = document.getElementsByName("submitUserForm");

button.addEventListener("click", createModal);

//button.addEventListener("submit", handleSubmit);

function createModal(){
  const id = localStorage.getItem("currentId");
  if(id) {
    message = `Vill du ändra spelaren ${userForm.firstName.value} ${userForm.lastName.value}?`
  } else {
    message = `Vill du lägga till spelaren ${userForm.firstName.value} ${userForm.lastName.value}?`
  }
    

  html = `<div class="flex justify-center items-center h-screen">
  <div x-data="{ open: true }">
    <!-- Modal Overlay -->
    <div x-show="open" class="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center">
      <div x-show="open" x-transition:enter="transition-opacity ease-out duration-300" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100" x-transition:leave="transition-opacity ease-in duration-300" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0" class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
      <!-- Modal Content -->
      <div x-show="open" x-transition:enter="transition-transform ease-out duration-300" x-transition:enter-start="transform scale-75" x-transition:enter-end="transform scale-100" x-transition:leave="transition-transform ease-in duration-300" x-transition:leave-start="transform scale-100" x-transition:leave-end="transform scale-75" class="bg-white rounded-md shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50">
        <!-- Modal Header -->
        <div class="bg-indigo-500 text-white px-4 py-2 flex justify-between">
          <h2 class="text-lg font-semibold">Lägg till</h2>
        </div>
        <!-- Modal Body -->
        <div class="p-4 text-black">
        <p>${message}</p>
        </div>
        <!-- Modal Footer -->
        <div class="border-t px-4 py-2 flex justify-end">
          <button x-on:click="handleSubmit(event)" class="px-3 py-1 bg-indigo-500 text-white mr-1 rounded-md w-full sm:w-auto"> Godkänn </button>
          <button x-on:click="open=false" class="px-3 py-1 bg-indigo-500 text-white  rounded-md w-full sm:w-auto"> Avbryt </button>
        </div>
        
      </div>
    </div>
  </div>
</div>`

document.body.insertAdjacentHTML("beforeend",html);

}

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

    let hej = document.getElementById("team");
    teamArray = hej.value.split(",");
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