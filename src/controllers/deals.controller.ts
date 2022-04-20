import { FastifyInstance } from 'fastify';
import { createNewDeals, getAllDeals, getDealById } from '../models/deals.model';
import { PostDealBody } from '../dto/deal.dto';

export async function fetchAllDeals(fastify: FastifyInstance) {
	try {
		return await getAllDeals(fastify);
	} catch (e) {
		throw e;
	}
}

export async function addDeal(fastify: FastifyInstance, data: PostDealBody) {
	try {
		const [id] = await createNewDeals(fastify, data);
		return await getDealById(fastify, id);
	} catch (e) {
		throw e;
	}
}

export async function fetchDealById(fastify: FastifyInstance, id: number) {
	try {
		return getDealById(fastify, id);
	} catch (e) {
		throw e;
	}
}
