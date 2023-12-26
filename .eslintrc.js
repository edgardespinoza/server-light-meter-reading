module.exports = {
	overrides: [
		{
			files: ["*.ts", "*.tsx"],
			parserOptions: {
				project: ["./tsconfig.json"],
				"ecmaVersion": 6,
				"sourceType": "module",
				"ecmaFeatures": {
					"jsx": true,
					"modules": true
				}
			},
			
		},
	],
};
