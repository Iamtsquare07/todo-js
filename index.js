const mainBody = document.querySelector('#probody');

function submitText() {
        const outPut = document.querySelector('#clearBox');//Clear all items on the list
        clearBox.innerHTML = 'Clear List';//Ends Here

        const tHead = document.querySelector('.taskHeader');//Heading of the list
        const input = document.querySelector('#toDo');
        if(input.value.length < 1 || input.value.replaceAll(" ", "") < 1) return; // check if the input value length is less than 1 character
        const myText = document.createElement("li");
        const adButton = document.createElement('button');
        adButton.id = 'delbtn'; // Button to Delete list item
        adButton.classList.add("deleteToDo");
        adButton.innerHTML = "Remove";
        adButton.addEventListener('click',deleteITem,false);
        //Clear the list

        myText.appendChild(document.createTextNode(input.value));
        myText.appendChild(adButton);
        mainBody.appendChild(myText);

        function deleteITem(event){
    event.path[1].remove();
        }
        
        input.value = ''; // clear the value input
        function headerFP() {
            tHead.innerHTML = "Added! You Can add More Items to your tasklist";
        };
        tHead.innerHTML = " ";
        setTimeout(headerFP, 4000);
}

document.getElementById("smbtn").addEventListener("click", submitText); // save the input value when button is clicked

document.getElementById("toDo").addEventListener('keypress', function (e) {
    if (e.key === 'Enter') submitText();
}); // save the input value when enter key is pressed

//Clear input
const selectDel = document.querySelector('#clearBox');

function deleteText(){
    mainBody.innerHTML = "";
    clearBox.innerHTML = "";
}
selectDel.addEventListener('click', deleteText);