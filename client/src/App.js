import React, { Component } from 'react';
import './App.css';
import CreateSeries from './CreateSeries';

import { Query } from 'react-apollo';
import gql from 'graphql-tag';


// import SeriesContainer from '../src/hoc-containers/series-contaner'
import CardCustom from '../src/components/CardCustom'
import ArrowForward from '@material-ui/icons/ArrowForward';
import ArrowBack from '@material-ui/icons/ArrowBack';
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

class App extends Component {
  constructor(props){
    super(props);
    //les elements sont statiques - normalement ils doivet etre synchronisés via graphql
    //donc a refaire proprement

    //NOTE importante : 
    //transform : calcule le défilement de carosussel
    //interval : calcule le dévilement tous les 5 élements
    //element : series.length - nombre d'élements (doit atre dynamiqué - appellé de graphql)
    //les chiffres dans le state et dans le calcul dans nextSerie et prevSerie sont fausses
    //Il faut les dynamiser car a chaque ajout de nouveau élement l'algorithme va changer
    //mon souci ici ce que je ne sais pas comment accèder ai series.length et je n'ai pas beaucoup de temps pour creuser
    this.state = {
      transform: 0,
      interval: 5,
      elements: 20
    }
  }

  //fonction executé au click du bouton next - fais defiler les séries
  nextSerie = () => {
    const {transform, elements, interval} = this.state;
    this.setState({
      interval: interval <= elements ? interval + 5 : elements,
      transform : transform + 4.27*(100/elements)
    })
    console.log(transform)
  }
 //fonction executé au click du bouton previous - fais defiler les séries
  prevSerie = () => {
    const {transform, elements, interval} = this.state;
    this.setState({
      interval: interval - 5,
      transform : transform - 4.27*(100/elements)
    })
    console.log(transform)
  }


  render() {
    const {transform, interval} = this.state;
    return (
      <div className="App">
        <CreateSeries />
        <Query query={SERIES_QUERY}>
          {({ loading, error, data }) => {
            if (loading) return <div>Fetching</div>
            if (error) return <div>Error</div>

            const { series } = data;

            return (
              <section className="container">
                <div className={`card-slider  active-slide-${series.id}`}>
                  <div className="card-slider-wrapper" style={{
                    'transform': `translateX(-${transform}%)`,
                    'width': `calc(340*${series.length}px`,
                    'transition' : `transform .6s ease`
                  }}>
                    {series.map(serie => (
                      <CardCustom
                        key={serie.id}
                        graphic={serie.banner_url}
                        cardTitle = {serie.title}
                        tagTitle = {serie.tag}
                        //avec switch case on peut dynamiquement afficher le background-color des tags -> case APP : couleur jaune, case ASSET : couleur rouge etc
                        tagColor = {serie.tag}
                      />
                    ))}
                  </div>
                </div>
                <div className="pagination">
                  <div className="previous"
                    onClick={() => this.prevSerie()}
                  >
                    <ArrowBack/>
                  </div>
                  <div>{`${interval >= 5 ? interval : 5}/${series.length }`}</div>
                  <div className="next"
                    onClick={() => this.nextSerie()}
                  >
                    <ArrowForward/>
                  </div>
                </div>
              </section>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default App;
