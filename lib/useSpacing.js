"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useSpacing = void 0;
var core_1 = require("@material-ui/core");
var spacing_1 = require("./constants/spacing");
function useSpacing() {
    var spacing = core_1.useTheme().spacing;
    if (!arguments.length) {
        throw new Error('No value provided');
    }
    var generatedClasses = [];
    for (var i = 0; i < arguments.length; i++) {
        var expression = arguments[i];
        var _a = extractSpacingElements(expression), spacingType = _a.spacingType, position = _a.position, value = _a.value;
        var getStyle = spacing_1.AVAILABLE_POSITIONS(spacingType);
        var providedOption = getStyle[position];
        if (!providedOption) {
            throw new Error('Provided option is not valid');
        }
        var spacingValue = spacing(value);
        var styles = providedOption(spacingValue);
        var useStyles = core_1.makeStyles({ root: styles });
        var classes = useStyles();
        generatedClasses.push(classes.root);
    }
    return generatedClasses;
}
exports.useSpacing = useSpacing;
function extractSpacingElements(expression) {
    var spacingTypeRegex = /p|m/g;
    var positionRegex = /t|r|b|l|x|y/g;
    var numberRegex = /[0-9]+/g;
    var matchedSpacingType = expression.match(spacingTypeRegex);
    var matchedNumbers = expression.match(numberRegex);
    var matchedPosition = expression.match(positionRegex);
    if (matchedNumbers === null ||
        matchedSpacingType === null ||
        matchedPosition === null) {
        throw new Error('Specified format does not corresponds with the needed format.');
    }
    var formattedSpacingType = matchedSpacingType[0];
    var formattedPosition = matchedPosition[0];
    var formattedMatchedNumbers = matchedNumbers[0];
    var spacingType = formattedSpacingType;
    var position = formattedPosition;
    var value = Number(formattedMatchedNumbers);
    return {
        spacingType: spacingType,
        position: position,
        value: value,
    };
}
//# sourceMappingURL=useSpacing.js.map