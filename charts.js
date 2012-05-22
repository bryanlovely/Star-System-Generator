exports.hit_location_chart = {
	"chart_type": "random",
    "throw": {
        "die_sides": 6,
        "number_of_dice": 2,
        "modifier": 0
    },
    "results": [
        {
            "rolls": [2],
            "result": "Critical Hit",
            "subchart": {
				"chart_type": "random",
                "throw": {
                    "die_sides": 6,
                    "number_of_dice": 1,
                    "modifier": 0
                },
                "results": [
                    { "rolls": [1], "result": "Leg" },
                    { "rolls": [2], "result": "Arm" },
                    { "rolls": [3,4], "result": "Chest" },
                    { "rolls": [5], "result": "Abdomen" },
                    { "rolls": [6], "result": "Head" }
                ]
            }
        },
        {
            //"rolls": [3,4,5,6,7,8,9,10,11,12],
            "min_roll": 3,
            //"max_roll": 12,
            "result": "Not a critical hit"
        }
    ]
};


exports.systemType = {
	"chart_type": "random",
    "throw": {
        "die_sides": 6,
        "number_of_dice": 3,
        "modifier": 0
    },
    "results": [
		{
			"min_roll": 3,
			"max_roll": 10,
			"result": {
				"type": "single",
				"numberOfStars": 1
			}
		},
		{
			"min_roll": 11,
			"max_roll": 15,
			"result": {
				"type": "binary",
				"numberOfStars": 2
			}
		},
		{
			"min_roll": 16,
			"result": {
				"type": "trinary",
				"numberOfStars": 3
			}
		}
	]
};
					
