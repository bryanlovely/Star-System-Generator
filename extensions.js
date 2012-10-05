//if (!Math.prototype.roundPos) {
	/**
	 * rounds off a number to a number of decimal places
	 * positive for decimal places, negative for 10s, 100s, etc.
	 */
	Math.roundPos = function ( base, digits ) {
		return Math.round( base * Math.pow(10,digits) ) / Math.pow(10,digits);
	}
//}
if (!Array.prototype.in_array) {
    Array.prototype.in_array = function ( needle, argStrict ) {
        // Checks if the given value exists in the array
        //
        // version: 1109.2015
        // discuss at: http://phpjs.org/functions/in_array
        // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
        // +   improved by: vlado houba
        // +   input by: Billy
        // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
        // *     example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
        // *     returns 1: true
        // *     example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
        // *     returns 2: false
        // *     example 3: in_array(1, ['1', '2', '3']);
        // *     returns 3: true
        // *     example 3: in_array(1, ['1', '2', '3'], false);
        // *     returns 3: true
        // *     example 4: in_array(1, ['1', '2', '3'], true);
        // *     returns 4: false
        var key = '',
            strict = !! argStrict;

        if (strict) {
            for (key in this) {
                if (this[key] === needle) {
                    return true;
                }
            }
        } else {
            for (key in this) {
                if (this[key] == needle) {
                    return true;
                }
            }
        }

        return false;
    }
}
