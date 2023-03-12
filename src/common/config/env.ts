import * as ENV from 'dotenv';

export interface IProcessEnv {
	APP_PORT: number;
}

function get(): IProcessEnv {
	ENV.config();
	const temp = JSON.parse(JSON.stringify(process.env));
	return temp as IProcessEnv;
}

export const Env = { ...get() } as const;

export function env<T>(key: keyof IProcessEnv, defaultValue: T): T {
	return (Env.hasOwnProperty(key) ? Env[key] : defaultValue) as T;
}