exports.starType = {
	"chart_type": "random",
    "throw": {
        "die_sides": 6,
        "number_of_dice": 3,
        "modifier": 0
    },
	"results": [
		{
			"rolls": [3],
			"subchart": {
				"chart_type": "random",
				"throw": {
					"die_sides": 6,
					"number_of_dice": 3,
					"modifier": 0
				},
				"results": [
					{
						"max_roll": 10,
						"result": { "tableKey": 33, "mass": 2.00, "spectralClass": "A5", "temp": 8200, "lMin": 16.00, "lMax": 20.00, "mSpan": 1.3, "sSpan": 0.2, "gSpan": 0.1 }
					},
					{
						"min_roll": 11,
						"result": { "tableKey": 32, "mass": 1.90, "spectralClass": "A6", "temp": 8000, "lMin": 13.00, "lMax": 16.00, "mSpan": 1.5, "sSpan": 0.2, "gSpan": 0.1 }
					}
				]
			}
		},
		{
			"rolls": [4],
			"subchart": {
				"chart_type": "random",
				"throw": {
					"die_sides": 6,
					"number_of_dice": 3,
					"modifier": 0
				},
				"results": [
					{
						"max_roll": 8,
						"result": { "tableKey": 31, "mass": 1.80, "spectralClass": "A7", "temp": 7800, "lMin": 11.00, "lMax": 13.00, "mSpan": 1.8, "sSpan": 0.3, "gSpan": 0.2 }
					},
					{
						"rolls": [9,10,11],
						"result": { "tableKey": 30, "mass": 1.70, "spectralClass": "A9", "temp": 7500, "lMin": 8.60, "lMax": 10.00, "mSpan": 2.1, "sSpan": 0.3, "gSpan": 0.2 }
					},
					{
						"min_roll": 12,
						"result": { "tableKey": 29, "mass": 1.60, "spectralClass": "F0", "temp": 7300, "lMin": 6.70, "lMax": 8.20, "mSpan": 2.5, "sSpan": 0.4, "gSpan": 0.2 }
					}
				]
			}
		},
		{
			"rolls": [5],
			"subchart": {
				"chart_type": "random",
				"throw": {
					"die_sides": 6,
					"number_of_dice": 3,
					"modifier": 0
				},
				"results": [
					{
						"rolls": [3,4,5,6,7],
						"result": { "tableKey": 28, "mass": 1.50, "spectralClass": "F2", "temp": 7000, "lMin": 5.10, "lMax": 6.50, "mSpan": 3.0, "sSpan": 0.5, "gSpan": 0.3 }
					},
					{
						"rolls": [8,9,10],
						"result": { "tableKey": 27, "mass": 1.45, "spectralClass": "F3", "temp": 6900, "lMin": 4.30, "lMax": 5.70, "mSpan": 3.3, "sSpan": 0.5, "gSpan": 0.3 }
					},
					{
						"rolls": [11,12],
						"result": { "tableKey": 26, "mass": 1.40, "spectralClass": "F4", "temp": 6700, "lMin": 3.70, "lMax": 5.10, "mSpan": 3.7, "sSpan": 0.6, "gSpan": 0.4 }
					},
					{
						"rolls": [13,14,15,16,17,18],
						"result": { "tableKey": 25, "mass": 1.35, "spectralClass": "F5", "temp": 6600, "lMin": 3.10, "lMax": 4.50, "mSpan": 4.1, "sSpan": 0.6, "gSpan": 0.4 }
					}
				]
			}
		},
		{
			"rolls": [6],
			"subchart": {
				"chart_type": "random",
				"throw": {
					"die_sides": 6,
					"number_of_dice": 3,
					"modifier": 0
				},
				"results": [
					{
						"rolls": [3,4,5,6,7],
						"result": { "tableKey": 24, "mass": 1.30, "spectralClass": "F6", "temp": 6500, "lMin": 2.50, "lMax": 3.90, "mSpan": 4.6, "sSpan": 0.7, "gSpan": 0.4 }
					},
					{
						"rolls": [8,9],
						"result": { "tableKey": 23, "mass": 1.25, "spectralClass": "F7", "temp": 6400, "lMin": 2.10, "lMax": 3.50, "mSpan": 5.2, "sSpan": 0.8, "gSpan": 0.5 }
					},
					{
						"rolls": [10],
						"result": { "tableKey": 22, "mass": 1.20, "spectralClass": "F8", "temp": 6300, "lMin": 1.70, "lMax": 3.00, "mSpan": 5.9, "sSpan": 0.9, "gSpan": 0.6 }
					},
					{
						"rolls": [11,12],
						"result": { "tableKey": 21, "mass": 1.15, "spectralClass": "F9", "temp": 6100, "lMin": 1.40, "lMax": 2.60, "mSpan": 6.7, "sSpan": 1.0, "gSpan": 0.6 }
					},
					{
						"rolls": [13,14,15,16,17,18],
						"result": { "tableKey": 20, "mass": 1.10, "spectralClass": "G0", "temp": 6000, "lMin": 1.10, "lMax": 2.20, "mSpan": 7.7, "sSpan": 1.2, "gSpan": 0.7 }
					}
				]
			}
		},
		{
			"rolls": [7],
			"subchart": {
				"chart_type": "random",
				"throw": {
					"die_sides": 6,
					"number_of_dice": 3,
					"modifier": 0
				},
				results: [
					{
						"rolls": [3,4,5,6,7],
						"result": { "tableKey": 19, "mass": 1.05, "spectralClass": "G1", "temp": 5900, "lMin": 0.87, "lMax": 1.90, "mSpan": 8.8, "sSpan": 1.4, "gSpan": 0.8 }
					},
					{
						"rolls": [8,9],
						"result": { "tableKey": 18, "mass": 1.00, "spectralClass": "G2", "temp": 5800, "lMin": 0.68, "lMax": 1.60, "mSpan": 10, "sSpan": 1.6, "gSpan": 1.0 }
					},
					{
						"rolls": [10],
						"result": { "tableKey": 17, "mass": 0.95, "spectralClass": "G4", "temp": 5700, "lMin": 0.56, "lMax": 1.30, "mSpan": 12, "sSpan": 1.8, "gSpan": 1.1 }
					},
					{
						"rolls": [11,12],
						"result": { "tableKey": 16, "mass": 0.90, "spectralClass": "G6", "temp": 5500, "lMin": 0.45, "lMax": 1.00, "mSpan": 14, "sSpan": 0, "gSpan": 0 }
					},
					{
						"rolls": [13,14,15,16,17,18],
						"result": { "tableKey": 15, "mass": 0.85, "spectralClass": "G8", "temp": 5400, "lMin": 0.36, "lMax": 0.84, "mSpan": 17, "sSpan": 0, "gSpan": 0 }
					}
				]
			}
		},
		{
			"rolls": [8],
			"subchart": {
				"chart_type": "random",
				"throw": {
					"die_sides": 6,
					"number_of_dice": 3,
					"modifier": 0
				},
				"results": [
					{
						"rolls": [3,4,5,6,7],
						"result": { "tableKey": 14, "mass": 0.80, "spectralClass": "K0", "temp": 5200, "lMin": 0.28, "lMax": 0.65, "mSpan": 20, "sSpan": 0, "gSpan": 0 }
					},
					{
						"rolls": [8,9],
						"result": { "tableKey": 13, "mass": 0.75, "spectralClass": "K2", "temp": 4900, "lMin": 0.23, "lMax": 0.48, "mSpan": 24, "sSpan": 0, "gSpan": 0 }
					},
					{
						"rolls": [10],
						"result": { "tableKey": 12, "mass": 0.70, "spectralClass": "K4", "temp": 4600, "lMin": 0.19, "lMax": 0.35, "mSpan": 30, "sSpan": 0, "gSpan": 0 }
					},
					{
						"rolls": [11,12],
						"result": { "tableKey": 11, "mass": 0.65, "spectralClass": "K5", "temp": 4400, "lMin": 0.15, "lMax": 0.25, "mSpan": 37, "sSpan": 0, "gSpan": 0 }
					},
					{
						"rolls": [13,14,15,16,17,18],
						"result": { "tableKey": 10, "mass": 0.60, "spectralClass": "K6", "temp": 4200, "lMin": 0.13, "lMax": 0.20, "mSpan": 42, "sSpan": 0, "gSpan": 0 }
					}
				]
			}
		},
		{
			"rolls": [9],
			"subchart": {
				"chart_type": "random",
				"throw": {
					"die_sides": 6,
					"number_of_dice": 3,
					"modifier": 0
				},
				"results": [
					{
						"rolls": [3,4,5,6,7,8],
						"result": { "tableKey": 9, "mass": 0.55, "spectralClass": "K8", "temp": 4000, "lMin": 0.11, "lMax": 0.15, "mSpan": 50, "sSpan": 0, "gSpan": 0 }
					},
					{
						"rolls": [9,10,11],
						"result": { "tableKey": 8, "mass": 0.50, "spectralClass": "M0", "temp": 3800, "lMin": 0.09, "lMax": 0.11, "mSpan": 59, "sSpan": 0, "gSpan": 0 }
					},
					{
						"rolls": [12,13,14,15,16,17,18],
						"result": { "tableKey": 7, "mass": 0.45, "spectralClass": "M1", "temp": 3600, "lMin": 0.07, "lMax": 0.08, "mSpan": 70, "sSpan": 0, "gSpan": 0 }
					}
				]
			}
		},
		{
			"rolls": [10],
			"subchart": {
				"chart_type": "random",
				"throw": {
					"die_sides": 6,
					"number_of_dice": 3,
					"modifier": 0
				},
				"results": [
					{
						"rolls": [3,4,5,6,7,8],
						"result": { "tableKey": 6, "mass": 0.40, "spectralClass": "M2", "temp": 3500, "lMin": 0.054, "lMax": 0.054, "mSpan": 1000, "sSpan": 0, "gSpan": 0 }
					},
					{
						"rolls": [9,10,11],
						"result": { "tableKey": 5, "mass": 0.35, "spectralClass": "M3", "temp": 3400, "lMin": 0.037, "lMax": 0.037, "mSpan": 1000, "sSpan": 0, "gSpan": 0 }
					},
					{
						"rolls": [12,13,14,15,16,17,18],
						"result": { "tableKey": 4, "mass": 0.30, "spectralClass": "M4", "temp": 3300, "lMin": 0.024, "lMax": 0.024, "mSpan": 1000, "sSpan": 0, "gSpan": 0 }
					},
				]
			}
		},
		{
			"rolls": [11],
			"result": { "tableKey": 3, "mass": 0.25, "spectralClass": "M4", "temp": 3300, "lMin": 0.015, "lMax": 0.015, "mSpan": 1000, "sSpan": 0, "gSpan": 0 }
		},
		{
			"rolls": [12],
			"result": { "tableKey": 2, "mass": 0.20, "spectralClass": "M5", "temp": 3200, "lMin": 0.0079, "lMax": 0.0079, "mSpan": 1000, "sSpan": 0, "gSpan": 0 }
		},
		{
			"rolls": [13],
			"result": { "tableKey": 1, "mass": 0.15, "spectralClass": "M6", "temp": 3200, "lMin": 0.0036, "lMax": 0.0036, "mSpan": 1000, "sSpan": 0, "gSpan": 0 }
		},
		{
			"rolls": [14,15,16,17,18],
			"result": { "tableKey": 0, "mass": 0.10, "spectralClass": "M7", "temp": 3100, "lMin": 0.0012, "lMax": 0.0012, "mSpan": 1000, "sSpan": 0, "gSpan": 0 }
		}
	]
};

