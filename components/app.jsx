import { useState, useEffect } from 'react';
import { Row, Col } from 'antd';

import sampleTrainingData from '../data/sample-training-data';
import getStagesFromTraining from '../timeline/get-stages-from-training';
import StageOverview from './stage-overview';
import TrainingTimeline from './training-timeline';
import ExcersiseInfo from './excersise-info';
import getCurIndexFromSequence from '../timeline/get-cur-index-from-sequence';

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

    /**
     * 
    
     */

    return (
        <div>
             <Row>
            <Col span={4}>
                <TrainingTimeline 
                stages={stages} 
                curStageIndex={curStageIndex} 
                />
            </Col>
            <Col span={20}>
                <ExcersiseInfo 
                    stage={curStage}
                    time={time}
                />
            </Col>
            </Row>
      </div>
    );
};