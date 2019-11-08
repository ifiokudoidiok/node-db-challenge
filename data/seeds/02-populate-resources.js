
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { resource_name: 'resource name here',
         resource_description: 'the resource description',
         },
         { resource_name: 'resource name2 here',
         resource_description: 'the resource description2',
         },
         { resource_name: 'resource name3 here',
         resource_description: 'the resource description3',
         },
         { resource_name: 'resource name4 here',
         resource_description: 'the resource description4',
         }
      ]);
    });
};
