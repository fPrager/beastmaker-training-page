import { Progress, Display, Image, Text } from '@zeit-ui/react';

export default (props) => {
  return (
    <div className="exercise">
      <div className="exercise--image">
          <Image height="100%" src="https://picsum.photos/300/400" />
      </div>
      <div className="exercise--info">
        <Text h3>Hold</Text>
      </div>
      <div className="exercise--progress">
        <Progress value={50} />
      </div>
    </div>)
};