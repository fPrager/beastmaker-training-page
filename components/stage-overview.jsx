import { Carousel } from 'antd';

export default ({
    stages, curStageIndex,
}) => {
    function onChange(a, b, c) {
        console.log(a, b, c);
      }

    const getSetSlider = (setName, stages) => {
        return (
            <div className="set-slider">
SLiderrr
            </div>
        )
    };

return (
    <Carousel afterChange={onChange}>
            {getSetSlider()}
            {getSetSlider()}
            {getSetSlider()}
            {getSetSlider()}
    </Carousel>
);
};
