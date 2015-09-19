Template.agileBoard.rendered = function(){

    // Initialize sortable
    $(".sortable-list").sortable({
        connectWith: ".connectList"
    }).disableSelection();
};

Template.agileBoard.helpers({
  tasks: function(){
    return Tasks.find();
  },
  status: function(){
    return this.status || "new";
  },
  startDate: function() {
    var d = new Date(this.start_date),
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }
});

Template.agileBoard.events({
  "click #new-task-submit": function(event, template){
    var id = Random.id([13]);
    var start_date = new Date();
    var text = template.$("#new-task-input").val();
    var duration = 1;
    var status = "new";
    var end_date = new Date();
    end_date.setDate(end_date.getDate() + 1);
    var parent = 0;
    var taskObject = {
      id: id,
      start_date: start_date,
      text: text,
      duration: duration,
      status: status,
      end_date: end_date,
      parent: parent
    };
    Tasks.insert(taskObject);
  }
});
