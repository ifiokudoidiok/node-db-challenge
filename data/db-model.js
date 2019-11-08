const db = require('../data/db-config.js');

module.exports = {
  addResource,
  getAllResources,
  addProject,
  getAllProjects,
  addTask,
  getAllTasks,

  findProjectById
  


};



function addResource(resource) {
  return db('resources')
  .insert(resource)
  .then(id => ({
    id:id[0]
}))
}
function getAllResources() {
  return db('resources')
}
function addProject(project) {
 
  return db('projects')
  .insert(project)
  .then(id => ({
    id:id[0]
}))
}
function findProjectById(project_id) {
  return db('projects').where({ project_id: Number(project_id) });
}
function getAllProjects() {
  return db('projects')
}
function addTask(task) {
  return db('tasks')
  .insert(task)
  .then(id => ({
    id:id[0]
}))
}
function getAllTasks() {
  return db('tasks as t')
  .join('projects as p', 'p.project_id', 't.project_id')
  .select(
    't.task_id',
    't.task_description',
    't.task_notes',
    't.task_completed',
    'p.project_id',
    'p.project_name',
    'p.project_description',
  )
  
}