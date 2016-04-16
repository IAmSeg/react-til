import React from 'react';

// This class will bind all instance methods to the instance class
export default class Base extends React.Component {
  _bind(...methods) {
    methods.forEach(method => this[method] = this[method].bind(this));
  }
}
