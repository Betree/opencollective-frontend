import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from '@apollo/react-hoc';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';

import hasFeature, { FEATURES } from '../lib/allowed-features';
import { generateNotFoundError } from '../lib/errors';
import { API_V2_CONTEXT, gqlV2 } from '../lib/graphql/helpers';

import CollectiveNavbar from '../components/CollectiveNavbar';
import Container from '../components/Container';
import ErrorPage from '../components/ErrorPage';
import ExpensesList from '../components/expenses/ExpensesList';
import { Box, Flex } from '../components/Grid';
import LoadingPlaceholder from '../components/LoadingPlaceholder';
import Page from '../components/Page';
import PageFeatureNotSupported from '../components/PageFeatureNotSupported';
import { H1 } from '../components/Text';

import ExpenseInfoSidebar from './ExpenseInfoSidebar';

const messages = defineMessages({
  title: {
    id: 'ExpensesPage.title',
    defaultMessage: '{collectiveName} · Submit expense',
  },
});

class ExpensePage extends React.Component {
  static getInitialProps({ query: { parentAccountSlug, accountSlug } }) {
    return { parentAccountSlug, accountSlug };
  }

  static propTypes = {
    accountSlug: PropTypes.string,
    parentAccountSlug: PropTypes.string,
    /** from injectIntl */
    intl: PropTypes.object,
    data: PropTypes.shape({
      loading: PropTypes.bool,
      error: PropTypes.any,
      account: PropTypes.shape({
        id: PropTypes.string.isRequired,
      }),
      expenses: PropTypes.shape({
        nodes: PropTypes.array,
      }),
    }),
  };

  getPageMetaData(collective) {
    if (collective) {
      return { title: this.props.intl.formatMessage(messages.title, { collectiveName: collective.name }) };
    } else {
      return { title: `Expenses` };
    }
  }

  render() {
    const { accountSlug, data } = this.props;

    if (!data.loading) {
      if (!data || data.error) {
        return <ErrorPage data={data} />;
      } else if (!data.account) {
        return <ErrorPage error={generateNotFoundError(accountSlug, true)} log={false} />;
      } else if (!hasFeature(data.account, FEATURES.RECEIVE_EXPENSES)) {
        return <PageFeatureNotSupported />;
      }
    }

    return (
      <Page collective={data.account} {...this.getPageMetaData(data.account)} withoutGlobalStyles>
        <CollectiveNavbar collective={data.account} isLoading={!data.account} />
        <Container position="relative" minHeight={[null, 800]}>
          <Box maxWidth={1242} m="0 auto" px={[2, 3, 4]} py={[4, 5]}>
            <Flex justifyContent="space-between" flexWrap="wrap">
              <Box flex="1 1 500px" minWidth={300} maxWidth={750} mr={[0, 3, 5]} mb={5}>
                <H1 fontSize="H4" lineHeight="H4" mb={24} py={2}>
                  <FormattedMessage id="section.expenses.title" defaultMessage="Expenses" />
                </H1>
                <ExpensesList expenses={data.expenses?.nodes} />
              </Box>
              <Box minWidth={270} width={['100%', null, null, 275]} mt={70}>
                <ExpenseInfoSidebar
                  isLoading={data.loading}
                  collective={data.account}
                  host={data.account?.host}
                  expense={{ tags: data.account?.expensesTags }}
                />
              </Box>
            </Flex>
          </Box>
        </Container>
      </Page>
    );
  }
}

const EXPENSES_PAGE_QUERY = gqlV2`
  query ExpensesPageQuery($accountSlug: String!) {
    account(slug: $accountSlug) {
      id
      slug
      type
      imageUrl
      expensesTags {
        id
        tag
      }
      ... on Event {
        balance
        host {
          id
          name
          slug
          type
        }
      }
      ... on Collective {
        balance
        host {
          id
          name
          slug
          type
        }
      }
    }
    expenses(account: {slug: $accountSlug}) {
      totalCount
      offset
      limit
      nodes {
        id
        description
        status
        createdAt
        tags
        amount
        currency
        payee {
          id
          type
          slug
          imageUrl(height: 80)
        }
        createdByAccount {
          id
          type
          slug
        }
      }
    }
  }
`;

const getData = graphql(EXPENSES_PAGE_QUERY, {
  options: {
    context: API_V2_CONTEXT,
    pollInterval: 60000, // Will refresh the data every 60s to get new expenses
  },
});

export default injectIntl(getData(ExpensePage));
