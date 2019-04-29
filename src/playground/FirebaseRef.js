import React from 'react'
import * as firebase from 'firebase'

const dbRef = firebase.database().ref().child('test')
const dbSnap = () => dbRef.on('value', snap => {

  return 'response'
})

class FirebaseRef extends React.Component {


  render() {
    return (
      <div>
        <p> {dbSnap()} </p>
      </div>
    )
  }

}
export default FirebaseRef