exports.starType_salpeter = {
	"chart_type": "random",
    "throw": {
        "die_sides": 500,
        "number_of_dice": 1,
        "modifier": 0
    },
	"results": [
        {
            "rolls": [1],
            "result": { "tableKey": 33, "mass": 2.00, "spectralClass": "A5", "temp": 8200, "lMin": 16.00, "lMax": 20.00, "mSpan": 1.3, "sSpan": 0.2, "gSpan": 0.1 }
        },
        {
            "rolls": [2],
            "result": { "tableKey": 32, "mass": 1.90, "spectralClass": "A6", "temp": 8000, "lMin": 13.00, "lMax": 16.00, "mSpan": 1.5, "sSpan": 0.2, "gSpan": 0.1 }
        },
        {
            "rolls": [3,4],
            "result": { "tableKey": 31, "mass": 1.80, "spectralClass": "A7", "temp": 7800, "lMin": 11.00, "lMax": 13.00, "mSpan": 1.8, "sSpan": 0.3, "gSpan": 0.2 }
        },
        {
            "rolls": [5,6],
            "result": { "tableKey": 30, "mass": 1.70, "spectralClass": "A9", "temp": 7500, "lMin": 8.60, "lMax": 10.00, "mSpan": 2.1, "sSpan": 0.3, "gSpan": 0.2 }
        },
        {
            "rolls": [7,8],
            "result": { "tableKey": 29, "mass": 1.60, "spectralClass": "F0", "temp": 7300, "lMin": 6.70, "lMax": 8.20, "mSpan": 2.5, "sSpan": 0.4, "gSpan": 0.2 }
        },
        {
            "rolls": [9,10],
            "result": { "tableKey": 28, "mass": 1.50, "spectralClass": "F2", "temp": 7000, "lMin": 5.10, "lMax": 6.50, "mSpan": 3.0, "sSpan": 0.5, "gSpan": 0.3 }
        },
        {
            "rolls": [11,12,13],
            "result": { "tableKey": 27, "mass": 1.45, "spectralClass": "F3", "temp": 6900, "lMin": 4.30, "lMax": 5.70, "mSpan": 3.3, "sSpan": 0.5, "gSpan": 0.3 }
        },
        {
            "rolls": [14,15,16],
            "result": { "tableKey": 26, "mass": 1.40, "spectralClass": "F4", "temp": 6700, "lMin": 3.70, "lMax": 5.10, "mSpan": 3.7, "sSpan": 0.6, "gSpan": 0.4 }
        },
        {
            "rolls": [17,18,19],
            "result": { "tableKey": 25, "mass": 1.35, "spectralClass": "F5", "temp": 6600, "lMin": 3.10, "lMax": 4.50, "mSpan": 4.1, "sSpan": 0.6, "gSpan": 0.4 }
        },
        {
            "rolls": [20,21,22],
            "result": { "tableKey": 24, "mass": 1.30, "spectralClass": "F6", "temp": 6500, "lMin": 2.50, "lMax": 3.90, "mSpan": 4.6, "sSpan": 0.7, "gSpan": 0.4 }
        },
        {
            "rolls": [23,24,25],
            "result": { "tableKey": 23, "mass": 1.25, "spectralClass": "F7", "temp": 6400, "lMin": 2.10, "lMax": 3.50, "mSpan": 5.2, "sSpan": 0.8, "gSpan": 0.5 }
        },
        {
            "rolls": [26,27,28],
            "result": { "tableKey": 22, "mass": 1.20, "spectralClass": "F8", "temp": 6300, "lMin": 1.70, "lMax": 3.00, "mSpan": 5.9, "sSpan": 0.9, "gSpan": 0.6 }
        },
        {
            "rolls": [29,30,31,32],
            "result": { "tableKey": 21, "mass": 1.15, "spectralClass": "F9", "temp": 6100, "lMin": 1.40, "lMax": 2.60, "mSpan": 6.7, "sSpan": 1.0, "gSpan": 0.6 }
        },
        {
            "rolls": [33,34,35,36],
            "result": { "tableKey": 20, "mass": 1.10, "spectralClass": "G0", "temp": 6000, "lMin": 1.10, "lMax": 2.20, "mSpan": 7.7, "sSpan": 1.2, "gSpan": 0.7 }
        },
        {
            "rolls": [37,38,39,40],
            "result": { "tableKey": 19, "mass": 1.05, "spectralClass": "G1", "temp": 5900, "lMin": 0.87, "lMax": 1.90, "mSpan": 8.8, "sSpan": 1.4, "gSpan": 0.8 }
        },
        {
            "rolls": [41,42,43,44,45],
            "result": { "tableKey": 18, "mass": 1.00, "spectralClass": "G2", "temp": 5800, "lMin": 0.68, "lMax": 1.60, "mSpan": 10, "sSpan": 1.6, "gSpan": 1.0 }
        },
        {
            "rolls": [46,47,48,49,50],
            "result": { "tableKey": 17, "mass": 0.95, "spectralClass": "G4", "temp": 5700, "lMin": 0.56, "lMax": 1.30, "mSpan": 12, "sSpan": 1.8, "gSpan": 1.1 }
        },
        {
            "rolls": [51,52,53,55,54,56],
            "result": { "tableKey": 16, "mass": 0.90, "spectralClass": "G6", "temp": 5500, "lMin": 0.45, "lMax": 1.00, "mSpan": 14, "sSpan": 0, "gSpan": 0 }
        },
        {
            "rolls": [57,58,59,60,61,62,63],
            "result": { "tableKey": 15, "mass": 0.85, "spectralClass": "G8", "temp": 5400, "lMin": 0.36, "lMax": 0.84, "mSpan": 17, "sSpan": 0, "gSpan": 0 }
        },
        {
            "rolls": [64,65,66,67,68,69,70],
            "result": { "tableKey": 14, "mass": 0.80, "spectralClass": "K0", "temp": 5200, "lMin": 0.28, "lMax": 0.65, "mSpan": 20, "sSpan": 0, "gSpan": 0 }
        },
        {
            "rolls": [71,72,73,74,75,76,77,78],
            "result": { "tableKey": 13, "mass": 0.75, "spectralClass": "K2", "temp": 4900, "lMin": 0.23, "lMax": 0.48, "mSpan": 24, "sSpan": 0, "gSpan": 0 }
        },
        {
            "rolls": [79,80,81,82,83,84,85,86,87],
            "result": { "tableKey": 12, "mass": 0.70, "spectralClass": "K4", "temp": 4600, "lMin": 0.19, "lMax": 0.35, "mSpan": 30, "sSpan": 0, "gSpan": 0 }
        },
        {
            "min_roll": 88, "max_roll": 98,
            "result": { "tableKey": 11, "mass": 0.65, "spectralClass": "K5", "temp": 4400, "lMin": 0.15, "lMax": 0.25, "mSpan": 37, "sSpan": 0, "gSpan": 0 }
        },
        {
            "min_roll": 99, "max_roll": 110,
            "result": { "tableKey": 10, "mass": 0.60, "spectralClass": "K6", "temp": 4200, "lMin": 0.13, "lMax": 0.20, "mSpan": 42, "sSpan": 0, "gSpan": 0 }
        },
        {
            "min_roll": 111, "max_roll": 125,
            "result": { "tableKey": 9, "mass": 0.55, "spectralClass": "K8", "temp": 4000, "lMin": 0.11, "lMax": 0.15, "mSpan": 50, "sSpan": 0, "gSpan": 0 }
        },
        {
            "min_roll": 126, "max_roll": 142,
            "result": { "tableKey": 8, "mass": 0.50, "spectralClass": "M0", "temp": 3800, "lMin": 0.09, "lMax": 0.11, "mSpan": 59, "sSpan": 0, "gSpan": 0 }
        },
        {
            "min_roll": 143, "max_roll": 162,
            "result": { "tableKey": 7, "mass": 0.45, "spectralClass": "M1", "temp": 3600, "lMin": 0.07, "lMax": 0.08, "mSpan": 70, "sSpan": 0, "gSpan": 0 }
        },
        {
            "min_roll": 163, "max_roll": 186,
            "result": { "tableKey": 6, "mass": 0.40, "spectralClass": "M2", "temp": 3500, "lMin": 0.054, "lMax": 0.054, "mSpan": 1000, "sSpan": 0, "gSpan": 0 }
        },
        {
            "min_roll": 187, "max_roll": 215,
            "result": { "tableKey": 5, "mass": 0.35, "spectralClass": "M3", "temp": 3400, "lMin": 0.037, "lMax": 0.037, "mSpan": 1000, "sSpan": 0, "gSpan": 0 }
        },
        {
            "min_roll": 216, "max_roll": 250,
            "result": { "tableKey": 4, "mass": 0.30, "spectralClass": "M4", "temp": 3300, "lMin": 0.024, "lMax": 0.024, "mSpan": 1000, "sSpan": 0, "gSpan": 0 }
        },
		{
			"min_roll": 251, "max_roll": 295,
			"result": { "tableKey": 3, "mass": 0.25, "spectralClass": "M4", "temp": 3300, "lMin": 0.015, "lMax": 0.015, "mSpan": 1000, "sSpan": 0, "gSpan": 0 }
		},
		{
			"min_roll": 296, "max_roll": 350,
			"result": { "tableKey": 2, "mass": 0.20, "spectralClass": "M5", "temp": 3200, "lMin": 0.0079, "lMax": 0.0079, "mSpan": 1000, "sSpan": 0, "gSpan": 0 }
		},
		{
			"min_roll": 351, "max_roll": 417,
			"result": { "tableKey": 1, "mass": 0.15, "spectralClass": "M6", "temp": 3200, "lMin": 0.0036, "lMax": 0.0036, "mSpan": 1000, "sSpan": 0, "gSpan": 0 }
		},
		{
			"min_roll": 418, "max_roll": 500,
			"result": { "tableKey": 0, "mass": 0.10, "spectralClass": "M7", "temp": 3100, "lMin": 0.0012, "lMax": 0.0012, "mSpan": 1000, "sSpan": 0, "gSpan": 0 }
		}
	]
};


