
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
  	table.increments();
  	table.string('title');
  	table.text('article');
  	table.string('keywords');
  	table.string('img');
  	table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('posts');
};
