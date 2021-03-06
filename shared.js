var atcode = "dilema2015",
	apiHost = "https://api.iamat.com";

var getTeamsUrl = apiHost + "/atcodes/" + atcode + "/teams/";

var palette = [
	'#5DA5DA',
	'#FAA43A',
	'#60BD68',
	'#F17CB0',
	'#B2912F',
	'#B276B2',
	'#DECF3F',
	'#F15854',
	'#4D4D4D',
]

var results = {
    "id": "54f4c8c5226cbdaa0b004e45",
    "question": "\u00bfQu\u00e9 hac\u00e9s si una mujer con la que est\u00e1s es la ex de un amigo?",
    "answers": [
        {
            "text": "Segu\u00eds con ella a pesar de todo",
            "count": 1496,
            "percentage": 16,
            "points": 100,
            "image": null,
            "metadata": null
        },
        {
            "text": "La larg\u00e1s",
            "count": 3227,
            "percentage": 34,
            "points": 100,
            "image": null,
            "metadata": null
        },
        {
            "text": "Lo habl\u00e1s con tu amigo para que te apruebe la relaci\u00f3n",
            "count": 4791,
            "percentage": 50,
            "points": 100,
            "correct": true,
            "image": null,
            "metadata": null
        }
    ],
    "timing": {
        "start": 1425440042841,
        "countdown": 0,
        "open": 20000
    },
    "image": null,
    "type": "Standard",
    "userTags": {
        "room:team-54e5106fc161867c571d4e35": {
            "answers": [
                7,
                23,
                38
            ],
            "percentage": [
                10,
                34,
                56
            ]
        },
        "room:team-54e50ac1c161867c571d2cf6": {
            "answers": [
                16,
                12,
                19
            ],
            "percentage": [
                34,
                26,
                40
            ]
        },
        "room:team-54e50a6fc161867c571d2bf5": {
            "answers": [
                8,
                10,
                20
            ],
            "percentage": [
                21,
                26,
                53
            ]
        },
        "room:female": {
            "answers": [
                669,
                1120,
                1995
            ],
            "percentage": [
                18,
                30,
                52
            ]
        },
        "room:team-54e50b4fc161867c571d2f52": {
            "answers": [
                8,
                17,
                23
            ],
            "percentage": [
                17,
                35,
                48
            ]
        },
        "room:ESTADO_Concubinato": {
            "answers": [
                194,
                430,
                669
            ],
            "percentage": [
                15,
                33,
                52
            ]
        },
        "room:facebook": {
            "answers": [
                903,
                1877,
                2760
            ],
            "percentage": [
                16,
                34,
                50
            ]
        },
        "room:team-54f08c37695aa1792d048a6a": {
            "answers": [
                6,
                12,
                14
            ],
            "percentage": [
                19,
                38,
                43
            ]
        },
        "room:male": {
            "answers": [
                779,
                1990,
                2640
            ],
            "percentage": [
                14,
                37,
                49
            ]
        },
        "room:team-54e50898c161867c571d238b": {
            "answers": [
                24,
                24,
                64
            ],
            "percentage": [
                21,
                21,
                58
            ]
        },
        "room:ESTADO_Divorciado": {
            "answers": [
                93,
                125,
                209
            ],
            "percentage": [
                22,
                29,
                49
            ]
        },
        "room:EDAD_31a41": {
            "answers": [
                446,
                996,
                1385
            ],
            "percentage": [
                16,
                35,
                49
            ]
        },
        "room:team-54e508dfc161867c571d252f": {
            "answers": [
                5,
                18,
                35
            ],
            "percentage": [
                9,
                31,
                60
            ]
        },
        "room:team-54e51242c161867c571d598e": {
            "answers": [
                28,
                37,
                51
            ],
            "percentage": [
                24,
                32,
                44
            ]
        },
        "room:TEST": {
            "answers": [
                1,
                0,
                0
            ],
            "percentage": [
                100,
                0,
                0
            ]
        },
        "room:gender_unknown": {
            "answers": [
                696,
                1605,
                2406
            ],
            "percentage": [
                15,
                34,
                51
            ]
        },
        "room:team-54efdb76695aa1792d031f6f": {
            "answers": [
                196,
                508,
                679
            ],
            "percentage": [
                14,
                37,
                49
            ]
        },
        "room:EDAD_21a30": {
            "answers": [
                433,
                1079,
                1622
            ],
            "percentage": [
                14,
                34,
                52
            ]
        },
        "room:ESTADO_SOLTERO": {
            "answers": [
                716,
                1805,
                2632
            ],
            "percentage": [
                14,
                35,
                51
            ]
        },
        "room:team-54e510e1c161867c571d51c1": {
            "answers": [
                26,
                36,
                69
            ],
            "percentage": [
                20,
                27,
                53
            ]
        },
        "room:team-54e511cac161867c571d572e": {
            "answers": [
                16,
                30,
                45
            ],
            "percentage": [
                18,
                33,
                49
            ]
        },
        "room:team-54e508d5c161867c571d24f7": {
            "answers": [
                11,
                14,
                19
            ],
            "percentage": [
                25,
                32,
                43
            ]
        },
        "room:team-54e51263c161867c571d5a60": {
            "answers": [
                20,
                34,
                56
            ],
            "percentage": [
                18,
                31,
                51
            ]
        },
        "room:EDAD_Menor18": {
            "answers": [
                80,
                191,
                265
            ],
            "percentage": [
                15,
                36,
                49
            ]
        },
        "room:EDAD_18a21": {
            "answers": [
                144,
                393,
                549
            ],
            "percentage": [
                13,
                36,
                51
            ]
        },
        "room:team-54e51211c161867c571d5898": {
            "answers": [
                14,
                19,
                29
            ],
            "percentage": [
                23,
                31,
                46
            ]
        },
        "room:team-54e514dcc161867c571d661f": {
            "answers": [
                10,
                14,
                19
            ],
            "percentage": [
                23,
                33,
                44
            ]
        },
        "room:EDAD_62a100": {
            "answers": [
                19,
                18,
                40
            ],
            "percentage": [
                25,
                23,
                52
            ]
        },
        "room:team-54e515f3c161867c571d6b74": {
            "answers": [
                12,
                22,
                40
            ],
            "percentage": [
                16,
                30,
                54
            ]
        },
        "room:team-54e50a13c161867c571d2a8f": {
            "answers": [
                22,
                52,
                67
            ],
            "percentage": [
                16,
                37,
                47
            ]
        },
        "room:team-54e51535c161867c571d67ae": {
            "answers": [
                12,
                33,
                52
            ],
            "percentage": [
                12,
                34,
                54
            ]
        },
        "room:team-54e50b83c161867c571d30b8": {
            "answers": [
                34,
                57,
                126
            ],
            "percentage": [
                16,
                26,
                58
            ]
        },
        "room:EDAD_52a61": {
            "answers": [
                83,
                87,
                173
            ],
            "percentage": [
                24,
                25,
                51
            ]
        },
        "room:twitter": {
            "answers": [
                211,
                464,
                690
            ],
            "percentage": [
                15,
                34,
                51
            ]
        },
        "room:team-54e50ae3c161867c571d2d89": {
            "answers": [
                115,
                229,
                361
            ],
            "percentage": [
                16,
                32,
                52
            ]
        },
        "room:team-54edd3ccae68deec0505f7ba": {
            "answers": [
                18,
                32,
                52
            ],
            "percentage": [
                18,
                31,
                51
            ]
        },
        "room:team-54e48b913a718e04031c082c": {
            "answers": [
                50,
                93,
                145
            ],
            "percentage": [
                17,
                32,
                51
            ]
        },
        "room:team-54d8feffbb1ab4cf14000a24": {
            "answers": [
                448,
                1069,
                1504
            ],
            "percentage": [
                15,
                35,
                50
            ]
        },
        "room:team-54e5114dc161867c571d5474": {
            "answers": [
                9,
                19,
                35
            ],
            "percentage": [
                14,
                30,
                56
            ]
        },
        "room:ESTADO_Viudo": {
            "answers": [
                22,
                16,
                27
            ],
            "percentage": [
                34,
                25,
                41
            ]
        },
        "room:team-54d90006bb1ab4cf14000b68": {
            "answers": [
                143,
                333,
                466
            ],
            "percentage": [
                15,
                35,
                50
            ]
        },
        "room:team-54edd323ae68deec0505f63c": {
            "answers": [
                3,
                0,
                2
            ],
            "percentage": [
                60,
                0,
                40
            ]
        },
        "room:ESTADO_CASADO": {
            "answers": [
                391,
                681,
                1016
            ],
            "percentage": [
                19,
                33,
                48
            ]
        },
        "room:team-54e51438c161867c571d63b0": {
            "answers": [
                9,
                21,
                32
            ],
            "percentage": [
                15,
                34,
                51
            ]
        },
        "room:anonymous": {
            "answers": [
                472,
                1034,
                1575
            ],
            "percentage": [
                15,
                34,
                51
            ]
        },
        "room:EDAD_42a51": {
            "answers": [
                216,
                308,
                547
            ],
            "percentage": [
                20,
                29,
                51
            ]
        }
    },
    "result": "showResults",
    "historyId": "54f7434ae9d519421900984f",
    "time": 1425490762967
};
var pieChart = function (cx, cy, r, rows, stroke) {					
    var canvas = this,
        ms = 500,
        delta = 2,				    
        rad = Math.PI / 180,
        chart = this.set();
    function sector(cx, cy, r, startAngle, endAngle, params) {
        var x1 = cx + r * Math.cos(-startAngle * rad),
            x2 = cx + r * Math.cos(-endAngle * rad),
            y1 = cy + r * Math.sin(-startAngle * rad),
            y2 = cy + r * Math.sin(-endAngle * rad);
        return canvas.path(["M", cx, cy, "L", x1, y1, "A", r, r, 0, +(endAngle - startAngle > 180), 0, x2, y2, "z"]).attr(params);
    }
    
    var angle = 0,
        total = 0,
        start = 0;

    for (var i = 0, ii = rows.length; i < ii; i++) {
        total += rows[i].value;
    }
    for (i = 0; i < ii; i++) {
    	var row = rows[i];
    	(function(row){
            var angleplus = 360 * row.value / total,
                popangle = angle + (angleplus / 2);
			var p = sector(cx, cy, r, angle, angle + angleplus, {
                	fill: row.color,
                	stroke: stroke,
                	"stroke-width": 2
                });
			var txt = canvas.text(cx + (r + delta + 55) * Math.cos(-popangle * rad), cy + (r + delta + 25) * Math.sin(-popangle * rad), row.caption)
                	.attr({
                		fill: row.color,
                		stroke: "none",
                		opacity: 0,
                		"font-size": 20
                	});							
            p.mouseover(function () {
                p.stop().animate({transform: "s1.1 1.1 " + cx + " " + cy}, ms, "elastic");
                txt.stop().animate({opacity: 1}, ms, "elastic");
            }).mouseout(function () {
                p.stop().animate({transform: ""}, ms, "elastic");
                txt.stop().animate({opacity: 0}, ms);
            });
            angle += angleplus;
            chart.push(p);
            chart.push(txt);
            start += .1;
    	})(row)
    }
    return chart;
};


var answers2rows = function(answers, data) {
	var rows = [];
	for(var a in answers) {
		rows.push({
			caption: data[a].caption,
			value: answers[a],
			color: data[a].color
		})
	}
	return rows;	
}

var decimal2percentage = function(n) {
	return  Math.round(n * 1000)/10 + '%';
}


