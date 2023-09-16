import styled from 'styled-components';

export const SBox = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f6a7ab;

  @media (max-width: 768px) {
    /* Apply styles for tablet devices (up to 768px width) */
    flex-direction: column;
  }

  @media (max-width: 480px) {
    /* Apply styles for mobile devices (up to 480px width) */
    background-color: #ff5733; /* Change background color for mobile */
  }
`;

export const SBoxContainer = styled.div`
  display: flex;
  width: 70vw; /* Set the width to 70% of the viewport width */
  max-width: 550px; /* Set a maximum width */
  height: 600px; /* Allow it to expand based on content */
  background-color: #fff;
  border: 1px solid #ccc;

  @media (max-width: 768px) {
    /* Adjust styles for tablet devices (up to 768px width) */
    width: 90vw; /* Adjust the width based on viewport units */
  }

  @media (max-width: 480px) {
    /* Adjust styles for mobile devices (up to 480px width) */
    width: 95vw; /* Adjust the width based on viewport units */
  }
`;
