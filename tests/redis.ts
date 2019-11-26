import Redis from 'ioredis';

let rc = new Redis();

beforeEach((done) => {
    rc.flushall(done);
});
afterAll(() => {
    rc.disconnect();
});

export default rc;