//css modulde
// import styles from './Card.module.css';

// function Card() {
//   return (
//     <div className={styles['card-container']}>
//       <h2>Styled Component</h2>
//       <p>이것은 Styled-components로 만든 컴포넌트</p>
//     </div>
//   );
// }

// export default Card;

import styled from 'styled-components';

const CardContainer = styled.div.attrs({
  className: 'card-container',
})`
  border: 2px solid #393939;
  padding: 24px;
  border-radius: 6px;
  ${props =>
    props.$dark &&
    `
      background-color: black;
      color: white;
      border: none;
    `}
`;

function Card() {
  return (
    <CardContainer $dark>
      <h2>Styled Component</h2>
      <p>이것은 Styled-components로 만든 컴포넌트</p>
    </CardContainer>
  );
}

export default Card;
