import React from 'react';
import { Card, CardContent, CardActions, Button } from '@material-ui/core'
import Rating from 'material-ui-rating'

class ArtistCard extends React.Component {
  constructor({ artist, deleteArtist }) {
    super()

    this.state = {
      rating: undefined
    }

    this.handleRating = (rating) => {
      this.setState({ rating: rating })
     
      const setRatings =  JSON.stringify(this.state.rating)
      localStorage.setItem('ratings', setRatings) 
      console.log(this.state.rating)
    }

    this.getRatings = () => {
      const myRatings = localStorage.getItem('ratings')
      this.setState(() => ({ rating: JSON.parse(myRatings) }))
    }
    this.componentDidMount = () => {
          this.getRatings()
    }
    this.render = () => {
        
      return (
      
        <Card className="artist-card">  
       {//this.getRatings()
       }
          <div className="image-container">
            <img src={artist.cardImage} alt={artist.name} />
          </div>
          <CardContent>
            <h3>{artist.name}</h3>
            <p>{artist.listeners} listeners.</p>
            <p>
            </p>
          </CardContent>
          <Rating
            value={this.state.rating}
            max={5}
            onChange={(e) => this.handleRating(e)}
          />
          <CardActions>
            <Button size="small" color="primary">
              Share
      </Button>
            <Button size="small" color="secondary" onClick={() => deleteArtist(artist)}>
              Delete
      </Button>
          </CardActions>
        </Card>
      )
    }
  }
}

// No duplicates allowed
// Rating
// Format listeners number

export default ArtistCard 