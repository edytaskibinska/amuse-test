import React from 'react';
import './App.css';
import CreateSeries from './CreateSeries';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';

import CardCustom from '../src/components/CardCustom'
/*
    App component contains an example of how to use react-apollo
    You need to update it to create your custom view
*/

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
function App() {
  return (
    <div className="App">
      <CreateSeries />
      <Query query={SERIES_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>

          const { series } = data;
          console.log(series);

          return (
          <div  className="container">
            {series.map(serie => (
              <CardCustom
                id={serie.id}
                graphic={serie.banner_url}
                cardTitle = {serie.title}
                tagTitle = {serie.tag}
                tagColor = {serie.tag}
              />
            ))}
          </div>
          );
        }}
      </Query>
    </div>
  );
}

export default App;
