export default {
    plan: 'Absolute Beginners',
    warmup: 130,
    imgWarmup: '/warmup.jpg',
    pauseBetweenSets: 380,
    imgBetweenSets: '/bm_1000_0.png',
    sets: [
        {
            id: 'set1',
            exercises: [
                {
                    id: 'rest',
                    img: '/bm_1000_0.png',
                    name: 'Rest',
                    stations: [
                        {
                            id: 'rest',
                            name: 'Rest',
                            duration: 140,
                        },
                    ],
                    sequence: ['rest'],
                },
                {
                    id: 'hold-1',
                    img: '/bm_1000_1.png',
                    name: '4 fingers jug',
                    stations: [
                        {
                            id: 'hang',
                            name: 'Hang',
                            duration: 5,
                        },
                        {
                            id: 'rest',
                            name: 'Rest',
                            duration: 5,
                        },
                    ],
                    sequence: ['hang', 'rest', 'hang', 'rest', 'hang', 'rest', 'hang'],
                },
                {
                    id: 'hold-3',
                    img: '/bm_1000_3.png',
                    name: 'open 4 fingers',
                    stations: [
                        {
                            id: 'hang',
                            name: 'Hang',
                            duration: 5,
                        },
                        {
                            id: 'rest',
                            name: 'Rest',
                            duration: 5,
                        },
                    ],
                    sequence: ['hang', 'rest', 'hang', 'rest', 'hang', 'rest', 'hang'],
                },
                {
                    id: 'hold-12',
                    img: '/bm_1000_12.png',
                    name: '4 fingers sloper',
                    stations: [
                        {
                            id: 'hang',
                            name: 'Hang',
                            duration: 5,
                        },
                        {
                            id: 'rest',
                            name: 'Rest',
                            duration: 5,
                        },
                    ],
                    sequence: ['hang', 'rest', 'hang', 'rest', 'hang', 'rest', 'hang'],
                },
                {
                    id: 'hold-8',
                    img: '/bm_1000_8.png',
                    name: 'open 3 fingers',
                    stations: [
                        {
                            id: 'hang',
                            name: 'Hang',
                            duration: 5,
                        },
                        {
                            id: 'rest',
                            name: 'Rest',
                            duration: 5,
                        },
                    ],
                    sequence: ['hang', 'rest', 'hang', 'rest', 'hang', 'rest', 'hang'],
                },
            ],
            sequence: ['hold-1', 'rest', 'hold-3', 'rest', 'hold-12', 'rest', 'hold-8'],
        },
    ],
    sequence: ['set1', 'set1', 'set1'],
};
