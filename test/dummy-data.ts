import {FastifyInstance} from 'fastify';
import {DealsModel, DealsStatuses} from '../src/models/deals.model';

const DEALS_TABLE_NAME = 'deals'

export async function generateTestDb(fastify: FastifyInstance) {
    await createDealsDb(fastify.knex);
    await generateDealsData(fastify.knex);
}

export async function createDealsDb(knex: FastifyInstance['knex']) {
    return knex.schema.createTable(DEALS_TABLE_NAME, (t) => {
        t.increments();
        t.string('title');
        t.string('stage');
        t.double('value');
        t.enum('status', ['open', 'won', 'lost'])
    });
}

export async function destroyTestDb(fastify: FastifyInstance) {
    return fastify.knex.schema.dropTable(DEALS_TABLE_NAME);
}

export async function generateDealsData(knex: FastifyInstance['knex']) {
    return knex<DealsModel>(DEALS_TABLE_NAME)
        .insert([
            {
                title: 'Company #1',
                stage: 'Incoming',
                value: 5000,
                status: DealsStatuses.open
            },
            {
                title: 'Company #2',
                stage: 'Contacts',
                value: 300,
                status: DealsStatuses.open
            },
            {
                title: 'Company #3',
                stage: 'Contacts',
                value: 150,
                status: DealsStatuses.lost
            },
        ])
}
