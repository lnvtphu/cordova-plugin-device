var exec = cordova.require('cordova/exec');

var DeviceInfoA = function() {
    console.log('InfoDevice instanced');
};

DeviceInfoA.prototype.coolMethod = function(arg0, onSuccess, onError) {
    var errorCallback = function(obj) {
        onError(obj);
    };

    var successCallback = function(obj) {
        onSuccess(obj);
    };

    exec(successCallback, errorCallback, 'DeviceInfoA', 'getInfo', [arg0]);
};

if (typeof module != 'undefined' && module.exports) {
    module.exports = DeviceInfoA;
}