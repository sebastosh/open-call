import React from 'react'
import Art  from '../components/Art'

class ArtWorkContainer extends React.Component {

    render() {

        let artistArtWork = this.props.artWorks.map(art => {
                return <Art key={art.id} art={art} removeArtwork={this.props.removeArtwork} />
              })

        return (
            <div>
           
              <div className="card-container"> {artistArtWork}</div>
            </div>
        )
    }
}

export default ArtWorkContainer
