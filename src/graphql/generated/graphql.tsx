import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<User>>>;
  user?: Maybe<User>;
  customers?: Maybe<Array<Maybe<Customer>>>;
  customer?: Maybe<Customer>;
  orders?: Maybe<Array<Maybe<Order>>>;
  order?: Maybe<Order>;
  ordersFromCustomer?: Maybe<Array<Maybe<Order>>>;
  products?: Maybe<Array<Maybe<Product>>>;
  product?: Maybe<Product>;
  me?: Maybe<User>;
};


export type QueryUserArgs = {
  id: Scalars['ID'];
};


export type QueryCustomerArgs = {
  id: Scalars['ID'];
};


export type QueryOrderArgs = {
  id: Scalars['ID'];
};


export type QueryOrdersFromCustomerArgs = {
  customerId: Scalars['ID'];
};


export type QueryProductArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']>;
  addUser?: Maybe<User>;
  editUser?: Maybe<User>;
  addCustomer?: Maybe<Customer>;
  updateCustomer?: Maybe<Customer>;
  addOrder?: Maybe<Order>;
  editOrder?: Maybe<Order>;
  addProduct?: Maybe<Product>;
  login?: Maybe<LoginResponse>;
  revokeRefreshTokenForUser?: Maybe<Scalars['Boolean']>;
  logout?: Maybe<Scalars['Boolean']>;
};


export type MutationAddUserArgs = {
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  password: Scalars['String'];
  dateOfBirth?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};


export type MutationEditUserArgs = {
  id: Scalars['ID'];
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['String']>;
};


export type MutationAddCustomerArgs = {
  companyName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  cpfOrCnpj: Scalars['String'];
  cpf?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressBook?: Maybe<Array<Maybe<InputAddress>>>;
};


export type MutationUpdateCustomerArgs = {
  id: Scalars['ID'];
  companyName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  cpfOrCnpj?: Maybe<Scalars['String']>;
  cpf?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressBook?: Maybe<Array<Maybe<InputAddress>>>;
};


export type MutationAddOrderArgs = {
  customer?: Maybe<Scalars['ID']>;
  employee?: Maybe<Scalars['ID']>;
  nf?: Maybe<Scalars['String']>;
  siteNumber?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['String']>;
  eventDate?: Maybe<Scalars['String']>;
  deliveryPeriod?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  totalPrice?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  pendingPayment?: Maybe<Scalars['Float']>;
  quantityGlasses?: Maybe<Scalars['Int']>;
  deliveryFee?: Maybe<Scalars['Float']>;
  includeDraftMachine?: Maybe<Scalars['Boolean']>;
  obs?: Maybe<Scalars['String']>;
  useNewAddress?: Maybe<Scalars['Boolean']>;
  address?: Maybe<InputAddress>;
  purchaseItems?: Maybe<Array<Maybe<InputPurchaseItem>>>;
  payments?: Maybe<Array<Maybe<InputPaymentItem>>>;
  draftMachines?: Maybe<Array<Maybe<InputDraftMachineEmbeded>>>;
};


export type MutationEditOrderArgs = {
  id: Scalars['ID'];
  nf?: Maybe<Scalars['String']>;
  siteNumber?: Maybe<Scalars['String']>;
  orderDate?: Maybe<Scalars['String']>;
  eventDate?: Maybe<Scalars['String']>;
  deliveryPeriod?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  totalPrice?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  pendingPayment?: Maybe<Scalars['Float']>;
  quantityGlasses?: Maybe<Scalars['Int']>;
  deliveryFee?: Maybe<Scalars['Float']>;
  includeDraftMachine?: Maybe<Scalars['Boolean']>;
  obs?: Maybe<Scalars['String']>;
  useNewAddress?: Maybe<Scalars['Boolean']>;
  address?: Maybe<InputAddress>;
  purchaseItems?: Maybe<Array<Maybe<InputPurchaseItem>>>;
  payments?: Maybe<Array<Maybe<InputPaymentItem>>>;
  draftMachines?: Maybe<Array<Maybe<InputDraftMachineEmbeded>>>;
};


