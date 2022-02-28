
import React from 'react';
  
  
export default function Header() {
  return (
    <>
      <div className="container-fluid bg-light text-dark p-5 m-3">
  <div className="container bg-light p-5">
    <h3 className="display-6 fw-bold text-center">Contact Manager</h3>
    <p className="display-6">This is a portfolio project in React to showcase the knowledge of:</p>
    <hr/>
      <ol type="i">
        <li>React Components and JSX</li>
        <li>React Router</li>
        <li>Component and State Management</li>
        <li>Context API for global state Management</li>
        <li>Asynchronous calls using Async/Await</li>
      </ol>
  </div>
</div>
    </>
  );
}