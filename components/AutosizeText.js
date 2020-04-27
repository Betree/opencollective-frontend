import React from 'react';
import PropTypes from 'prop-types';

const getFontSize = (value, fontSizes) => {
  if (!value?.length) {
    return;
  }
};

/**
 * A magic text component whose size adapts based on string length
 */
const AutosizeText = ({ Component, fontSizes, value }) => {
  return <Component fontSize={getFontSize(value)}>{value}</Component>;
};

AutosizeText.propTypes = {
  /** A map of [breakpoint, fontSize] font sizes like {} */
  fontSizes: PropTypes.object.isRequired,
  /** The value to display */
  value: PropTypes.string,
  /** The component to use as the display. Must support the `fontSize` styled-system property */
  Component: PropTypes.element,
};

export default AutosizeText;
