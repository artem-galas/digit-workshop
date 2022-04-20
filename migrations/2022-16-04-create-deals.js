exports.up = function(knex) {
    return knex.schema.createTable('deals', (t) => {
        t.increments();
        t.string('title');
        t.string('stage');
        t.double('value');
        t.enum('status', ['open', 'won', 'lost'])
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('deals');
};
