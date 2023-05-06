import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  padding: 20px;
  width: 00vh;
  margin: 0 auto;
  height: 100vh; /* Set the height to occupy the full viewport height */
  overflow-y: auto; /* Add vertical scrolling when content exceeds viewport */
`;

export default function Container(props) {

  return (
    <div>
      <MainContainer>{props.children}</MainContainer>
    </div>
  );
}
