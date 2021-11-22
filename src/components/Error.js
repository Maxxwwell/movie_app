/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { View, Text } from 'react-native';

const propTypes = {
    errorText1: PropTypes.string,
    errorText2: PropTypes.string,
};

const defaultProps = {
    errorText1: 'Oops! Something went wrong',
    errorText2: 'Make sure you have internet connection and restart the app',
};

const ErrorContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ErrorText = styled(Text)`
  font-weight: bold;
`;

class Error extends React.PureComponent {
    render() {
        const { errorText1, errorText2 } = this.props;
        return (
            <ErrorContainer>

                <ErrorText>
                    {errorText1}
                </ErrorText>

                <ErrorText>
                    {errorText2}
                </ErrorText>

            </ErrorContainer>
        );
    }
}

Error.propTypes = propTypes;
Error.defaultProps = defaultProps;
export default Error;
 