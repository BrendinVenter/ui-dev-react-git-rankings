import React from 'react';
import Button from './common/Button';

// markup
const Example = () => (
  <>
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ab aliquid
      asperiores enim esse fugit hic in incidunt ipsa, minima, numquam officia
      quasi quo, quos sapiente? Dolorum enim esse
    </p>
    <a href="https://reactjs.org/docs/getting-started.html">Learn More</a>
    <div className="example-div">
      <div className="example-inner-div" />
    </div>
    <div>
      <Button>Primary</Button>
    </div>
    <div>
      <Button solid>Secondary</Button>
    </div>
    <div>
      <form action="">
        <label htmlFor="example">
          Name:
          <input type="text" id="example" />
        </label>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" />
        </label>
        <label htmlFor="Mobile">
          Mobile:
          <input type="tel" id="Mobile" />
        </label>
      </form>
    </div>
  </>
);

export default Example;
