import { FastifyInstance, RouteOptions } from 'fastify';

export default function getList(fastify: FastifyInstance): RouteOptions {
	return {
		method: 'GET',
		url: '/',
		handler: async () => {
			return []
		},
	};
}
