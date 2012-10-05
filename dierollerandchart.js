// class for handling lookup charts
var ChartHandler = function ( chart_structure ) {

	var modifier = 0;

	function _applySubchart ( result, subchart, roll ) {
		var subresult;
		if ( subchart !== undefined ) {
			if ( !(subchart.getChartStructure) ) {
				subchart = new ChartHandler(subchart);
			}
			subresult = subchart.lookup(roll);
			if ( result.result === undefined ) {
				result.result = subresult.result;
			} else {
				if ( !(result.result instanceof Array) ) {
					result.result = [result.result];
				}
				result.result.push(subresult.result);
			}
			result.roll = result.roll.concat(subresult.roll);
		}
		return result;
	}

	function _expandChartStructure ( modifiedRoll ) {
		var i, j,
			lowestIndex = Number.MAX_VALUE,
			highestIndex = Number.MIN_VALUE;
		// convert chart_structure.results into map
		if ( chart_structure.resultsMap === undefined ) {
			chart_structure.resultsMap = {};
			for ( i in chart_structure.results ) {
				if ( chart_structure.results[i].rolls !== undefined ) {
					for ( j = 0; j < chart_structure.results[i].rolls.length; j++ ) {
						chart_structure.resultsMap[chart_structure.results[i].rolls[j]] = i;
					}
				} else if ( chart_structure.results[i].min_roll !== undefined && chart_structure.results[i].max_roll !== undefined ) {
					for ( j = chart_structure.results[i].min_roll; j <= chart_structure.results[i].max_roll; j++ ) {
						chart_structure.resultsMap[j] = i;
					}
				} else if ( chart_structure.results[i].max_roll !== undefined ) {
					chart_structure.resultsMap[chart_structure.results[i].max_roll] = i;
				} else if ( chart_structure.results[i].min_roll !== undefined ) {
					chart_structure.resultsMap[chart_structure.results[i].min_roll] = i;
				}
			}
		}

		// expand result map as needed
		if ( chart_structure.resultsMap[modifiedRoll] === undefined ) {
			// get lowest and highest index
			for ( i in chart_structure.resultsMap ) {
				lowestIndex = Math.min(Number(i), lowestIndex);
				highestIndex = Math.max(Number(i), highestIndex);
			}
			if ( modifiedRoll < lowestIndex ) {
				for ( i = modifiedRoll; i < lowestIndex; i++ ) {
					chart_structure.resultsMap[i] = chart_structure.resultsMap[lowestIndex];
				}
			} else if ( modifiedRoll > highestIndex ) {
				for ( i = modifiedRoll; i > highestIndex; i-- ) {
					chart_structure.resultsMap[i] = chart_structure.resultsMap[highestIndex];
				}
			}
		}
	}


	function random ( roll ) {

		var lowestIndex = Number.MAX_VALUE, highestIndex = Number.MIN_VALUE, mapResult, result;

		if ( roll === undefined || roll === "*" || ( roll instanceof Array && roll.length == 0 ) || ( roll instanceof Array && roll[0] == "*" ) ) {
			// set up roller

			// get initial result
			roll = dieRoller.roll(
				chart_structure.throw.number_of_dice + 'd' + chart_structure.throw.die_sides
				+ '+' + chart_structure.throw.modifier
			).result;
			if ( typeof modifier != "undefined" ) {
				roll += modifier;
			}
		}

		_expandChartStructure(roll+modifier);

		mapResult = chart_structure.results[chart_structure.resultsMap[roll+modifier]];

		return { roll: [roll], modifier: modifier, result: mapResult.result, subchart: mapResult.subchart };

		/*
		// check if roll is out of range for the chart
		if ( roll < chart_structure.throw.number_of_dice + chart_structure.throw.modifier + modifier ) {
			return { error: "out of range (under)" };
		} else if ( roll > chart_structure.throw.number_of_dice * chart_structure.throw.die_sides + chart_structure.throw.modifier + modifier ) {
			return { error: "out of range (over): roll = " + roll + " max = "+ (chart_structure.throw.number_of_dice * chart_structure.throw.die_sides) + " mod = "+chart_structure.throw.modifier};
		}
		*/
	};


	function index ( roll ) {
		return { roll: [roll], result: chart_structure.results[roll].result, subchart: chart_structure.results[roll].subchart };
	}


	function compare ( roll ) {

		var result, i;

		if ( chart_structure.direction == "<=" ) {
            i = 0;
            while ( typeof result == "undefined" && i < chart_structure.results.length ) {
                if ( roll <= chart_structure.results[i].value ) {
                    result = { roll: [roll], result: chart_structure.results[i].result, subchart: chart_structure.results[roll].subchart };
                }
                i++;
            }
		} else if ( chart_structure.direction == ">=" ) {
            i = chart_structure.results.length - 1;
            while ( typeof result == "undefined" && i >= 0 ) {
                if ( roll >= chart_structure.results[i].value ) {
                    result = { roll: [roll], result: chart_structure.results[i].result, subchart: chart_structure.results[roll].subchart };
                }
                i--;
            }
		}

		return result;
	}


    return {

        setName: function ( name ) {
            chart_structure.name = name;
            return this;
        },

        setModifier: function ( mod ) {
        	modifier = mod;
        	return this;
        },

        getChartStructure: function () {
            return chart_structure;
        },

        lookup: function ( roll ) {

			// allow injection of the roll for unit testing
			// if injected roll is an array, strip off the first element and leave the rest to be passed on to subcharts
			if ( roll instanceof Array ) {
				roll_temp = roll.shift();
				roll_remainder = roll;
				roll = roll_temp;
			}

			switch ( chart_structure.chart_type ) {

				case "random":
					result = random(roll);
					break;

				case "index":
					result = index(roll);
					break;

				case "compare":
					result = compare(roll);
					break;

			}

			if ( result.subchart !== undefined ) {
				result = _applySubchart(result, result.subchart, roll_remainder);
			}
			if ( typeof result == "undefined" ) {
				result = { error: "undefined" };
			}

            return result;

        }
    }
}


// build chart handler for each type of chart
var charts = require('./charts')
	, dieRoller = require('roll')
	;

//var test = new ChartHandler(charts.gasGiantSize);
//var result = test.setModifier(0).lookup(3);


(function ( charts ) {
	for ( var i in charts ) {
		exports[i] = new ChartHandler(charts[i]);
	}
}(charts))