exports.stellarAge = {
	"chart_type": "random",
    "throw": {
        "die_sides": 6,
        "number_of_dice": 3,
        "modifier": 0
    },
	"results": [
		{
			"result": { "Population": "Extreme Population I", "baseAge": 0, "stepA": 0, "stepB": 0 }, 
			"rolls": [3]
		},
		{
			"result": { "Population": "Young Population I", "baseAge": 0.1, "stepA": 0.3, "stepB": 0.05 }, 
			"rolls": [4,5,6]
		},
		{
			"result": { "Population": "Intermediate Population I", "baseAge": 2, "stepA": 0.6, "stepB": 0.1 }, 
			"rolls": [7,8,9,10]
		},
		{
			"result": { "Population": "Old Population I", "baseAge": 5.6, "stepA": 0.6, "stepB": 0.1 }, 
			"rolls": [11,12,13,14]
		},
		{
			"result": { "Population": "Intermediate Population II", "baseAge": 8, "stepA": 0.6, "stepB": 0.1 }, 
			"rolls": [15,16,17]
		},
		{
			"result": { "Population": "Extreme Population II", "baseAge": 10, "stepA": 0.6, "stepB": 0.1 }, 
			"min_roll": 18
		}
	]
};

exports.stellarOrbitalSeparation = {
	"chart_type": "random",
    "throw": {
        "die_sides": 6,
        "number_of_dice": 3,
        "modifier": 0
    },
	"results": [
		{
			"result": { "separation": "Very Close", "radMult": 0.05 }, 
			"max_roll": 6
		},
		{
			"result": { "separation": "Close", "radMult": 0.5 }, 
			"rolls": [7,8,9]
		},
		{
			"result": { "separation": "Moderate", "radMult": 2 }, 
			"rolls": [10,11]
		},
		{
			"result": { "separation": "Wide", "radMult": 10 }, 
			"rolls": [12,13,14]
		},
		{
			"result": { "separation": "Distant", "radMult": 50 }, 
			"min_roll": 15
		}
	]
};

