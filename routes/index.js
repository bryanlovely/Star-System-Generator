
/*
 * GET home page.
 */


convertToNumberValues = function convertToNumberValues(object)
{
	if ( !(typeof object === 'object') ) {
		return object;
	}
	var numericFields = ['tableKey', 'mass', 'temperature', 'luminosity', 'radius',
		'innerLimit', 'outerLimit', 'snowLine', 'orbitalRadius'];
	for ( var i = 0; i < numericFields.length; i++ ) {
		if ( object.hasOwnProperty( numericFields[i] ) ) {
			object[numericFields[i]] = Number(object[numericFields[i]]);
		}
	}
	if ( object.hasOwnProperty('orbitingChildren') && object.orbitingChildren.length > 0 ) {
		for ( i = 0; i < object.orbitingChildren.length; i++ ) {
			object.orbitingChildren[i] = convertToNumberValues(object.orbitingChildren[i]);
		}
	}
	return object;
}

exports.index = function(req, res)
{

  res.render(
  	'index',
  	{
  		title: 'Express',
  		items: {"one":"foo", "two":"bar", "three":"bark"},
  		json: JSON.stringify(spaceCharts.systemType.getChartStructure())
  	}
  );


};

exports.numberOfStars = function(req, res)
{
	var system = {};
	system.numberOfStars = spaceCharts.systemType.lookup(5).result.numberOfStars;

	var stellarAge = spaceCharts.stellarAge.lookup().result;
	system.stellarPopulation = stellarAge.Population;
	system.age = Math.roundPos(stellarAge.baseAge + dieRoller.roll('1d6-1').result * stellarAge.stepA + dieRoller.roll('1d6-1').result * stellarAge.stepB, 2);

			system.age = 3.48;


	system.primaryStar = generateStar( spaceCharts.starType_salpeter.lookup(42).result, system.age );

	for ( var k = 2; k <= system.numberOfStars; k++ ) {
		var tableKey = system.primaryStar.tableKey - dieRoller.roll(dieRoller.roll('1d6-1').result+'d6').result;
		if ( tableKey < 0 ) { tableKey = 0; }

		var chart = spaceCharts.starType_salpeter.getChartStructure().results;
		for ( var i = 0, j = chart.length; i < j; i++ ) {
			if ( chart[i].result.tableKey == tableKey ) {
				var companion = generateStar( chart[i].result, system.age );
				system.orbitingChildren.push( stellarOrbit(companion, system.age, k==3?6:0) );
			}
		}
	}


	res.contentType('json');
	res.send( JSON.stringify(system) );


}



generateStar = function ( result, age )
{

	var star = {
		tableKey: result.tableKey,
		spectralClass: result.spectralClass,
		mass: result.mass,
		temperature: result.temp
	};

	if ( age <= result.mSpan ) {
		star.spectralClass += 'V';
		star.starType = 'Main Sequence';
		star.luminosity = Math.roundPos(result.lMin + ( (age/result.mSpan) * (result.lMax - result.lMin) ), 4);
	} else if ( age <= result.mSpan + result.sSpan ) {
		star.starType = 'Subgiant';
		star.temperature = Math.roundPos(result.temp - ( ((age - result.mSpan)/result.sSpan) * (result.temp - 4800) ),-2);

		var chart = spaceCharts.starType_salpeter.getChartStructure().results;
		for ( var i = 0, j = chart.length; i < j; i++ ) {
			if ( chart[i].result.temp >= star.temperature ) {
				star.spectralClass = chart[i].result.spectralClass + 'VI';
			}
		}
		star.luminosity = result.lMax;
	} else if ( age <= result.mSpan + result.sSpan + result.gSpan ) {
		star.spectralClass += 'VII';
		star.starType = 'Giant';
		star.temperature = (dieRoller.roll('2d6-2').result * 200) + 3000;
		star.luminosity = result.lMax * 25;
	} else {
		star.mass = Math.roundPos(dieRoller.roll('2d6-2').result * 0.05 + 0.9,2);
		star.luminosity = 0.001;
		star.spectralClass = 'D';
		star.starType = 'White Dwarf';
	}

	star.radius = Math.roundPos((155000 * Math.sqrt(star.luminosity)) / Math.pow(star.temperature,2),4);

	star.innerLimit = Math.roundPos(Math.max( star.mass * 0.1, Math.sqrt(star.luminosity) * 0.01 ),2);
	star.outerLimit = star.mass * 40;
	star.snowLine = Math.roundPos(Math.sqrt(star.luminosity) * 4.85,2);


	star.gasGiantArrangement = spaceCharts.gasGiantArrangement.lookup().result;

	star.orbitingChildren = [];

	return star;
}


