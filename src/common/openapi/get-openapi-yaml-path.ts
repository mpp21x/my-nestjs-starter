import { getAssetsFolderPath } from '@common/assets/get-assets-folder-path';

export function getOpenapiYamlPath(defaultValue = 'openapi-spec.yml'): string {
	const path = getAssetsFolderPath();
	return `${path}/${defaultValue}`;
}
