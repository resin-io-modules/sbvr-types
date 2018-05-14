import { runTest } from './helpers';

runTest<any, NullableDate>('Date Time', (test) => {
	const now = new Date();
	describe('fetchProcessing', () => {
		test.fetch(now, now);
		test.fetch(now.toString(), now);
		test.fetch(now.getTime(), now);
		test.fetch(null, null);
	});

	describe('validate', () => {
		test.validate(now, true, now);
		test.validate(now.getTime(), true, now);
		test.validate(now.toString(), true, now);
	});
});