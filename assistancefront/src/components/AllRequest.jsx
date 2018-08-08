import React from 'react';
const AllRequest = ({request}) =>
  <tr className="table table-bordered">
      <td>{request.id}</td>
      <td>{request.title}</td>
      <td>{request.description}</td>
      <td><a href="/">show</a>
       <a href="/">Volunteer</a>
       </td>
      </tr>

export default AllRequest;
