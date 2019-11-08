
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { task_notes: 'task notes here',
         task_description: 'the task description', 
         task_completed: 0, project_id:1,},
         { task_notes: 'task notes2 here',
         task_description: 'the task description2', 
         task_completed: 0, project_id:1,},
         { task_notes: 'task notes3 here',
         task_description: 'the task description3', 
         task_completed: 0, project_id:1,},
         { task_notes: 'task notes4 here',
         task_description: 'the task description4', 
         task_completed: 0, project_id:1,}
      ]);
    });
};
