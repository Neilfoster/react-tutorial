import React from 'react';
import ReactDom from 'react-dom';
import './style.css';

function Booklist() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return <article className='book'>
    <Image></Image>
    <Title></Title>
    <Author></Author>
  </article>;
};

const Image = () => <img src="https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg" alt="" />

const Title = () => <h1>The very Hungry Caterpillar</h1>

const Author = () => <h2>Eric Carle</h2>

ReactDom.render(<Booklist />, document.getElementById('root')
);