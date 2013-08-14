/**
 * SMS Composer plugin for Cordova
 * window.plugins.SMSComposer
 *
 * @constructor
 */
function SMSComposer()
{
  this.resultCallback = null;
};

SMSComposer.ComposeResultType = {
  Cancelled:0,
  Sent:1,
  Failed:2,
  NotSent:3
};

SMSComposer.prototype.showSMSComposer = function(toRecipients, body)
{
  cordova.exec(function () {}, function (err) {}, "SMSComposer","showSMSComposer",[toRecipients, body]);
};

SMSComposer.prototype.showSMSComposerWithCB = function(cbFunction,toRecipients,body)
{
  this.resultCallback = cbFunction;
  this.showSMSComposer.apply(this,[toRecipients,body]);
};

SMSComposer.prototype._didFinishWithResult = function(res)
{
  this.resultCallback(res);
};

cordova.addConstructor(function() {

  if(!window.plugins)	{
    window.plugins = {};
  }
  window.plugins.smsComposer = new SMSComposer();
});
