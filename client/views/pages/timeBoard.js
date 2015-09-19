Template.timeBoard.rendered = function(){
  //Init dhtmlxGantt.
  gantt.init("task-gantt");

  //Init dhtmlxGantt data adapter.
  //gantt.meteor({tasks: TasksCollection, links: LinksCollection});
  //or
  gantt.meteor(
    //{tasks: TasksCollection.find(/*[anything]*/), links: LinksCollection.find(/*[anything]*/)},
    //{tasks: TasksCollection, links: LinksCollection}
    {tasks: Tasks, links: Links}
  );

};
