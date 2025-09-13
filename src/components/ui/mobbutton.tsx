import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
const Button = () => {
  return (
    <StyledWrapper>
      <Link href="/tablebooking">
        <button>Book A Table</button>
      </Link>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    background: #D29E41;
    font-family: Monospace;
    padding: 0.3em 1.4em;
    font-weight: 800;
    font-size: 10px;
    
    border: 3px solid black;
    border-radius: 0.4em;
    box-shadow: 0.1em 0.1em;
    cursor: pointer;
  }

  button:hover {
    transform: translate(-0.05em, -0.05em);
    box-shadow: 0.15em 0.15em;
  }

  button:active {
    transform: translate(0.05em, 0.05em);
    box-shadow: 0.05em 0.05em;
  }`;

export default Button;
