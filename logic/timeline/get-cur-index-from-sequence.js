export default ({ sequence, time }) => {
    let timeInSequence = 0;
    let index = 0;
    while (timeInSequence < time) {
        timeInSequence += sequence[index].duration || 0;
        index += 1;
    }
    return Math.max(0, index - 1);
};
