import React, { Component } from 'react';
import User from './User';

export default class Post extends Component {
  render() {
    return (
      <div className="post">
        <User
          src="https://jooinn.com/images/men-4.jpg"
          alt="men"
          name="Scott"
          min
        />
        <img src={this.props.src} alt={this.props.alt}></img>
        <div className="post__name">some account</div>
        <div className="post__descr">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias soluta
          consectetur nihil architecto officiis non dolorum perspiciatis
          expedita recusandae quisquam ipsum id neque dicta doloribus, corporis
          iure quae voluptatum nobis!
        </div>
      </div>
    );
  }
}
