import React from 'react'
import { Link } from 'react-router-dom';

const NotFoundPage = (props) => (
    <div>
      <h1>404!</h1>
      <Link to='/'> Go home</Link>
    </div>
  );

export default NotFoundPage;