module.exports = (plop) => {
	//component
	plop.setGenerator("component", {
		description: "Create a component",
		// User input prompts provided as arguments to the template
		prompts: [
			{
				// Raw text input
				type: "input",
				// Variable name for this input
				name: "name",
				// Prompt to display on command line
				message: "Enter component name",
			},
		],
		actions: [
			{
				// Add a new file
				type: "add",
				// Path for the new file
				path: "src/components/{{pascalCase name}}/{{pascalCase name}}.tsx",
				// Handlebars template used to generate content of new file
				templateFile: "templates/component.hbs",
			},
			{
				// Add a new file
				type: "add",
				// Path for the new file
				path: "../components/{{pascalCase name}}/index.ts",
				// Handlebars template used to generate content of new file
				templateFile: "templates/index.hbs",
			},
			{
				// Add a new file
				type: "add",
				// Path for the new file
				path: "../components/{{pascalCase name}}/styles.scss",
				// Handlebars template used to generate content of new file
				templateFile: "templates/styles.hbs",
			},
			{
				// Add a new file
				type: "add",
				// Path for the new file
				path: "../components/{{pascalCase name}}/types.ts",
				// Handlebars template used to generate content of new file
				templateFile: "templates/types.hbs",
			},
		],
	})
	//page
	plop.setGenerator("page", {
		description: "Create a page",
		// User input prompts provided as arguments to the template
		prompts: [
			{
				// Raw text input
				type: "input",
				// Variable name for this input
				name: "name",
				// Prompt to display on command line
				message: "Enter page name",
			},
		],
		actions: [
			{
				// Add a new file
				type: "add",
				// Path for the new file
				path: "../pages/{{pascalCase name}}/{{pascalCase name}}.tsx",
				// Handlebars template used to generate content of new file
				templateFile: "templates/component.hbs",
			},
			{
				// Add a new file
				type: "add",
				// Path for the new file
				path: "../pages/{{pascalCase name}}/index.ts",
				// Handlebars template used to generate content of new file
				templateFile: "templates/index.hbs",
			},
			{
				// Add a new file
				type: "add",
				// Path for the new file
				path: "../pages/{{pascalCase name}}/styles.scss",
				// Handlebars template used to generate content of new file
				templateFile: "templates/styles.hbs",
			},
			{
				// Add a new file
				type: "add",
				// Path for the new file
				path: "../pages/{{pascalCase name}}/types.ts",
				// Handlebars template used to generate content of new file
				templateFile: "templates/types.hbs",
			},
		],
	})
}
