import React from 'react'
import ReactDOM from 'react-dom'
import './styles/styles.scss'
import MusicAppRouter from './routers/MusicAppRouter'
import './firebase/firebase'
import FirebaseRef from './playground/FirebaseRef'

ReactDOM.render(<MusicAppRouter />, document.getElementById('root'))
