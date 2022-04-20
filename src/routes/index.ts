import {FastifyInstance} from 'fastify'
import getDeals from './get-deals';

export default async function (fastify: FastifyInstance) {
	fastify.route(getDeals(fastify));
}
