import { User } from "./modules/User";

const getProfilUtilisateur = () => {
  /*
  const request = new XMLHttpRequest();
  request.open("GET", `https://randomuser.me/api/?results=20`);
  request.send();
  request.addEventListener("load", (e) => {
    const data = JSON.parse(request.responseText);
    //renderCountry(data[0]);
  });
};
*/

  fetch("https://randomuser.me/api/?results=20")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      //const user = data.results[1];
    })
    .catch((error) => {
      console.log(error);
    });
};

getProfilUtilisateur();

for (let i = 0; i < 20; i++) {
  new User().render();
  i++;
}

/*
const users = [];

users.push(new User());

users.render();
*/
