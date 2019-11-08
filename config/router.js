const express = require("express");

const model = require("../data/db-model");

const router = express.Router();

router.get("/projects", getAllProjects);
router.post("/projects",validateProject, addProject);
router.get("/resources", getAllResources);
router.post("/resources",validateResource, addResource);
router.get("/tasks", getAllTasks);
router.post("/tasks",validateTask, addTask);

function getAllProjects(req, res) {
  model
    .getAllProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get projects: " + error });
    });
}

function addProject(req, res) {
  model
    .addProject(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(error => {
      res.status(500).json({
        message: "Error adding the new project: " + error.message
      });
    });
}

function getAllResources(req, res) {
  model
    .getAllResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get resources: " + error });
    });
}
function addResource(req, res) {
  model
    .addResource(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(error => {
      res.status(500).json({
        message: "Error adding the new resource: " + error.message
      });
    });
}

function getAllTasks(req, res) {
  model
    .getAllTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(error => {
      res.status(500).json({ message: "Failed to get tasks: " + error });
    });
}

function addTask(req, res) {
  model
    .addTask(req.body)
    .then(task => {
      res.status(201).json(task);
    })
    .catch(error => {
      res.status(500).json({
        message: "Error adding the new task: " + error.message
      });
    });
}

//Middleware
function validateProject(req, res, next) {
    if (Object.keys(req.body).length) {
        if(req.body.project_name){
            next();

        }
        else 
        {
            res.status(400).json({ message: "project name is required!" });
        }
        
      } 
      else 
      {
        res.status(400).json({ message: "missing project data" });
      }
}
function validateTask(req, res, next) {
    if (Object.keys(req.body).length) {
        if(req.body.task_description && req.body.project_id){
            next();

        }
        else 
        {
            res.status(400).json({ message: "Description and project_id fields are required!" });
        }
        
      } 
      else 
      {
        res.status(400).json({ message: "missing task data" });
      }
}
function validateResource(req, res, next) {
    if (Object.keys(req.body).length) {
        if(req.body.resource_name){
            next();

        }
        else 
        {
            res.status(400).json({ message: "Resource name is required!" });
        }
        
      } 
      else 
      {
        res.status(400).json({ message: "missing resource data" });
      }
}

module.exports = router;
