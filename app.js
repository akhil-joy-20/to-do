//to add task to todo list if user press enter key
$("#task_input").on("keydown",function(e){

    if(e.key == "Enter" && $("#task_input").val()!="" ){   
         todoAdd();    
    }

});
//to add task if user click on + icon
$(".fa-plus").on("click",function(){

    if($("#task_input").val()!=""){
        todoAdd();
    }

});




//functions
function todoAdd(){

        /* var tasks = $("<div class='tasks'></div>");
         var individual_task = $('<h5   class="individual_task"></h5>');
         var list_icon = $('<i class="fas fa-circle list_icon"></i>');
         var texta = $("#task_input").val();
         individual_task.append(list_icon,texta);
         tasks.append(individual_task);
         

         var icons =$("<div class='icons'></div>");
         var right =$('<i class="fas fa-angle-double-right"></i>')
         var trash =$("<i class='fas fa-trash-alt'></i>")
         icons.append(right,trash);
         tasks.append(icons);

         $("#todo").append(tasks); */

        $(".todomsg").addClass("todomsghide")
        var texta = $("#task_input").val();

        $("#todo").append('<div class="tasks">\
        <h5 class="individual_task"><i class="fas fa-circle list_icon"></i>'+texta+'</h5>\
        <div class="icons">\
        <i class="fas fa-angle-double-right todo_trash tooltp"><span class="tooltiptext">add to doing</span></i>\
        <i class="fas fa-trash-alt todo_trash tooltp"><span class="tooltiptext">remove</span></i>\
        </div>\
        </div>')

         $("#task_input").val("");//make input area empty

        //trash
        trash();
          
        //to add hint if all tasks are deleted[xxx]
        $(".todo_trash").click(function(){

            if($("#todo").find(".tasks").length == 1){
                $(".todomsg").removeClass("todomsghide");
            }
            
        });

        //add to doing
        addToDoing();


}

function addToDoing(){
    $(".fa-angle-double-right").click(function(){

        var doingText = $(this).parent().prev().text();
        
        $(this).parents().eq(1).fadeOut(function(){

            $("#doing").append('<div class="tasks">\
            <h5 class="individual_task"><i class="fas fa-circle list_icon"></i>'+doingText+'</h5>\
            <div class="icons">\
            <i class="fas fa-check tooltp"><span class="tooltiptext">completed</span></i>\
            <i class="fas fa-trash-alt tooltp"><span class="tooltiptext">remove</span></i>\
            </div>\
            </div>');   

            $(this).remove();

            $("#doing").fadeIn();

            //adding to completed
            addToCompleted();

            trash();

        });

        // $(this).remove();

        

    });
}

function addToCompleted(){
     $(".fa-check").click(function(){

        var completeText = $(this).parent().prev().text();
       
        $(this).parents().eq(1).fadeOut(function(){

            $("#completed").append('<div class="tasks">\
            <h5 class="individual_task"><i class="fas fa-circle list_icon"></i>'+completeText+'</h5>\
            <div class="icons"><i class="fas fa-trash-alt tooltp"><span class="tooltiptext">remove</span></i></div>\
            </div>');

            $("#completed").fadeIn();

            trash();

        });

        $(this).remove();

     });
}

function trash(){
    $(".fa-trash-alt").click(function(){

        var p = $(this).parents().eq(1);//or $(this).parent().parent();
        p.fadeOut(function(){
            p.remove();
        });


    });
}
