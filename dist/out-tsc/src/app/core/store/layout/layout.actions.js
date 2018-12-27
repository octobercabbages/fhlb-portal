"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LayoutActionTypes;
(function (LayoutActionTypes) {
    LayoutActionTypes["SmartSkin"] = "[Layout]   SmartSkin";
    LayoutActionTypes["FixedHeader"] = "[Layout] FixedHeader";
    LayoutActionTypes["FixedNavigation"] = "[Layout] FixedNavigatio";
    LayoutActionTypes["FixedRibbon"] = "[Layout] FixedRibbon";
    LayoutActionTypes["FixedPageFooter"] = "[Layout] FixedPageFoote";
    LayoutActionTypes["InsideContainer"] = "[Layout] InsideContaine";
    LayoutActionTypes["Rtl"] = "[Layout] Rtl";
    LayoutActionTypes["MenuOnTop"] = "[Layout] MenuOnTop";
    LayoutActionTypes["ColorblindFriendly"] = "[Layout] ColorblindFrie";
    LayoutActionTypes["CollapseMenu"] = "[Layout] CollapseMenu";
    LayoutActionTypes["MinifyMenu"] = "[Layout] MinifyMenu";
    LayoutActionTypes["ShortcutToggle"] = "[Layout] ShortcutToggle";
})(LayoutActionTypes = exports.LayoutActionTypes || (exports.LayoutActionTypes = {}));
var SmartSkin = /** @class */ (function () {
    function SmartSkin(payload) {
        this.payload = payload;
        this.type = LayoutActionTypes.SmartSkin;
    }
    return SmartSkin;
}());
exports.SmartSkin = SmartSkin;
var FixedHeader = /** @class */ (function () {
    function FixedHeader() {
        this.type = LayoutActionTypes.FixedHeader;
    }
    return FixedHeader;
}());
exports.FixedHeader = FixedHeader;
var FixedNavigation = /** @class */ (function () {
    function FixedNavigation() {
        this.type = LayoutActionTypes.FixedNavigation;
    }
    return FixedNavigation;
}());
exports.FixedNavigation = FixedNavigation;
var FixedRibbon = /** @class */ (function () {
    function FixedRibbon() {
        this.type = LayoutActionTypes.FixedRibbon;
    }
    return FixedRibbon;
}());
exports.FixedRibbon = FixedRibbon;
var FixedPageFooter = /** @class */ (function () {
    function FixedPageFooter() {
        this.type = LayoutActionTypes.FixedPageFooter;
    }
    return FixedPageFooter;
}());
exports.FixedPageFooter = FixedPageFooter;
var InsideContainer = /** @class */ (function () {
    function InsideContainer() {
        this.type = LayoutActionTypes.InsideContainer;
    }
    return InsideContainer;
}());
exports.InsideContainer = InsideContainer;
var Rtl = /** @class */ (function () {
    function Rtl() {
        this.type = LayoutActionTypes.Rtl;
    }
    return Rtl;
}());
exports.Rtl = Rtl;
var MenuOnTop = /** @class */ (function () {
    function MenuOnTop() {
        this.type = LayoutActionTypes.MenuOnTop;
    }
    return MenuOnTop;
}());
exports.MenuOnTop = MenuOnTop;
var ColorblindFriendly = /** @class */ (function () {
    function ColorblindFriendly() {
        this.type = LayoutActionTypes.ColorblindFriendly;
    }
    return ColorblindFriendly;
}());
exports.ColorblindFriendly = ColorblindFriendly;
var CollapseMenu = /** @class */ (function () {
    function CollapseMenu() {
        this.type = LayoutActionTypes.CollapseMenu;
    }
    return CollapseMenu;
}());
exports.CollapseMenu = CollapseMenu;
var MinifyMenu = /** @class */ (function () {
    function MinifyMenu() {
        this.type = LayoutActionTypes.MinifyMenu;
    }
    return MinifyMenu;
}());
exports.MinifyMenu = MinifyMenu;
var ShortcutToggle = /** @class */ (function () {
    function ShortcutToggle() {
        this.type = LayoutActionTypes.ShortcutToggle;
    }
    return ShortcutToggle;
}());
exports.ShortcutToggle = ShortcutToggle;
//# sourceMappingURL=layout.actions.js.map