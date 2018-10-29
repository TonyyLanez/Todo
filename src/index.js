import $ from 'jquery';
console.log('руддщ');
let arrayOfCollection = [];
let arrayInCollection = [];
let id = 0;

function AddTodoTask () {
    let newTodoTask = $("#addTodo").val().trim();
    if (!newTodoTask) {
        return false;
    }

    let infoTask = {
        text: newTodoTask,
        id: id,
        checked: false
    }
    
    arrayInCollection.push (infoTask);
    $("#addTodo").val("");
    id++;
}

$(function () {
    //добавление по кнопке
    $("#addTask").bind('click', function() {
        AddTodoTask();
    });
    
        //добавление по ENTER
    $("body").keyup(function() {
        if(event.keyCode==13){
            AddTodoTask();
        }
    });
});



