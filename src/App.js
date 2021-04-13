import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Header, Footer } from './Menu'
import Content from './Content'

class App extends Component {


 constructor() {
   super()

   this.state = {
     books: [],
     images: []
   }
 } 

 componentDidMount() {
   console.log('componentDidMount')
   fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
   .then(response => response.json())
   .then(results => {
     console.log(results)
    //  let imageResults = results.map((image) => {
    //    return image.imageLink
    //  })
     this.setState({
       books: results
      //  images: imageResult

     })
  
     return results 
    })
    //  let imageResults = results.map((image) => {
    //    return image.imageLink
      .then(results => {

          let imageResults = results.map((image) => {
          return image.imageLink

          
          })
          console.log('this is image results',imageResults)
          this.setState({
            images: imageResults
          })
     })
 
    //  console.log(imageResults)


 }

//  componentDidMount() {
//    let imageURL = `https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${imageLink}`
//    console.log(imageURL)
//    fetch(imageURL)
//    .then(response => response.json())
//    .then(results => {
//      this.setState({
//        images: results
//      })
//    })
//  }



  render() {
    return(
      <div>
        <Header />
        <Content books = {this.state.books} images = {this.state.images} className='info'/>
        <Footer />
      </div>
    )
  }
}

export default App;
