const toDoList = {
    // items should be { text: text, complete: true/false}
    items: [],
    addItem: addItem,
    editItem: editItem,
    deleteItem: deleteItem,
    completeItem: completeItem,
    renderList: renderList
}
function renderList(){
    $("#to-do-list").empty();
    for(let i = 0; i < this.items.length; i++){
        const $button = $("<button>Delete this</button>");
        $button.on("click", function(){
            toDoList.deleteItem(i)
        })
        $listItem.append($button);
        const $completeButton = $("<button>Complete this</button>")
        $completeButton.on("click", function(){
            console.log("CLIC")
            console.log(i);
            toDoList.completeItem(i)
        })
        const $listItem = $(`<li><p class="item-text">${this.items[i].text}</p></li>`);

        $listItem.append($completeButton);
        if(this.items[i].completed){
            $listItem.find(".item-text").addClass("completed")
        }
        $("#to-do-list").append($listItem)
    }
}
function addItem(text){
    this.items.push({
        text: text,
        completed: false
    });
    this.renderList();
}
function editItem(index, newText){
    this.items[index].text = newText;
    this.renderList();
}
function deleteItem(index){
    this.items.splice(index, 1);
    this.renderList();
}
function completeItem(index){
    this.items[index].completed = true;
    this.renderList();
}

// 1. Grab the element
const $form = $("#new-item-form")
// 2. Define the function you want to happen
function respondToAddItemSubmit(e){
    // Keep the page from reloading
    e.preventDefault();
    // Get the value from the input field with id #new-item-text
    const newText = $("#new-item-text").val()
    // Use the toDoList method to addItem
    toDoList.addItem(newText);
    // Reset the input field to an empty string
    $("#new-item-text").val("")
}
// 3. Attach the function to the element using a listener (preferably .on)
$form.on("submit", respondToAddItemSubmit)

