async function main() {
  const texts = [
    {"SOCRATES": "Are you going, Alcibiades, to offer prayer to Zeus?", "ms": 2000},
    {"ALCIBIADES": "Yes, Socrates, I am.", "ms": 3000},
    {"SOCRATES": "You seem to be troubled and to cast your eyes on the", "ms": 3000},
    {"": "ground as though you were thinking about something.", "ms": 2700},
    {"ALCIBIADES": "Of what do you suppose that I am thinking?", "ms": 3000},
    {"SOCRATES": "Of the greatest of all things, as I believe.", "ms": 4000}

  ];


  let i = 0;
  while(i < texts.length) {
    const author = Object.keys(texts[i])[0]; 
    const text = Object.values(texts[i])[0];
    const ms = texts[i].ms;
    await new Promise((resolve) => setTimeout(() => {
      create_replica(author, text, i);
      resolve(true);
    }, ms));
    i++;
  }

}


const create_replica = function(author, text, index) {
  const container = document.createElement("div");
  container.classList.add("css-typing");

  const par = document.getElementsByClassName("subcontainer")[0];

  par.appendChild(container);

    const marker = document.createElement("span")
    marker.classList.add("marker");
    marker.innerText = '>'

    const user = document.createElement("span"); 
    user.classList.add(author === "SOCRATES"? "person-0" : "person-1");
    user.innerText = author + ":"; 


  const replica =  document.createElement("p")
  replica.classList.add("replica")
  replica.innerText = text;

    container.appendChild(marker);
    container.appendChild(user);

  container.appendChild(replica);
}

main();
