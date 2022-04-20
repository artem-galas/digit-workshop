import {FastifyInstance} from 'fastify';
import knex from './plugins/knex';
import sensible from './plugins/sensible';

const app = async (
    fastify: FastifyInstance,
): Promise<void> => {
    fastify
        .register(sensible)
        .register(knex)
        .register(require('./routes'), {prefix: 'v1/deals'})
}

export default app;
export { app }
