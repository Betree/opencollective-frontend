/**
 * Mocks for expenses as returned by API V2
 */

import { payoutMethodPaypal } from './payout-methods';

export const expenseInvoice = {
  description: 'March invoice',
  payoutMethod: payoutMethodPaypal,
  privateMessage: 'Please pay the money fast',
  currency: 'USD',
  type: 'INVOICE',
  createdAt: '2020-04-22T06:00:00Z',
  items: [
    {
      id: '661ae79b-ff2b-4c64-aee4-44b7e6b21a4c',
      incurredAt: '2020-02-14',
      description: 'Development work',
      amount: 18600,
    },
    {
      id: '7934a6bb-1f54-4b69-891b-2cca14cbe8fa',
      incurredAt: '2020-02-14',
      description: 'Hosting for the website',
      amount: 5600,
    },
  ],
  payee: {
    id: 'v6r0gonw-x8kv75ml-74j9z3yq-emla4pdy',
    slug: 'betree',
    imageUrl: 'https://images-staging.opencollective.com/betree/a65d6a6/avatar.png',
    type: 'INDIVIDUAL',
    name: 'Benjamin Piouffle',
    location: {
      address: '1749 Wheeler Blv, New York, New York 31636 United States',
      country: 'FR',
    },
  },
  createdByAccount: {
    id: 'v6r0gonw-x8kv75ml-74j9z3yq-emla4pdy',
    slug: 'betree',
    imageUrl: 'https://images-staging.opencollective.com/betree/a65d6a6/avatar.png',
    type: 'INDIVIDUAL',
    name: 'Benjamin Piouffle',
  },
};

export const expenseReceipt = {
  description: 'Brussels January team retreat',
  payoutMethod: payoutMethodPaypal,
  privateMessage: '',
  currency: 'USD',
  type: 'RECEIPT',
  createdAt: '2020-04-22T06:00:00Z',
  items: [
    {
      id: '661ae79b-ff2b-4c64-aee4-44b7e6b21a4c',
      incurredAt: '2020-02-14',
      description: 'Fancy restaurant',
      amount: 18600,
      url: 'https://loremflickr.com/120/120/invoice?lock=0',
    },
    {
      id: '7934a6bb-1f54-4b69-891b-2cca14cbe8fa',
      incurredAt: '2020-02-14',
      description: 'Potatoes & cheese for the non-vegan raclette',
      amount: 5600,
      url: 'https://loremflickr.com/120/120/invoice?lock=1',
    },
  ],
  payee: {
    id: 'v6r0gonw-x8kv75ml-74j9z3yq-emla4pdy',
    slug: 'betree',
    imageUrl: 'https://images-staging.opencollective.com/betree/a65d6a6/avatar.png',
    type: 'INDIVIDUAL',
    name: 'Benjamin Piouffle',
    location: {
      address: '1749 Wheeler Blv, New York, New York 31636 United States',
      country: 'FR',
    },
  },
  createdByAccount: {
    id: 'v6r0gonw-x8kv75ml-74j9z3yq-emla4pdy',
    slug: 'betree',
    imageUrl: 'https://images-staging.opencollective.com/betree/a65d6a6/avatar.png',
    type: 'INDIVIDUAL',
    name: 'Benjamin Piouffle',
  },
};

