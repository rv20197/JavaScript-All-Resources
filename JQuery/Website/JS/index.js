$(document).ready(function(){
    var btn_add = $("#add_item")
    var btn_update = document.getElementById("update_item")
    var btn_remove = document.getElementById("remove_item")
    var list = $("#todo_list")
    var input_box = $("#todo_input")
    var new_item = '';


    input_box.on({
        'input': function(e){
            new_item = e.target.value
        },

        'keyup': function(e){
            if(e.keyCode === 13){
                additem()
            }
        }
    })

    function clear_input() {
        input_box.val("")
        new_item = ""
    }

    function new_node() {
        new_element = document.createElement('p')
        list_element = document.createElement('l1')
        text_element = document.createTextNode(new_item)
        new_element.append(list_element)
        new_element.append(text_element)
        new_element.id = `item ${list.childElementCount}`
        return new_element
    }

    function additem(){
        if (new_item !== undefined && new_item !== null && new_item !== "" && new_item !==NaN)
        {
            var new_element = new_node()
            list.append(new_element)
            clear_input()
        }
        
        else{
            alert("Please Enter The Valid TO-DO Item")
        }
    }

    function updateitem(){
        var first_element = list.firstElementChild;
        var new_element = new_node()
        list.replaceChild(new_element,first_element)
    }

    function removeitem() {
        var first_element = list.firstElementChild;
        list.removeChild(first_element)
    }

    // btn_add.click(additem);

    // btn_add.addEventListener('click', additem )

    btn_update.addEventListener('click',updateitem)

    btn_remove.addEventListener('click',removeitem)

    //////////////////////////////////////AJAX AND HTTP REQUESTS--------------------------------
    function create_TODO_Dynamically(id,title) {
        new_element = document.createElement('p')
        list_element = document.createElement('l1')
        text_element = document.createTextNode(title)
        new_element.append(list_element)
        new_element.append(text_element)
        new_element.id = id
        return new_element
    }

    // GET CALLS

    function getTODOLIST() {
        // Using jQuery
        $.get('https://jsonplaceholder.typicode.com/todos',function(data,status){
            var response = data
            for (i = 0; i<response.length;i++){
                list.append(create_TODO_Dynamically(response[i].id , response[i].title))
                
            }
        })
        // Using JAVASCRIPT
        // var http = new XMLHttpRequest()
        // http.onreadystatechange = function(){
        //     if(this.readyState == 4){
        //         if(this.status === 200){
        //             var response = JSON.parse(this.responseText)
        //             for (i = 0; i<response.length;i++){
        //                 list.append(create_TODO_Dynamically(response[i].id , response[i].title))
                        
        //             }
        //         }
        //     else{
        //         console.log("Call Failed")
        //     }
        //     }
        // }
        // http.open('GET','https://jsonplaceholder.typicode.com/todos',true)
        // http.send();
    }

    getTODOLIST()


    // POST CALLS
    function create_TODO_Item_At_Backend() {

    //     var http = new XMLHttpRequest();
    //     http.open('POST','https://jsonplaceholder.typicode.com/todos',true)
        
    //     http.onreadystatechange = function(){
    //         if(this.readyState == 4){
    //             if(this.status === 201){
    //                 response_id = JSON.parse(this.responseText)
    //                 list.append(create_TODO_Dynamically(response_id.id,new_item))
    //                 console.log("Item Added")
    //             }
    //         else{
    //             console.log("Call Failed")
    //         }
    //         }
    //     }
        

        // http.send(obj);
        var obj =  JSON.stringify({
            "userId": 1,
            "title": new_item,
            "completed": false
        })
        $.post('https://jsonplaceholder.typicode.com/todos',obj,function (data,status) {
            response_id = data
            list.append(create_TODO_Dynamically(response_id.id,new_item))
            console.log("Item Added")
            clear_input()
        
        })
    }


    btn_add.click(create_TODO_Item_At_Backend)
})