stellarOrbit = function ( star, age, separationModifier )
{
	var separation = spaceCharts.stellarOrbitalSeparation.setModifier(separationModifier).lookup().result;

	star.separation = separation.separation;
	star.orbitalRadius = Math.roundPos(separation.radMult * dieRoller.roll('2d6').result,2);

	if ( star.separation == 'Distant' && dieRoller.roll('2d6').result >= 11 ) {
		var tableKey = star.tableKey - dieRoller.roll(dieRoller.roll('1d6-1').result+'d6').result;
		if ( tableKey < 0 ) { tableKey = 0; }
		var chart = spaceCharts.starType_salpeter.getChartStructure().results;
		for ( var i = 0, j = chart.length; i < j; i++ ) {
			if ( chart[i].result.tableKey == tableKey ) {
				var companion = generateStar( chart[i].result, age );
				star.orbitingChildren.push( stellarOrbit(companion, age, -6) );
			}
		}
	}

	var eccentricityMap = {
		'Very Close': -6,
		'Close': -4,
		'Moderate': -2
	};
	var eccentricityMod = eccentricityMap[star.separation] !== undefined ? eccentricityMap[star.separation] : 0;
	star.orbitalEccentricity = spaceCharts.stellarOrbitalEccentricity.setModifier(eccentricityMod).lookup().result;

	// come back to forbidden zones

	return star;
}


exports.firstGasGiant = function ( req, res )
{
	var star = convertToNumberValues(req.query);

	if ( star.gasGiantArrangement === 'No Gas Giant' ) {
		gasGiant = null;
	} else {
		var arrangementMap = {
			'Conventional Gas Giant': Math.roundPos(((dieRoller.roll('2d6-2').result * 0.05) + 1) * star.snowLine,2),
			'Eccentric Gas Giant': Math.roundPos((dieRoller.roll('1d6').result * 0.125) * star.snowLine,2),
			'Epistellar Gas Giant': Math.roundPos((dieRoller.roll('3d6').result * 0.1) * star.innerLimit,2)
		};

		gasGiant = {
			orbitalRadius: arrangementMap[star.gasGiantArrangement],
			orbitingChildren: [],
			objectType: 'Gas Giant',
			sizeClass: ''
		};
	}

	res.contentType('json');
	res.send( JSON.stringify(gasGiant) );
}


exports.placePlanetaryOrbits = function ( req, res )
{

	var star = convertToNumberValues(req.query),
		orbits = [],
		orbit,
		firstOrbit,
		ratio;

	switch ( star.gasGiantArrangement ) {
		case 'Conventional Gas Giant':
		case 'Eccentric Gas Giant':
		case 'Epistellar Gas Giant':
			firstOrbit = star.orbitingChildren[0].orbitalRadius;
			orbits.push( star.orbitingChildren[0] );
			break;

		case 'No Gas Giant':
			firstOrbit = Math.roundPos( star.outerLimit / ((dieRoller.roll('1d6').result * 0.05) + 1), 2);
			orbits.push( {orbitalRadius: firstOrbit} );
			break;
	}

	orbit = firstOrbit;
	while ( orbit >= star.innerLimit ) {
		ratio = spaceCharts.orbitalSpacing.lookup().result;
		orbit = Math.roundPos(orbit/ratio, 2);
		if ( orbit >= star.innerLimit && orbit <= star.outerLimit ) {
			orbits.push({orbitalRadius:orbit});
		}
	}

	orbit = firstOrbit;
	while ( orbit <= star.outerLimit ) {
		ratio = spaceCharts.orbitalSpacing.lookup().result;
		orbit = Math.roundPos(orbit*ratio, 2);
		if ( orbit >= star.innerLimit && orbit <= star.outerLimit ) {
			orbits.push({orbitalRadius:orbit});
		}
	}

	orbits.sort(function(a, b){ return a.orbitalRadius - b.orbitalRadius; });


	res.contentType('json');
	res.send( JSON.stringify(orbits) );


}



exports.gasGiantPlacement = function ( req, res ) {

	var orbit = convertToNumberValues(req.query.orbit),
		next = convertToNumberValues(req.query.next),
		previous = convertToNumberValues(req.query.previous),
		snowLine = Number(req.query.snowLine),
		gasGiantArrangement = req.query.gasGiantArrangement,
		gasGiantPlacementMap = {
			'No Gas Giant': {'insideSnowLine': 0, 'outsideSnowLine': 0},
			'Conventional Gas Giant': {'insideSnowLine': 0, 'outsideSnowLine': 15},
			'Eccentric Gas Giant': {'insideSnowLine': 8, 'outsideSnowLine': 14},
			'Epistellar Gas Giant': {'insideSnowLine': 6, 'outsideSnowLine': 14}
		},
		roll,
		key,
		modifier;

	// place gas giant
	if ( orbit.objectType === undefined ) {
		roll = dieRoller.roll('3d6').result;
		key = orbit.orbitalRadius < snowLine ? 'insideSnowLine' : 'outsideSnowLine';
		if ( roll <= gasGiantPlacementMap[gasGiantArrangement][key] ) {
			orbit.objectType = 'Gas Giant';
		}
	}

	// get gas giant size
	if ( orbit.objectType === 'Gas Giant' ) {
		modifier = 0;
		if ( previous === undefined || previous.orbitalRadius < snowLine ) {
			modifier = 4;
		}
		orbit.sizeClass = spaceCharts.gasGiantSize.setModifier(modifier).lookup().result;
	}


	res.contentType('json');
	res.send( JSON.stringify(orbit) );

}


