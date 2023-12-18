const url = "http://localhost:3000/players";

window.addEventListener("load", fetchData);

function fetchData(){
    fetch(url).then((result) => result.json()).then(players => {
        if(players.length > 0) {
            let html = `<ul class="w-3/4 my-3 mx-auto flex flex-wrap gap-2 justify-center">`;
            players.forEach((player) => {
                html += `<li
                class="bg-${player.teamcolor}-200 basis-1/4 text-${player.teamcolor}-900 p-2 rounded-md border-2 border-${player.teamcolor}-400 flex flex-col justify-between">
                <h3>${player.firstName} ${player.lastName}</h3>
                <p>Lag: ${player.team}</p>
                <div>
                  <button
                    class="rounded-md bg-white/50 p-1 text-sm"
                    <button
                      class="border border-${player.teamcolor}-300 hover:bg-white/100 rounded-md bg-white/50 p-1 text-sm mt-2">
                      Ändra
                  
                  </button>
                  <button class="border border-${player.teamcolor}-300 hover:bg-white/100 rounded-md bg-white/50 p-1 text-sm mt-2">
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
