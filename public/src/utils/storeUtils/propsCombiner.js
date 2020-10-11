export const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return {
        ...dispatchProps,
        ...stateProps,
        ...ownProps,
    }
};
