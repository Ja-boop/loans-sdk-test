/**
 * @vitest-environment jsdom
 */
import { afterEach, describe, expect, it, vi } from 'vitest';
import npmPackage from '../index';

describe('NPM Package', () => {
    it('should be an object', () => {
        expect(npmPackage).to.have.property('getLoanIntent');
    });
});
