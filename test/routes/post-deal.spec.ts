import { build } from '../helper';
import { generateTestDb, destroyTestDb } from '../dummy-data';
import { DealsStatuses } from '../../src/models/deals.model';

const app = build();

describe('POST v1/deals', () => {
	beforeEach(async () => {
		await generateTestDb(app);
	});

	afterEach(async () => {
		await destroyTestDb(app);
	});

	it('should create new Deal and return it', async () => {
		const res = await app.inject({
			url: 'v1/deals',
			method: 'POST',
			payload: {
				title: 'Amazing Deal',
				stage: 'Open',
				value: 300,
				status: DealsStatuses.lost,
			},
		});

		const response = res.json();

		expect(response).toEqual(expect.objectContaining({
			title: 'Amazing Deal',
			stage: 'Open',
		}));
	});
	it('should throw an error if body does not contain all properties', async () => {
		const res = await app.inject({
			url: 'v1/deals',
			method: 'POST',
			payload: {
				title: 'Amazing Deal',
			},
		});

		const response = res.json();

		expect(response).toEqual(expect.objectContaining({
			error: 'Bad Request',
			statusCode: 400,
		}));
	});
});
