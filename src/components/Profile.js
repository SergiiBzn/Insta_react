import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
  return (
    <div className="container profile">
      <User src="https://jooinn.com/images/men-4.jpg" alt="men" name="Scott" />
      <Palette />
    </div>
  );
};

export default Profile;
