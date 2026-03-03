const protocol = new pmtiles.Protocol();
maplibregl.addProtocol("pmtiles", (request) => {
    return new Promise((resolve, reject) => {
        protocol.tile(request, (err, data, cache, expires) => {
            if (err) {
                reject(err);
            } else {
                resolve({ data: data, cache: cache, expires: expires });
            }
        });
    });
});

const map = new maplibregl.Map({
    container: 'map',
    center: [77.2093, 28.6139],
    zoom: 11,
    minZoom: 11,
    maxZoom: 20,
    antialias: true,
    style: "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json"
})
map.on('load', () => {

  map.addSource('route', {
    'type': 'geojson',
    'data': {
  "type": "FeatureCollection",
  "bbox": [
    77.096687,
    28.613442,
    77.222994,
    28.717085
  ],
  "features": [
    {
      "bbox": [
        77.096687,
        28.613755,
        77.212741,
        28.705088
      ],
      "type": "Feature",
      "properties": {
        "segments": [
          {
            "distance": 18644.9,
            "duration": 1512.5,
            "steps": [
              {
                "distance": 116.5,
                "duration": 28,
                "type": 11,
                "instruction": "Head northwest",
                "name": "-",
                "way_points": [
                  0,
                  1
                ]
              },
              {
                "distance": 875.4,
                "duration": 63,
                "type": 0,
                "instruction": "Turn left onto Sir Chotu Ram marg",
                "name": "Sir Chotu Ram marg",
                "way_points": [
                  1,
                  15
                ]
              },
              {
                "distance": 340.8,
                "duration": 24.5,
                "type": 0,
                "instruction": "Turn left onto Kanjhawala road",
                "name": "Kanjhawala road",
                "way_points": [
                  15,
                  22
                ]
              },
              {
                "distance": 916.1,
                "duration": 76.7,
                "type": 13,
                "instruction": "Keep right onto New Kanjhawala Link Road",
                "name": "New Kanjhawala Link Road",
                "way_points": [
                  22,
                  38
                ]
              },
              {
                "distance": 3237.6,
                "duration": 197.4,
                "type": 7,
                "instruction": "Enter the roundabout and take the 1st exit",
                "name": "-",
                "exit_number": 1,
                "way_points": [
                  38,
                  85
                ]
              },
              {
                "distance": 14.3,
                "duration": 3.6,
                "type": 6,
                "instruction": "Continue straight onto Guru Harkishan Marg",
                "name": "Guru Harkishan Marg",
                "way_points": [
                  85,
                  87
                ]
              },
              {
                "distance": 307.1,
                "duration": 24.6,
                "type": 0,
                "instruction": "Turn left",
                "name": "-",
                "way_points": [
                  87,
                  95
                ]
              },
              {
                "distance": 1019.9,
                "duration": 103.8,
                "type": 0,
                "instruction": "Turn left",
                "name": "-",
                "way_points": [
                  95,
                  119
                ]
              },
              {
                "distance": 386,
                "duration": 37.5,
                "type": 1,
                "instruction": "Turn right",
                "name": "-",
                "way_points": [
                  119,
                  123
                ]
              },
              {
                "distance": 732.7,
                "duration": 63.2,
                "type": 7,
                "instruction": "Enter the roundabout and take the 2nd exit onto Ring Road",
                "name": "Ring Road",
                "exit_number": 2,
                "way_points": [
                  123,
                  141
                ]
              },
              {
                "distance": 1039.3,
                "duration": 86.8,
                "type": 0,
                "instruction": "Turn left onto Shiv Das Puri Marg",
                "name": "Shiv Das Puri Marg",
                "way_points": [
                  141,
                  158
                ]
              },
              {
                "distance": 3656.3,
                "duration": 268.5,
                "type": 13,
                "instruction": "Keep right onto Karampura Flyover",
                "name": "Karampura Flyover",
                "way_points": [
                  158,
                  194
                ]
              },
              {
                "distance": 103.6,
                "duration": 6.8,
                "type": 12,
                "instruction": "Keep left onto Pusa Road",
                "name": "Pusa Road",
                "way_points": [
                  194,
                  197
                ]
              },
              {
                "distance": 19.4,
                "duration": 4.7,
                "type": 3,
                "instruction": "Turn sharp right onto Govind Lal Sikka Marg",
                "name": "Govind Lal Sikka Marg",
                "way_points": [
                  197,
                  198
                ]
              },
              {
                "distance": 1685.7,
                "duration": 119.4,
                "type": 7,
                "instruction": "Enter the roundabout and take the 1st exit onto Shankar Road",
                "name": "Shankar Road",
                "exit_number": 1,
                "way_points": [
                  198,
                  245
                ]
              },
              {
                "distance": 1099,
                "duration": 90.9,
                "type": 7,
                "instruction": "Enter the roundabout and take the 3rd exit onto Shankar Road",
                "name": "Shankar Road",
                "exit_number": 3,
                "way_points": [
                  245,
                  265
                ]
              },
              {
                "distance": 537.3,
                "duration": 35.2,
                "type": 12,
                "instruction": "Keep left onto Bangabandhu Sheikh Mujib Road",
                "name": "Bangabandhu Sheikh Mujib Road",
                "way_points": [
                  265,
                  271
                ]
              },
              {
                "distance": 700.9,
                "duration": 65.1,
                "type": 7,
                "instruction": "Enter the roundabout and take the 2nd exit onto Talkatora Road",
                "name": "Talkatora Road",
                "exit_number": 2,
                "way_points": [
                  271,
                  289
                ]
              },
              {
                "distance": 559.2,
                "duration": 69.2,
                "type": 7,
                "instruction": "Enter the roundabout and take the 2nd exit onto Gurudwara Rakabganj Road",
                "name": "Gurudwara Rakabganj Road",
                "exit_number": 2,
                "way_points": [
                  289,
                  310
                ]
              },
              {
                "distance": 200.2,
                "duration": 16,
                "type": 3,
                "instruction": "Turn sharp right onto Sansad Marg",
                "name": "Sansad Marg",
                "way_points": [
                  310,
                  312
                ]
              },
              {
                "distance": 321.6,
                "duration": 29.3,
                "type": 7,
                "instruction": "Enter the roundabout and take the 1st exit onto Red Cross Road",
                "name": "Red Cross Road",
                "exit_number": 1,
                "way_points": [
                  312,
                  321
                ]
              },
              {
                "distance": 462.6,
                "duration": 73.1,
                "type": 7,
                "instruction": "Enter the roundabout and take the 3rd exit onto Rafi Ahmed Kidwai Marg",
                "name": "Rafi Ahmed Kidwai Marg",
                "exit_number": 3,
                "way_points": [
                  321,
                  337
                ]
              },
              {
                "distance": 313.2,
                "duration": 25.3,
                "type": 1,
                "instruction": "Turn right onto Kartavya Path",
                "name": "Kartavya Path",
                "way_points": [
                  337,
                  340
                ]
              },
              {
                "distance": 0,
                "duration": 0,
                "type": 10,
                "instruction": "Arrive at Kartavya Path, on the left",
                "name": "-",
                "way_points": [
                  340,
                  340
                ]
              }
            ]
          }
        ],
        "way_points": [
          0,
          340
        ],
        "summary": {
          "distance": 18644.9,
          "duration": 1512.5
        }
      },
      "geometry": {
        "coordinates": [
          [
            77.102805,
            28.704437
          ],
          [
            77.101869,
            28.705088
          ],
          [
            77.101559,
            28.704725
          ],
          [
            77.100987,
            28.704144
          ],
          [
            77.099834,
            28.702845
          ],
          [
            77.099481,
            28.702446
          ],
          [
            77.099382,
            28.702312
          ],
          [
            77.099326,
            28.702235
          ],
          [
            77.098975,
            28.701757
          ],
          [
            77.098697,
            28.701383
          ],
          [
            77.098424,
            28.701016
          ],
          [
            77.098152,
            28.70065
          ],
          [
            77.097877,
            28.700276
          ],
          [
            77.097602,
            28.699909
          ],
          [
            77.097318,
            28.699526
          ],
          [
            77.096687,
            28.698671
          ],
          [
            77.097159,
            28.698378
          ],
          [
            77.097705,
            28.698029
          ],
          [
            77.098297,
            28.69765
          ],
          [
            77.098401,
            28.697566
          ],
          [
            77.098901,
            28.6972
          ],
          [
            77.099219,
            28.696941
          ],
          [
            77.099342,
            28.696719
          ],
          [
            77.099375,
            28.696437
          ],
          [
            77.099724,
            28.695392
          ],
          [
            77.100122,
            28.694288
          ],
          [
            77.100486,
            28.69317
          ],
          [
            77.100521,
            28.693064
          ],
          [
            77.100602,
            28.692837
          ],
          [
            77.10063,
            28.692758
          ],
          [
            77.100719,
            28.692496
          ],
          [
            77.100924,
            28.691898
          ],
          [
            77.101012,
            28.691645
          ],
          [
            77.10118,
            28.691228
          ],
          [
            77.101475,
            28.690373
          ],
          [
            77.101828,
            28.689322
          ],
          [
            77.1019,
            28.689109
          ],
          [
            77.101963,
            28.688937
          ],
          [
            77.10202,
            28.68883
          ],
          [
            77.102082,
            28.688754
          ],
          [
            77.10235,
            28.6887
          ],
          [
            77.103677,
            28.688603
          ],
          [
            77.104135,
            28.688575
          ],
          [
            77.104203,
            28.688571
          ],
          [
            77.104503,
            28.688553
          ],
          [
            77.104602,
            28.688547
          ],
          [
            77.104853,
            28.688531
          ],
          [
            77.105965,
            28.688479
          ],
          [
            77.106009,
            28.68848
          ],
          [
            77.107088,
            28.688429
          ],
          [
            77.10875,
            28.688407
          ],
          [
            77.110942,
            28.688398
          ],
          [
            77.112884,
            28.688139
          ],
          [
            77.114954,
            28.687848
          ],
          [
            77.116824,
            28.687598
          ],
          [
            77.11722,
            28.687544
          ],
          [
            77.11857,
            28.687363
          ],
          [
            77.119619,
            28.687211
          ],
          [
            77.121207,
            28.686963
          ],
          [
            77.121348,
            28.686941
          ],
          [
            77.122488,
            28.68676
          ],
          [
            77.122737,
            28.686702
          ],
          [
            77.122884,
            28.686628
          ],
          [
            77.123176,
            28.686418
          ],
          [
            77.123333,
            28.686275
          ],
          [
            77.123509,
            28.686043
          ],
          [
            77.123589,
            28.685855
          ],
          [
            77.123601,
            28.685781
          ],
          [
            77.123608,
            28.684712
          ],
          [
            77.123622,
            28.684639
          ],
          [
            77.123653,
            28.684559
          ],
          [
            77.123711,
            28.684473
          ],
          [
            77.123762,
            28.684427
          ],
          [
            77.123962,
            28.684317
          ],
          [
            77.124206,
            28.684274
          ],
          [
            77.127579,
            28.683996
          ],
          [
            77.12834,
            28.683932
          ],
          [
            77.129166,
            28.683865
          ],
          [
            77.129388,
            28.683844
          ],
          [
            77.129997,
            28.683792
          ],
          [
            77.130462,
            28.683754
          ],
          [
            77.13168,
            28.683652
          ],
          [
            77.132085,
            28.683618
          ],
          [
            77.132808,
            28.683558
          ],
          [
            77.132905,
            28.68355
          ],
          [
            77.132942,
            28.683546
          ],
          [
            77.132936,
            28.683464
          ],
          [
            77.132884,
            28.683468
          ],
          [
            77.132826,
            28.682904
          ],
          [
            77.132787,
            28.682531
          ],
          [
            77.132761,
            28.682277
          ],
          [
            77.132712,
            28.681804
          ],
          [
            77.13269,
            28.681594
          ],
          [
            77.132668,
            28.681384
          ],
          [
            77.132642,
            28.681136
          ],
          [
            77.132599,
            28.680718
          ],
          [
            77.132778,
            28.680659
          ],
          [
            77.133085,
            28.680633
          ],
          [
            77.133852,
            28.680516
          ],
          [
            77.134626,
            28.680397
          ],
          [
            77.135297,
            28.680289
          ],
          [
            77.135759,
            28.680216
          ],
          [
            77.136783,
            28.679977
          ],
          [
            77.13776,
            28.679822
          ],
          [
            77.137846,
            28.679812
          ],
          [
            77.1379,
            28.679829
          ],
          [
            77.138462,
            28.679755
          ],
          [
            77.138935,
            28.679688
          ],
          [
            77.139245,
            28.679632
          ],
          [
            77.139293,
            28.679607
          ],
          [
            77.139359,
            28.679543
          ],
          [
            77.139714,
            28.679008
          ],
          [
            77.140491,
            28.677804
          ],
          [
            77.140492,
            28.677757
          ],
          [
            77.140559,
            28.677635
          ],
          [
            77.140603,
            28.677594
          ],
          [
            77.140732,
            28.677526
          ],
          [
            77.141021,
            28.67744
          ],
          [
            77.14147,
            28.677337
          ],
          [
            77.141519,
            28.677327
          ],
          [
            77.140951,
            28.675641
          ],
          [
            77.140877,
            28.675431
          ],
          [
            77.140762,
            28.675259
          ],
          [
            77.140392,
            28.674005
          ],
          [
            77.140468,
            28.673912
          ],
          [
            77.140496,
            28.673828
          ],
          [
            77.140497,
            28.673745
          ],
          [
            77.140473,
            28.673683
          ],
          [
            77.140438,
            28.673618
          ],
          [
            77.140301,
            28.673515
          ],
          [
            77.140146,
            28.67344
          ],
          [
            77.139649,
            28.672255
          ],
          [
            77.139073,
            28.670883
          ],
          [
            77.138911,
            28.670578
          ],
          [
            77.138867,
            28.670494
          ],
          [
            77.138591,
            28.670085
          ],
          [
            77.138311,
            28.669723
          ],
          [
            77.13815,
            28.669541
          ],
          [
            77.137948,
            28.669332
          ],
          [
            77.137106,
            28.668577
          ],
          [
            77.13694,
            28.668432
          ],
          [
            77.136923,
            28.668417
          ],
          [
            77.136941,
            28.66813
          ],
          [
            77.137114,
            28.667855
          ],
          [
            77.137644,
            28.667599
          ],
          [
            77.13788,
            28.667397
          ],
          [
            77.138415,
            28.666844
          ],
          [
            77.138826,
            28.666231
          ],
          [
            77.139112,
            28.665822
          ],
          [
            77.13938,
            28.665437
          ],
          [
            77.139639,
            28.665065
          ],
          [
            77.139925,
            28.664655
          ],
          [
            77.140073,
            28.664444
          ],
          [
            77.140307,
            28.664107
          ],
          [
            77.141374,
            28.662576
          ],
          [
            77.142046,
            28.661614
          ],
          [
            77.14216,
            28.661497
          ],
          [
            77.142454,
            28.661238
          ],
          [
            77.14287,
            28.660819
          ],
          [
            77.143526,
            28.660325
          ],
          [
            77.14411,
            28.659972
          ],
          [
            77.144848,
            28.659608
          ],
          [
            77.145862,
            28.659152
          ],
          [
            77.146788,
            28.658595
          ],
          [
            77.148239,
            28.657729
          ],
          [
            77.149489,
            28.656977
          ],
          [
            77.149557,
            28.656937
          ],
          [
            77.149692,
            28.65686
          ],
          [
            77.150636,
            28.656269
          ],
          [
            77.153658,
            28.654435
          ],
          [
            77.154517,
            28.653911
          ],
          [
            77.15485,
            28.653719
          ],
          [
            77.155058,
            28.653599
          ],
          [
            77.155843,
            28.653145
          ],
          [
            77.15611,
            28.652991
          ],
          [
            77.15628,
            28.652892
          ],
          [
            77.157186,
            28.652368
          ],
          [
            77.157249,
            28.652333
          ],
          [
            77.157892,
            28.65198
          ],
          [
            77.158957,
            28.651293
          ],
          [
            77.159549,
            28.650925
          ],
          [
            77.160553,
            28.650357
          ],
          [
            77.161246,
            28.649963
          ],
          [
            77.161537,
            28.649811
          ],
          [
            77.163918,
            28.648358
          ],
          [
            77.164105,
            28.648244
          ],
          [
            77.166713,
            28.646661
          ],
          [
            77.168103,
            28.645833
          ],
          [
            77.169507,
            28.644994
          ],
          [
            77.169969,
            28.644717
          ],
          [
            77.170147,
            28.644611
          ],
          [
            77.171289,
            28.643928
          ],
          [
            77.171766,
            28.643642
          ],
          [
            77.172001,
            28.643501
          ],
          [
            77.173868,
            28.642378
          ],
          [
            77.17451,
            28.642189
          ],
          [
            77.17472,
            28.64215
          ],
          [
            77.174887,
            28.642122
          ],
          [
            77.174778,
            28.641976
          ],
          [
            77.17486,
            28.641899
          ],
          [
            77.174903,
            28.641784
          ],
          [
            77.174898,
            28.641695
          ],
          [
            77.17568,
            28.641197
          ],
          [
            77.176103,
            28.640897
          ],
          [
            77.17716,
            28.640217
          ],
          [
            77.17795,
            28.639708
          ],
          [
            77.178192,
            28.639552
          ],
          [
            77.17851,
            28.639347
          ],
          [
            77.178776,
            28.639203
          ],
          [
            77.179065,
            28.639047
          ],
          [
            77.179218,
            28.638965
          ],
          [
            77.179403,
            28.638867
          ],
          [
            77.179526,
            28.638802
          ],
          [
            77.179728,
            28.638695
          ],
          [
            77.179867,
            28.638619
          ],
          [
            77.180002,
            28.638548
          ],
          [
            77.180153,
            28.63847
          ],
          [
            77.180319,
            28.63839
          ],
          [
            77.180966,
            28.638058
          ],
          [
            77.181176,
            28.637944
          ],
          [
            77.181246,
            28.637905
          ],
          [
            77.181543,
            28.637737
          ],
          [
            77.181834,
            28.637572
          ],
          [
            77.182435,
            28.637268
          ],
          [
            77.182685,
            28.637121
          ],
          [
            77.182838,
            28.637031
          ],
          [
            77.183,
            28.636927
          ],
          [
            77.183115,
            28.636854
          ],
          [
            77.183282,
            28.63675
          ],
          [
            77.183427,
            28.636673
          ],
          [
            77.183596,
            28.636569
          ],
          [
            77.183729,
            28.6365
          ],
          [
            77.183899,
            28.63641
          ],
          [
            77.184376,
            28.636167
          ],
          [
            77.184655,
            28.636027
          ],
          [
            77.184803,
            28.635947
          ],
          [
            77.184922,
            28.635889
          ],
          [
            77.185154,
            28.635776
          ],
          [
            77.185498,
            28.635594
          ],
          [
            77.185692,
            28.635488
          ],
          [
            77.186159,
            28.635238
          ],
          [
            77.186352,
            28.635143
          ],
          [
            77.186857,
            28.634941
          ],
          [
            77.187431,
            28.634755
          ],
          [
            77.189032,
            28.634288
          ],
          [
            77.18939,
            28.634202
          ],
          [
            77.189526,
            28.634235
          ],
          [
            77.189663,
            28.634204
          ],
          [
            77.189756,
            28.634126
          ],
          [
            77.189799,
            28.634019
          ],
          [
            77.189798,
            28.633969
          ],
          [
            77.189764,
            28.63387
          ],
          [
            77.189717,
            28.633824
          ],
          [
            77.189805,
            28.633626
          ],
          [
            77.190795,
            28.630457
          ],
          [
            77.191059,
            28.629822
          ],
          [
            77.191386,
            28.629293
          ],
          [
            77.191878,
            28.628793
          ],
          [
            77.192463,
            28.6284
          ],
          [
            77.194555,
            28.62717
          ],
          [
            77.194887,
            28.627065
          ],
          [
            77.195062,
            28.627039
          ],
          [
            77.195136,
            28.627071
          ],
          [
            77.195357,
            28.627023
          ],
          [
            77.195436,
            28.62698
          ],
          [
            77.195497,
            28.626919
          ],
          [
            77.195772,
            28.6267
          ],
          [
            77.196716,
            28.626162
          ],
          [
            77.198159,
            28.625328
          ],
          [
            77.199494,
            28.624516
          ],
          [
            77.199852,
            28.624307
          ],
          [
            77.20005,
            28.624212
          ],
          [
            77.200161,
            28.62422
          ],
          [
            77.200269,
            28.6242
          ],
          [
            77.200365,
            28.624153
          ],
          [
            77.200442,
            28.624084
          ],
          [
            77.200493,
            28.623998
          ],
          [
            77.200512,
            28.623867
          ],
          [
            77.200754,
            28.623739
          ],
          [
            77.200949,
            28.623619
          ],
          [
            77.202101,
            28.622966
          ],
          [
            77.202849,
            28.622545
          ],
          [
            77.203194,
            28.62235
          ],
          [
            77.203267,
            28.622309
          ],
          [
            77.203837,
            28.621988
          ],
          [
            77.203897,
            28.621954
          ],
          [
            77.204539,
            28.621592
          ],
          [
            77.20509,
            28.621282
          ],
          [
            77.20562,
            28.620983
          ],
          [
            77.205961,
            28.620791
          ],
          [
            77.206056,
            28.620846
          ],
          [
            77.206144,
            28.62087
          ],
          [
            77.206252,
            28.62088
          ],
          [
            77.20635,
            28.620864
          ],
          [
            77.206475,
            28.620812
          ],
          [
            77.20658,
            28.620716
          ],
          [
            77.207748,
            28.621212
          ],
          [
            77.208376,
            28.621479
          ],
          [
            77.208634,
            28.621589
          ],
          [
            77.20891,
            28.621706
          ],
          [
            77.208984,
            28.62174
          ],
          [
            77.209057,
            28.621749
          ],
          [
            77.209128,
            28.621733
          ],
          [
            77.209209,
            28.621669
          ],
          [
            77.209241,
            28.621614
          ],
          [
            77.209642,
            28.620926
          ],
          [
            77.209709,
            28.620857
          ],
          [
            77.210307,
            28.620516
          ],
          [
            77.210444,
            28.620489
          ],
          [
            77.210548,
            28.620493
          ],
          [
            77.210633,
            28.620491
          ],
          [
            77.210436,
            28.620229
          ],
          [
            77.209542,
            28.618966
          ],
          [
            77.209597,
            28.618901
          ],
          [
            77.209631,
            28.618826
          ],
          [
            77.209644,
            28.618747
          ],
          [
            77.209634,
            28.618667
          ],
          [
            77.20972,
            28.618564
          ],
          [
            77.210136,
            28.618301
          ],
          [
            77.211721,
            28.617401
          ],
          [
            77.211833,
            28.61734
          ],
          [
            77.212072,
            28.617274
          ],
          [
            77.212193,
            28.617334
          ],
          [
            77.212354,
            28.617354
          ],
          [
            77.212511,
            28.61732
          ],
          [
            77.212567,
            28.617292
          ],
          [
            77.212665,
            28.617199
          ],
          [
            77.212733,
            28.617075
          ],
          [
            77.212741,
            28.616976
          ],
          [
            77.212709,
            28.616868
          ],
          [
            77.212649,
            28.616765
          ],
          [
            77.212504,
            28.616668
          ],
          [
            77.212426,
            28.616575
          ],
          [
            77.212396,
            28.616504
          ],
          [
            77.212359,
            28.616287
          ],
          [
            77.212291,
            28.615236
          ],
          [
            77.212256,
            28.614671
          ],
          [
            77.212205,
            28.613755
          ],
          [
            77.212107,
            28.61376
          ],
          [
            77.20919,
            28.613895
          ],
          [
            77.209001,
            28.613909
          ]
        ],
        "type": "LineString"
      }
    },
    {
      "bbox": [
        77.10148,
        28.613755,
        77.212741,
        28.717085
      ],
      "type": "Feature",
      "properties": {
        "segments": [
          {
            "distance": 21326.2,
            "duration": 1632.7,
            "steps": [
              {
                "distance": 116.5,
                "duration": 28,
                "type": 11,
                "instruction": "Head northwest",
                "name": "-",
                "way_points": [
                  0,
                  1
                ]
              },
              {
                "distance": 50.4,
                "duration": 3.6,
                "type": 0,
                "instruction": "Turn left onto Sir Chotu Ram marg",
                "name": "Sir Chotu Ram marg",
                "way_points": [
                  1,
                  2
                ]
              },
              {
                "distance": 1744.3,
                "duration": 130.5,
                "type": 6,
                "instruction": "Continue straight onto Sir Chotu Ram marg",
                "name": "Sir Chotu Ram marg",
                "way_points": [
                  2,
                  24
                ]
              },
              {
                "distance": 4599.7,
                "duration": 284.7,
                "type": 1,
                "instruction": "Turn right onto Bhagwan mahavir marg",
                "name": "Bhagwan mahavir marg",
                "way_points": [
                  24,
                  82
                ]
              },
              {
                "distance": 650.7,
                "duration": 54.7,
                "type": 12,
                "instruction": "Keep left onto Lala Jagat Narayan marg",
                "name": "Lala Jagat Narayan marg",
                "way_points": [
                  82,
                  93
                ]
              },
              {
                "distance": 182.1,
                "duration": 14.6,
                "type": 12,
                "instruction": "Keep left",
                "name": "-",
                "way_points": [
                  93,
                  96
                ]
              },
              {
                "distance": 3052.9,
                "duration": 217.8,
                "type": 1,
                "instruction": "Turn right",
                "name": "-",
                "way_points": [
                  96,
                  127
                ]
              },
              {
                "distance": 1445.5,
                "duration": 99.6,
                "type": 12,
                "instruction": "Keep left",
                "name": "-",
                "way_points": [
                  127,
                  148
                ]
              },
              {
                "distance": 776.6,
                "duration": 70.2,
                "type": 3,
                "instruction": "Turn sharp right onto Swami Narayan Marg",
                "name": "Swami Narayan Marg",
                "way_points": [
                  148,
                  157
                ]
              },
              {
                "distance": 2702.3,
                "duration": 165.7,
                "type": 0,
                "instruction": "Turn left onto New Rohtak Road",
                "name": "New Rohtak Road",
                "way_points": [
                  157,
                  191
                ]
              },
              {
                "distance": 652.7,
                "duration": 46.3,
                "type": 1,
                "instruction": "Turn right onto Rani Jhansi Road",
                "name": "Rani Jhansi Road",
                "way_points": [
                  191,
                  203
                ]
              },
              {
                "distance": 432.9,
                "duration": 42.1,
                "type": 7,
                "instruction": "Enter the roundabout and take the 2nd exit onto Rani Jhansi Road",
                "name": "Rani Jhansi Road",
                "exit_number": 2,
                "way_points": [
                  203,
                  213
                ]
              },
              {
                "distance": 1020.9,
                "duration": 90.2,
                "type": 7,
                "instruction": "Enter the roundabout and take the 1st exit onto Panchkuian Road",
                "name": "Panchkuian Road",
                "exit_number": 1,
                "way_points": [
                  213,
                  233
                ]
              },
              {
                "distance": 1185,
                "duration": 103.2,
                "type": 1,
                "instruction": "Turn right onto Bangla Sahib Road",
                "name": "Bangla Sahib Road",
                "way_points": [
                  233,
                  250
                ]
              },
              {
                "distance": 163.7,
                "duration": 10.7,
                "type": 1,
                "instruction": "Turn right onto Baba Kharak Singh Marg",
                "name": "Baba Kharak Singh Marg",
                "way_points": [
                  250,
                  253
                ]
              },
              {
                "distance": 733.7,
                "duration": 72.4,
                "type": 7,
                "instruction": "Enter the roundabout and take the 3rd exit onto Pandit Pant Marg",
                "name": "Pandit Pant Marg",
                "exit_number": 3,
                "way_points": [
                  253,
                  272
                ]
              },
              {
                "distance": 518.7,
                "duration": 54.7,
                "type": 7,
                "instruction": "Enter the roundabout and take the 1st exit onto Gurudwara Rakabganj Road",
                "name": "Gurudwara Rakabganj Road",
                "exit_number": 1,
                "way_points": [
                  272,
                  289
                ]
              },
              {
                "distance": 200.2,
                "duration": 16,
                "type": 3,
                "instruction": "Turn sharp right onto Sansad Marg",
                "name": "Sansad Marg",
                "way_points": [
                  289,
                  291
                ]
              },
              {
                "distance": 321.6,
                "duration": 29.3,
                "type": 7,
                "instruction": "Enter the roundabout and take the 1st exit onto Red Cross Road",
                "name": "Red Cross Road",
                "exit_number": 1,
                "way_points": [
                  291,
                  300
                ]
              },
              {
                "distance": 462.6,
                "duration": 73.1,
                "type": 7,
                "instruction": "Enter the roundabout and take the 3rd exit onto Rafi Ahmed Kidwai Marg",
                "name": "Rafi Ahmed Kidwai Marg",
                "exit_number": 3,
                "way_points": [
                  300,
                  316
                ]
              },
              {
                "distance": 313.2,
                "duration": 25.3,
                "type": 1,
                "instruction": "Turn right onto Kartavya Path",
                "name": "Kartavya Path",
                "way_points": [
                  316,
                  319
                ]
              },
              {
                "distance": 0,
                "duration": 0,
                "type": 10,
                "instruction": "Arrive at Kartavya Path, on the left",
                "name": "-",
                "way_points": [
                  319,
                  319
                ]
              }
            ]
          }
        ],
        "way_points": [
          0,
          319
        ],
        "summary": {
          "distance": 21326.2,
          "duration": 1632.7
        }
      },
      "geometry": {
        "coordinates": [
          [
            77.102805,
            28.704437
          ],
          [
            77.101869,
            28.705088
          ],
          [
            77.101559,
            28.704725
          ],
          [
            77.10148,
            28.704795
          ],
          [
            77.10185,
            28.705202
          ],
          [
            77.102206,
            28.705607
          ],
          [
            77.102573,
            28.705985
          ],
          [
            77.103658,
            28.707189
          ],
          [
            77.104178,
            28.707793
          ],
          [
            77.104369,
            28.708049
          ],
          [
            77.104877,
            28.708616
          ],
          [
            77.105749,
            28.709579
          ],
          [
            77.105852,
            28.709699
          ],
          [
            77.107481,
            28.711519
          ],
          [
            77.107991,
            28.712084
          ],
          [
            77.108332,
            28.712464
          ],
          [
            77.108691,
            28.712867
          ],
          [
            77.109066,
            28.713299
          ],
          [
            77.109433,
            28.713719
          ],
          [
            77.109814,
            28.714152
          ],
          [
            77.110129,
            28.714517
          ],
          [
            77.110652,
            28.715107
          ],
          [
            77.111686,
            28.716266
          ],
          [
            77.112307,
            28.716963
          ],
          [
            77.11241,
            28.717085
          ],
          [
            77.112504,
            28.717013
          ],
          [
            77.113244,
            28.716509
          ],
          [
            77.113783,
            28.716136
          ],
          [
            77.114496,
            28.715643
          ],
          [
            77.11476,
            28.715461
          ],
          [
            77.116483,
            28.714269
          ],
          [
            77.116553,
            28.714221
          ],
          [
            77.118008,
            28.71322
          ],
          [
            77.118356,
            28.712981
          ],
          [
            77.11925,
            28.71236
          ],
          [
            77.12066,
            28.711386
          ],
          [
            77.120711,
            28.71135
          ],
          [
            77.121336,
            28.710917
          ],
          [
            77.122005,
            28.710457
          ],
          [
            77.122601,
            28.710045
          ],
          [
            77.12285,
            28.709873
          ],
          [
            77.123318,
            28.70955
          ],
          [
            77.124731,
            28.708574
          ],
          [
            77.12481,
            28.708521
          ],
          [
            77.126426,
            28.707395
          ],
          [
            77.126859,
            28.707093
          ],
          [
            77.127543,
            28.706617
          ],
          [
            77.128443,
            28.70599
          ],
          [
            77.129483,
            28.705266
          ],
          [
            77.129931,
            28.704954
          ],
          [
            77.130135,
            28.704812
          ],
          [
            77.130699,
            28.704423
          ],
          [
            77.130772,
            28.704373
          ],
          [
            77.13106,
            28.704176
          ],
          [
            77.131324,
            28.703995
          ],
          [
            77.131482,
            28.703886
          ],
          [
            77.131684,
            28.703748
          ],
          [
            77.133355,
            28.702603
          ],
          [
            77.134299,
            28.701931
          ],
          [
            77.135621,
            28.700991
          ],
          [
            77.13586,
            28.700821
          ],
          [
            77.13591,
            28.700786
          ],
          [
            77.135965,
            28.700746
          ],
          [
            77.13776,
            28.699506
          ],
          [
            77.138731,
            28.698936
          ],
          [
            77.138799,
            28.6989
          ],
          [
            77.139265,
            28.698665
          ],
          [
            77.139647,
            28.698494
          ],
          [
            77.140915,
            28.697934
          ],
          [
            77.142617,
            28.697189
          ],
          [
            77.143791,
            28.696678
          ],
          [
            77.145077,
            28.696117
          ],
          [
            77.145527,
            28.695939
          ],
          [
            77.14636,
            28.695614
          ],
          [
            77.146731,
            28.695469
          ],
          [
            77.146813,
            28.695437
          ],
          [
            77.147357,
            28.695231
          ],
          [
            77.147572,
            28.695154
          ],
          [
            77.148725,
            28.694747
          ],
          [
            77.149938,
            28.694355
          ],
          [
            77.150301,
            28.694244
          ],
          [
            77.15083,
            28.694068
          ],
          [
            77.151158,
            28.693961
          ],
          [
            77.151343,
            28.693964
          ],
          [
            77.151443,
            28.693939
          ],
          [
            77.153226,
            28.693366
          ],
          [
            77.153427,
            28.693312
          ],
          [
            77.153724,
            28.693239
          ],
          [
            77.153828,
            28.693251
          ],
          [
            77.153999,
            28.693322
          ],
          [
            77.154316,
            28.693678
          ],
          [
            77.155406,
            28.695919
          ],
          [
            77.155525,
            28.696165
          ],
          [
            77.155554,
            28.696224
          ],
          [
            77.155718,
            28.696822
          ],
          [
            77.156119,
            28.697657
          ],
          [
            77.15617,
            28.697765
          ],
          [
            77.156481,
            28.697644
          ],
          [
            77.157324,
            28.697316
          ],
          [
            77.157546,
            28.697176
          ],
          [
            77.157724,
            28.697029
          ],
          [
            77.157853,
            28.696837
          ],
          [
            77.15827,
            28.696107
          ],
          [
            77.158895,
            28.694912
          ],
          [
            77.159056,
            28.694521
          ],
          [
            77.160234,
            28.692079
          ],
          [
            77.160692,
            28.691133
          ],
          [
            77.161074,
            28.690268
          ],
          [
            77.161124,
            28.690154
          ],
          [
            77.161549,
            28.689421
          ],
          [
            77.163237,
            28.685881
          ],
          [
            77.163924,
            28.684417
          ],
          [
            77.163951,
            28.684319
          ],
          [
            77.164167,
            28.683764
          ],
          [
            77.164229,
            28.683637
          ],
          [
            77.164693,
            28.682778
          ],
          [
            77.165083,
            28.681978
          ],
          [
            77.165252,
            28.681527
          ],
          [
            77.165978,
            28.680028
          ],
          [
            77.166666,
            28.678464
          ],
          [
            77.166959,
            28.677854
          ],
          [
            77.167289,
            28.677164
          ],
          [
            77.167894,
            28.67609
          ],
          [
            77.168151,
            28.675616
          ],
          [
            77.168238,
            28.67546
          ],
          [
            77.168692,
            28.674614
          ],
          [
            77.169264,
            28.673374
          ],
          [
            77.169342,
            28.673243
          ],
          [
            77.169521,
            28.673114
          ],
          [
            77.169745,
            28.672952
          ],
          [
            77.16991,
            28.672863
          ],
          [
            77.170388,
            28.672737
          ],
          [
            77.170523,
            28.672668
          ],
          [
            77.171311,
            28.672541
          ],
          [
            77.171726,
            28.672419
          ],
          [
            77.172173,
            28.672234
          ],
          [
            77.172384,
            28.672142
          ],
          [
            77.173521,
            28.671672
          ],
          [
            77.173853,
            28.671582
          ],
          [
            77.174597,
            28.671485
          ],
          [
            77.175783,
            28.671257
          ],
          [
            77.177852,
            28.670839
          ],
          [
            77.178066,
            28.6708
          ],
          [
            77.180315,
            28.670345
          ],
          [
            77.180743,
            28.670278
          ],
          [
            77.181422,
            28.670171
          ],
          [
            77.182569,
            28.670081
          ],
          [
            77.183402,
            28.67004
          ],
          [
            77.183547,
            28.670033
          ],
          [
            77.183466,
            28.669888
          ],
          [
            77.183253,
            28.669481
          ],
          [
            77.182871,
            28.668666
          ],
          [
            77.18255,
            28.668035
          ],
          [
            77.182021,
            28.667009
          ],
          [
            77.181381,
            28.665503
          ],
          [
            77.180815,
            28.664276
          ],
          [
            77.180754,
            28.664124
          ],
          [
            77.180533,
            28.663573
          ],
          [
            77.180842,
            28.663527
          ],
          [
            77.181111,
            28.663446
          ],
          [
            77.181289,
            28.663374
          ],
          [
            77.181712,
            28.663083
          ],
          [
            77.182119,
            28.662729
          ],
          [
            77.182377,
            28.662475
          ],
          [
            77.18265,
            28.662207
          ],
          [
            77.182884,
            28.662055
          ],
          [
            77.183384,
            28.661828
          ],
          [
            77.183917,
            28.661629
          ],
          [
            77.185005,
            28.661268
          ],
          [
            77.185791,
            28.661002
          ],
          [
            77.18641,
            28.660795
          ],
          [
            77.187049,
            28.660581
          ],
          [
            77.189349,
            28.65981
          ],
          [
            77.190233,
            28.65951
          ],
          [
            77.192347,
            28.65879
          ],
          [
            77.193094,
            28.658496
          ],
          [
            77.194183,
            28.657892
          ],
          [
            77.19558,
            28.657144
          ],
          [
            77.196006,
            28.656919
          ],
          [
            77.19635,
            28.656738
          ],
          [
            77.196777,
            28.656511
          ],
          [
            77.197311,
            28.656233
          ],
          [
            77.198295,
            28.655768
          ],
          [
            77.19849,
            28.655678
          ],
          [
            77.199756,
            28.655072
          ],
          [
            77.200239,
            28.654817
          ],
          [
            77.200708,
            28.654555
          ],
          [
            77.201134,
            28.654302
          ],
          [
            77.202619,
            28.653511
          ],
          [
            77.202698,
            28.653468
          ],
          [
            77.204718,
            28.652402
          ],
          [
            77.204883,
            28.652426
          ],
          [
            77.204905,
            28.652317
          ],
          [
            77.205057,
            28.651573
          ],
          [
            77.205185,
            28.650799
          ],
          [
            77.2052,
            28.650708
          ],
          [
            77.205227,
            28.650565
          ],
          [
            77.205326,
            28.649973
          ],
          [
            77.205596,
            28.648402
          ],
          [
            77.20566,
            28.647956
          ],
          [
            77.205674,
            28.647689
          ],
          [
            77.205644,
            28.647325
          ],
          [
            77.205538,
            28.646736
          ],
          [
            77.205529,
            28.646617
          ],
          [
            77.205513,
            28.646541
          ],
          [
            77.205469,
            28.646487
          ],
          [
            77.205402,
            28.646451
          ],
          [
            77.205234,
            28.646067
          ],
          [
            77.205044,
            28.645846
          ],
          [
            77.204425,
            28.644959
          ],
          [
            77.203796,
            28.643998
          ],
          [
            77.203683,
            28.643713
          ],
          [
            77.20363,
            28.643319
          ],
          [
            77.203644,
            28.643174
          ],
          [
            77.203686,
            28.643085
          ],
          [
            77.203692,
            28.642988
          ],
          [
            77.203722,
            28.642765
          ],
          [
            77.203758,
            28.642602
          ],
          [
            77.203912,
            28.642314
          ],
          [
            77.204295,
            28.641873
          ],
          [
            77.204867,
            28.641451
          ],
          [
            77.205265,
            28.641196
          ],
          [
            77.205286,
            28.641183
          ],
          [
            77.205342,
            28.641148
          ],
          [
            77.20542,
            28.641104
          ],
          [
            77.207682,
            28.639854
          ],
          [
            77.207936,
            28.639714
          ],
          [
            77.208036,
            28.639659
          ],
          [
            77.208236,
            28.639545
          ],
          [
            77.208293,
            28.639513
          ],
          [
            77.208899,
            28.639169
          ],
          [
            77.209839,
            28.638627
          ],
          [
            77.210951,
            28.63799
          ],
          [
            77.211623,
            28.637605
          ],
          [
            77.211508,
            28.637454
          ],
          [
            77.21117,
            28.636993
          ],
          [
            77.210763,
            28.63644
          ],
          [
            77.210526,
            28.636118
          ],
          [
            77.209933,
            28.635324
          ],
          [
            77.209629,
            28.634913
          ],
          [
            77.209227,
            28.63438
          ],
          [
            77.20883,
            28.633832
          ],
          [
            77.208611,
            28.633603
          ],
          [
            77.20858,
            28.633514
          ],
          [
            77.2085,
            28.632471
          ],
          [
            77.20841,
            28.63116
          ],
          [
            77.20835,
            28.629996
          ],
          [
            77.208276,
            28.62883
          ],
          [
            77.208669,
            28.628089
          ],
          [
            77.208748,
            28.62794
          ],
          [
            77.208795,
            28.627858
          ],
          [
            77.208714,
            28.627821
          ],
          [
            77.207596,
            28.627308
          ],
          [
            77.207316,
            28.627165
          ],
          [
            77.207352,
            28.626966
          ],
          [
            77.207314,
            28.626768
          ],
          [
            77.20722,
            28.626605
          ],
          [
            77.207075,
            28.626474
          ],
          [
            77.206964,
            28.626412
          ],
          [
            77.206777,
            28.626355
          ],
          [
            77.206656,
            28.626177
          ],
          [
            77.20661,
            28.625936
          ],
          [
            77.206538,
            28.624827
          ],
          [
            77.206531,
            28.624262
          ],
          [
            77.206472,
            28.623631
          ],
          [
            77.206417,
            28.62279
          ],
          [
            77.206409,
            28.622645
          ],
          [
            77.206377,
            28.622173
          ],
          [
            77.206353,
            28.621764
          ],
          [
            77.206337,
            28.621457
          ],
          [
            77.206313,
            28.621225
          ],
          [
            77.206294,
            28.620991
          ],
          [
            77.20635,
            28.620864
          ],
          [
            77.206475,
            28.620812
          ],
          [
            77.20658,
            28.620716
          ],
          [
            77.207748,
            28.621212
          ],
          [
            77.208376,
            28.621479
          ],
          [
            77.208634,
            28.621589
          ],
          [
            77.20891,
            28.621706
          ],
          [
            77.208984,
            28.62174
          ],
          [
            77.209057,
            28.621749
          ],
          [
            77.209128,
            28.621733
          ],
          [
            77.209209,
            28.621669
          ],
          [
            77.209241,
            28.621614
          ],
          [
            77.209642,
            28.620926
          ],
          [
            77.209709,
            28.620857
          ],
          [
            77.210307,
            28.620516
          ],
          [
            77.210444,
            28.620489
          ],
          [
            77.210548,
            28.620493
          ],
          [
            77.210633,
            28.620491
          ],
          [
            77.210436,
            28.620229
          ],
          [
            77.209542,
            28.618966
          ],
          [
            77.209597,
            28.618901
          ],
          [
            77.209631,
            28.618826
          ],
          [
            77.209644,
            28.618747
          ],
          [
            77.209634,
            28.618667
          ],
          [
            77.20972,
            28.618564
          ],
          [
            77.210136,
            28.618301
          ],
          [
            77.211721,
            28.617401
          ],
          [
            77.211833,
            28.61734
          ],
          [
            77.212072,
            28.617274
          ],
          [
            77.212193,
            28.617334
          ],
          [
            77.212354,
            28.617354
          ],
          [
            77.212511,
            28.61732
          ],
          [
            77.212567,
            28.617292
          ],
          [
            77.212665,
            28.617199
          ],
          [
            77.212733,
            28.617075
          ],
          [
            77.212741,
            28.616976
          ],
          [
            77.212709,
            28.616868
          ],
          [
            77.212649,
            28.616765
          ],
          [
            77.212504,
            28.616668
          ],
          [
            77.212426,
            28.616575
          ],
          [
            77.212396,
            28.616504
          ],
          [
            77.212359,
            28.616287
          ],
          [
            77.212291,
            28.615236
          ],
          [
            77.212256,
            28.614671
          ],
          [
            77.212205,
            28.613755
          ],
          [
            77.212107,
            28.61376
          ],
          [
            77.20919,
            28.613895
          ],
          [
            77.209001,
            28.613909
          ]
        ],
        "type": "LineString"
      }
    },
    {
      "bbox": [
        77.10148,
        28.613442,
        77.222994,
        28.717085
      ],
      "type": "Feature",
      "properties": {
        "segments": [
          {
            "distance": 22225,
            "duration": 1640.1,
            "steps": [
              {
                "distance": 116.5,
                "duration": 28,
                "type": 11,
                "instruction": "Head northwest",
                "name": "-",
                "way_points": [
                  0,
                  1
                ]
              },
              {
                "distance": 50.4,
                "duration": 3.6,
                "type": 0,
                "instruction": "Turn left onto Sir Chotu Ram marg",
                "name": "Sir Chotu Ram marg",
                "way_points": [
                  1,
                  2
                ]
              },
              {
                "distance": 1744.3,
                "duration": 130.5,
                "type": 6,
                "instruction": "Continue straight onto Sir Chotu Ram marg",
                "name": "Sir Chotu Ram marg",
                "way_points": [
                  2,
                  24
                ]
              },
              {
                "distance": 4599.7,
                "duration": 284.7,
                "type": 1,
                "instruction": "Turn right onto Bhagwan mahavir marg",
                "name": "Bhagwan mahavir marg",
                "way_points": [
                  24,
                  82
                ]
              },
              {
                "distance": 650.7,
                "duration": 54.7,
                "type": 12,
                "instruction": "Keep left onto Lala Jagat Narayan marg",
                "name": "Lala Jagat Narayan marg",
                "way_points": [
                  82,
                  93
                ]
              },
              {
                "distance": 182.1,
                "duration": 14.6,
                "type": 12,
                "instruction": "Keep left",
                "name": "-",
                "way_points": [
                  93,
                  96
                ]
              },
              {
                "distance": 3052.9,
                "duration": 217.8,
                "type": 1,
                "instruction": "Turn right",
                "name": "-",
                "way_points": [
                  96,
                  127
                ]
              },
              {
                "distance": 3949.8,
                "duration": 259.8,
                "type": 12,
                "instruction": "Keep left",
                "name": "-",
                "way_points": [
                  127,
                  186
                ]
              },
              {
                "distance": 239.4,
                "duration": 25.7,
                "type": 1,
                "instruction": "Turn right onto Rani Jhansi Road",
                "name": "Rani Jhansi Road",
                "way_points": [
                  186,
                  193
                ]
              },
              {
                "distance": 641.4,
                "duration": 53.6,
                "type": 0,
                "instruction": "Turn left onto Bahadurgarh Road",
                "name": "Bahadurgarh Road",
                "way_points": [
                  193,
                  207
                ]
              },
              {
                "distance": 5.5,
                "duration": 0.5,
                "type": 3,
                "instruction": "Turn sharp right onto Bahadurgarh Road",
                "name": "Bahadurgarh Road",
                "way_points": [
                  207,
                  208
                ]
              },
              {
                "distance": 237.2,
                "duration": 19,
                "type": 0,
                "instruction": "Turn left onto Phoota Road",
                "name": "Phoota Road",
                "way_points": [
                  208,
                  210
                ]
              },
              {
                "distance": 317.1,
                "duration": 25.7,
                "type": 0,
                "instruction": "Turn left onto Maharaj Agarsen Road",
                "name": "Maharaj Agarsen Road",
                "way_points": [
                  210,
                  216
                ]
              },
              {
                "distance": 2530.4,
                "duration": 165.6,
                "type": 1,
                "instruction": "Turn right onto Qutab Road",
                "name": "Qutab Road",
                "way_points": [
                  216,
                  264
                ]
              },
              {
                "distance": 2148.8,
                "duration": 205.2,
                "type": 7,
                "instruction": "Enter the roundabout and take the 22 exit onto Janpath",
                "name": "Janpath",
                "exit_number": 22,
                "way_points": [
                  264,
                  316
                ]
              },
              {
                "distance": 450.6,
                "duration": 48.7,
                "type": 7,
                "instruction": "Enter the roundabout and take the 3rd exit onto Janpath",
                "name": "Janpath",
                "exit_number": 3,
                "way_points": [
                  316,
                  331
                ]
              },
              {
                "distance": 377,
                "duration": 36.7,
                "type": 7,
                "instruction": "Enter the roundabout and take the 2nd exit onto Janpath",
                "name": "Janpath",
                "exit_number": 2,
                "way_points": [
                  331,
                  338
                ]
              },
              {
                "distance": 931.4,
                "duration": 65.9,
                "type": 1,
                "instruction": "Turn right onto Kartavya Path",
                "name": "Kartavya Path",
                "way_points": [
                  338,
                  343
                ]
              },
              {
                "distance": 0,
                "duration": 0,
                "type": 10,
                "instruction": "Arrive at Kartavya Path, on the left",
                "name": "-",
                "way_points": [
                  343,
                  343
                ]
              }
            ]
          }
        ],
        "way_points": [
          0,
          343
        ],
        "summary": {
          "distance": 22225,
          "duration": 1640.1
        }
      },
      "geometry": {
        "coordinates": [
          [
            77.102805,
            28.704437
          ],
          [
            77.101869,
            28.705088
          ],
          [
            77.101559,
            28.704725
          ],
          [
            77.10148,
            28.704795
          ],
          [
            77.10185,
            28.705202
          ],
          [
            77.102206,
            28.705607
          ],
          [
            77.102573,
            28.705985
          ],
          [
            77.103658,
            28.707189
          ],
          [
            77.104178,
            28.707793
          ],
          [
            77.104369,
            28.708049
          ],
          [
            77.104877,
            28.708616
          ],
          [
            77.105749,
            28.709579
          ],
          [
            77.105852,
            28.709699
          ],
          [
            77.107481,
            28.711519
          ],
          [
            77.107991,
            28.712084
          ],
          [
            77.108332,
            28.712464
          ],
          [
            77.108691,
            28.712867
          ],
          [
            77.109066,
            28.713299
          ],
          [
            77.109433,
            28.713719
          ],
          [
            77.109814,
            28.714152
          ],
          [
            77.110129,
            28.714517
          ],
          [
            77.110652,
            28.715107
          ],
          [
            77.111686,
            28.716266
          ],
          [
            77.112307,
            28.716963
          ],
          [
            77.11241,
            28.717085
          ],
          [
            77.112504,
            28.717013
          ],
          [
            77.113244,
            28.716509
          ],
          [
            77.113783,
            28.716136
          ],
          [
            77.114496,
            28.715643
          ],
          [
            77.11476,
            28.715461
          ],
          [
            77.116483,
            28.714269
          ],
          [
            77.116553,
            28.714221
          ],
          [
            77.118008,
            28.71322
          ],
          [
            77.118356,
            28.712981
          ],
          [
            77.11925,
            28.71236
          ],
          [
            77.12066,
            28.711386
          ],
          [
            77.120711,
            28.71135
          ],
          [
            77.121336,
            28.710917
          ],
          [
            77.122005,
            28.710457
          ],
          [
            77.122601,
            28.710045
          ],
          [
            77.12285,
            28.709873
          ],
          [
            77.123318,
            28.70955
          ],
          [
            77.124731,
            28.708574
          ],
          [
            77.12481,
            28.708521
          ],
          [
            77.126426,
            28.707395
          ],
          [
            77.126859,
            28.707093
          ],
          [
            77.127543,
            28.706617
          ],
          [
            77.128443,
            28.70599
          ],
          [
            77.129483,
            28.705266
          ],
          [
            77.129931,
            28.704954
          ],
          [
            77.130135,
            28.704812
          ],
          [
            77.130699,
            28.704423
          ],
          [
            77.130772,
            28.704373
          ],
          [
            77.13106,
            28.704176
          ],
          [
            77.131324,
            28.703995
          ],
          [
            77.131482,
            28.703886
          ],
          [
            77.131684,
            28.703748
          ],
          [
            77.133355,
            28.702603
          ],
          [
            77.134299,
            28.701931
          ],
          [
            77.135621,
            28.700991
          ],
          [
            77.13586,
            28.700821
          ],
          [
            77.13591,
            28.700786
          ],
          [
            77.135965,
            28.700746
          ],
          [
            77.13776,
            28.699506
          ],
          [
            77.138731,
            28.698936
          ],
          [
            77.138799,
            28.6989
          ],
          [
            77.139265,
            28.698665
          ],
          [
            77.139647,
            28.698494
          ],
          [
            77.140915,
            28.697934
          ],
          [
            77.142617,
            28.697189
          ],
          [
            77.143791,
            28.696678
          ],
          [
            77.145077,
            28.696117
          ],
          [
            77.145527,
            28.695939
          ],
          [
            77.14636,
            28.695614
          ],
          [
            77.146731,
            28.695469
          ],
          [
            77.146813,
            28.695437
          ],
          [
            77.147357,
            28.695231
          ],
          [
            77.147572,
            28.695154
          ],
          [
            77.148725,
            28.694747
          ],
          [
            77.149938,
            28.694355
          ],
          [
            77.150301,
            28.694244
          ],
          [
            77.15083,
            28.694068
          ],
          [
            77.151158,
            28.693961
          ],
          [
            77.151343,
            28.693964
          ],
          [
            77.151443,
            28.693939
          ],
          [
            77.153226,
            28.693366
          ],
          [
            77.153427,
            28.693312
          ],
          [
            77.153724,
            28.693239
          ],
          [
            77.153828,
            28.693251
          ],
          [
            77.153999,
            28.693322
          ],
          [
            77.154316,
            28.693678
          ],
          [
            77.155406,
            28.695919
          ],
          [
            77.155525,
            28.696165
          ],
          [
            77.155554,
            28.696224
          ],
          [
            77.155718,
            28.696822
          ],
          [
            77.156119,
            28.697657
          ],
          [
            77.15617,
            28.697765
          ],
          [
            77.156481,
            28.697644
          ],
          [
            77.157324,
            28.697316
          ],
          [
            77.157546,
            28.697176
          ],
          [
            77.157724,
            28.697029
          ],
          [
            77.157853,
            28.696837
          ],
          [
            77.15827,
            28.696107
          ],
          [
            77.158895,
            28.694912
          ],
          [
            77.159056,
            28.694521
          ],
          [
            77.160234,
            28.692079
          ],
          [
            77.160692,
            28.691133
          ],
          [
            77.161074,
            28.690268
          ],
          [
            77.161124,
            28.690154
          ],
          [
            77.161549,
            28.689421
          ],
          [
            77.163237,
            28.685881
          ],
          [
            77.163924,
            28.684417
          ],
          [
            77.163951,
            28.684319
          ],
          [
            77.164167,
            28.683764
          ],
          [
            77.164229,
            28.683637
          ],
          [
            77.164693,
            28.682778
          ],
          [
            77.165083,
            28.681978
          ],
          [
            77.165252,
            28.681527
          ],
          [
            77.165978,
            28.680028
          ],
          [
            77.166666,
            28.678464
          ],
          [
            77.166959,
            28.677854
          ],
          [
            77.167289,
            28.677164
          ],
          [
            77.167894,
            28.67609
          ],
          [
            77.168151,
            28.675616
          ],
          [
            77.168238,
            28.67546
          ],
          [
            77.168692,
            28.674614
          ],
          [
            77.169264,
            28.673374
          ],
          [
            77.169342,
            28.673243
          ],
          [
            77.169521,
            28.673114
          ],
          [
            77.169745,
            28.672952
          ],
          [
            77.16991,
            28.672863
          ],
          [
            77.170388,
            28.672737
          ],
          [
            77.170523,
            28.672668
          ],
          [
            77.171311,
            28.672541
          ],
          [
            77.171726,
            28.672419
          ],
          [
            77.172173,
            28.672234
          ],
          [
            77.172384,
            28.672142
          ],
          [
            77.173521,
            28.671672
          ],
          [
            77.173853,
            28.671582
          ],
          [
            77.174597,
            28.671485
          ],
          [
            77.175783,
            28.671257
          ],
          [
            77.177852,
            28.670839
          ],
          [
            77.178066,
            28.6708
          ],
          [
            77.180315,
            28.670345
          ],
          [
            77.180743,
            28.670278
          ],
          [
            77.181422,
            28.670171
          ],
          [
            77.182569,
            28.670081
          ],
          [
            77.183402,
            28.67004
          ],
          [
            77.183547,
            28.670033
          ],
          [
            77.186761,
            28.669884
          ],
          [
            77.187167,
            28.669827
          ],
          [
            77.187812,
            28.669701
          ],
          [
            77.191952,
            28.668592
          ],
          [
            77.192161,
            28.668536
          ],
          [
            77.192305,
            28.668497
          ],
          [
            77.192943,
            28.668325
          ],
          [
            77.19311,
            28.66828
          ],
          [
            77.193344,
            28.668217
          ],
          [
            77.193575,
            28.668154
          ],
          [
            77.194486,
            28.667909
          ],
          [
            77.195155,
            28.667728
          ],
          [
            77.195661,
            28.667591
          ],
          [
            77.195885,
            28.667531
          ],
          [
            77.196112,
            28.667469
          ],
          [
            77.196804,
            28.667288
          ],
          [
            77.196982,
            28.66724
          ],
          [
            77.197498,
            28.667104
          ],
          [
            77.197898,
            28.666997
          ],
          [
            77.199332,
            28.666613
          ],
          [
            77.200865,
            28.666205
          ],
          [
            77.201646,
            28.665997
          ],
          [
            77.201682,
            28.665987
          ],
          [
            77.201816,
            28.665952
          ],
          [
            77.201972,
            28.66591
          ],
          [
            77.202195,
            28.665851
          ],
          [
            77.202876,
            28.665629
          ],
          [
            77.203219,
            28.665518
          ],
          [
            77.203618,
            28.665442
          ],
          [
            77.203931,
            28.6654
          ],
          [
            77.204414,
            28.665271
          ],
          [
            77.205137,
            28.664986
          ],
          [
            77.205483,
            28.664917
          ],
          [
            77.205771,
            28.664959
          ],
          [
            77.205838,
            28.664954
          ],
          [
            77.206278,
            28.664841
          ],
          [
            77.207862,
            28.664344
          ],
          [
            77.208201,
            28.664213
          ],
          [
            77.208178,
            28.66413
          ],
          [
            77.208136,
            28.664012
          ],
          [
            77.208068,
            28.663821
          ],
          [
            77.20784,
            28.663495
          ],
          [
            77.207576,
            28.663117
          ],
          [
            77.207555,
            28.663068
          ],
          [
            77.207235,
            28.662249
          ],
          [
            77.207616,
            28.662177
          ],
          [
            77.207999,
            28.662104
          ],
          [
            77.208266,
            28.662053
          ],
          [
            77.208517,
            28.662003
          ],
          [
            77.20906,
            28.661916
          ],
          [
            77.209859,
            28.661742
          ],
          [
            77.210053,
            28.661684
          ],
          [
            77.211095,
            28.661368
          ],
          [
            77.211305,
            28.661319
          ],
          [
            77.211427,
            28.661303
          ],
          [
            77.211715,
            28.661215
          ],
          [
            77.213394,
            28.660623
          ],
          [
            77.21345,
            28.660597
          ],
          [
            77.213492,
            28.66056
          ],
          [
            77.213436,
            28.660562
          ],
          [
            77.213135,
            28.659652
          ],
          [
            77.212756,
            28.658514
          ],
          [
            77.213455,
            28.658297
          ],
          [
            77.214192,
            28.658061
          ],
          [
            77.215018,
            28.657858
          ],
          [
            77.215434,
            28.657779
          ],
          [
            77.215807,
            28.657709
          ],
          [
            77.215867,
            28.657705
          ],
          [
            77.215932,
            28.657072
          ],
          [
            77.215922,
            28.65687
          ],
          [
            77.215948,
            28.656343
          ],
          [
            77.216002,
            28.655799
          ],
          [
            77.216073,
            28.655289
          ],
          [
            77.216148,
            28.655012
          ],
          [
            77.216507,
            28.65397
          ],
          [
            77.216773,
            28.652713
          ],
          [
            77.216889,
            28.652419
          ],
          [
            77.217041,
            28.651849
          ],
          [
            77.217237,
            28.651246
          ],
          [
            77.217377,
            28.650752
          ],
          [
            77.21763,
            28.650015
          ],
          [
            77.21782,
            28.649469
          ],
          [
            77.21786,
            28.649257
          ],
          [
            77.217907,
            28.648811
          ],
          [
            77.217876,
            28.648603
          ],
          [
            77.21787,
            28.648568
          ],
          [
            77.217897,
            28.648379
          ],
          [
            77.21791,
            28.648086
          ],
          [
            77.217923,
            28.647781
          ],
          [
            77.217951,
            28.646696
          ],
          [
            77.21797,
            28.64632
          ],
          [
            77.217975,
            28.645948
          ],
          [
            77.217955,
            28.645575
          ],
          [
            77.217951,
            28.645289
          ],
          [
            77.218026,
            28.644691
          ],
          [
            77.218067,
            28.644515
          ],
          [
            77.218114,
            28.644288
          ],
          [
            77.21811,
            28.644116
          ],
          [
            77.218105,
            28.643955
          ],
          [
            77.218107,
            28.643892
          ],
          [
            77.218109,
            28.643799
          ],
          [
            77.218229,
            28.643249
          ],
          [
            77.218278,
            28.642958
          ],
          [
            77.218484,
            28.6421
          ],
          [
            77.218497,
            28.642021
          ],
          [
            77.218533,
            28.641887
          ],
          [
            77.218632,
            28.641393
          ],
          [
            77.218709,
            28.640951
          ],
          [
            77.218718,
            28.640735
          ],
          [
            77.218552,
            28.638503
          ],
          [
            77.218475,
            28.637151
          ],
          [
            77.218445,
            28.636945
          ],
          [
            77.218357,
            28.63575
          ],
          [
            77.218387,
            28.635695
          ],
          [
            77.218507,
            28.635621
          ],
          [
            77.218866,
            28.635586
          ],
          [
            77.219166,
            28.635642
          ],
          [
            77.219883,
            28.635719
          ],
          [
            77.220035,
            28.635697
          ],
          [
            77.220444,
            28.635575
          ],
          [
            77.221049,
            28.635395
          ],
          [
            77.221439,
            28.635276
          ],
          [
            77.221544,
            28.635212
          ],
          [
            77.221581,
            28.635181
          ],
          [
            77.222119,
            28.634705
          ],
          [
            77.222383,
            28.634423
          ],
          [
            77.22254,
            28.634198
          ],
          [
            77.222722,
            28.633898
          ],
          [
            77.22282,
            28.633676
          ],
          [
            77.222898,
            28.633442
          ],
          [
            77.222966,
            28.633131
          ],
          [
            77.22298,
            28.632977
          ],
          [
            77.222994,
            28.632809
          ],
          [
            77.222981,
            28.632487
          ],
          [
            77.222927,
            28.632169
          ],
          [
            77.222832,
            28.631857
          ],
          [
            77.222561,
            28.631405
          ],
          [
            77.222434,
            28.631252
          ],
          [
            77.222269,
            28.631006
          ],
          [
            77.222128,
            28.630872
          ],
          [
            77.221895,
            28.630656
          ],
          [
            77.221746,
            28.630549
          ],
          [
            77.221594,
            28.630438
          ],
          [
            77.22157,
            28.630419
          ],
          [
            77.221405,
            28.630292
          ],
          [
            77.221227,
            28.630205
          ],
          [
            77.220917,
            28.630083
          ],
          [
            77.220815,
            28.630048
          ],
          [
            77.220652,
            28.629995
          ],
          [
            77.220082,
            28.629906
          ],
          [
            77.219766,
            28.629882
          ],
          [
            77.219639,
            28.629806
          ],
          [
            77.219571,
            28.629685
          ],
          [
            77.219527,
            28.628985
          ],
          [
            77.219477,
            28.628173
          ],
          [
            77.21941,
            28.627157
          ],
          [
            77.219369,
            28.626655
          ],
          [
            77.219369,
            28.626586
          ],
          [
            77.219364,
            28.626435
          ],
          [
            77.21934,
            28.626307
          ],
          [
            77.219324,
            28.62601
          ],
          [
            77.219239,
            28.624613
          ],
          [
            77.219223,
            28.624338
          ],
          [
            77.219208,
            28.624102
          ],
          [
            77.219148,
            28.623115
          ],
          [
            77.219109,
            28.622464
          ],
          [
            77.219038,
            28.621285
          ],
          [
            77.218985,
            28.620411
          ],
          [
            77.219155,
            28.620352
          ],
          [
            77.219299,
            28.620252
          ],
          [
            77.219392,
            28.620138
          ],
          [
            77.219448,
            28.620007
          ],
          [
            77.219459,
            28.619811
          ],
          [
            77.219417,
            28.619674
          ],
          [
            77.219381,
            28.61961
          ],
          [
            77.219283,
            28.619498
          ],
          [
            77.219115,
            28.619393
          ],
          [
            77.218985,
            28.619353
          ],
          [
            77.218916,
            28.619218
          ],
          [
            77.21883,
            28.618301
          ],
          [
            77.218779,
            28.617583
          ],
          [
            77.218742,
            28.6169
          ],
          [
            77.218779,
            28.616778
          ],
          [
            77.21881,
            28.616745
          ],
          [
            77.218831,
            28.616674
          ],
          [
            77.218805,
            28.616604
          ],
          [
            77.21873,
            28.616553
          ],
          [
            77.218706,
            28.616421
          ],
          [
            77.218636,
            28.61517
          ],
          [
            77.218527,
            28.613442
          ],
          [
            77.218467,
            28.613452
          ],
          [
            77.212205,
            28.613755
          ],
          [
            77.212107,
            28.61376
          ],
          [
            77.20919,
            28.613895
          ],
          [
            77.209001,
            28.613909
          ]
        ],
        "type": "LineString"
      }
    }
  ],
  "metadata": {
    "attribution": "openrouteservice.org | OpenStreetMap contributors",
    "service": "routing",
    "timestamp": 1772515683690,
    "query": {
      "coordinates": [
        [
          77.1025,
          28.7041
        ],
        [
          77.209,
          28.6139
        ]
      ],
      "profile": "driving-car",
      "profileName": "driving-car",
      "format": "geojson",
      "alternative_routes": {
        "target_count": 3,
        "share_factor": 0.6
      }
    },
    "engine": {
      "version": "9.5.0",
      "build_date": "2025-10-31T12:33:09Z",
      "graph_date": "2026-02-28T14:36:19Z",
      "osm_date": "2026-02-09T01:00:01Z"
    }
  }
}
  });
  map.addLayer({
    'id': 'route-layer',
    'type': 'line',
    'source': 'route',
    'layout': {
      'line-join': 'round',
      'line-cap': 'round'
    },
    'paint': {
      'line-color': '#bc13fe',
      'line-width': 7
    }
  });
});