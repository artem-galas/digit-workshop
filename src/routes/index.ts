import {FastifyInstance} from 'fastify'
import getDeals from './get-deals';
import postDeal from './post-deal';

export default async function (fastify: FastifyInstance) {
	fastify.route(getDeals(fastify));
	fastify.route(postDeal(fastify));
}
