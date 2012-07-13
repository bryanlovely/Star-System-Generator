
/*
 * GET home page.
 */

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


exports.numberofstars = function(req, res)
{
	var system = {};
	system.numberOfStars = spaceCharts.systemType.lookup(5).result.numberOfStars;

	var stellarAge = spaceCharts.stellarAge.lookup().result;
	system.stellarPopulation = stellarAge.Population;
	system.age = Math.roundPos(stellarAge.baseAge + dieRoller.roll(1,-1) * stellarAge.stepA + dieRoller.roll(1,-1) * stellarAge.stepB, 2);

			system.age = 3.48;


	system.primaryStar = generateStar( spaceCharts.starType_salpeter.lookup(42).result, system.age );

	for ( var k = 2; k <= system.numberOfStars; k++ ) {
		var tableKey = system.primaryStar.tableKey - dieRoller.roll(dieRoller.roll(1,-1));
		if ( tableKey < 0 ) { tableKey = 0; }

		var chart = spaceCharts.starType_salpeter.getChartStructure().results;
		for ( var i = 0, j = chart.length; i < j; i++ ) {
			if ( chart[i].result.tableKey == tableKey ) {
				var companion = generateStar( chart[i].result, system.age );
				system.orbitalChildren.push( stellarOrbit(companion, system.age, k==3?6:0) );
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
		star.temperature = (dieRoller.roll(2,-2) * 200) + 3000;
		star.luminosity = result.lMax * 25;
	} else {
		star.mass = Math.roundPos(dieRoller.roll(2,-2) * 0.05 + 0.9,2);
		star.luminosity = 0.001;
		star.spectralClass = 'D';
		star.starType = 'White Dwarf';
	}

	star.radius = Math.roundPos((155000 * Math.sqrt(star.luminosity)) / Math.pow(star.temperature,2),4);

	star.innerLimit = Math.max( star.mass * 0.1, Math.sqrt(star.luminosity) * 0.01 );
	star.outerLimit = star.mass * 40;
	star.snowLine = Math.sqrt(star.luminosity) * 4.85;


	star.gasGiantArrangement = spaceCharts.gasGiantArrangement.lookup().result;

	star.orbitalChildren = [];

	return star;
}


stellarOrbit = function ( star, age, separationModifier )
{
	var separation = spaceCharts.stellarOrbitalSeparation.setModifier(separationModifier).lookup().result;

	star.separation = separation.separation;
	star.orbitalRadius = Math.roundPos(separation.radMult * dieRoller.roll(2),2);

	if ( star.separation == 'Distant' && dieRoller.roll(2) >= 11 ) {
		var tableKey = star.tableKey - dieRoller.roll(dieRoller.roll(1,-1));
		if ( tableKey < 0 ) { tableKey = 0; }
		var chart = spaceCharts.starType_salpeter.getChartStructure().results;
		for ( var i = 0, j = chart.length; i < j; i++ ) {
			if ( chart[i].result.tableKey == tableKey ) {
				var companion = generateStar( chart[i].result, age );
				star.orbitalChildren.push( stellarOrbit(companion, age, -6) );
			}
		}
	}

	var eccentricityMod = 0;
	switch ( star.separation ) {
		case 'Very Close':
			eccentricityMod = -6;
			break;
		case 'Close':
			eccentricityMod = -4;
			break;
		case 'Moderate':
			eccentricityMod = -2;
			break;
	}
	star.orbitalEccentricity = spaceCharts.stellarOrbitalEccentricity.setModifier(eccentricityMod).lookup().result;

	// come back to forbidden zones

	return star;
}
