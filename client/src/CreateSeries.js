import React from 'react';

import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import CustomButton from  './components/ButtonCustom'

const CREATE_MUTATION = gql`
  mutation PostMutation($title: String!, $tag: String!, $banner_url: String!) {
    createSeries(title: $title, tag: $tag, banner_url: $banner_url) {
      id
      banner_url
      title
      tag
    }
  }
`

const SERIES_QUERY = gql`
  {
    series {
     id
     banner_url
     title
     tag
    }
  }
`

const SERIES_PER_PAGE = 5;

export default function CreateSeries() {
  const title = "new serie";
  const tag = "asset";
  const banner_url = "https://via.placeholder.com/600/FF0000";

  return (
    <div>
      <Mutation
        mutation={CREATE_MUTATION}
        variables={{ title, tag, banner_url }}
        onCompleted={() => console.log("new series added")}
        update={(store, { data: { createSeries } }) => {
          const first = SERIES_PER_PAGE
          const skip = 0
          const data = store.readQuery({
            query: SERIES_QUERY,
            variables: { first, skip },
          })
          data.series.push(createSeries)
          store.writeQuery({
            query: SERIES_QUERY,
            data,
            variables: { first, skip },
          })
        }}
      >
        {postMutation => <span onClick={postMutation}><CustomButton  onClick={postMutation}/></span>  }
      </Mutation>
    </div>
  )
}