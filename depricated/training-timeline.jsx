import { Timeline } from 'antd';

export default ({ stages, curStageIndex }) => {
    const items = stages.map((stage) => {
      const { duration, name, primary, id } = stage;
      const isDone = stages.indexOf(stage) - curStageIndex;
      const dotColor = isDone <= 0 ? 'black' : 'gray';
      return (
        <Timeline.Item 
          label={duration || ""}
          color={dotColor}
          key={id}
        >
          {primary ? (<b>{name}</b>) : name}
        </Timeline.Item>
      )
    });

    return ( 
      <Timeline mode="right">
        { items }
      </Timeline>
    )
};