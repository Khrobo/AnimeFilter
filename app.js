// Variables
let allTypes = document.getElementById("all")
let actionTypes = document.getElementById("action");
let adventureTypes = document.getElementById("adventure");
let spaceTypes = document.getElementById("space");
let shounenTypes = document.getElementById("shounen");
let scifiTypes = document.getElementById("scifi");
let mechaTypes = document.getElementById("mecha");

// Function listeners
allTypes.addEventListener("click", () => {
    let showAll = document.getElementsByClassName("categs")
    console.log("Show all!");
    for (let i=0; i<showAll.length; i++) {
        showAll[i].style.display = "";
    }
});
actionTypes.addEventListener("click", () => {
    let actionFilled = document.querySelectorAll(".adventure-categ, .space-categ, .shounen-categ, .scifi-categ, .mecha-categ")
    let showAction = document.querySelector(".action-categ");
    console.log("Only Action");
    for (let i=0; i<actionFilled.length; i++) {
        actionFilled[i].style.display = "none"
        if (showAction.style.display === "none") {
            showAction.style.display = ""
        }
    }
});
adventureTypes.addEventListener("click", () => {
    let adventureFilled = document.querySelectorAll(".action-categ, .space-categ, .shounen-categ, .scifi-categ, .mecha-categ");
    let showAdventure = document.querySelector(".adventure-categ");
    console.log("Only Adventure")
    for (let i=0; i<adventureFilled.length; i++) {
        adventureFilled[i].style.display = "none"
        if (showAdventure.style.display === "none") {
            showAdventure.style.display = "";
        }
    }
});
spaceTypes.addEventListener("click", () => {
    let spaceFilled = document.querySelectorAll(".action-categ, .adventure-categ, .shounen-categ, .scifi-categ, .mecha-categ");
    let showSpace = document.querySelector(".space-categ");
    console.log("Only Space!");
    for (let i=0; i<spaceFilled.length; i++) {
        spaceFilled[i].style.display = "none"
        if (showSpace.style.display === "none") {
            showSpace.style.display = "";
        }
    }
})
shounenTypes.addEventListener("click", () => {
    let shounenFilled = document.querySelectorAll(".action-categ, .adventure-categ, .space-categ, .scifi-categ, .mecha-categ");
    let showShounen = document.querySelector(".shounen-categ");
    console.log("Only Shounen");
    for (let i=0; i<shounenFilled.length; i++) {
        shounenFilled[i].style.display = "none";
        if (showShounen.style.display === "none") {
            showShounen.style.display = "";
        }
    }
})
scifiTypes.addEventListener("click", () => {
    let scifiFilled = document.querySelectorAll(".action-categ, .adventure-categ, .space-categ, .shounen-categ, .mecha-categ")
    let showScifi = document.querySelector(".scifi-categ");
    console.log("Show scifi!");
    for (let i=0; i<scifiFilled.length; i++) {
        scifiFilled[i].style.display = "none";
        if (showScifi.style.display === "none") {
            showScifi.style.display = "";
        }
    }
})
mechaTypes.addEventListener("click", () => {
    let mechaFilled = document.querySelectorAll(".action-categ, .adventure-categ, .space-categ, .shounen-categ, .scifi-categ");
    let showMecha = document.querySelector(".mecha-categ");
    console.log("Show Mecha!");
    for(let i=0; i<mechaFilled.length; i++) {
        mechaFilled[i].style.display = "none";
        if (showMecha.style.display === "none") {
            showMecha.style.display = "";
        }
    }
})






