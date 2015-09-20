Template.timeBoard.rendered = function(){
  //Init dhtmlxGantt.
  gantt.init("task-gantt", new Date(), new Date(2015, 11, 22));


  //Init dhtmlxGantt data adapter.
  //gantt.meteor({tasks: TasksCollection, links: LinksCollection});
  //or
  gantt.meteor(
    //{tasks: TasksCollection.find(/*[anything]*/), links: LinksCollection.find(/*[anything]*/)},
    //{tasks: TasksCollection, links: LinksCollection}
    {tasks: Tasks, links: Links}
  );

};
