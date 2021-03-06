/**
 * Created by SkyAo on 16/5/8.
 *
 * 如果没有传入正确的命令，默认的动作
 *
 * 都是抽象类Command的子类
 */
var Command = require('./command');
module.exports = function(msg, wsServer, appConfig, ws) {

    var Default = function() {
        this.run = function () {
            appConfig.log.info('To WebSocket: 格式错误');
            ws.send(JSON.stringify({
                command: 'error',
                content: 'Error, Not Standard Data Format(4002)',
                time: new Date().getTime()
            }));
        };
    };

    Default.prototype = new Command();

    return Default;
};