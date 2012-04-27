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


function DieRoller ( sides ) {

    return {
        roll: function ( dice_num, modifier ) {
            var total = 0;
            for ( var i = 0; i < dice_num; i++ ) {
                total += Math.floor(Math.random()*sides + 1);
            }
            if ( modifier != undefined ) {
                total += modifier
            }
            return total;
        }
    }

}


sixsider = new DieRoller(6);
result = sixsider.roll(4,1);




var hit_location_chart = {
	chart_type: "random",
    throw: {
        die_sides: 6,
        number_of_dice: 2,
        modifier: 0
    },
    results: [
        {
            rolls: [2],
            result: "Critical Hit",
            subchart: {
            	chart_type: "random",
                throw: {
                    die_sides: 6,
                    number_of_dice: 1,
                    modifier: 0
                },
                results: [
                    { rolls: [1], result: "Leg" },
                    { rolls: [2], result: "Arm" },
                    { rolls: [3,4], result: "Chest" },
                    { rolls: [5], result: "Abdomen" },
                    { rolls: [6], result: "Head" }
                ]
            }
        },
        {
            //rolls: [3,4,5,6,7,8,9,10,11,12],
            min_roll: 3,
            //max_roll: 12,
            result: "Not a critical hit"
        }
    ]
}


var test_index_chart = {
				"chart_type": "index",
				"results": {
					"Small": { "result": { "mass": 10, "density": 0.42 } },
					"Medium": { "result": { "mass": 100, "density": 0.18} },
					"Large": { "result": { "mass": 600, "density": 0.31} }
				}
};



function ChartHandler ( chart_structure ) {

	function random ( roll ) {
		console.log("function random ("+roll+")",typeof roll == "undefined");

		// allow injection of the roll for unit testing
		if ( typeof roll == "undefined" || ( roll instanceof Array && roll.length == 0 ) ) {
			console.log("set up dieroller");
			// set up roller
			var dieroller = new DieRoller(chart_structure.throw.die_sides);

			// get initial result
			var roll = dieroller.roll(chart_structure.throw.number_of_dice,chart_structure.throw.modifier);
		}

		// if injected roll is an array, strip off the first element and leave the rest to be passed on to subcharts
		var roll_remainder;
		if ( roll instanceof Array ) {
			var roll_temp = roll.shift();
			roll_remainder = roll;
			roll = roll_temp;
		}

		// check if roll is out of range for the chart
		if ( roll < chart_structure.throw.number_of_dice + chart_structure.throw.modifier ) {
			return { error: "out of range (under)" };
		} else if ( roll > chart_structure.throw.number_of_dice * chart_structure.throw.die_sides + chart_structure.throw.modifier ) {
			return { error: "out of range (over)" };
		}

		var result;
		var i = 0;
		while ( result == undefined && i < chart_structure.results.length ) {

			if ( chart_structure.results[i].rolls == undefined ) {

				// omit the min_roll and it assumes the min_roll is the number of dice * 1 + the modifier
				// omit the max_roll and it assumes the max_roll is the number of dice * sides per die + the modifier
				if ( chart_structure.results[i].min_roll == undefined && chart_structure.results[i].max_roll != undefined ) {
					chart_structure.results[i].min_roll = chart_structure.throw.number_of_dice + chart_structure.throw.modifier;
				} else if ( chart_structure.results[i].min_roll != undefined && chart_structure.results[i].max_roll == undefined ) {
					chart_structure.results[i].max_roll = chart_structure.throw.number_of_dice * chart_structure.throw.die_sides + chart_structure.throw.modifier;
				}

				// fill in the rolls array based on min_roll and max_roll
				chart_structure.results[i].rolls = [];
				for ( var j = chart_structure.results[i].min_roll; j <= chart_structure.results[i].max_roll; j++ ) {
					chart_structure.results[i].rolls.push(j);
				}
			}

			//if ( in_array(roll,chart_structure.results[i].rolls) ) {
			if ( chart_structure.results[i].rolls.in_array(roll) ) {
				result = { roll: roll, result: chart_structure.results[i].result };
				if ( chart_structure.results[i].subchart != undefined ) {
					var subchart = new ChartHandler(chart_structure.results[i].subchart);
						console.log(subchart.getChartStructure());
					result['secondary'] = subchart.lookup(roll_remainder);
				}
			} else {
				i++;
			}
		}

		if ( result == undefined ) {
			result = { error: "undefined" };
		}

		return result;

	};

    return {
        setName: function ( name ) {
            chart_structure.name = name;
            return this;
        },

        getChartStructure: function () {
            return chart_structure;
        },

        lookup: function ( roll ) {

			switch ( chart_structure.chart_type ) {

				case "random":
					console.log("case random");
					result = random(roll);
					break;


				case "index":
					break;

				case "lookup":
					break;

			}

            return result;

        }
    }
}


var test_index = new ChartHandler(hit_location_chart);

console.log( test_index.lookup(2) );
