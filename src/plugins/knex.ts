import fp from 'fastify-plugin';
import { Knex } from 'knex';
import { initDatabase } from '../helpers/db';

const path = require('path');

const BASE_PATH = path.join(__dirname, '../');

const defaultSettings = {
	client: 'mysql2',
	connection: process.env.DB_CONNECTION_STRING,
	migrations: {
		directory: path.join(BASE_PATH, 'migrations'),
	},
};

type KnexConfigKeys = 'development' | 'production' | 'test';

const knexConfig: Record<KnexConfigKeys, Knex.Config> = {
	development: {
		...defaultSettings,
	},

	production: {
		...defaultSettings,
	},

	test: {
		...defaultSettings,
		client: 'sqlite3',
		connection: { filename: ':memory:' },
		useNullAsDefault: true,
	},
};

export default fp(async (fastify, opts) => {
	const env: KnexConfigKeys = (process.env.NODE_ENV as KnexConfigKeys) || 'development';
	await fastify.register(require('fastify-knexjs'), knexConfig[env]);
	await initDatabase(fastify);
});
