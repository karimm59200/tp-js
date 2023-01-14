//alert("hello world");

let annuaire = [
  {
    nom: "Dupont",
    prenom: "Jean",
    age: 15,
  },
  {
    nom: "Durant",
    prenom: "Pierre",
    age: 16,
  },
  {
    nom: "Martin",
    prenom: "Jean",
    age: 17,
  },
];

let concat = "";

function addContact() {
  let prenom = prompt("quel est votre prénom ?");
  let nom = prompt("quel est votre nom ?");
  let age = prompt("quel est votre âge ?");

  let contact = {
    prenom: prenom,
    nom: nom,
    age: age,
  };
  annuaire.push(contact);
}

function confirmationSupprimer(index) {
  buildContactList();
  let suppression = prompt(
    concat + "\n" + "Indiquez le numéro du contact à supprimer ?"
  );
  annuaire.splice(Number(suppression - 1), 1);
  alert(`Le contact n°${suppression} a bien été supprimé.`);
}

let continuer = true;
while (continuer) {
  let menu = parseInt(
    prompt(`Bienvenue dans l'annuaire :
1:Afficher Contacts
2:Ajouter Contact
3:Supprimer Contact
4:Quitter`)
  );

  function buildContactList() {
    concat = ""
    annuaire.forEach((contact, index) => {
      concat =
        concat +
        `${index + 1}, ${contact.prenom}, ${contact.nom}, ${contact.age}\n`;
    });
  }

  switch (menu) {
    case 1:
      buildContactList();
      alert(concat);
      break;
    case 2:
      console.log("Ajouter Contact");
      addContact();
      break;
    case 3:
      confirmationSupprimer();
      break;
    case 4:
      alert("au revoir");
      continuer = false;
      break;
    default:
      alert("merci de faire un choix ! ");
      break;
  }
}

// console.log(menu)
