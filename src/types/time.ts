import * as TypeUtils from '../type-utils';

export const types = {
	postgres: 'TIME',
	mysql: 'TIME',
	websql: 'INTEGER',
	odata: {
		name: 'Edm.DateTime',
	},
};

export const fetchProcessing = (data: any) => {
	if (data != null) {
		// We append the date of the epoch so that we can parse this as a valid date.
		return new Date('Thu, 01 Jan 1970 ' + data);
	}
	return data;
};

export const validate = async (value: any, required: boolean) => {
	const date = await TypeUtils.validate.date(value, required);
	if (date == null) {
		return date;
	}
	return date.toLocaleTimeString();
};
