let nameInput = document.querySelector("#nameInput");
let phoneInput = document.querySelector("#phoneInput");

let showButton = document.querySelector("#view-contacts");
let addButton = document.querySelector("#add-contact");
let removeButton = document.querySelector("#remove-contact");
let editButton = document.querySelector("#edit-contact");

let check = false;

let contactsList = document.querySelector(".containerContacts");

let rubrica = {
  listaContatti: [
    { name: "Lorenzo", phone: "1234567890" },
    { name: "Riccardo", phone: "0987654321" },
  ],

  showcontacts: function () {
    this.listaContatti.forEach((contatto) => {
      let p = document.createElement("p");
      p.innerHTML = `${contatto.name}: ${contatto.phone}`;
      contactsList.appendChild(p);
    });
  },

  addcontact: function (newName, newPhone) {
    this.listaContatti.push({ name: newName, phone: newPhone });
  },

  removecontact: function (removeName) {
    let filtered = this.listaContatti.filter(
      (contatto) => contatto.name != removeName,
    );
    this.listaContatti = filtered;
  },

  editcontact: function (editName, newPhone) {
    this.listaContatti.forEach((contatto) => {
      if (contatto.name == editName) {
        contatto.phone = newPhone;
      }
    });
  },
};

showButton.addEventListener("click", () => {
  if (check == false) {
    rubrica.showcontacts();
    showButton.innerHTML = "Nascondi contatti";
    check = true;
  } else {
    check = false;
    contactsList.innerHTML = "";
    showButton.innerHTML = "Mostra contatti";
  }
});

addButton.addEventListener("click", () => {
  if (nameInput.value != "" && phoneInput.value != "") {
    rubrica.addcontact(nameInput.value, phoneInput.value);
    nameInput.value = "";
    phoneInput.value = "";
  }
});

removeButton.addEventListener("click", () => {
  if (nameInput.value != "") {
    rubrica.removecontact(nameInput.value);
    nameInput.value = "";
  }
});

editButton.addEventListener("click", () => {
  if (nameInput != "") {
    rubrica.editcontact(nameInput.value, phoneInput.value);
    nameInput.value = "";
    phoneInput.value = "";
  }
});
