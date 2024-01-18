/*
 <div id='parent'>
    <div id='child'>
      <h1>I'm h1 Tag! </h1>
    </div>
</div>

*/

//? OLD CORE REACT
//Nesting of React first look
const parent = React.createElement(
  'div',
  { id: 'parent' },
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, "I'm h1 Tag! "),
    React.createElement('h2', {}, "I'm h1 Tag! "),
  ]),
  { id: 'parent' },
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h1', {}, "I'm h1 Tag! "),
    React.createElement('h2', {}, "I'm h1 Tag! "),
  ])
);
console.log(parent); //! This Seems harder than JavaScript Well this is Core React 😎.
//! For cleaning it We have JSX but it imp to tell how doest Core React looks without JSX

//Breaking Syntax (first Program)
const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Hellow World (React Bolte!)'
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

console.log(heading);
