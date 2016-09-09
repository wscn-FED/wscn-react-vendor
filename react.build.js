var path = require('path');
var fileUtils = require('./fileUtils');
var fsExtra = require('fs-extra');


var distDir = path.join(__dirname, 'dist');
var nodeModulesDir = path.join(__dirname, './node_modules');


var reactProdPath = path.join(nodeModulesDir, 'react/dist/react-with-addons.min.js');
var reactDevPath = path.join(nodeModulesDir, 'react/dist/react-with-addons.js');
var reactDomPath = path.join(nodeModulesDir, 'react-dom/dist/react-dom.min.js');
var axiosPath = path.join(nodeModulesDir, 'axios/dist/axios.min.js');

var prodCode = fileUtils.concatFileContent([reactProdPath, reactDomPath,axiosPath]),
    devCode = fileUtils.concatFileContent([reactDevPath, reactDomPath,axiosPath]);

fsExtra.outputFile(
    path.join(distDir, 'wscn-react-vendor.min.js'),
    prodCode,function () {

    });

fsExtra.outputFile(
    path.join(distDir, 'wscn-react-vendor.js'),
    devCode,function () {

    });

