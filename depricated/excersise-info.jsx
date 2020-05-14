import React from 'react';
import { Row, Col } from 'antd'
import Timer from './timer';
import getCurIndexFromSequence from '../timeline/get-cur-index-from-sequence';

const getStationTimeline = ({ time, stationSequence }) => {

    if(!stationSequence  || stationSequence.length === 0) return '';

    if(stationSequence.length === 1) {
        return (
            <h3>{stationSequence[0].name}</h3>
        );
    };

    const curStationIndex = getCurIndexFromSequence({ sequence: stationSequence, time });
    const { startTime, duration, name } = stationSequence[curStationIndex];

    const timeInStation = time - startTime;
    return (
        <Row>
            <h3>{name}</h3>
            <Col span={24}>
                <Timer 
                    duration={duration} 
                    time={timeInStation}
                />
            </Col>
        </Row>
    );
};

export default ({ time, stage }) => { 
    const {
        duration,
        img,
        name,
        stationSequence,
    } = stage;

    const holdInfo = (
        <div>
            <h1>{name}</h1>
            <img src={img} />
        </div>
    ); 
    
    return (
        <div className="hold-info">
            <Row>
                <Col span={24}>
                    {holdInfo}
                </Col>
            </Row>
            { getStationTimeline({ time, stationSequence }) }
            <Row>
                <Col span={24}>
                    <Timer 
                        duration={duration} 
                        time={time}
                    />
                </Col>
            </Row>
        </div>
    );
}