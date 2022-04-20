import { FastifyInstance, RouteOptions } from 'fastify';
import { addDeal } from '../controllers/deals.controller';
import { PostDealBody, PostDealSchema } from '../dto/deal.dto';

export default function postDeal(fastify: FastifyInstance): RouteOptions {
	return {
		method: 'POST',
		url: '/',
		schema: {
			body: PostDealSchema,
		},
		handler: async (request) => {
			const data = request.body as PostDealBody;
			return await addDeal(fastify, data);
		},
	};
}