exports.stellarOrbitalEccentricity = {
	"chart_type": "random",
    "throw": {
        "die_sides": 6,
        "number_of_dice": 3,
        "modifier": 0
    },
	"results": [
		{ "result": 0.0, "max_roll": 3 },
		{ "result": 0.1, "rolls": [4] },
		{ "result": 0.2, "rolls": [5] },
		{ "result": 0.3, "rolls": [6] },
		{ "result": 0.4, "rolls": [7,8] },
		{ "result": 0.5, "rolls": [9,10,11] },
		{ "result": 0.6, "rolls": [12,13] },
		{ "result": 0.7, "rolls": [14,15] },
		{ "result": 0.8, "rolls": [16] },
		{ "result": 0.9, "rolls": [17] },
		{ "result": 0.95, "min_roll": 18 }
	]
};

exports.gasGiantArrangement = {
	"chart_type": "random",
    "throw": {
        "die_sides": 6,
        "number_of_dice": 3,
        "modifier": 0
    },
	"results": [
		{ "result": "No Gas Giant", "max_roll": 10 },
		{ "result": "Conventional Gas Giant", "rolls": [11,12] },
		{ "result": "Eccentric Gas Giant", "rolls": [13,14] },
		{ "result": "Epistellar Gas Giant", "rolls": [15,16,17,18] }
	]
};

exports.orbitalSpacing = {
	"chart_type": "random",
    "throw": {
        "die_sides": 6,
        "number_of_dice": 3,
        "modifier": 0
    },
	"results": [
		{ "result": 1.4, "max_roll": 4 },
		{ "result": 1.5, "rolls": [5,6] },
		{ "result": 1.6, "rolls": [7,8] },
		{ "result": 1.7, "rolls": [9,10,11,12] },
		{ "result": 1.8, "rolls": [13,14] },
		{ "result": 1.9, "rolls": [15,16] },
		{ "result": 2.0, "min_roll": 17 }
	]
};

exports.gasGiantSize = {
	"chart_type": "random",
    "throw": {
        "die_sides": 6,
        "number_of_dice": 3,
        "modifier": 0
    },
	"results": [
		{ "result": "Small", "max_roll": 10 },
		{ "result": "Medium", "rolls": [11,12,13,14,15,16] },
		{ "result": "Large", "min_roll": 17 }
	]
};

exports.orbitContents = {
	"chart_type": "random",
    "throw": {
        "die_sides": 6,
        "number_of_dice": 3,
        "modifier": 0
    },
	"results": [
		{
			"result": { "object": "Empty Orbit", "size": "" }, 
			"max_roll": 3
		},
		{
			"result": { "object": "Asteroid Belt", "size": "" }, 
			"rolls": [4,5,6]
		},
		{
			"result": { "object": "Terrestrial Planet", "size": "Tiny" }, 
			"rolls": [7,8]
		},
		{
			"result": { "object": "Terrestrial Planet", "size": "Small" }, 
			"rolls": [9,10,11]
		},
		{
			"result": { "object": "Terrestrial Planet", "size": "Standard" }, 
			"rolls": [12,13,14,15]
		},
		{
			"result": { "object": "Terrestrial Planet", "size": "Large" }, 
			"min_roll": 16
		}
	]
};