export type MutationAddProductArgs = {
  name: Scalars['String'];
  displayName: Scalars['String'];
  defaultPrice: Scalars['Float'];
  quantityPerUnit?: Maybe<Scalars['Int']>;
  unitName?: Maybe<Scalars['String']>;
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationRevokeRefreshTokenForUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  email: Scalars['String'];
  username: Scalars['String'];
  dateOfBirth?: Maybe<Scalars['String']>;
  active?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['String']>;
};

export type InputAddress = {
  address: Scalars['String'];
  number: Scalars['Int'];
  unit?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  neighbourhood?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
};

export type Address = {
  __typename?: 'Address';
  address: Scalars['String'];
  number: Scalars['Int'];
  unit?: Maybe<Scalars['String']>;
  cep?: Maybe<Scalars['String']>;
  neighbourhood?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  reference?: Maybe<Scalars['String']>;
};

export type Customer = {
  __typename?: 'Customer';
  id: Scalars['ID'];
  companyName?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  birthDate?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  cpfOrCnpj: Scalars['String'];
  cpf?: Maybe<Scalars['String']>;
  cnpj?: Maybe<Scalars['String']>;
  phones?: Maybe<Array<Maybe<Scalars['String']>>>;
  addressBook?: Maybe<Array<Maybe<Address>>>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type PurchaseItem = {
  __typename?: 'PurchaseItem';
  product?: Maybe<Scalars['ID']>;
  pricePerUnit?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Float']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  consignado?: Maybe<Scalars['Boolean']>;
};

export type InputPurchaseItem = {
  product?: Maybe<Scalars['ID']>;
  pricePerUnit?: Maybe<Scalars['Float']>;
  quantity?: Maybe<Scalars['Int']>;
  subtotal?: Maybe<Scalars['Float']>;
  consignado?: Maybe<Scalars['Boolean']>;
};

export type PaymentItem = {
  __typename?: 'PaymentItem';
  id?: Maybe<Scalars['ID']>;
  amount?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  employee?: Maybe<User>;
  obs?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type InputPaymentItem = {
  amount?: Maybe<Scalars['Float']>;
  status?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<Scalars['String']>;
  employee?: Maybe<Scalars['ID']>;
  obs?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type DraftMachineEmbeded = {
  __typename?: 'DraftMachineEmbeded';
  id?: Maybe<Scalars['ID']>;
  model?: Maybe<Scalars['String']>;
  voltage?: Maybe<Scalars['String']>;
  gasType?: Maybe<Scalars['String']>;
};

export type InputDraftMachineEmbeded = {
  model?: Maybe<Scalars['String']>;
  voltage?: Maybe<Scalars['String']>;
  gasType?: Maybe<Scalars['String']>;
};

export type Order = {
  __typename?: 'Order';
  id: Scalars['ID'];
  customer?: Maybe<Customer>;
  employee?: Maybe<User>;
  nf?: Maybe<Scalars['String']>;
  siteNumber?: Maybe<Scalars['String']>;
  orderNumber?: Maybe<Scalars['Int']>;
  orderDate?: Maybe<Scalars['String']>;
  eventDate?: Maybe<Scalars['String']>;
  deliveryPeriod?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  obs?: Maybe<Scalars['String']>;
  includeDraftMachine?: Maybe<Scalars['Boolean']>;
  quantityGlasses?: Maybe<Scalars['Int']>;
  deliveryFee?: Maybe<Scalars['Float']>;
  totalPrice?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  pendingPayment?: Maybe<Scalars['Float']>;
  useNewAddress?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Address>;
  draftMachines?: Maybe<Array<Maybe<DraftMachineEmbeded>>>;
  purchaseItems?: Maybe<Array<Maybe<PurchaseItem>>>;
  payments?: Maybe<Array<Maybe<PaymentItem>>>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type Product = {
  __typename?: 'Product';
  id?: Maybe<Scalars['ID']>;
  displayName: Scalars['String'];
  name: Scalars['String'];
  defaultPrice: Scalars['Float'];
  quantityPerUnit?: Maybe<Scalars['Int']>;
  unitName?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token: Scalars['String'];
  user?: Maybe<User>;
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login?: Maybe<(
    { __typename?: 'LoginResponse' }
    & Pick<LoginResponse, 'token'>
  )> }
);

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'logout'>
);

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'username' | 'dateOfBirth' | 'active' | 'role'>
  )> }
);


export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const MeDocument = gql`
    query me {
  me {
    id
    firstName
    lastName
    email
    username
    dateOfBirth
    active
    role
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;