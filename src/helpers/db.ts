import { FastifyInstance } from 'fastify';

export async function initDatabase(fastify: FastifyInstance) {
	if (process.env.NODE_ENV === 'test') {
		return;
	}
	await runMigrations(fastify);
	await runSeeds(fastify);
}

async function runMigrations(fastify: FastifyInstance) {
	try {
		await fastify.knex.migrate.latest({
			directory: 'migrations',
			tableName: 'db_migrations',
		});
		console.info('Successfully applied migrations.');
	} catch (err) {
		console.error(err, 'Failed to run DB migrations');
		throw err;
	}
}

async function runSeeds(fastify: FastifyInstance) {
	try {
		const deals = await fastify.knex('deals');
		if (deals.length > 0) {
			console.info('Data already exist');
			return;
		}

		await fastify.knex.seed.run({
			directory: 'seeds',
		});
		console.info('✔️ Successfully add Data');
	} catch (err) {
		console.error(err, '❌ Failed to add Data');
		throw err;
	}
}
