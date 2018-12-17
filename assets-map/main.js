/*eslint-disable*/
'use strict';
let path = require('path');
let buildOptions = null;
let electron = require('electron');

function onBeforeBuildFinish (options, callback) {
    Editor.log('onBeforeBuildFinish');
    debugger;
    let version = electron.app.getVersion();
    let array = version.split('.').map(i => parseInt(i));
    if (array[0] === 1 && array[2] < 10) {
        Editor.log('assets-map插件只支持Cocos Creator 1.10以上版本！');
        callback();
        return;
    }

    if (options.actualPlatform === 'ios' || options.actualPlatform === 'android') {
        buildOptions = options;

        let AssetsMap = Editor.require('packages://assets-map/src/AssetsMap');
        const resMapFile = path.join(Editor.projectInfo.path, 'temp', 'assets-map.json');
        //构建完成，生成map文件
        Editor.log('原生环境构建完成，准备生成map文件');
        let assetsMap = new AssetsMap();
        assetsMap.findAssets(options, () => {
            assetsMap.saveToFile(resMapFile);
            Editor.log('resMap文件生成完毕');
        });
    }
    
    callback();
}

module.exports = {
    load () {
        Editor.log('assets-map on load');
        Editor.Builder.on('before-change-files', onBeforeBuildFinish);
    },

    unload () {
        // execute when package unloaded
        Editor.Builder.removeListener('before-change-files', onBeforeBuildFinish);
    },

  // register your ipc messages here
    messages: {
        getBuildOptions(event) {
            event.reply(null, buildOptions);
        },

        'settings' () {
            Editor.log('----------build-res----------');
            Editor.Panel.open('assets-map');
        },
    }
};