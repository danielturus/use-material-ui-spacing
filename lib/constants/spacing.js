"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AVAILABLE_POSITIONS = void 0;
var AVAILABLE_POSITIONS = function (typeOfAlignment) {
    var typeOfSpacing = typeOfAlignment === 'm' ? 'margin' : 'padding';
    return {
        x: function (spacingValue) {
            var _a;
            return (_a = {},
                _a[typeOfSpacing + "Left"] = spacingValue,
                _a[typeOfSpacing + "Right"] = spacingValue,
                _a);
        },
        y: function (spacingValue) {
            var _a;
            return (_a = {},
                _a[typeOfSpacing + "Top"] = spacingValue,
                _a[typeOfSpacing + "Bottom"] = spacingValue,
                _a);
        },
        t: function (spacingValue) {
            var _a;
            return (_a = {},
                _a[typeOfSpacing + "Top"] = spacingValue,
                _a);
        },
        b: function (spacingValue) {
            var _a;
            return (_a = {},
                _a[typeOfSpacing + "Bottom"] = spacingValue,
                _a);
        },
        l: function (spacingValue) {
            var _a;
            return (_a = {},
                _a[typeOfSpacing + "Left"] = spacingValue,
                _a);
        },
        r: function (spacingValue) {
            var _a;
            return (_a = {},
                _a[typeOfSpacing + "Right"] = spacingValue,
                _a);
        },
    };
};
exports.AVAILABLE_POSITIONS = AVAILABLE_POSITIONS;
//# sourceMappingURL=spacing.js.map