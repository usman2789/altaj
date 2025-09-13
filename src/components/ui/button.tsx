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
    background: #a48134ff;
    font-family: inherit;
    padding: 0.6em 1.1em;
    font-weight: 900;
    font-size: 15px;
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
