import $ from 'jquery';
import './css/style.css';

let arrayOfCollection = [];
let arrayInCollection = [];
let id = 0;

function AddTodoTask () {
    //обработка текста
    let newTodoTask = $("#addTodo").val().trim();
    if (!newTodoTask) {
        return false;
    }
    //запись текста в объект
    let infoTask = {
        text: newTodoTask,
        id: id,
        checked: false
    }
    //добавление элементов в массив используя введенные данные
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