exports.remainingOrbits = function ( req, res ) {

	var orbit = convertToNumberValues(req.query.orbit),
		next = convertToNumberValues(req.query.next),
		previous = convertToNumberValues(req.query.previous),
		innerLimit = Number(req.query.innerLimit),
		outerLimit = Number(req.query.outerLimit),
		roll,
		key,
		modifier = 0,
		result;

	if ( orbit.objectType === undefined ) {
		if ( next !== undefined && next.objectType === 'forbiddenZone' ) {
			modifier += -6;
		}
		if ( previous !== undefined && previous.objectType === 'forbiddenZone' ) {
			modifier += -6;
		}
		if ( next !== undefined && next.objectType === 'Gas Giant' ) {
			modifier += -6;
		}
		if ( previous !== undefined && previous.objectType === 'Gas Giant' ) {
			modifier += -3;
		}
		if ( next === undefined ) {
			modifier += -3;
		}
		if ( previous === undefined ) {
			modifier += -3;
		}

		result = spaceCharts.orbitContents.setModifier(modifier).lookup();
		result = result.result;
		orbit.objectType = result.objectType;
		if ( result.sizeClass !== undefined ) {
			orbit.sizeClass = result.sizeClass;
		}
		orbit.modifier = modifier;
	}

	res.contentType('json');
	res.send( JSON.stringify(orbit) );

}


exports.placeMoons = function ( req, res ) {

	var orbit = convertToNumberValues(req.query.orbit),
		roll,
		key,
		modifier,
		result;

	if ( orbit.objectType === "Gas Giant" ) {
		modifier = '';
		if ( orbit.orbitalRadius <= 1.5 ) {
			modifier = '-3';
		} else if ( orbit.orbitalRadius <= 0.75 ) {
			modifier = '-6';
		} else if ( orbit.orbitalRadius <= 0.5 ) {
			modifier = '-8';
		} else if ( orbit.orbitalRadius <= 0.1 ) {
			modifier = '-10';
		}
		orbit.innerMoons = Math.max(0, dieRoller.roll('2d6'+modifier).result);

		if ( orbit.orbitalRadius <= 1.5 ) {
			modifier = '-1';
		} else if ( orbit.orbitalRadius <= 0.75 ) {
			modifier = '-4';
		} else if ( orbit.orbitalRadius <= 0.5 ) {
			modifier = '-5';
		} else if ( orbit.orbitalRadius <= 0.1 ) {
			modifier = '-7';
		}
		orbit.majorMoons = Math.max(0, dieRoller.roll('1d6'+modifier).result);

		if ( orbit.orbitalRadius <= 3.0 ) {
			modifier = '-1';
		} else if ( orbit.orbitalRadius <= 1.5 ) {
			modifier = '-4';
		} else if ( orbit.orbitalRadius <= 0.75 ) {
			modifier = '-5';
		} else if ( orbit.orbitalRadius <= 0.5 ) {
			modifier = '-7';
		}
		orbit.outerMoons = Math.max(0, dieRoller.roll('1d6'+modifier).result);

		if ( orbit.innerMoons >= 10 ) {
			orbit.ring = "Spectacular";
		} else if ( orbit.innerMoons >= 6 ) {
			orbit.ring = "Visible";
		}

	} else if ( orbit.objectType === "Terrestrial Planet" ) {

		modifier = 0;
		if ( orbit.orbitalRadius <= 1.5 ) {
			modifier += -1;
		} else if ( orbit.orbitalRadius <= 0.75 ) {
			modifier += -3;
		} else if ( orbit.orbitalRadius <= 0.5 ) {
			modifier += -6;
		}
		switch ( orbit.sizeClass ) {
			case "Large":
				modifier += 1;
				break;
			case "Tiny":
				modifier += -1;
				break;
		}
		orbit.majorMoons = Math.max(0, dieRoller.roll('1d6' + (modifier - 4)).result);
		if ( orbit.majorMoons === 0 ) {
			orbit.moonlets = Math.max(0, dieRoller.roll('1d6' + (modifier - 2)).result);
		}
	}



	res.contentType('json');
	res.send( JSON.stringify(orbit) );

}
