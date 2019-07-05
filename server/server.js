var express = require('express');
var express_graphql = require('express-graphql');
var { buildSchema } = require('graphql');
const cors = require(`cors`);

// Data
var seriesData = [
  {
    id: 1,
    title: "Duchess Of Rainbows",
    banner_url: "https://via.placeholder.com/600/7BE0AD",
    tag: "APP"
  },
  {
    id: 2,
    title: "Officer Of Fire",
    banner_url: "https://via.placeholder.com/600/AEE5D8",
    tag: "ASSET"
  },
  {
    id: 3,
    title: "Kings Of Twilight",
    banner_url: "https://via.placeholder.com/600/E7E5E5",
    tag: "APP"
  },
  {
    id: 4,
    title: "Defenders Of The South",
    banner_url: "https://via.placeholder.com/600/E5D0E3",
    tag: "ASSET"
  },
  {
    id: 5,
    title: "Fish And Swindlers",
    banner_url: "https://via.placeholder.com/600/FF6666",
    tag: "UNIVERS"
  },
  {
    id: 6,
    title: "Fish And Wolves",
    banner_url: "https://via.placeholder.com/600/CCFF66",
    tag: "APP"
  },
  {
    id: 7,
    title: "Unity Of Tomorrow",
    banner_url: "https://via.placeholder.com/600/5D2E8C",
    tag: "MP3"
  },
  {
    id: 8,
    title: "Staff Of Insanity",
    banner_url: "https://via.placeholder.com/600/2EC4B6",
    tag: "APP"
  },
  {
    id:9,
    title: "Prepare For The Fog",
    banner_url: "https://via.placeholder.com/600/F1E8B8",
    tag:"UNIVERS"
  },
  {
    id:10,
    title: "Enhancing A Storm",
    banner_url: "https://via.placeholder.com/600/706C61",
    tag: "SERIE"
  },
  {
    id:11,
    title: "Snake Of Hell",
    banner_url: "https://via.placeholder.com/600/899E8B",
    tag: "UNIVERS"
  },
  {
    id:12,
    title: "Creator Of Power",
    banner_url: "https://via.placeholder.com/600/99C5B5",
    tag: "MP3"
  },
  {
    id:13,
    title: "Spies Of Freedom",
    banner_url: "https://via.placeholder.com/600/AFECE7",
    tag: "ASSET"
  },
  {
    id:14,
    title: "Gangsters Of Reality",
    banner_url: "https://via.placeholder.com/600/81F499",
    tag: "SERIE"
  },
  {
    id:15,
    title: "Warriors And Hunters",
    banner_url: "https://via.placeholder.com/600/1A1423",
    tag: "APP"
  },
  {
    id:16,
    title: "Girls And Pilots",
    banner_url: "https://via.placeholder.com/600/372549",
    tag: "ASSET"
  },
  {
    id:17,
    title: "Destiny Of The Nation",
    banner_url: "https://via.placeholder.com/600/774C60",
    tag: "SERIE"
  },
  {
    id:18,
    title: "Honor Of The Solstice",
    banner_url: "https://via.placeholder.com/600/B75D69",
    tag: "APP"
  },
  {
    id:19,
    title: "Sounds In The Moon",
    banner_url: "https://via.placeholder.com/600/EACDC2",
    tag: "ASSET"
  },
  {
    id:20,
    title: "Amusing Eternity",
    banner_url: "https://via.placeholder.com/600/7BE0AD",
    tag: "APP"
  }
];

// GraphQL schema
const schema = buildSchema(`
    type Query {
        message: String
        series: [Series]
    },
    type Mutation {
      createSeries(title: String!, banner_url: String!, tag: String!): Series
    }
    type Series {
        id: Int
        title: String
        banner_url: String
        tag: String
    }
`);

// Root resolver
var root = {
    message: () => 'Hello World!',
    series: () => { return seriesData },
    createSeries: ({title, banner_url, tag}) => { 
      console.log(title)
      var newId = seriesData.length + 1;
      var newSerie = { id: newId, title, banner_url, tag }
      seriesData = [...seriesData, newSerie];
      console.log(seriesData);
      return newSerie;
    }
};
// Create an express server and a GraphQL endpoint
var app = express();
app.use(cors());

app.use('/graphql', express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Express GraphQL Server Now Running On localhost:4000/graphql'));