import React, { Component } from 'react';
import './App.css';
import CreateSeries from './CreateSeries';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';


// import SeriesContainer from '../src/hoc-containers/series-contaner'
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
            <section className="container">
              <div className="card-slider">
                <div className="card-slider-wrapper" style={{
                  'transform': `translateX(-${series.id*(100/data.series.length -4)}%)`
                  // 'transform': `translateX(-50%)`
                }}>
                  {series.map(serie => (
                    <CardCustom
                      key={serie.id}
                      graphic={serie.banner_url}
                      cardTitle = {serie.title}
                      tagTitle = {serie.tag}
                      tagColor = {serie.tag}
                    />
                  ))}
                </div>
              </div>
              <button>Previous</button>
              <div>5/30</div>
              <button>Next</button>
            </section>
          );
        }}
      </Query>


    </div>
  );
}

export default App;