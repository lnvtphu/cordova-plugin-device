var exec = require('cordova/exec');

var DeviceInfo = function() {
    console.log('DeviceInfo instanced');
};

DeviceInfo.prototype.coolMethod = function(onSuccess, onError) {
    var errorCallback = function(obj) {
        onError(obj);
    };

    var successCallback = function(obj) {
        onSuccess(obj);
    };

    exec(successCallback, errorCallback, 'DeviceInfo', 'coolMethod', []);
};
module.exports = DeviceInfo;