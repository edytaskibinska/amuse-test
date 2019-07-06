import React from 'react';

const SeriesContainer = (props) => {

  return (
    <section className="card-slider-wrapper">
      {props.children}
      {/* ici on peut refactoriser le composant caroousel */}
    </section>
  )
}

export default SeriesContainer;


