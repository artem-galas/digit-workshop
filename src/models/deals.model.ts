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


export async function createNewDeals(fastify: FastifyInstance, data: any) {
	return fastify.knex<DealsModel>('deals')
		.insert(data);
}

export async function getDealById(fastify: FastifyInstance, id: number) {
	return fastify.knex<DealsModel>('deals')
		.where({id})
		.first();
}
