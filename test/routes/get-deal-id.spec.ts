import {build} from '../helper'
import {generateTestDb, destroyTestDb} from '../dummy-data'

const app = build();

describe('GET v1/deals/:id', () => {
    beforeEach(async () => {
        await generateTestDb(app);
    });

    afterEach(async () => {
        await destroyTestDb(app);
    });

    it('should return Deal by ID', async () => {
        const res = await app.inject({
            url: 'v1/deals/1',
            method: 'GET',
        });

        const response = res.json();

        expect(response).toEqual(expect.objectContaining({
            id: 1,
        }));
    });

    it('should throw an error if deal not found', async () => {
        const res = await app.inject({
            url: 'v1/deals/999',
            method: 'GET',
        });

        const response = res.json();

        expect(response).toEqual(expect.objectContaining({
            error: 'Not Found',
            statusCode: 404,
        }));
    });
});
