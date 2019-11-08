
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { project_name: 'project name here',
         project_description: 'the project description',
         project_completed: 0},
         { project_name: 'project name2 here',
         project_description: 'the project description2',
         project_completed: 0},
         { project_name: 'project name3 here',
         project_description: 'the project description3',
         project_completed: 0},
         { project_name: 'project name4 here',
         project_description: 'the project description4',
         project_completed: 0}
      ]);
    });
};
