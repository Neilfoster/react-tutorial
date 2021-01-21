import React from 'react';
import ReactDom from 'react-dom';
// CSS
import './style.css';

//setup vars
const title = 'The Very Hungry Caterpillar';
const author = 'Eric Carle';
const img = "https://images-na.ssl-images-amazon.com/images/I/71KilybDOoL._AC_UL200_SR200,200_.jpg";

function Booklist() {
  return (
    <section className='booklist'>
      <Book job="developer" />
      <Book title='random title' number={22} />
      <Book />
      <Book />
    </section>
  );
}


const Book = (props) => {
  console.log(props)
  return <article className='book'>
    <img src={img} alt='' />
    <h1>{title}</h1>
    <h4>{author}</h4>
    <p>{props.job}</p>
    <p>{props.title}</p>
    <p>{props.number}</p>
  </article>;
};


ReactDom.render(<Booklist />, document.getElementById('root')
);