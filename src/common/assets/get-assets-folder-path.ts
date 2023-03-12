import fs from 'fs';

export function getAssetsFolderPath() {
	const productionSchemaDirectory = `${process.cwd()}/assets`;
	const developSchemaDirectory = `${process.cwd()}/src/assets`;

	return fs.existsSync(productionSchemaDirectory)
		? productionSchemaDirectory
		: developSchemaDirectory;
}
