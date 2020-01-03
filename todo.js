document.addEventListener("DOMContentLoaded",function(){
 
    document.querySelector("#new-task").onsubmit = () => {

        //create new item for list
        const li = document.createElement('li');
        li.innerHTML = document.querySelector('#task').value;

        //add new item to the list
        document.querySelector("#tasks").append(li);

        //clear the input field
        document.querySelector("#task").value="";

        //stop form for submitting
        return false;
       }   
})