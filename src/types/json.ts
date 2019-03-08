import * as Promise from 'bluebird';
import * as TypeUtils from '../type-utils';

export const types = {
	postgres: 'TEXT',
	mysql: 'TEXT',
	websql: 'TEXT',
	odata: {
		name: 'Edm.String', // TODO: What should this really be?
	},
};

export const fetchProcessing = Promise.method(JSON.parse);

export const validate = TypeUtils.validate.checkRequired(value => {
	try {
		return JSON.stringify(value);
	} catch {
		throw new Error('cannot be turned into JSON: ' + value);
	}
});
