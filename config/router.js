const express = require('express');

const model = require('../data/db-model');

const router = express.Router();

router.get('/projects', (req, res) => {
    model.getAllProjects()
    .then(projects => {
      res.json(projects);
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to get projects: '+error });
    });
  });

  router.post('/projects', (req, res) => {
    model.addProject(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(error => {
        
        res.status(500).json({
          message: 'Error adding the new project: ' + error.message,
        });
      })
    })

  router.get('/resources', (req, res) => {
    model.getAllResources()
    .then(resources => {
      res.json(resources);
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to get resources: '+error });
    });
  });
  router.post('/resources', (req, res) => {
    model.addResource(req.body)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(error => {
        
        res.status(500).json({
          message: 'Error adding the new resource: ' + error.message,
        });
      })
    })

  router.get('/tasks', (req, res) => {
    model.getAllTasks()
    .then(tasks => {
        res.json(tasks);
        // if(tasks.task_completed === 0){

        //     res.json({...tasks,task_completed:false });
        // } else {
        //     res.json({...tasks,task_completed:true });
        // }
    })
    .catch(error => {
      res.status(500).json({ message: 'Failed to get tasks: '+error });
    });
  });
  router.post('/tasks', (req, res) => {
    model.addTask(req.body)
    .then(task => {
        res.status(201).json(task)
    })
    .catch(error => {
        
        res.status(500).json({
          message: 'Error adding the new task: ' + error.message,
        });
      })
    })

module.exports = router;