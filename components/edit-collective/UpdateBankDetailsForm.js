import React from 'react';
import PropTypes from 'prop-types';
import { defineMessages, injectIntl } from 'react-intl';
import styled from 'styled-components';

import Container from '../Container';
import { Box, Flex } from '../Grid';
import StyledTextarea from '../StyledTextarea';
import { H4, P, Span } from '../Text';

const List = styled.ul`
  margin: 0;
  padding: 0;
  position: relative;
  list-style: none;
`;

class UpdateBankDetailsForm extends React.Component {
  static propTypes = {
    intl: PropTypes.object.isRequired,
    profileType: PropTypes.string, // USER or ORGANIZATION
    error: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = { form: {} };
    this.onChange = this.onChange.bind(this);
    this.messages = defineMessages({
      'bankaccount.instructions.label': {
        id: 'paymentMethods.manual.instructions',
        defaultMessage: 'Bank transfer instructions',
      },
      'bankaccount.instructions.default': {
        id: 'paymentMethods.manual.instructions.default',
        defaultMessage: `Please make a bank transfer as follows:

<code>
Amount: {amount}
Reference/Communication: {OrderId}
{account}
</code>

Please note that it will take a few days to process your payment.`,
      },
    });
  }

  onChange(field, value) {
    const newState = this.state;
    newState.form[field] = value;
    this.setState(newState);
    this.props.onChange(newState.form);
  }

  render() {
    const { intl, value, error } = this.props;
    return (
      <Flex flexDirection="column">
        <Container as="fieldset" border="none" width={1}>
          <Flex flexDirection={['column-reverse', 'row']}>
            <Box mb={3} flexGrow={1}>
              <StyledTextarea
                label={intl.formatMessage(this.messages['bankaccount.instructions.label'])}
                htmlFor="instructions"
                width="100%"
                height={300}
                onChange={e => this.onChange('instructions', e.target.value)}
                defaultValue={value || intl.formatMessage(this.messages['bankaccount.instructions.default'])}
              />
            </Box>
            <Container fontSize="1.4rem" pl={[0, 3]} width={[1, 0.5]}>
              <H4 fontSize="1.4rem">Variables:</H4>
              <P>Make sure you are using the following variables in the instructions.</P>

              <List>
                <li>
                  <code>&#123;account&#125;</code>: your bank account information added below
                </li>
                <li>
                  <code>&#123;amount&#125;</code>: total amount of the order
                </li>
                <li>
                  <code>&#123;collective&#125;</code>: slug of the collective for which the donation is earmarked
                </li>
                <li>
                  <code>&#123;OrderId&#125;</code>: unique id of the order to help you mark it as paid when you receive
                  the money
                </li>
              </List>
            </Container>
          </Flex>
        </Container>

        {error && (
          <Span display="block" color="red.500" pt={2} fontSize="Tiny">
            {error}
          </Span>
        )}
      </Flex>
    );
  }
}

UpdateBankDetailsForm.propTypes = {
  intl: PropTypes.object,
};

export default injectIntl(UpdateBankDetailsForm);
