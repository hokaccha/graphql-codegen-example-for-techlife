import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['Int'];
  title: Scalars['String'];
  imageUrl?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  recipe: Recipe;
};


export type QueryRecipeArgs = {
  id: Scalars['Int'];
};

export type GetRecipeQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type GetRecipeQuery = (
  { __typename?: 'Query' }
  & { recipe: (
    { __typename?: 'Recipe' }
    & Pick<Recipe, 'id' | 'title' | 'imageUrl'>
  ) }
);


export const GetRecipeDocument = gql`
    query getRecipe($id: Int!) {
  recipe(id: $id) {
    id
    title
    imageUrl
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = sdkFunction => sdkFunction();
export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    getRecipe(variables: GetRecipeQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRecipeQuery> {
      return withWrapper(() => client.request<GetRecipeQuery>(GetRecipeDocument, variables, requestHeaders));
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;