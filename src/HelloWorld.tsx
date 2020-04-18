import * as React from 'react';
import { HelloWorldProps } from '../index';

export default class HelloWorld extends React.Component<any, any> {
  renders() {
    return (
      <div style={{ color: this.props.color }}>
        Hello world!
      </div>
    );
  }
}