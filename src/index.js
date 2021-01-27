import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './style.css';

//setup vars
const books = [
  {
    id: 1,
    img: 'https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg',
    title: 'The Very Hungry Caterpillar',
    author: 'Eric Carle'
  },

  {
    id: 2,
    img: 'https://images-na.ssl-images-amazon.com/images/I/61zcFAIwgRL._AC_UL200_SR200,200_.jpg',
    title: 'Ambitious Girl',
    author: 'Meena Harris',
  },

  {
    id: 3,
    img: 'https://images-na.ssl-images-amazon.com/images/I/91wRcPETM0L._AC_UL200_SR200,200_.jpg',
    title: 'Change Sings: A Childrens Anthem',
    author: 'Amanda Gorman',
  },
];

const names = ['john', 'peter', 'shaun']
const newNames = names.map((name) => {
  return <h1>{name}</h1>;
});
console.log(newNames);

function Booklist() {
  return (
    <section className='booklist'>
      {books.map((book) => {
        return (
          <Book key={book.id} book={book}>
          </Book>
        );
      })}</section>
  );
}


const Book = (props) => {
  const { img, title, author } = props.book;
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