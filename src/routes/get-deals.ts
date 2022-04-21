import { FastifyInstance, RouteOptions } from 'fastify';
import { fetchAllDeals } from '../controllers/deals.controller';

export default function getList(fastify: FastifyInstance): RouteOptions {
	return {
		method: 'GET',
		url: '/',
		handler: async () => {
			return fetchAllDeals(fastify);
		},
	};
}