exports.moonFrequencyModifier = {
	"chart_type": "compare",
	"direction": "<=",
	"results": [
		{
			"result": { "shepherdMod": -10, "majorMoonMod": -10, "outerMoonletMod": -10, "terrestrialMoonsMod": -10 }, 
			"value": 0.1
		},
		{
			"result": { "shepherdMod": -8, "majorMoonMod": -5, "outerMoonletMod": -10, "terrestrialMoonsMod": -10 }, 
			"value": 0.5
		},
		{
			"result": { "shepherdMod": -6, "majorMoonMod": -4, "outerMoonletMod": -5, "terrestrialMoonsMod": -3 }, 
			"value": 0.75
		},
		{
			"result": { "shepherdMod": -3, "majorMoonMod": -1, "outerMoonletMod": -4, "terrestrialMoonsMod": -1 }, 
			"value": 1.5
		},
		{
			"result": { "shepherdMod": 0, "majorMoonMod": 0, "outerMoonletMod": -1, "terrestrialMoonsMod": 0 }, 
			"value": 3.0
		},
		{
			"result": { "shepherdMod": 0, "majorMoonMod": 0, "outerMoonletMod": 0, "terrestrialMoonsMod": 0 }, 
			"value": 1000000
		}
	]
};

exports.gasGiantSizeDetail = {
	"chart_type": "random",
    "throw": {
        "die_sides": 6,
        "number_of_dice": 3,
        "modifier": 0
    },
	"results": [
		{
			"subchart": {
				"chart_type": "index",
				"results": {
					"Small": { "result": { "mass": 10, "density": 0.42 } }, 
					"Medium": { "result": { "mass": 100, "density": 0.18} }, 
					"Large": { "result": { "mass": 600, "density": 0.31} }
				}
			},
			"max_roll": 8
		},
		{
			"subchart": {
				"chart_type": "index",
				"results": {
					"Small": { "result": { "mass": 15, "density": 0.26} }, 
					"Medium": { "result": { "mass": 150, "density": 0.19} }, 
					"Large": { "result": { "mass": 800, "density": 0.35} }
				}
			}, 
			"rolls": [9,10]
		},
		{
			"subchart": {
				"chart_type": "index",
				"results": {
					"Small": { "result": { "mass": 20, "density": 0.22} }, 
					"Medium": { "result": { "mass": 200, "density": 0.20} }, 
					"Large": { "result": { "mass": 1000, "density": 0.4} }
				}
			}, 
			"rolls": [11]
		},
		{
			"subchart": {
				"chart_type": "index",
				"results": {
					"Small": { "result": { "mass": 30, "density": 0.19} }, 
					"Medium": { "result": { "mass": 250, "density": 0.22} }, 
					"Large": { "result": { "mass": 1500, "density": 0.6} }
				}
			}, 
			"rolls": [12]
		},
		{
			"subchart": {
				"chart_type": "index",
				"results": {
					"Small": { "result": { "mass": 40, "density": 0.17} }, 
					"Medium": { "result": { "mass": 300, "density": 0.24} }, 
					"Large": { "result": { "mass": 2000, "density": 0.8} }
				}
			}, 
			"rolls": [13]
		},
		{
			"subchart": {
				"chart_type": "index",
				"results": {
					"Small": { "result": { "mass": 50, "density": 0.17} }, 
					"Medium": { "result": { "mass": 350, "density": 0.25} }, 
					"Large": { "result": { "mass": 2500, "density": 1.0} }
				}
			}, 
			"rolls": [14]
		},
		{
			"subchart": {
				"chart_type": "index",
				"results": {
					"Small": { "result": { "mass": 60, "density": 0.17} }, 
					"Medium": { "result": { "mass": 400, "density": 0.26} }, 
					"Large": { "result": { "mass": 3000, "density": 1.2} }
				}
			}, 
			"rolls": [15]
		},
		{
			"subchart": {
				"chart_type": "index",
				"results": {
					"Small": { "result": { "mass": 70, "density": 0.17} }, 
					"Medium": { "result": { "mass": 450, "density": 0.27} }, 
					"Large": { "result": { "mass": 3500, "density": 1.4} }
				}
			}, 
			"rolls": [16]
		},
		{
			"subchart": {
				"chart_type": "index",
				"results": {
					"Small": { "result": { "mass": 80, "density": 0.17} }, 
					"Medium": { "result": { "mass": 500, "density": 0.29} }, 
					"Large": { "result": { "mass": 4000, "density": 1.6} }
				}
			}, 
			"min_roll": 17
		}
	]
};

exports.marginalAtmosphere = {
	"chart_type": "random",
    "throw": {
        "die_sides": 6,
        "number_of_dice": 3,
        "modifier": 0
    },
	"results": [
		{ "result": "Chlorine or Fluorine", "rolls": [3,4] },
		{ "result": "Sulfur Compounds", "rolls": [5,6] },
		{ "result": "Nitrogen Compounds", "rolls": [7] },
		{ "result": "Organic Toxins", "rolls": [8,9] },
		{ "result": "Low Oxygen", "rolls": [10,11] },
		{ "result": "Pollutants", "rolls": [12,13] },
		{ "result": "High Carbon Dioxide", "rolls": [14] },
		{ "result": "High Oxygen", "rolls": [15,16] },
		{ "result": "Inert Gases", "rolls": [17,18] }
	]
};


