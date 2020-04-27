import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import Avatar from '../Avatar';
import { Box } from '../Grid';
import StyledCard from '../StyledCard';

const ExpenseContainer = styled.div`
  display: flex;
  padding: 15px;

  ${props =>
    !props.isFirst &&
    css`
      border-top: 1px solid #e6e8eb;
    `}
`;

const ExpensesList = ({ expenses }) => {
  return (
    <StyledCard>
      {expenses.map((expense, idx) => (
        <ExpenseContainer key={expense.id} isFirst={!idx}>
          <Box mr={3}>
            <Avatar collective={expense.payee} radius={40} />
          </Box>
        </ExpenseContainer>
      ))}
    </StyledCard>
  );
};

ExpensesList.propTypes = {
  expenses: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      createdAt: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string),
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
      payee: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
      }),
      createdByAccount: PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
      }),
    }),
  ),
};

export default ExpensesList;
