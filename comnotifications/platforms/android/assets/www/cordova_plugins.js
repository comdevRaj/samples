cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-device.device",
    "file": "plugins/cordova-plugin-device/www/device.js",
    "pluginId": "cordova-plugin-device",
    "clobbers": [
      "device"
    ]
  },
  {
    "id": "cordova-plugin-inappbrowser.inappbrowser",
    "file": "plugins/cordova-plugin-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-plugin-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  },
  {
    "id": "cordova-sqlite-storage.SQLitePlugin",
    "file": "plugins/cordova-sqlite-storage/www/SQLitePlugin.js",
    "pluginId": "cordova-sqlite-storage",
    "clobbers": [
      "SQLitePlugin"
    ]
  },
  {
    "id": "cordova-plugin-ms-azure-mobile-apps.AzureMobileServices.Ext",
    "file": "plugins/cordova-plugin-ms-azure-mobile-apps/www/MobileServices.Cordova.Ext.js",
    "pluginId": "cordova-plugin-ms-azure-mobile-apps",
    "runs": true
  },
  {
    "id": "cordova-plugin-ms-azure-mobile-apps.AzureMobileServices",
    "file": "plugins/cordova-plugin-ms-azure-mobile-apps/www/MobileServices.Cordova.js",
    "pluginId": "cordova-plugin-ms-azure-mobile-apps",
    "clobbers": [
      "WindowsAzure"
    ]
  },
  {
    "id": "kunder-cordova-plugin-webview.webview",
    "file": "plugins/kunder-cordova-plugin-webview/www/webViewPlugin.js",
    "pluginId": "kunder-cordova-plugin-webview",
    "merges": [
      "webview"
    ]
  },
  {
    "id": "cordova-plugin-themeablebrowser.themeablebrowser",
    "file": "plugins/cordova-plugin-themeablebrowser/www/themeablebrowser.js",
    "pluginId": "cordova-plugin-themeablebrowser",
    "clobbers": [
      "cordova.ThemeableBrowser"
    ]
  },
  {
    "id": "phonegap-plugin-push.PushNotification",
    "file": "plugins/phonegap-plugin-push/www/push.js",
    "pluginId": "phonegap-plugin-push",
    "clobbers": [
      "PushNotification"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-device": "2.0.1",
  "cordova-plugin-inappbrowser": "1.5.0",
  "cordova-sqlite-storage": "1.4.8",
  "cordova-plugin-ms-azure-mobile-apps": "2.0.0",
  "cordova-plugin-whitelist": "1.3.3",
  "kunder-cordova-plugin-webview": "2.6.0",
  "cordova-plugin-themeablebrowser": "0.2.17",
  "phonegap-plugin-push": "2.1.3"
};
// BOTTOM OF METADATA
});