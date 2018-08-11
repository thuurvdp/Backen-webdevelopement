module.exports = {
	"parser": "babel-eslint",
	"env": {
		"browser": true,
		"node": true
	},
	"extends": "airbnb",
	"rules": {
		"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
		"import/prefer-default-export": "off",
		"import/no-extraneous-dependencies": "off",
		"max-len": "off",
		"comma-dangle": [
			"error",
			"always-multiline"
		],
		"indent": [
			"error",
			"tab",
			{
				"SwitchCase": 1
			}
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"eqeqeq": [
			"error",
			"always"
		],
		"no-empty-function": "error",
		"object-curly-spacing": [
			"error",
			"always"
		],
		"no-tabs": 0,
		"react/prop-types": 0,
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"react/forbid-prop-types": 0,
		"arrow-body-style": ["error", "as-needed"],
		"jsx-a11y/label-has-for": 0,
		"no-plusplus": "off",
		"no-restricted-syntax": 0,
		"quotes": [
			"error",
			"double",
			{
				"allowTemplateLiterals": true
			}
		]
	}
};
