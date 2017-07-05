﻿'use strict';

const chai = require('chai');
const assert = chai.assert;
const files = c_require('core/common/files.js');

describe('files', () => {
    describe('#filesInDirectory()', () => {
        it('should not throw an exception on an invalid/empty directory', async(done) => {
            assert.deepEqual([], await files.filesInDirectory('_foobarbaz_'));
            done();
        });

        it('should return a list of files in a directory', async(done) => {
            const f = await files.filesInDirectory(__dirname);
            const known = ['arguments.js', 'files.js', 'git.js', 'middleware.js', 'npm.js', 'reddit.js'];
            for (let file of known) {
                assert.isTrue(f.includes(file));
            }
            done();
        });
    });
});
