import fs from 'fs';
export function getSrcFolderPath(): string {
	const productionSchemaDirectory = `${process.cwd()}/src`;
	const developSchemaDirectory = `${process.cwd()}/src`;

	return fs.existsSync(productionSchemaDirectory)
		? productionSchemaDirectory
		: developSchemaDirectory;
}
