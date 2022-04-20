import { FastifyInstance } from 'fastify';

export interface DealsModel {
	id: number;
	title: string;
	stage: string;
	value: number;
	status: DealsStatuses;
}

export const enum DealsStatuses {
	open = 'open',
	won = 'wont',
	lost = 'lost'
}

export async function getAllDeals(fastify: FastifyInstance) {
	return fastify.knex<DealsModel>('deals');
}
