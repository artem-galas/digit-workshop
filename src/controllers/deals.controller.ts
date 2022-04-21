import { FastifyInstance } from 'fastify';
import { getAllDeals } from '../models/deals.model';

export async function fetchAllDeals(fastify: FastifyInstance) {
	try {
		return await getAllDeals(fastify);
	} catch (e) {
		throw e;
	}
}
