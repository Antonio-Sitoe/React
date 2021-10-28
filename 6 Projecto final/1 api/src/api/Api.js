import React from 'react';
import PhotoGet from '../endpoints/PhotoGet';
import PhotoPost from '../endpoints/PhotoPost';
import TokenPost from '../endpoints/TokenPost';
import UserPost from '../endpoints/UserPost';

function Api() {
  return (
    <div>
      <UserPost />
      <TokenPost />
      <PhotoPost />
      <PhotoGet />
    </div>
  );
}

export default Api;
