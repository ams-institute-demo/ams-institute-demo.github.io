var APP_DATA = {
  "scenes": [
    {
      "id": "0-hoe-ziet-beeldherkenning-de-stad",
      "name": "Hoe ziet beeldherkenning de stad?",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        }
      ],
      "faceSize": 400,
      "initialViewParameters": {
        "yaw": -1.6249071019015187,
        "pitch": -0.024077831680134665,
        "fov": 1.576486993825587
      },
      "linkHotspots": [
        {
          "yaw": -0.3864413513951579,
          "pitch": -0.04290142186290602,
          "rotation": 0,
          "target": "2-hoe-zit-dat-met-privacy"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.556048696990821,
          "pitch": -0.21945717074634707,
          "title": "Machine learning",
          "text": "Een ‘machine learning model’ is getraind om verschillende objecten in dit beeld te herkennen. Een opname is daardoor niet alleen maar een opname, maar wordt een complete dataset: het aantal auto’s, bomen, mensen, de afstand tussen die mensen... Wel allemaal privacy-vriendelijk: er wordt geen persoonlijke data opgeslagen. Beweeg je telefoon en bekijk de verschillende street views en ontdek wat er te herkennen valt!"
        },
        {
          "yaw": 1.715248724507858,
          "pitch": -0.12195318131387367,
          "title": "Niet altijd perfect",
          "text": "Algoritmes werken niet altijd perfect... Hier wordt een reclame bord gezien als gebouw. Het percentage geeft weer hoe zeker het algoritme van zijn zaak is."
        },
        {
          "yaw": -1.532099507815765,
          "pitch": -0.13674340375303906,
          "title": "Machine learning",
          "text": "Voor het maken van deze beelden is gebruik gemaakt vam machine learning, op basis van voorbeelden leren. Deze algoritmes werken niet altijd perfect... Hier wordt een tram als een bus gezien. Het percentage geeft weer hoe zeker het algoritme van zijn zaak is."
        }
      ]
    },
    {
      "id": "1-is-de-stad-nog-schoon",
      "name": "Is de stad nog schoon?",
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
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 2.007961295907136,
        "pitch": 0.11034015777869755,
        "fov": 1.576486993825587
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 2.1650625235434013,
          "pitch": -0.050666956904777294,
          "title": "Is de prullenbak nog schoon?",
          "text": "De gemeente Amsterdam werkt aan een herkenning van zaken als containers, hierdoor kan inzichtelijk gemaakt worden wat de staat hiervan is, en of deze bijvoorbeeld vol is.<div><br></div><div>Kijk voor meer informatie op www.odk.ai</div>"
        }
      ]
    },
    {
      "id": "2-hoe-zit-dat-met-privacy",
      "name": "Hoe zit dat met privacy?",
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
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": -2.5915928606587855,
        "pitch": 0.16419335998721074,
        "fov": 1.576486993825587
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 1.1458748507198155,
          "pitch": 0.1651547863674825,
          "title": "Privacy",
          "text": "Om privacy te waarborgen worden met beeldherkenning automatisch gezichten herkend en verwijderd.<div><br></div><div>Deze worden bijvoorbeeld zwart gemaakt.</div>"
        },
        {
          "yaw": -2.2485372114046847,
          "pitch": -0.010756313866060907,
          "title": "Privacy",
          "text": "Om privacy te waarborgen worden met beeldherkenning automatisch gezichten herkend en verwijderd.<div><br></div><div>Deze worden bijvoorbeeld geblurred.</div>"
        }
      ]
    },
    {
      "id": "3-ligt-er-afval-in-de-stad",
      "name": "Ligt er afval in de stad?",
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
        }
      ],
      "faceSize": 1000,
      "initialViewParameters": {
        "yaw": 1.4465483490672124,
        "pitch": 0.33845349213115483,
        "fov": 1.576486993825587
      },
      "linkHotspots": [],
      "infoHotspots": [
        {
          "yaw": 1.3061861627201203,
          "pitch": -0.022282893400184633,
          "title": "Afval herkenning",
          "text": "De gemeente Amsterdam werkt aan een herkenning van afval, hierdoor kan inzichtelijk gemaakt worden waar verschillende types afval liggen.<div><br></div><div>Kijk voor meer informatie op <a href='www.odk.ai'>www.odk.ai</a> of bekijk deze video: <a href='https://www.youtube.com/watch?v=GSygoWOtwjU'>https://www.youtube.com/watch?v=GSygoWOtwjU</a></div>"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
