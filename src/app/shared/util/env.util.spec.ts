import { envUtil } from './env.util';
import { CONSTANTS } from '../index';

declare let ENV: string;

const { ENVS } = CONSTANTS;

describe('Env Util', () => {
    beforeEach(() => {
        ENV = ENVS.TESTING;
    });

    it('should return current global ENV', () => {
        expect(envUtil.getCurrentEnv()).toEqual(ENVS.TESTING);
    });

    it('should return true for correct env', () => {
        expect(envUtil.isEnv(ENVS.TESTING)).toBeTruthy();
    });

    it('should return false for incorrect env', () => {
        expect(envUtil.isEnv(ENVS.PROD)).toBeFalsy();
    });
});
