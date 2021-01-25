import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './style.css';

//setup vars
const firstBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg',
  title: 'The Very Hungry Caterpillar',
  author: 'Eric Carle'
}

const secondBook = {
  img: 'https://images-na.ssl-images-amazon.com/images/I/61zcFAIwgRL._AC_UL200_SR200,200_.jpg',
  title: 'Ambitious Girl',
  author: 'Meena Harris',
}

function Booklist() {
  return (
    <section className='booklist'>
      <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
      <Book img={secondBook.img} title={secondBook.title} author={secondBook.author} />
    </section>
  );
}


const Book = ({ img, title, author }) => {
  //const { img, title, author } = props
  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};


ReactDom.render(<Booklist />, document.getElementById('root')
);