export class User {
    
  constructor(nom, prenom, email, age, photo) {
    this.nom = nom;
    this.prenom = prenom;
    this.email = email;
    this.age = age;

    //this.city = city;
    //this.pays = pays;
    this.photo = photo;

    this.present = false;
    this.element = this.generateElement();
  }

  generateElement() {
    // Crée un élément <div>
    const userElement = document.createElement("div");
    // Lui ajoute une class "user"
    userElement.classList.add("user");

    const childHTML = `
        <img src="https://randomuser.me/api/portraits/women/37.jpg">
		<div class="user--info">
				<h1>${this.nom}</h1>
				<p>years old</p>
				<p>lubia, netherland</p>
		</div>
		<a href="mailto:${this.email}">
				<span class="mail">✉️</span>
		</a>`;

    userElement.insertAdjacentHTML("afterbegin", childHTML);

    return userElement;
  }

  present() {
    element.addEventListener("click", () => {
      const style =
        element.style.backgroundColor === "grey"
          ? (element.style.backgroundColor = "green")
          : (element.style.backgroundColor = "grey");
    });
    return this;
  }
  /*
            if (e.target.datapresent === "false") {
                e.target.datapresent = "true";
                } else {
                  e.target.datapresent = "false";
                }
              }
              */
  //)};

  render() {
    document.querySelector("main").appendChild(this.element);
    //return this;
  }
}
