{
	types:
		postgres: 'BIGINT'
		mysql: 'BIGINT'
		websql: 'BIGINT'
		odata:
			name: 'Edm.Int64'

	nativeFactTypes:
		Integer: TypeUtils.nativeFactTypeTemplates.comparison
		Real: TypeUtils.nativeFactTypeTemplates.comparison

	validate: TypeUtils.validate.integer
}