exports.worldClimate = {
	"chart_type": "compare",
	"direction": ">=",
	"results": [
		{ "result": "Frozen", "value": 0 },
		{ "result": "Very Cold", "value": 244 },
		{ "result": "Cold", "value": 255 },
		{ "result": "Chilly", "value": 266 },
		{ "result": "Cool", "value": 278 },
		{ "result": "Normal", "value": 289 },
		{ "result": "Warm", "value": 300 },
		{ "result": "Tropical", "value": 311 },
		{ "result": "Hot", "value": 322 },
		{ "result": "Very Hot", "value": 333 },
		{ "result": "Infernal", "value": 344 }
	]
};

exports.worldDensity = {
	"chart_type": "random",
    "throw": {
        "die_sides": 6,
        "number_of_dice": 3,
        "modifier": 0
    },
	"results": [
		{ "result": { "Icy": 0.3, "SmallIron": 0.6, "LargeIron": 0.8 }, "rolls": [3,4,5,6] },
		{ "result": { "Icy": 0.4, "SmallIron": 0.7, "LargeIron": 0.9 }, "rolls": [7,8,9,10] },
		{ "result": { "Icy": 0.5, "SmallIron": 0.8, "LargeIron": 1.0 }, "rolls": [11,12,13,14] },
		{ "result": { "Icy": 0.6, "SmallIron": 0.9, "LargeIron": 1.1 }, "rolls": [15,16,17] },
		{ "result": { "Icy": 0.7, "SmallIron": 1.0, "LargeIron": 1.2 }, "rolls": [18] }
	]
};

exports.sizeConstraints = {
	"chart_type": "index",
	"results": {
		"Large": { "result": { "minimum": 0.065, "maximum": 0.091 } },
		"Standard": { "result": { "minimum": 0.030, "maximum": 0.065 } },
		"Small": { "result": { "minimum": 0.024, "maximum": 0.030 } },
		"Tiny": { "result": { "minimum": 0.004, "maximum": 0.024 } }
	}
};

exports.planetaryOrbitalEccentricity = {
	"chart_type": "random",
    "throw": {
        "die_sides": 6,
        "number_of_dice": 3,
        "modifier": 0
    },
	"results": [
		{ "result": 0.0, "max_roll": 3 },
		{ "result": 0.05, "rolls" : [4,5,6] },
		{ "result": 0.1, "rolls": [7,8,9] },
		{ "result": 0.15, "rolls": [10,11] },
		{ "result": 0.2, "rolls": [12] },
		{ "result": 0.3, "rolls": [13] },
		{ "result": 0.4, "rolls": [14] },
		{ "result": 0.5, "rolls": [15] },
		{ "result": 0.6, "rolls": [16] },
		{ "result": 0.7, "rolls": [17] },
		{ "result": 0.8, "min_roll": 18 }
	]
};


exports.worldClass = {
	"chart_type": "index",
	"results": {
		"Tiny":	{
            "subchart": {
            	"chart_type": "compare",
				"direction": "<=",
                "results": [
					{ "class": "Ice", "value": 140 },
					{ "class": "Rock", "value": 1000000 }
                ]
            }
		},
		"Small":	{
            "subchart": {
            	"chart_type": "compare",
				"direction": "<=",
                "results": [
					{ "class": "Hadean", "value": 80 },
					{ "class": "Ice", "value": 140 },
					{ "class": "Rock", "value": 1000000 }
                ]
            }
		},
		"Standard":	{
            "subchart": {
            	"chart_type": "compare",
				"direction": "<=",
                "results": [
					{ "class": "Hadean", "value": 80 },
					{ "class": "Ice", "value": 150 },
					{ "class": "Ice/Ammonia", "value": 230 },
					{ "class": "Ice", "value": 240 },
					{ "class": "Ocean", "value": 320 },
					{ "class": "Greenhouse", "value": 500 },
					{ "class": "Chthonian", "value": 1000000 }
                ]
            }
		},
		"Large": {
            "subchart": {
            	"chart_type": "compare",
				"direction": "<=",
                "results": [
					{ "class": "Hadean", "value": 80 },
					{ "class": "Ice", "value": 150 },
					{ "class": "Ice/Ammonia", "value": 230 },
					{ "class": "Ice", "value": 240 },
					{ "class": "Ocean", "value": 320 },
					{ "class": "Greenhouse", "value": 500 },
					{ "class": "Chthonian", "value": 1000000 }
                ]
            }
		}
	}
};

