"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OutlookMessage = /** @class */ (function () {
    function OutlookMessage(message) {
        this.selected = false;
        this._id = message._id;
        this.contact = message.contact;
        this.read = message.read;
        this.subject = message.subject;
        this.folder = message.folder;
        this.date = message.date;
        this.body = message.body;
        this.attachments = message.attachments;
        this.labels = message.labels;
    }
    OutlookMessage.prototype.getBodyTeaser = function () {
        var clearBody = this.body.replace(/<[^<>]+?>/gm, ' ').replace(/(\s{2}|\n)/gm, ' ');
        var teaserMaxLength = 55 - this.subject.length;
        return clearBody.length > teaserMaxLength ? clearBody.substring(0, teaserMaxLength) + '...' : clearBody;
    };
    OutlookMessage.prototype.hasAttachments = function () {
        return this.attachments && this.attachments.length;
    };
    OutlookMessage.prototype.fullAttachmentsTooltip = function () {
        return 'FILES: ' + this.attachments.map(function (it) { return it.name; }).join(', ');
    };
    return OutlookMessage;
}());
exports.OutlookMessage = OutlookMessage;
//# sourceMappingURL=outlook-message.class.js.map