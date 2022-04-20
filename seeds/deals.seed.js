exports.seed = async function(knex) {
  await knex('deals').insert([
    {
      title: 'Company #1',
      stage: 'Incoming',
      value: 5000,
      status: 'open'
    },
    {
      title: 'Company #2',
      stage: 'Contacts',
      value: 300,
      status: 'open'
    },
    {
      title: 'Company #3',
      stage: 'Contacts',
      value: 150,
      status: 'lost'
    },
  ]);
};
