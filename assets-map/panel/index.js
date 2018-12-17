let path = require('fire-path');
let fs = require('fire-fs');
let electron = require('electron');
let AssetsMap =  Editor.require('packages://assets-map/src/AssetsMap');

const SETTING_FILE = path.join(Editor.projectInfo.path, 'temp', 'assets-map.json');

Editor.Panel.extend({
    // css style for panel
    style: `
    :host { margin: 5px; }
    h2 { color: #f90; }
  `,

    // html template for panel
    template: fs.readFileSync(Editor.url('packages://assets-map/panel/index.html', 'utf8')) + "",

    // element and variable binding

    // method executed when template and styles are successfully loaded and initialized
    ready() {
        let setting;
        try {
            setting = require(SETTING_FILE);
        } catch (e) {

        }

        new window.Vue({
            el: this.shadowRoot,
            created() {
                console.log("---->created");
                if (setting) {
                    this.protoPath = setting.protoPath;
                    this.jsPath = setting.jsPath;
                }
                console.log(window.buildOptions);
            },

            data: {
                logView: "",
            },

            methods: {
                execute() {
                    let version = electron.remote.app.getVersion();
                    let array = version.split('.').map(i => parseInt(i));
                    if (array[0] === 1 && array[2] < 10) {
                        Editor.Dialog.messageBox({ type:'error', message: '本插件只支持Cocos Creator 1.10以上版本！' });
                        return;
                    }

                    Editor.Ipc.sendToMain('assets-map:getBuildOptions', (error, options) => {
                        let ga = new AssetsMap();
                        ga.findAssets(options, () => {
                            this.logView = ga.getGroupFiles();
                            ga.saveToFile(SETTING_FILE);
                        });
                    });
                },
            },

        });
    },
});
