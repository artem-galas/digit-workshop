import { build } from '../helper'
import { generateTestDb, destroyTestDb } from '../dummy-data'

const app = build();

describe('GET v1/deals', () => {
    beforeEach(async () => {
        await generateTestDb(app);
    });

    afterEach(async () => {
        await destroyTestDb(app);
    });

    it('should return list', async () => {
       const res = await app.inject({
           url: 'v1/deals'
       });

       const response  = res.json();

       expect(response).toHaveLength(3);
   });
});
