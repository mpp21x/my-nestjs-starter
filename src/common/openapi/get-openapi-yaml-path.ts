import { getSrcFolderPath } from '@common/assets/get-src-folder-path';
import { join } from 'path';

export function getOpenapiYamlPath(defaultValue = 'openapi-spec.yml'): string {
	const path = getSrcFolderPath();
	return join(path, defaultValue);
}
