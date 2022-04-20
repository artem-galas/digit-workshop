import { FastifyInstance, RouteOptions } from 'fastify';
import { getAllDeals } from '../models/deals.model';

export default function getList(fastify: FastifyInstance): RouteOptions {
	return {
		method: 'GET',
		url: '/',
		handler: async () => {
			return getAllDeals(fastify);
		},
	};
}
