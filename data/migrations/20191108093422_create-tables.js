exports.up = function(knex) {
  return knex.schema
    .createTable("projects", table => {
      table.increments("project_id");
      table.string("project_name", 128).notNullable();
      table.text("project_description");
      table
        .boolean("project_completed", 128)
        .notNullable()
        .defaultTo(0);
    })
    .createTable("resources", table => {
      table.increments("resource_id");
      table
        .string("resource_name", 128)
        .unique()
        .notNullable();
      table.text("resource_description");
    })
    .createTable("tasks", table => {
      table.increments("task_id");
      table.text("task_description").notNullable();
      table.text("task_notes");
      table
        .boolean("task_completed", 128)
        .notNullable()
        .defaultTo(0);
      table
        .integer("project_id")
        .unsigned()
        // it should not be nullable
        .notNullable()
        // it needs to reference the id on the table
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    })
    .createTable("project_resources", table => {
      table.increments("project_resources_id");
      table
        .integer("project_id")
        .unsigned()
        // it should not be nullable
        .notNullable()
        // it needs to reference the id on the table
        .references("project_id")
        .inTable("projects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      table
        .integer("resource_id")
        .unsigned()
        // it should not be nullable
        .notNullable()
        // it needs to reference the id on the table
        .references("resource_id")
        .inTable("resources")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("tasks")
    .dropTableIfExists("resources")
    .dropTableIfExists("projects");
};
