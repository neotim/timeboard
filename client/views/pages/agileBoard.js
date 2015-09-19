Template.agileBoard.rendered = function(){

    // Initialize sortable
    $(".sortable-list").sortable({
        connectWith: ".connectList"
    }).disableSelection();
};

Template.agileBoard.helpers({
  tasks: function(){
    return Tasks.find();
  }
});

Template.agileBoard.events({
  "click #new-task-submit": function(event, template){
    var title = template.$("#new-task-input").val();
    var now = new Date();
    var status = "new";
    console.log(title);
    Tasks.insert({title: title, due: now, status: status});
  }
});
