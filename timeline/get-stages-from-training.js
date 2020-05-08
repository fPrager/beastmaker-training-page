const makeStage = (stage) => ({
    startTime: 0,
    duration: 0,
    primary: false,
    img: '',
    stationSequence: null,
    ...stage,
});


const addStageFromExercise = ({ exercise, addStage }) => {
    const {
        img, name, stations, sequence,
    } = exercise;

    const {
        duration,
        stationSequence,
    } = sequence.reduce((res, cur, index) => {
        const station = stations.find((s) => s.id === cur);
        if (!station) return res;
        return {
            duration: res.duration + (station.duration || 0),
            stationSequence: [
                ...res.stationSequence,
                {
                    id: `station-${index}`,
                    name: station.name,
                    startTime: res.duration,
                    duration: station.duration,
                },
            ],
        };
    }, { duration: 0, stationSequence: [] });

    addStage(makeStage({
        name,
        duration,
        stationSequence,
        img,
    }));
};

const addStagesFromSet = ({ index, set, addStage }) => {
    const {
        name = `Set ${index + 1}`,
        duration = 0,
        img = '',
    } = set;

    addStage(makeStage({
        name, duration, img, primary: true,
    }));

    const { exercises = [], sequence = [] } = set;

    const exSequence = sequence.reduce((acc, cur) => {
        const exercise = exercises.find((ex) => ex.id === cur);
        if (!exercise) return acc;
        return [...acc, exercise];
    }, []);


    for (let i = 0; i < exSequence.length; i += 1) {
        addStageFromExercise({
            exercise: exSequence[i],
            addStage,
        });
    }
};


export default ({
    warmup,
    imgWarmup,
    pauseBetweenSets,
    sets,
    sequence,
    imgBetweenSets,
}) => {
    const stages = [];
    let time = 0;
    let index = 0;

    const addStage = (stage) => {
        stages.push({
            ...stage,
            startTime: time,
            id: `stage-${index}`,
        });
        time += stage.duration;
        index += 1;
    };

    if (warmup) {
        addStage(
            makeStage({
                name: 'Warmup', img: imgWarmup, duration: warmup, primary: true,
            }),
        );
    }

    const setSequence = sequence.reduce((acc, cur) => {
        const set = sets.find((s) => s.id === cur);
        if (!set) return acc;
        return [...acc, set];
    }, []);

    for (let i = 0; i < setSequence.length; i += 1) {
        const set = setSequence[i];

        addStagesFromSet({
            index: i,
            set: {
                img: imgBetweenSets,
                ...set,
            },
            addStage,
        });

        if (i < setSequence.length - 1) {
            addStage(makeStage({
                name: 'Pause between',
                duration: pauseBetweenSets,
                img: imgBetweenSets,
            }));
        }
    }

    addStage(makeStage({ name: 'Done', primary: true }));

    return stages;
};
