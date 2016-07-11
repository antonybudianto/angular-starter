declare const ENV: string;

const isEnv = (env: string): boolean =>  env === ENV;
const getCurrentEnv = (): string => ENV;

export const envUtil = {
    isEnv,
    getCurrentEnv
};
