import React from 'react';
import User from './User';

export default function Users() {
  return (
    <div className="right">
      <User src="https://jooinn.com/images/men-4.jpg" alt="men" name="Scott" />
      <div className="users__block">
        <User
          src="https://jooinn.com/images/men-4.jpg"
          alt="men"
          name="Scott"
        />
        <User
          src="https://jooinn.com/images/men-4.jpg"
          alt="men"
          name="Scott"
        />
        <User
          src="https://jooinn.com/images/men-4.jpg"
          alt="men"
          name="Scott"
        />
        <User
          src="https://jooinn.com/images/men-4.jpg"
          alt="men"
          name="Scott"
        />
      </div>
    </div>
  );
}
