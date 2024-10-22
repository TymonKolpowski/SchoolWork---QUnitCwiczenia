const navigation = document.getElementById('workspaceNav');
const wSpaces = document.getElementById('content');

function createWrkspc(){
    const buttonCount = document.querySelectorAll('[data-sohbtn="workspace"]');
    var newButton = document.createElement("a");
    newButton.setAttribute("href", "#w"+buttonCount.length);
    newButton.setAttribute("data-sohbtn", "workspace");
    newButton.setAttribute("data-sohgroup", "workspace");
    newButton.setAttribute("data-sohno", buttonCount.length);
    newButton.innerHTML = buttonCount.length;

    navigation.insertBefore(newButton, navigation.children[navigation.childElementCount-1]);
    //czysto kosmetyczne dodanie spacji
    navigation.insertBefore(document.createTextNode("\u00A0"), navigation.children[navigation.childElementCount-1]);

    //dodawanie workspace
    const workspaceCount = document.querySelectorAll('[data-sohcanv="workspace"]');
    var newWorkspace = document.createElement("section");

    newWorkspace.setAttribute("data-sohcanv", "workspace");
    newWorkspace.setAttribute("data-sohgroup", "workspace");
    newWorkspace.setAttribute("data-sohno", buttonCount.length);
    newWorkspace.innerHTML = "Body #" + buttonCount.length;

    wSpaces.appendChild(newWorkspace);
}
const nextButton = navigation.querySelector('[href="#wa"]');
nextButton.addEventListener('click', createWrkspc);