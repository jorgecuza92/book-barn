import { Component } from "react";


class Content extends Component {
  render() {
   

    
    const books = this.props.books 
    console.log(books)
    const bookInfo = books.map((book) => {
      
      return <li className='content'>
               {book.title} <br></br>
                 <emphasized>{book.language}</emphasized>
                 <img src={`https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/${book.imageLink}`} className='image'></img>
             </li>
             
    })

    return (
      <div className='container'>
        {bookInfo}
      </div>
    )
  }
}

export default Content 