const fs = require('fs');
var path = require('path');

function resolveApp(relativePath) {
    return path.resolve(relativePath);
}

var dirs = resolveApp('build-core-js');
require('core-js-builder')({
    modules: ['es6.promise', 'es6.object.assign', 'es6.string.includes'], // modules / namespaces
    blacklist: [],    // blacklist of modules / namespaces, by default - empty list
    library: false,                // flag for build without global namespace pollution, by default - false
    umd: true                      // use UMD wrapper for export `core` object, by default - true
}).then(function (code) {
    fs.writeFileSync(path.join('core-js.min.js'), code);
}).catch(function (error) {
    // ...
});