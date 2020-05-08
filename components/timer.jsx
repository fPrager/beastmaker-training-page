import { Progress } from 'antd';

export default ({ time, duration, color}) => {
    const strokeColor =
        {
            from: color || 'gray',
            to: color || 'gray',
        }
    ;
    return (
        <Progress 
            strokeColor={strokeColor}
            percent={100*time/duration} 
            status="active" 
            format={percent => `${duration - Math.round(time)} Sec`}
        />
    );
};