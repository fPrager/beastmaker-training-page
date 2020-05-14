import { useState, useEffect } from 'react';
import { Row, Col, Page } from '@zeit-ui/react'
import Exercise from './Exercise';


import sampleTrainingData from '../data/sample-training-data';
import getStagesFromTraining from '../logic/timeline/get-stages-from-training';
import getCurIndexFromSequence from '../logic/timeline/get-cur-index-from-sequence';

export default () => {
    const stages = getStagesFromTraining(sampleTrainingData);

    const [curTime, setCurTime ] = useState(0);
    const [paused, setPaused ] = useState(false);
    const intervall = 100;

    useEffect(() => {
        setInterval(() => {
            if(!paused) {
                setCurTime(curTime => (curTime + intervall/1000));
            };
        }, intervall);
    }, []);

    const curStageIndex = getCurIndexFromSequence({ time: curTime, sequence: stages });
    const curStage = stages[curStageIndex];
    const time = curTime - curStage.startTime;

    return (
        <Page size="medium" height="100vh">
          <Exercise 
              stage={curStage}
              time={time}
          />
        </Page>
    );
};