import React, {Component} from 'react'
import  Table  from './Table'
import Table1 from './Table1'
class App extends Component {
  render() {
        const characters = [
            {
                name: 'Parcul Central Simion Barnutiu',
                address: 'Parcul Central, Cluj-Napoca',
                coordinates: 'Stația Parcul Central',
                category: 'Activitati sportive si fizice'
              },

              {
                name: 'Cetatuie',
                address: 'Strada Emil Racoviță 60a, Cluj-Napoca 400124',
                coordinates: 'Langa parcul central',
                category: 'Activitati de recreere',
              },

              {
                name: 'Facultatea de Litere',
                address: 'Strada Horea 31, Cluj-Napoca 400000',
                coordinates: 'Mijlocul strazii Horea',
                category: 'Educatie',
              },

              {
                name: 'Chios Social Lounge',
                address: 'Centru Parc Central "Simion Barnutiu, Cluj-Napoca 400027',
                coordinates: 'Central Park Simion Bărnuțiu', 
                category: 'Social',
              }
            ]

            const cate = [
              {
                name: 'Sport and movement'
              },

              {
                name: 'Food'
              },

              {
                name: 'Entertainment and fun'
              },
              {
                name: 'Education and science'
              }
            ]
    return (
      <div className="container">
         <Table1 data={cate} />
        <Table characterData={characters} />
      </div>
    )
  }
}


export default App

