var APP_DATA = {
  "scenes": [
    {
      "id": "office-parking",
      "name": "Парковка",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04785170387715887,
          "pitch": 0.04995290706877498,
          "rotation": 0,
          "target": "office-territory"
        },
        {
          "yaw": -2.3821047357789205,
          "pitch": 0.011530664460781992,
          "rotation": 0,
          "target": "shoh_palace"
        },
        {
          "yaw": 1.9658372263034511,
          "pitch": -0.02445832287743599,
          "rotation": 0,
          "target": "bukhoro_area_near"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "office-territory",
      "name": "Вход на территорию",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.18869775625709018,
          "pitch": 0.06751320759311952,
          "rotation": 0,
          "target": "office-yard"
        },
        {
          "yaw": 3.0335937258026924,
          "pitch": 0.0749606953305122,
          "rotation": 0,
          "target": "office-parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "office-yard",
      "name": "Площадка",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.4346319181122116,
          "pitch": 0.05232202351411175,
          "rotation": 0,
          "target": "office-porch"
        },
        {
          "yaw": 2.5125449072738366,
          "pitch": 0.09887057196988991,
          "rotation": 0,
          "target": "office-territory"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "office-porch",
      "name": "Крыльцо",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.04864998822635158,
          "pitch": -0.14752169722460984,
          "rotation": 0,
          "target": "office-entrance"
        },
        {
          "yaw": -2.3393239719803294,
          "pitch": 0.19105768341875873,
          "rotation": 0,
          "target": "office-yard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "office-entrance",
      "name": "Вход в здание",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.18256190057537403,
          "pitch": -0.20455897542925428,
          "rotation": 0,
          "target": "office-fourth-floor"
        },
        {
          "yaw": 2.7569327339122838,
          "pitch": 0.13392769639175484,
          "rotation": 0,
          "target": "office-porch"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "office-fourth-floor",
      "name": "4-ый этаж",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6509221661914086,
          "pitch": 0.29820907529780705,
          "rotation": 0,
          "target": "office-main"
        },
        {
          "yaw": 3.0899012202506304,
          "pitch": 0.32209261009707113,
          "rotation": 0,
          "target": "office-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "office-main",
      "name": "Офиc BO/BO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.23912922386190694,
          "pitch": 0.047321608681150096,
          "rotation": 0,
          "target": "office-it-department"
        },
        {
          "yaw": 1.7925730808528657,
          "pitch": 0.17353419056705022,
          "rotation": 0,
          "target": "office-fourth-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "office-it-department",
      "name": "IT-отдел",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5830336561993512,
          "pitch": 0.1399621639804174,
          "rotation": 0,
          "target": "office-team-lead"
        },
        {
          "yaw": 0.13681582009425597,
          "pitch": 0.02199472564728211,
          "rotation": 0,
          "target": "office-window"
        },
        {
          "yaw": -2.957083499213944,
          "pitch": 0.16191164698052063,
          "rotation": 0,
          "target": "office-main"
        },
        {
          "yaw": 2.6101815849510244,
          "pitch": 0.1310162293246222,
          "rotation": 0,
          "target": "office-fourth-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "office-window",
      "name": "Окно",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0712575839567311,
          "pitch": 0.33041307906368544,
          "rotation": 0,
          "target": "office-territory"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "office-team-lead",
      "name": "Место Team Lead",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -0.4525203349596527,
        "pitch": -0.18259564644303694,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -0.1466674688761458,
          "pitch": 0.08653431341110718,
          "rotation": 0,
          "target": "office-it-department"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "bukhoro_area_near",
      "name": "Территория возле ЖК CROWN TOWER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.07026666803886528,
          "pitch": 0.00559001581025953,
          "rotation": 0,
          "target": "bukhoro"
        },
        {
          "yaw": 2.3975138677747516,
          "pitch": -0.05165136181091157,
          "rotation": 0,
          "target": "office-parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "bukhoro",
      "name": "ЖК CROWN TOWER BUKHORO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6708116159442294,
          "pitch": 0.0022066198481827115,
          "rotation": 0,
          "target": "bukhoro_area_near"
        },
        {
          "yaw": -0.9502895679569772,
          "pitch": 0.04878077366599953,
          "rotation": 0,
          "target": "bukhoro_entrance_to_territory"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "bukhoro_entrance_to_territory",
      "name": "Вход на территорию ЖК",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9820435500090596,
          "pitch": -0.034155950061059315,
          "rotation": 0,
          "target": "bukhoro"
        },
        {
          "yaw": 0.4403912702532029,
          "pitch": 0.0017423558045521759,
          "rotation": 0,
          "target": "bukhoro_yard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "bukhoro_yard",
      "name": "Территория ЖК",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3071460213182515,
          "pitch": -0.0018159964304889087,
          "rotation": 0,
          "target": "bukhoro_entrance_to_territory"
        },
        {
          "yaw": -0.889365006354705,
          "pitch": 0.0536330036693613,
          "rotation": 0,
          "target": "bukhoro_sports_yard"
        },
        {
          "yaw": -1.807544805210382,
          "pitch": 0.089458337320103,
          "rotation": 0,
          "target": "bukhoro_parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "bukhoro_parking",
      "name": "Парковка",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.023690902865603,
          "pitch": -0.01375550663961711,
          "rotation": 0,
          "target": "bukhoro_yard"
        },
        {
          "yaw": 0.3807947889356793,
          "pitch": 0.024513867171675585,
          "rotation": 0,
          "target": "bukhoro_sports_yard"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "bukhoro_sports_yard",
      "name": "Спортивная площадка",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.76247778544964,
          "pitch": 0.13280988638790525,
          "rotation": 0,
          "target": "bukhoro_yard"
        },
        {
          "yaw": 1.1618013741222448,
          "pitch": -0.02470697869765104,
          "rotation": 0,
          "target": "bukhoro_veranda"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "bukhoro_veranda",
      "name": "Веранда",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.519700444923215,
          "pitch": 0.06252869584187337,
          "rotation": 0,
          "target": "bukhoro_sports_yard"
        },
        {
          "yaw": -0.21594428703722102,
          "pitch": -0.015992543915629653,
          "rotation": 0,
          "target": "bukhoro_playground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "bukhoro_playground",
      "name": "Детская площадка",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.3893655159391614,
          "pitch": 0.12481761259629032,
          "rotation": 0,
          "target": "bukhoro_veranda"
        },
        {
          "yaw": -0.1842928649143829,
          "pitch": 0.005565452441070207,
          "rotation": 0,
          "target": "bukhoro_parking_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "bukhoro_parking_2",
      "name": "Парковка",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5982096417465055,
          "pitch": 0.06691170576636551,
          "rotation": 0,
          "target": "bukhoro_playground"
        },
        {
          "yaw": -0.7013247155772966,
          "pitch": -0.04308280543682841,
          "rotation": 0,
          "target": "bukhoro_entrance_1"
        },
        {
          "yaw": 1.1470039665534824,
          "pitch": -0.008790982430705085,
          "rotation": 0,
          "target": "bukhoro_parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "bukhoro_entrance_1",
      "name": "Подъезд №1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "yaw": -2.4100389023636932,
        "pitch": 0.09956081353898583,
        "fov": 1.38217411905719
      },
      "linkHotspots": [
        {
          "yaw": -2.8168453705819587,
          "pitch": 0.1917590353306906,
          "rotation": 0,
          "target": "bukhoro_playground"
        },
        {
          "yaw": 2.0598683184884266,
          "pitch": 0.19648479987787937,
          "rotation": 0,
          "target": "bukhoro_entrance_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "bukhoro_entrance_2",
      "name": "Подъезд №2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7827233436518597,
          "pitch": -0.008375796320667206,
          "rotation": 0,
          "target": "bukhoro_playground"
        },
        {
          "yaw": 0.0841544456843124,
          "pitch": 0.016089138227110666,
          "rotation": 0,
          "target": "bukhoro_yard"
        },
        {
          "yaw": -2.1962175765291114,
          "pitch": -0.07904661307586736,
          "rotation": 0,
          "target": "bukhoro_entrance_holl"
        },
        {

          "yaw": 2.10750016818403,
          "pitch": -0.08537757466713458,
          "rotation": 6.283185307179586,
          "target": "bukhoro_entrance_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "bukhoro_entrance_holl",
      "name": "Холл поъезда",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.17193767447753672,
          "pitch": 0.15815721482879752,
          "rotation": 0,
          "target": "bukhoro_6th_floor"
        },
        {
          "yaw": -2.3864690830425417,
          "pitch": 0.15173239192451504,
          "rotation": 0,
          "target": "bukhoro_entrance_2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "bukhoro_6th_floor",
      "name": "6-ой этаж",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.0074346001525036,
          "pitch": 0.27993199700769544,
          "rotation": 0,
          "target": "bukhoro_entrance_holl"
        },
        {
          "yaw": 2.5754819795656507,
          "pitch": 0.027277520820355505,
          "rotation": 0,
          "target": "bukhoro_window_view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "bukhoro_window_view",
      "name": "Вид из окна",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.17511937384437815,
          "pitch": 0.5662091846469348,
          "rotation": 0,
          "target": "bukhoro_parking"
        },
        {
          "yaw": -2.6468677946069192,
          "pitch": 0.28221113201476733,
          "rotation": 0,
          "target": "bukhoro_6th_floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "shoh_palace",
      "name": "ЖК Shoh Palace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.597215884194874,
          "pitch": 0.022393638000043126,
          "rotation": 0,
          "target": "shoh_palace_playground"
        },
        {
          "yaw": 0.9069484087654622,
          "pitch": -0.05344116412765487,
          "rotation": 0,
          "target": "shoh_palace_entrance_1"
        },
        {
          "yaw": -2.716134349052293,
          "pitch": 0.058581025237193884,
          "rotation": 0,
          "target": "office-parking"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "shoh_palace_playground",
      "name": "Детская площадка",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4109003825023603,
          "pitch": -0.015267419413929062,
          "rotation": 0,
          "target": "shoh_palace"
        },
        {
          "yaw": -0.5927931665175343,
          "pitch": 0.021341988489691488,
          "rotation": 0,
          "target": "shoh_palace_sportsground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "shoh_palace_sportsground",
      "name": "Спортивная площадка",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.0037478779297686,
          "pitch": 0.13357526663939367,
          "rotation": 0,
          "target": "shoh_palace_playground"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "shoh_palace_entrance_1",
      "name": "Подъезд №3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9571130923110358,
          "pitch": 0.018201751356366813,
          "rotation": 0,
          "target": "shoh_palace"
        },
        {
          "yaw": 0.2906319530203447,
          "pitch": 0.000642270487713148,
          "rotation": 0,
          "target": "shoh_palace_entrance_holl"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "shoh_palace_entrance_holl",
      "name": "Парадная",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.050853981587551,
          "pitch": 0.10189449257152106,
          "rotation": 0,
          "target": "shoh_palace_entrance_1"
        },
        {
          "yaw": -0.8476852563065957,
          "pitch": 0.21516467903786562,
          "rotation": 0,
          "target": "shoh_palace_entrance_stairs"
        },
        {
          "yaw": -2.313067109753362,
          "pitch": 0.2080930084134831,
          "rotation": 0,
          "target": "shoh_palace_entrance_lift"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "shoh_palace_entrance_stairs",
      "name": "Лестница",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0034340672452666,
          "pitch": 0.32129041211999976,
          "rotation": 0,
          "target": "shoh_palace_entrance_holl"
        },
        {
          "yaw": -0.6872435669353472,
          "pitch": -0.21579003570314015,
          "rotation": 0,
          "target": "shoh_palace_5th-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "shoh_palace_entrance_lift",
      "name": "Лифт",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.587002897522348,
          "pitch": 0.07757998176820458,
          "rotation": 0,
          "target": "shoh_palace_entrance_holl"
        },
        {
          "yaw": 0.00044838883740005997,
          "pitch": 0.19265690715820583,
          "rotation": 0,
          "target": "shoh_palace_5th-floor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "shoh_palace_5th-floor",
      "name": "5-ый этаж",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.671225683498183,
          "pitch": 0.2569865638573283,
          "rotation": 0,
          "target": "shoh_palace_entrance_lift"
        },
        {
          "yaw": -1.0946820486059394,
          "pitch": 0.029583022943418413,
          "rotation": 0,
          "target": "shoh_palace_window_view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "shoh_palace_window_view",
      "name": "Вид из окна",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 2992,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.33665896059395095,
          "pitch": 0.6809402900234822,
          "rotation": 0,
          "target": "shoh_palace_entrance_1"
        },
        {
          "yaw": 2.6266474998187324,
          "pitch": 0.2954118025140424,
          "rotation": 0,
          "target": "shoh_palace_5th-floor"
        },
        {
          "yaw": -2.351103584642674,
          "pitch": 0.23080333696278643,
          "rotation": 0,
          "target": "shoh_palace_entrance_stairs"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
