var OrbitingChildren = Backbone.Collection.extend({

	model: CelestialObject,

	comparator: function (child) {
		return child.get("orbitalRadius");
	}

});


var CelestialObject = Backbone.Model.extend({
	orbitalRadius: null,
	orbitingChildren: new OrbitingChildren
});


var Star = CelestialObject.extend({
	objectType: 'star'

});


var Planet = CelestialObject.extend({

});


var TerrestrialPlanet = Planet.extend({

	objectType: 'terrestrialPlanet',
	sizeClass: '',
	planetType: ''

});


var GasGiant = Planet.extend({

	objectType: 'gasGiant',
	sizeClass: ''

});


var AsteroidBelt = Planet.extend({

	objectType: 'asteroidBelt'

});


var Moon = TerrestrialPlanet.extend({

	objectType: 'moon'

});