exports.worldFactors = {
	"chart_type": "index",
	"results": {
		"Tiny": {
            "subchart": {
				"chart_type": "index",
                "results": {
					"Ice": { "result": { "absorptionFactor": 0.86, "greenhouseFactor": 0, "coreType": "Icy", "atmosphereComposition": "" } },
					"Rock": { "result": { "absorptionFactor": 0.97, "greenhouseFactor": 0, "coreType": "SmallIron", "atmosphereComposition": "" } },
					"Sulfur": { "result": { "absorptionFactor": 0.77, "greenhouseFactor": 0, "coreType": "Icy", "atmosphereComposition": "" } }
                }
            }
		},
		"Small": {
            "subchart": {
				"chart_type": "index",
                "results": {
					"Hadean": { "result": { "absorptionFactor": 0.67, "greenhouseFactor": 0, "coreType": "Icy", "atmosphereComposition": "" } },
					"Ice": { 
						"result": { 
							"absorptionFactor": 0.93, 
							"greenhouseFactor": 0.1, 
							"coreType": "Icy", 
							"hydroDice": 1, 
							"hydroDiceMod": 2, 
							"atmosphereComposition": {
								"subchart": {
									"chart_type": "random",
									"throw": {
										"die_sides": 6,
										"number_of_dice": 3,
										"modifier": 0
									},
									"results": [
										{ "max_roll": 15, "atmosphereComposition": "Suffocating, Mildly Toxic" },
										{ "min_roll": 16, "atmosphereComposition": "Suffocating, Highly Toxic" }
									]
								}
							}
						}
					},
					"Rock": { "result": { "absorptionFactor": 0.96, "greenhouseFactor": 0, "coreType": "SmallIron", "atmosphereComposition": "" } }
                }
            }
		},
		"Standard": {
            "subchart": {
				"chart_type": "index",
                "results": {
					"Hadean": { "result": { "absorptionFactor": 0.67, "greenhouseFactor": 0, "coreType": "Icy", "atmosphereComposition": "" } },
					"Ammonia": { "result": { "absorptionFactor": 0.84, "greenhouseFactor": 0.2, "coreType": "Icy", "atmosphereComposition": "Suffocating, Lethally Toxic, Corrosive" } },
					"Ice": { 
						"result": { 
							"absorptionFactor": 0.86, 
							"greenhouseFactor": 0.2, 
							"coreType": "LargeIron", 
							"hydroDice": 2, 
							"hydroDiceMod": -10, 
							"atmosphereComposition": {
								"subchart": {
									"chart_type": "random",
									"throw": {
										"die_sides": 6,
										"number_of_dice": 3,
										"modifier": 0
									},
									"results": [
										{ "max_roll": 12, "atmosphereComposition": "Suffocating" },
										{ "min_roll": 13, "atmosphereComposition": "Suffocating, Mildly Toxic" }
									]
								}
							}
						}
					},
					"Garden": { 
						"result": { 
							"absorptionFactor": "hydro", 
							"greenhouseFactor": 0.16, 
							"coreType": "LargeIron", 
							"hydroDice": 1, 
							"hydroDiceMod": 4, 
							"atmosphereComposition": {
								"subchart": {
									"chart_type": "random",
									"throw": {
										"die_sides": 6,
										"number_of_dice": 3,
										"modifier": 0
									},
									"results": [
										{ "max_roll": 11, "atmosphereComposition": "Normal" },
										{ "min_roll": 12, "atmosphereComposition": "Marginal" }
									]
								}
							}
						}
					},
					"Ocean": { 
						"result": { 
							"absorptionFactor": "hydro", 
							"greenhouseFactor": 0.16, 
							"coreType": "LargeIron", 
							"hydroDice": 1, 
							"hydroDiceMod": 4, 
							"atmosphereComposition": {
								"subchart": {
									"chart_type": "random",
									"throw": {
										"die_sides": 6,
										"number_of_dice": 3,
										"modifier": 0
									},
									"results": [
										{ "max_roll": 12, "atmosphereComposition": "Suffocating" },
										{ "min_roll": 16, "atmosphereComposition": "Suffocating, Mildly Toxic" }
									]
								}
							}
						}
					},
					"Greenhouse": { "result": { "absorptionFactor": 0.77, "greenhouseFactor": 2.0, "coreType": "LargeIron", "atmosphereComposition": "Suffocating, Lethally Toxic, Corrosive" } },
					"Chthonian": { "result": { "absorptionFactor": 0.97, "greenhouseFactor": 0, "coreType": "LargeIron", "atmosphereComposition": "" } }
                }
            }
		},
		"Large": {
            "subchart": {
            	"chart_type": "index",
			    "results": {
					"Hadean": { "result": { "absorptionFactor": 0.67, "greenhouseFactor": 0, "coreType": "Icy", "atmosphereComposition": "" } },
					"Ammonia": { "result": { "absorptionFactor": 0.84, "greenhouseFactor": 0.2, "coreType": "Icy", "atmosphereComposition": "Suffocating, Lethally Toxic, Corrosive" } },
					"Ice": { "result": { "absorptionFactor": 0.86, "greenhouseFactor": 0.2, "coreType": "LargeIron", "hydroDice": 2, "hydroDiceMod": -10, "atmosphereComposition": "Suffocating, Highly Toxic" } },
					"Garden": { 
						"result": { 
							"absorptionFactor": "hydro", 
							"greenhouseFactor": 0.16, 
							"coreType": "LargeIron", 
							"hydroDice": 1, 
							"hydroDiceMod": 6, 
							"atmosphereComposition": {
								"subchart": {
									"chart_type": "random",
									"throw": {
										"die_sides": 6,
										"number_of_dice": 3,
										"modifier": 0
									},
									"results": [
										{ "max_roll": 11, "atmosphereComposition": "Normal" },
										{ "min_roll": 12, "atmosphereComposition": "Marginal" }
									]
								}
							}
						}
					},
					"Ocean": { "result": { "absorptionFactor": "hydro", "greenhouseFactor": 0.16, "coreType": "LargeIron", "hydroDice": 1, "hydroDiceMod": 6, "atmosphereComposition": "Suffocating, Highly Toxic" } },
					"Greenhouse": { "result": { "absorptionFactor": 0.77, "greenhouseFactor": 2.0, "coreType": "LargeIron", "atmosphereComposition": "Suffocating, Lethally Toxic, Corrosive" } },
					"Chthonian": { "result": { "absorptionFactor": 0.97, "greenhouseFactor": 0, "coreType": "LargeIron", "atmosphereComposition": "" } }
                }
            }
		}
	}
};

exports.temperatureFactorsGardenOceanWorlds = {
	"chart_type": "compare",
	"direction": "<=",
	"results": [
		{ "result": 0.95, "value": 20 },
		{ "result": 0.92, "value": 50 },
		{ "result": 0.88, "value": 90 },
		{ "result": 0.84, "value": 100 }
	]
};