export const expensesList = [
  {
    id: 'o0v89qxw-z463rbox-enbae7ky-lpndgomd',
    description: 'Test dsadsadasd',
    status: 'PENDING',
    createdAt: '2020-04-29T12:08:43.647Z',
    tags: ['COMMUNICATIONS'],
    amount: 6600,
    currency: 'USD',
    payee: {
      id: 'v6r0gonw-x8kv75ml-74j9z3yq-emla4pdy',
      type: 'INDIVIDUAL',
      slug: 'betree',
      imageUrl: 'https://images-staging.opencollective.com/betree/46b07b0/avatar/80.png',
      __typename: 'Individual',
    },
    createdByAccount: {
      id: 'v6r0gonw-x8kv75ml-74j9z3yq-emla4pdy',
      type: 'INDIVIDUAL',
      slug: 'betree',
      __typename: 'Individual',
    },
    __typename: 'Expense',
  },
  {
    id: 'v6r0gonw-x8kv75m0-84j9z3yq-emla4pdy',
    description: 'Test dsadsadasd',
    status: 'PENDING',
    createdAt: '2020-04-23T09:04:11.333Z',
    tags: ['COMMUNICATIONS'],
    amount: 7700,
    currency: 'USD',
    payee: {
      id: 'z0w8xzmn-3lkqp5zx-pzbd4ea9-o6vryg7p',
      type: 'ORGANIZATION',
      slug: 'evil-corp',
      imageUrl: 'https://images-staging.opencollective.com/evil-corp/logo/80.png',
      __typename: 'Organization',
    },
    createdByAccount: {
      id: 'v6r0gonw-x8kv75ml-74j9z3yq-emla4pdy',
      type: 'INDIVIDUAL',
      slug: 'betree',
      __typename: 'Individual',
    },
    __typename: 'Expense',
  },
  {
    id: 'nyvwlnxe-389pojvk-we56daq4-07rmkgzq',
    description: 'Test dsadsadasd',
    status: 'PENDING',
    createdAt: '2020-04-23T09:03:17.417Z',
    tags: ['COMMUNICATIONS'],
    amount: 7700,
    currency: 'USD',
    payee: {
      id: 'v6r0gonw-x8kv75ml-74j9z3yq-emla4pdy',
      type: 'INDIVIDUAL',
      slug: 'betree',
      imageUrl: 'https://images-staging.opencollective.com/betree/46b07b0/avatar/80.png',
      __typename: 'Individual',
    },
    createdByAccount: {
      id: 'v6r0gonw-x8kv75ml-74j9z3yq-emla4pdy',
      type: 'INDIVIDUAL',
      slug: 'betree',
      __typename: 'Individual',
    },
    __typename: 'Expense',
  },
  {
    id: 'qdrmg0z3-wq7py50o-73589e4a-xlov6nk3',
    description: 'Test dsadsadasd',
    status: 'PENDING',
    createdAt: '2020-04-23T09:01:52.904Z',
    tags: ['COMMUNICATIONS'],
    amount: 7700,
    currency: 'USD',
    payee: {
      id: 'v6r0gonw-x8kv75ml-74j9z3yq-emla4pdy',
      type: 'INDIVIDUAL',
      slug: 'betree',
      imageUrl: 'https://images-staging.opencollective.com/betree/46b07b0/avatar/80.png',
      __typename: 'Individual',
    },
    createdByAccount: {
      id: 'v6r0gonw-x8kv75ml-74j9z3yq-emla4pdy',
      type: 'INDIVIDUAL',
      slug: 'betree',
      __typename: 'Individual',
    },
    __typename: 'Expense',
  },
  {
    id: '9lxn69kv-0gwmo5p0-zxjdr3y8-ae7pqz4r',
    description: 'Test dsadsadasd',
    status: 'PENDING',
    createdAt: '2020-04-23T08:56:21.627Z',
    tags: ['COMMUNICATIONS'],
    amount: 7700,
    currency: 'USD',
    payee: {
      id: 'v6r0gonw-x8kv75ml-74j9z3yq-emla4pdy',
      type: 'INDIVIDUAL',
      slug: 'betree',
      imageUrl: 'https://images-staging.opencollective.com/betree/46b07b0/avatar/80.png',
      __typename: 'Individual',
    },
    createdByAccount: {
      id: 'v6r0gonw-x8kv75ml-74j9z3yq-emla4pdy',
      type: 'INDIVIDUAL',
      slug: 'betree',
      __typename: 'Individual',
    },
    __typename: 'Expense',
  },
];
