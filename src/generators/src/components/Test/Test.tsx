import React from 'react';
import { TestProps } from "./types"
import "./styles.scss"

const Test = ({...props}:TestProps) => {
  return (
    <div>
      Test
    </div>
  );
};

export default Test;