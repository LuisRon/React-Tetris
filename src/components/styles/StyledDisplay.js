import styled from 'styled-components';

export const StyledDisplay = styled.div`
box-sizing: border-box;
display: flex;
align-items: center;
margin:0 0 20px 0;
padding: 20px;
border:2px solid #333;
min-height: 50px;
width: 100%;
border-radius: 10px;
color: ${props => (props.gameOver ? 'red' : '#999')};
background-color:rgba(0,0,0,0.7);
font-family: 'Baloo Bhaina', Arial,Helvetica,sans-serif;
font-size: 1.2rem;
`;
