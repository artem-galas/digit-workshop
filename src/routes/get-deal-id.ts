import { FastifyInstance, RouteOptions } from 'fastify';
import { fetchDealById } from '../controllers/deals.controller';
import { GetDealParams, GetDealSchema } from '../dto/deal.dto';

export default function getDealId(fastify: FastifyInstance): RouteOptions {
	return {
		method: 'GET',
		url: '/:id',
		schema: {
			params: GetDealSchema,
		},
		handler: async (request, reply) => {
			const { id } = request.params as GetDealParams;
			const deal = await fetchDealById(fastify, id);

			if (!deal) {
				reply.code(404).send(new Error(`Deal not found by id: ${id}`));
			}

			return deal;
		},
	};
}
