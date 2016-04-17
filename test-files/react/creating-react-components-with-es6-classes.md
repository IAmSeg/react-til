### Creating React Components with ES6 Classes

```javascript
// import the react library
import React from 'react';

// Declare your class, extending the base React Component
class App extends React.Component {
  // make the constructor, call the super and set initial state
  constructor() {
    super();
    this.state = { text: 'Hello world!' };
  }

  // you need a render function!
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}
```
