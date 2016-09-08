var fs = require('fs')
module.exports = {
    concatFileContent: function (files, eol, encoding) {
        eol = (eol === undefined) ? '\n' : eol;
        encoding = encoding || 'utf-8';

        var contents = files.map(function (file) {
            return fs.readFileSync(file, encoding);
        });

        return contents.join(eol);
    },
    exists: function (filepath, options) {
        options = options || {}

        if (!filepath) return false;

        var root = options.root;
        var fullpath = (root) ? path.join(root, filepath) : filepath;

        try {
            return fs.statSync(fullpath).isFile()
        } catch (e) {
            return false
        }
    }
};