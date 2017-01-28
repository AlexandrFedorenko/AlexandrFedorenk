/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "both",
                centerStage: "horizontal",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'mazok12',
                            symbolName: 'mazok1',
                            type: 'rect',
                            rect: ['189', '46', '1056', '392', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'mazok22',
                            symbolName: 'mazok2',
                            type: 'rect',
                            rect: ['225', '466', '915', '223', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'ruki2',
                            symbolName: 'ruki',
                            type: 'rect',
                            rect: ['599', '787px', '270', '209', 'auto', 'auto']
                        },
                        {
                            id: 'kurier1',
                            symbolName: 'kurier1',
                            type: 'rect',
                            rect: ['531', '100', '375', '375', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'pizza2',
                            symbolName: 'pizza',
                            type: 'rect',
                            rect: ['540', '367px', '367', '122', 'auto', 'auto'],
                            title: 'test',
                            cursor: 'pointer',
                            opacity: '0'
                        },
                        {
                            id: 'kurier2',
                            symbolName: 'kurier2',
                            type: 'rect',
                            rect: ['558', '360', '323', '47', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'text_1',
                            symbolName: 'text1',
                            type: 'rect',
                            rect: ['1378px', '245', '702', '183', 'auto', 'auto']
                        },
                        {
                            id: 'text_1Copy',
                            symbolName: 'text1',
                            type: 'rect',
                            rect: ['1378px', '245', '702', '183', 'auto', 'auto']
                        },
                        {
                            id: 'text_2',
                            symbolName: 'text2',
                            type: 'rect',
                            rect: ['1371px', '446', '425', '54', 'auto', 'auto']
                        },
                        {
                            id: 'text_3',
                            symbolName: 'text3',
                            type: 'rect',
                            rect: ['1375px', '485', '620', '64', 'auto', 'auto']
                        },
                        {
                            id: 'text_4',
                            symbolName: 'text4',
                            type: 'rect',
                            rect: ['1366px', '263', '702', '148', 'auto', 'auto']
                        },
                        {
                            id: 'text_5',
                            symbolName: 'text5',
                            type: 'rect',
                            rect: ['1384px', '431', '332', '54', 'auto', 'auto']
                        },
                        {
                            id: 'dollar1',
                            symbolName: 'dollar1',
                            type: 'rect',
                            rect: ['777px', '736px', '52', '64', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['20'],[],['1','1.3']]
                        },
                        {
                            id: 'dollar2',
                            symbolName: 'dollar2',
                            type: 'rect',
                            rect: ['624px', '727px', '59', '83', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['20'],[],['1.3','1.3']]
                        },
                        {
                            id: 'dollar3',
                            symbolName: 'dollar3',
                            type: 'rect',
                            rect: ['673px', '843px', '50', '83', 'auto', 'auto'],
                            opacity: '1',
                            transform: [[],['20'],[],['1.44','1.44']]
                        },
                        {
                            id: 'mazok_red',
                            symbolName: 'mazok_red',
                            type: 'rect',
                            rect: ['167', '82', '1079', '556', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'calendar',
                            symbolName: 'kalendar',
                            type: 'rect',
                            rect: ['256', '257', '902', '223', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'text_6',
                            symbolName: 'text7',
                            type: 'rect',
                            rect: ['1366px', '84', '561', '183', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'text_7',
                            symbolName: 'text_7',
                            type: 'rect',
                            rect: ['224px', '257px', '948', '209', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'text_8',
                            symbolName: 'text_8',
                            type: 'rect',
                            rect: ['417', '775px', '613', '209', 'auto', 'auto'],
                            opacity: '1'
                        },
                        {
                            id: 'fon_red',
                            symbolName: 'fon_red',
                            type: 'rect',
                            rect: ['204', '104px', '934', '515', 'auto', 'auto'],
                            opacity: '0'
                        },
                        {
                            id: 'karta',
                            symbolName: 'karta',
                            type: 'rect',
                            rect: ['359px', '163px', '613', '416', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['1.05','1.05']]
                        },
                        {
                            id: 'text_9',
                            symbolName: 'text_9',
                            type: 'rect',
                            rect: ['-683px', '176', '677', '64', 'auto', 'auto']
                        },
                        {
                            id: 'text_10',
                            symbolName: 'text_10',
                            type: 'rect',
                            rect: ['196', '317', '950', '140', 'auto', 'auto'],
                            opacity: '0.99000000953674',
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'text_11',
                            symbolName: 'text_11',
                            type: 'rect',
                            rect: ['391', '165', '613', '352', 'auto', 'auto'],
                            opacity: '0',
                            transform: [[],[],[],['0','0']]
                        },
                        {
                            id: 'knopka1',
                            symbolName: 'knopka1',
                            type: 'rect',
                            rect: ['446', '644', '542', '83', 'auto', 'auto'],
                            title: 'test',
                            cursor: 'pointer',
                            opacity: '0',
                            transform: [[],[],[],['0.95','0.95']]
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1366px', '768px', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 11692,
                    autoPlay: true,
                    data: [
                        [
                            "eid180",
                            "opacity",
                            8308,
                            250,
                            "linear",
                            "${text_8}",
                            '1',
                            '0'
                        ],
                        [
                            "eid22",
                            "left",
                            2806,
                            250,
                            "easeOutBack",
                            "${text_4}",
                            '1366px',
                            '383px'
                        ],
                        [
                            "eid38",
                            "left",
                            4625,
                            250,
                            "linear",
                            "${text_4}",
                            '383px',
                            '-702px'
                        ],
                        [
                            "eid42",
                            "top",
                            2750,
                            0,
                            "linear",
                            "${pizza2}",
                            '367px',
                            '367px'
                        ],
                        [
                            "eid163",
                            "top",
                            4500,
                            375,
                            "linear",
                            "${pizza2}",
                            '367px',
                            '775px'
                        ],
                        [
                            "eid282",
                            "left",
                            4591,
                            394,
                            "linear",
                            "${dollar2}",
                            '780px',
                            '548px'
                        ],
                        [
                            "eid283",
                            "left",
                            4984,
                            222,
                            "linear",
                            "${dollar2}",
                            '548px',
                            '490px'
                        ],
                        [
                            "eid287",
                            "left",
                            5206,
                            206,
                            "linear",
                            "${dollar2}",
                            '490px',
                            '654px'
                        ],
                        [
                            "eid296",
                            "left",
                            5412,
                            178,
                            "linear",
                            "${dollar2}",
                            '654px',
                            '560px'
                        ],
                        [
                            "eid299",
                            "left",
                            5590,
                            195,
                            "linear",
                            "${dollar2}",
                            '560px',
                            '649px'
                        ],
                        [
                            "eid302",
                            "left",
                            5785,
                            215,
                            "linear",
                            "${dollar2}",
                            '649px',
                            '687px'
                        ],
                        [
                            "eid1",
                            "opacity",
                            3786,
                            6870,
                            "linear",
                            "${text_10}",
                            '0.99000000953674',
                            '1'
                        ],
                        [
                            "eid142",
                            "opacity",
                            10656,
                            118,
                            "linear",
                            "${text_10}",
                            '1',
                            '0'
                        ],
                        [
                            "eid130",
                            "left",
                            8808,
                            0,
                            "linear",
                            "${karta}",
                            '359px',
                            '359px'
                        ],
                        [
                            "eid67",
                            "opacity",
                            5825,
                            175,
                            "linear",
                            "${dollar1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid20",
                            "left",
                            1640,
                            250,
                            "easeOutExpo",
                            "${text_3}",
                            '1375px',
                            '407px'
                        ],
                        [
                            "eid191",
                            "left",
                            2556,
                            250,
                            "easeInOutQuint",
                            "${text_3}",
                            '407px',
                            '-633px'
                        ],
                        [
                            "eid264",
                            "left",
                            4591,
                            0,
                            "linear",
                            "${dollar1}",
                            '618px',
                            '595px'
                        ],
                        [
                            "eid268",
                            "left",
                            4591,
                            296,
                            "linear",
                            "${dollar1}",
                            '595px',
                            '708px'
                        ],
                        [
                            "eid270",
                            "left",
                            4887,
                            198,
                            "linear",
                            "${dollar1}",
                            '708px',
                            '652px'
                        ],
                        [
                            "eid273",
                            "left",
                            5085,
                            226,
                            "linear",
                            "${dollar1}",
                            '652px',
                            '736px'
                        ],
                        [
                            "eid277",
                            "left",
                            5311,
                            225,
                            "linear",
                            "${dollar1}",
                            '736px',
                            '651px'
                        ],
                        [
                            "eid279",
                            "left",
                            5536,
                            289,
                            "linear",
                            "${dollar1}",
                            '651px',
                            '777px'
                        ],
                        [
                            "eid18",
                            "left",
                            1390,
                            250,
                            "easeOutExpo",
                            "${text_2}",
                            '1371px',
                            '511px'
                        ],
                        [
                            "eid27",
                            "left",
                            2556,
                            250,
                            "easeInOutQuint",
                            "${text_2}",
                            '511px',
                            '-425px'
                        ],
                        [
                            "eid185",
                            "scaleX",
                            11530,
                            81,
                            "linear",
                            "${knopka1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid189",
                            "scaleX",
                            11611,
                            81,
                            "linear",
                            "${knopka1}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid308",
                            "top",
                            4591,
                            394,
                            "linear",
                            "${dollar3}",
                            '843px',
                            '236px'
                        ],
                        [
                            "eid310",
                            "top",
                            4984,
                            222,
                            "linear",
                            "${dollar3}",
                            '236px',
                            '417px'
                        ],
                        [
                            "eid313",
                            "top",
                            5206,
                            249,
                            "linear",
                            "${dollar3}",
                            '417px',
                            '483px'
                        ],
                        [
                            "eid316",
                            "top",
                            5455,
                            192,
                            "linear",
                            "${dollar3}",
                            '483px',
                            '599px'
                        ],
                        [
                            "eid318",
                            "top",
                            5647,
                            178,
                            "linear",
                            "${dollar3}",
                            '599px',
                            '683px'
                        ],
                        [
                            "eid319",
                            "top",
                            5824,
                            175,
                            "linear",
                            "${dollar3}",
                            '683px',
                            '800px'
                        ],
                        [
                            "eid266",
                            "top",
                            4591,
                            0,
                            "linear",
                            "${dollar1}",
                            '812px',
                            '804px'
                        ],
                        [
                            "eid269",
                            "top",
                            4591,
                            296,
                            "linear",
                            "${dollar1}",
                            '804px',
                            '406px'
                        ],
                        [
                            "eid271",
                            "top",
                            4887,
                            198,
                            "linear",
                            "${dollar1}",
                            '406px',
                            '497px'
                        ],
                        [
                            "eid274",
                            "top",
                            5085,
                            226,
                            "linear",
                            "${dollar1}",
                            '497px',
                            '552px'
                        ],
                        [
                            "eid278",
                            "top",
                            5311,
                            225,
                            "linear",
                            "${dollar1}",
                            '552px',
                            '642px'
                        ],
                        [
                            "eid280",
                            "top",
                            5536,
                            289,
                            "linear",
                            "${dollar1}",
                            '642px',
                            '736px'
                        ],
                        [
                            "eid198",
                            "rotateZ",
                            4591,
                            494,
                            "linear",
                            "${dollar1}",
                            '20deg',
                            '87deg'
                        ],
                        [
                            "eid272",
                            "rotateZ",
                            5085,
                            226,
                            "linear",
                            "${dollar1}",
                            '87deg',
                            '75deg'
                        ],
                        [
                            "eid275",
                            "rotateZ",
                            5311,
                            225,
                            "linear",
                            "${dollar1}",
                            '75deg',
                            '74deg'
                        ],
                        [
                            "eid276",
                            "rotateZ",
                            5536,
                            111,
                            "linear",
                            "${dollar1}",
                            '74deg',
                            '102deg'
                        ],
                        [
                            "eid229",
                            "rotateZ",
                            5647,
                            178,
                            "linear",
                            "${dollar1}",
                            '102deg',
                            '122deg'
                        ],
                        [
                            "eid281",
                            "rotateZ",
                            5825,
                            175,
                            "linear",
                            "${dollar1}",
                            '122deg',
                            '0deg'
                        ],
                        [
                            "eid25",
                            "left",
                            3303,
                            250,
                            "linear",
                            "${text_5}",
                            '1384px',
                            '558px'
                        ],
                        [
                            "eid93",
                            "left",
                            5909,
                            250,
                            "linear",
                            "${text_5}",
                            '558px',
                            '-351px'
                        ],
                        [
                            "eid159",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${fon_red}",
                            '104px',
                            '104px'
                        ],
                        [
                            "eid92",
                            "top",
                            4290,
                            210,
                            "linear",
                            "${mazok22}",
                            '466px',
                            '394px'
                        ],
                        [
                            "eid12",
                            "opacity",
                            375,
                            125,
                            "linear",
                            "${kurier2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid37",
                            "opacity",
                            4013,
                            133,
                            "linear",
                            "${kurier2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid113",
                            "left",
                            6500,
                            250,
                            "linear",
                            "${text_7}",
                            '1366px',
                            '224px'
                        ],
                        [
                            "eid174",
                            "left",
                            8308,
                            0,
                            "linear",
                            "${text_7}",
                            '224px',
                            '224px'
                        ],
                        [
                            "eid175",
                            "left",
                            8558,
                            0,
                            "linear",
                            "${text_7}",
                            '224px',
                            '224px'
                        ],
                        [
                            "eid39",
                            "left",
                            4625,
                            250,
                            "linear",
                            "${text_1Copy}",
                            '1378px',
                            '369px'
                        ],
                        [
                            "eid158",
                            "left",
                            5868,
                            250,
                            "linear",
                            "${text_1Copy}",
                            '369px',
                            '-702px'
                        ],
                        [
                            "eid204",
                            "scaleX",
                            10891,
                            359,
                            "linear",
                            "${text_11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid172",
                            "top",
                            8308,
                            0,
                            "linear",
                            "${text_7}",
                            '257px',
                            '257px'
                        ],
                        [
                            "eid173",
                            "top",
                            8558,
                            0,
                            "linear",
                            "${text_7}",
                            '257px',
                            '257px'
                        ],
                        [
                            "eid219",
                            "scaleX",
                            9058,
                            0,
                            "easeOutBack",
                            "${karta}",
                            '1.05',
                            '1.05'
                        ],
                        [
                            "eid91",
                            "opacity",
                            5909,
                            250,
                            "linear",
                            "${mazok_red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid121",
                            "opacity",
                            8308,
                            250,
                            "linear",
                            "${mazok_red}",
                            '1',
                            '0'
                        ],
                        [
                            "eid135",
                            "left",
                            9058,
                            250,
                            "linear",
                            "${text_9}",
                            '1381px',
                            '353px'
                        ],
                        [
                            "eid150",
                            "left",
                            10362,
                            250,
                            "linear",
                            "${text_9}",
                            '353px',
                            '-683px'
                        ],
                        [
                            "eid323",
                            "opacity",
                            8308,
                            250,
                            "linear",
                            "${text_6}",
                            '1',
                            '0.032520325203252'
                        ],
                        [
                            "eid131",
                            "top",
                            8808,
                            0,
                            "linear",
                            "${karta}",
                            '163px',
                            '163px'
                        ],
                        [
                            "eid289",
                            "rotateZ",
                            4591,
                            616,
                            "linear",
                            "${dollar2}",
                            '-29deg',
                            '143deg'
                        ],
                        [
                            "eid290",
                            "rotateZ",
                            5206,
                            206,
                            "linear",
                            "${dollar2}",
                            '143deg',
                            '97deg'
                        ],
                        [
                            "eid291",
                            "rotateZ",
                            5412,
                            178,
                            "linear",
                            "${dollar2}",
                            '97deg',
                            '120deg'
                        ],
                        [
                            "eid294",
                            "rotateZ",
                            5590,
                            57,
                            "linear",
                            "${dollar2}",
                            '120deg',
                            '-88deg'
                        ],
                        [
                            "eid228",
                            "rotateZ",
                            5647,
                            94,
                            "linear",
                            "${dollar2}",
                            '-88deg',
                            '-70deg'
                        ],
                        [
                            "eid301",
                            "rotateZ",
                            5741,
                            44,
                            "linear",
                            "${dollar2}",
                            '-70deg',
                            '98deg'
                        ],
                        [
                            "eid298",
                            "rotateZ",
                            5785,
                            40,
                            "linear",
                            "${dollar2}",
                            '98deg',
                            '97deg'
                        ],
                        [
                            "eid295",
                            "rotateZ",
                            5825,
                            174,
                            "linear",
                            "${dollar2}",
                            '97deg',
                            '0deg'
                        ],
                        [
                            "eid220",
                            "scaleY",
                            9058,
                            0,
                            "easeOutBack",
                            "${karta}",
                            '1.05',
                            '1.05'
                        ],
                        [
                            "eid3",
                            "opacity",
                            0,
                            250,
                            "linear",
                            "${mazok12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid87",
                            "opacity",
                            5693,
                            250,
                            "linear",
                            "${mazok12}",
                            '1',
                            '0'
                        ],
                        [
                            "eid65",
                            "opacity",
                            5825,
                            175,
                            "linear",
                            "${dollar2}",
                            '1',
                            '0'
                        ],
                        [
                            "eid118",
                            "opacity",
                            8558,
                            250,
                            "linear",
                            "${fon_red}",
                            '0',
                            '1'
                        ],
                        [
                            "eid205",
                            "scaleY",
                            10891,
                            359,
                            "linear",
                            "${text_11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid115",
                            "top",
                            6750,
                            250,
                            "easeOutBack",
                            "${text_8}",
                            '775px',
                            '431px'
                        ],
                        [
                            "eid15",
                            "left",
                            815,
                            250,
                            "easeOutBack",
                            "${text_1}",
                            '1378px',
                            '368px'
                        ],
                        [
                            "eid23",
                            "left",
                            2556,
                            250,
                            "easeInOutCirc",
                            "${text_1}",
                            '368px',
                            '-702px'
                        ],
                        [
                            "eid133",
                            "opacity",
                            8808,
                            250,
                            "easeOutBack",
                            "${karta}",
                            '0',
                            '1'
                        ],
                        [
                            "eid5",
                            "opacity",
                            250,
                            250,
                            "linear",
                            "${mazok22}",
                            '0',
                            '1'
                        ],
                        [
                            "eid89",
                            "opacity",
                            5693,
                            250,
                            "linear",
                            "${mazok22}",
                            '1',
                            '0'
                        ],
                        [
                            "eid10",
                            "opacity",
                            342,
                            125,
                            "linear",
                            "${pizza2}",
                            '0.000000',
                            '1'
                        ],
                        [
                            "eid13",
                            "opacity",
                            1640,
                            0,
                            "linear",
                            "${pizza2}",
                            '1',
                            '1'
                        ],
                        [
                            "eid186",
                            "scaleY",
                            11530,
                            81,
                            "linear",
                            "${knopka1}",
                            '0.95',
                            '1'
                        ],
                        [
                            "eid190",
                            "scaleY",
                            11611,
                            81,
                            "linear",
                            "${knopka1}",
                            '1',
                            '0.95'
                        ],
                        [
                            "eid63",
                            "opacity",
                            5824,
                            175,
                            "linear",
                            "${dollar3}",
                            '1',
                            '0'
                        ],
                        [
                            "eid182",
                            "opacity",
                            11280,
                            250,
                            "linear",
                            "${knopka1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid139",
                            "scaleY",
                            9690,
                            250,
                            "easeOutBack",
                            "${text_10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid176",
                            "opacity",
                            8308,
                            250,
                            "linear",
                            "${text_7}",
                            '1',
                            '0'
                        ],
                        [
                            "eid307",
                            "left",
                            4591,
                            394,
                            "linear",
                            "${dollar3}",
                            '673px',
                            '800px'
                        ],
                        [
                            "eid309",
                            "left",
                            4984,
                            222,
                            "linear",
                            "${dollar3}",
                            '800px',
                            '881px'
                        ],
                        [
                            "eid312",
                            "left",
                            5206,
                            249,
                            "linear",
                            "${dollar3}",
                            '881px',
                            '757px'
                        ],
                        [
                            "eid315",
                            "left",
                            5455,
                            192,
                            "linear",
                            "${dollar3}",
                            '757px',
                            '856px'
                        ],
                        [
                            "eid317",
                            "left",
                            5647,
                            178,
                            "linear",
                            "${dollar3}",
                            '856px',
                            '719px'
                        ],
                        [
                            "eid320",
                            "left",
                            5824,
                            175,
                            "linear",
                            "${dollar3}",
                            '719px',
                            '694px'
                        ],
                        [
                            "eid152",
                            "opacity",
                            10891,
                            359,
                            "linear",
                            "${text_11}",
                            '0',
                            '1'
                        ],
                        [
                            "eid109",
                            "opacity",
                            5943,
                            250,
                            "linear",
                            "${calendar}",
                            '0',
                            '1'
                        ],
                        [
                            "eid178",
                            "opacity",
                            8308,
                            250,
                            "linear",
                            "${calendar}",
                            '1',
                            '0'
                        ],
                        [
                            "eid284",
                            "top",
                            4591,
                            394,
                            "linear",
                            "${dollar2}",
                            '818px',
                            '382px'
                        ],
                        [
                            "eid285",
                            "top",
                            4984,
                            222,
                            "linear",
                            "${dollar2}",
                            '382px',
                            '504px'
                        ],
                        [
                            "eid288",
                            "top",
                            5206,
                            206,
                            "linear",
                            "${dollar2}",
                            '504px',
                            '598px'
                        ],
                        [
                            "eid297",
                            "top",
                            5412,
                            178,
                            "linear",
                            "${dollar2}",
                            '598px',
                            '694px'
                        ],
                        [
                            "eid300",
                            "top",
                            5590,
                            195,
                            "linear",
                            "${dollar2}",
                            '694px',
                            '727px'
                        ],
                        [
                            "eid303",
                            "top",
                            5785,
                            215,
                            "linear",
                            "${dollar2}",
                            '727px',
                            '801px'
                        ],
                        [
                            "eid200",
                            "rotateZ",
                            4591,
                            615,
                            "linear",
                            "${dollar3}",
                            '20deg',
                            '-55deg'
                        ],
                        [
                            "eid311",
                            "rotateZ",
                            5206,
                            249,
                            "linear",
                            "${dollar3}",
                            '-55deg',
                            '64deg'
                        ],
                        [
                            "eid314",
                            "rotateZ",
                            5455,
                            192,
                            "linear",
                            "${dollar3}",
                            '64deg',
                            '106deg'
                        ],
                        [
                            "eid227",
                            "rotateZ",
                            5647,
                            352,
                            "linear",
                            "${dollar3}",
                            '106deg',
                            '0deg'
                        ],
                        [
                            "eid137",
                            "scaleX",
                            9690,
                            250,
                            "easeOutBack",
                            "${text_10}",
                            '0',
                            '1'
                        ],
                        [
                            "eid7",
                            "opacity",
                            342,
                            222,
                            "linear",
                            "${kurier1}",
                            '0',
                            '1'
                        ],
                        [
                            "eid35",
                            "opacity",
                            4013,
                            210,
                            "linear",
                            "${kurier1}",
                            '1',
                            '0'
                        ],
                        [
                            "eid111",
                            "left",
                            6250,
                            250,
                            "linear",
                            "${text_6}",
                            '1366px',
                            '436px'
                        ],
                        [
                            "eid31",
                            "top",
                            3783,
                            290,
                            "linear",
                            "${ruki2}",
                            '787px',
                            '395px'
                        ],
                        [
                            "eid161",
                            "top",
                            4500,
                            375,
                            "linear",
                            "${ruki2}",
                            '395px',
                            '803px'
                        ]
                    ]
                }
            },
            "kurier1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_5a-min',
                            rect: ['0px', '0px', '375px', '375px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/5a-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '375px', '375px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "mazok1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_1-min2',
                            rect: ['0px', '0px', '1056px', '392px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/1-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1056px', '392px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "mazok2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_2-min2',
                            rect: ['0px', '0px', '915px', '223px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/2-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '915px', '223px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "ruki": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_3-min',
                            rect: ['0px', '0px', '270px', '209px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/3-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '270px', '209px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "pizza": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_5-min',
                            rect: ['0px', '0px', '367px', '122px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/5-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '367px', '122px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "kurier2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_5b-min',
                            rect: ['0px', '0px', '323px', '47px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/5b-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '323px', '47px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_6-min',
                            rect: ['0px', '0px', '702px', '183px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/6-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '702px', '183px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_7a-min',
                            rect: ['0px', '0px', '426px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/7a-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '425px', '54px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_7b-min',
                            rect: ['0px', '0px', '620px', '64px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/7b-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '620px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_8-min',
                            rect: ['0px', '0px', '702px', '148px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/8-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '702px', '148px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_9-min',
                            rect: ['0px', '1px', '333px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/9-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '332px', '54px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "dollar1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_15-min',
                            rect: ['0px', '0px', '52px', '64px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/15-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '52px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "dollar2": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_14-min',
                            rect: ['0px', '0px', '58px', '83px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/14-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '59px', '83px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "dollar3": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_13-min',
                            rect: ['0px', '0px', '50px', '83px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/13-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '50px', '83px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "dollar4": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_12-min',
                            type: 'image',
                            rect: ['0px', '0px', '82px', '83px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/12-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '82px', '83px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "dollar5": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_11-min',
                            type: 'image',
                            rect: ['0px', '0px', '82px', '90px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/11-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '82px', '90px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "dollar6": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: '_10-min',
                            type: 'image',
                            rect: ['0px', '0px', '82px', '102px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/10-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '82px', '102px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "mazok_red": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_16-min',
                            rect: ['0px', '0px', '1079px', '556px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/16-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1079px', '556px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "kalendar": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_17-min',
                            rect: ['0px', '0px', '902px', '223px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/17-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '902px', '223px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_18-min',
                            rect: ['0px', '0px', '561px', '183px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/18-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '561px', '183px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text_7": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_19-min',
                            rect: ['0px', '0px', '948px', '209px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/19-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '948px', '209px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text_8": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_20-min',
                            rect: ['0px', '0px', '613px', '209px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/20-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '613px', '209px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "fon_red": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_22-min',
                            rect: ['0px', '0px', '934px', '515px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/22-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '934px', '515px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "karta": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_23-min',
                            rect: ['0px', '0px', '613px', '416px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/23-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '613px', '416px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text_9": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_24-min',
                            rect: ['0px', '0px', '677px', '64px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/24-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '677px', '64px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text_10": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_25-min',
                            rect: ['0px', '0px', '950px', '140px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/25-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '950px', '140px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text_11": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_26-min',
                            rect: ['0px', '0px', '613px', '352px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/26-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '613px', '352px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "knopka": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_27-min',
                            rect: ['0px', '0px', '542px', '83px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/27-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '542px', '83px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "text_12": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'image',
                            id: '_29-min',
                            rect: ['0px', '0px', '221px', '47px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/29-min.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '221px', '47px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "knopka1": {
                version: "6.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "6.0.0.400",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '542', '83', 'auto', 'auto'],
                            id: 'knopka',
                            symbolName: 'knopka',
                            opacity: '0',
                            type: 'rect'
                        },
                        {
                            rect: ['167px', '14px', '221', '47', 'auto', 'auto'],
                            id: 'text_12',
                            symbolName: 'text_12',
                            opacity: '0',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '542px', '83px']
                        }
                    }
                },
                timeline: {
                    duration: 9000,
                    autoPlay: true,
                    data: [
                        [
                            "eid154",
                            "opacity",
                            8750,
                            250,
                            "linear",
                            "${knopka}",
                            '0',
                            '1'
                        ],
                        [
                            "eid156",
                            "opacity",
                            8750,
                            250,
                            "linear",
                            "${text_12}",
                            '0',
                            '1'
                        ],
                        [
                            "eid160",
                            "top",
                            3000,
                            0,
                            "linear",
                            "${knopka}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("pizza_edgeActions.js");
})("EDGE-491764");
