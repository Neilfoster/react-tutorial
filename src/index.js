import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

function Booklist() {
  return (
    <section className='booklist'>
      <Book />
    </section>
  );
}

const Book = () => {
  const title = 'The Very Hungry Caterpillar'
  return <article className='book'>
    <img src="https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg" alt="" />
    <h1>{title}</h1>
    <h4>Eric Carle</h4>
  </article>;
};


ReactDom.render(<Booklist />, document.getElementById('root')
);