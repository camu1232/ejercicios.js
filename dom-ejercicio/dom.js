function addItem() {
    let input = document.querySelector('input');
    let inputValue = input.value.trim();

    if (inputValue !== "") {
        let list = document.querySelector('ul');
        let newItem = document.createElement('li');
        newItem.textContent = inputValue;

let deleteButton = document.createElement('button');
deleteButton.textContent = "Delete";
deleteButton.onclick = function() {
    list.removeChild(newItem);
};

newItem.appendChild(deleteButton);

list.appendChild(newItem);

}
}

let addButton = document.querySelector("#addButton").addEventListener('click', addItem);




