window.utils = {
    initialize: function(){
        this.bindEvents();
    },
    bindEvents: function(){
      document.addEventListener('deviceready',this.deviceReady,false);
    },
    deviceReady:function(){
      try{
      var hubName = 'CM-Notification-Hub';
var connectionString = 'Endpoint=sb://cm-notification-hub.servicebus.windows.net/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=mY/GBFhtPKXXlDouSkOqczbAIMELyqB2a09uJCpj/vc=';
var apiVersion = "?api-version=2015-01";
var expiresInMins = 129600;

var endpoint;
var sasKeyValue;
var sasKeyName;
var targetUri;
ParseHubConnectionString();
function ParseHubConnectionString() {

    var parts = connectionString.split(';');
    if(parts.length != 3)
        throw "Error parsing connection string";

    parts.forEach(function(part){
        if (part.indexOf('Endpoint') == 0){
            endpoint = 'https' + part.substring(11);
        } else if(part.indexOf('SharedAccessKeyName') == 0){
            sasKeyName = part.substring(20);
        } else if(part.indexOf('SharedAccessKey') == 0) {
            sasKeyValue = part.substring(16);
        }
    });

    targetUri = endpoint + hubName;
}


  var token = getSelfSignedToken(targetUri,sasKeyValue,sasKeyName, 60);
function getSelfSignedToken(targetUri, sharedKey, ruleId,
expiresInMins) {
targetUri = encodeURIComponent(targetUri.toLowerCase()).toLowerCase();

// Set expiration in seconds
var expireOnDate = new Date();
expireOnDate.setMinutes(expireOnDate.getMinutes() + expiresInMins);
var expires = Date.UTC(expireOnDate.getUTCFullYear(), expireOnDate
.getUTCMonth(), expireOnDate.getUTCDate(), expireOnDate
.getUTCHours(), expireOnDate.getUTCMinutes(), expireOnDate
.getUTCSeconds()) / 1000;
var tosign = targetUri + '\n' + expires;

// using CryptoJS
var signature = CryptoJS.HmacSHA256(tosign, sharedKey);
var base64signature = signature.toString(CryptoJS.enc.Base64);
var base64UriEncoded = encodeURIComponent(base64signature);

// construct autorization string
var token = "SharedAccessSignature sr=" + targetUri + "&sig="
+ base64UriEncoded + "&se=" + expires + "&skn=" + ruleId;
// console.log("signature:" + token);
return token;
};


// fetchxml('293217839457','android');
function fetchxml(handle,platform){
  var url = "templates/"+platform+".xml"
$.ajax({
type: "GET",
url: url,
dataType: "xml",
success: function(xml) {
  var string = '';
  $(xml).find('Tags').each(function(index){
    console.log(this);
              this.innerHTML = "Renga";
          });
          var tagName = (platform=="android")?"GcmRegistrationId":"DeviceToken"
          $(xml).find(tagName).each(function(index){
            console.log(this);
                      this.innerHTML = handle;
                  });
                string = new XMLSerializer().serializeToString(xml);
getRegistrationId(string);
}
}); //close each(
}

function getRegistrationId(xml){
    var deferred = $.Deferred();
    $.ajax({
        type : "POST",
        data : xml,
        url : 'https://cm-notification-hub.servicebus.windows.net/CM-Notification-Hub/Registrations/?api-version=2015-01',
        headers : {
            "Content-Type" : "application/xml",
            "Authorization" : token,
            "x-ms-version":"2015-01"
        },
    }).done(function(data, status, response) {
        // alert(JSON.stringify(response));responseText
        $(response.responseText).find('RegistrationId').each(function(index){
          var notificationHubId = this.innerHTML;
          alert('NotificationHubId:'+notificationHubId);
          // try{
            // var id={ "NotificationHubId":NotificationHubId};
          localStorage.setItem("NotificationHubId", notificationHubId);
// }catch(e){alert(e.message);}
          cordova.ThemeableBrowser.open('https://www.comcastnow.com', '_blank', {
    statusbar: {
        color: '#ffffffff'
    }
  });
                });
        var location = response.getResponseHeader("Content-Location");
        deferred.resolve(location);
    }).fail(function(response, status, error) {
      // alert(JSON.stringify(response));
        console.log("Error: " + error);
        deferred.reject("Error: " + error);
    });
    return deferred.promise();
    }



    alert(localStorage.getItem("NotificationHubId"));
        var GCM_SENDER_ID = '53687513119';
        // if(!localStorage.getItem("NotificationHubId")){

        if(device.platform == 'android' || device.platform == 'Android'){
          // alert(device.platform);
          var pushInit = PushNotification.init({
        "android": {
            "senderID": GCM_SENDER_ID,
            "sound": true,
            "clearBadge":true
        }
    });
  }else if((device.platform).toLowerCase != 'android' && device.platform != 'browser'){
    var pushInit = PushNotification.init({
        "ios": {
              badge: true,
              sound: true,
              alert: true,
              clearBadge:true
        }
    });
  }else{
    alert("your running in browser");
    var ref = cordova.ThemeableBrowser.open('https://www.comcastnow.com', '_blank', {
  statusbar: {
  color: 'transparent'
  }
  });
  ref.addEventListener('exit', function(){
    navigator.app.exitApp();
  })
  }
if(device.platform!='browser' && device.platform!='BROWSER'){
    pushInit.on("registration", function(data){
      alert(JSON.stringify(data));
      var platform = device.platform;
            var handle = data.registrationId;
            if (platform == 'android' || platform == 'Android') {
fetchxml(handle,'android');
            } else{
fetchxml(handle,'ios');
            }
    });
    pushInit.on("notification", function(data){
    notificationBadge = data.Badge_Count;
    if(data.additionalData.foreground == false){
    }
     });
   }


 // }else{
 //   var ref = cordova.ThemeableBrowser.open('https://www.comcastnow.com', '_blank', {
 // statusbar: {
 // color: 'transparent'
 // }
 // });
 // ref.addEventListener('exit', function(){
 //   navigator.app.exitApp();
 // })
 // }


}catch(e){
  alert(e.message);
}





         utils.loadTemplate(['HeaderView'], function() {
    // webview.Show('https://www.comcastnow.com');
    app = new AppRouter();
    Backbone.history.start();
});
    },
    loadTemplate: function(views, callback) {
        var deferreds = [];

        $.each(views, function(index, view) {
            if (window[view]) {
                deferreds.push($.get("templates/"+view + '.html', function(data) {
                    window[view].prototype.template = _.template(data);
                }));
            } else {
                alert(view + " not found");
            }
        });

        $.when.apply(null, deferreds).done(callback);
    },
    refreshDisplay:function(){
        updateSummaryMessage('Loading Data from Azure');
        utils.todoItemTable
            .where({ complete: false })
            .read()
            .then(createTodoItemList, handleError);
    }

};

window.utils.initialize();
