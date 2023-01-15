import styled from 'styled-components';

// export const NameText = styled.p`
//   font-size: 25px;
//   color: #9a326a;
//
//   &:hover {
//     background: chartreuse;
//   }
// `
//
// export const EmailText = styled.p`
//   font-size: 22px;
//   color: orange;
//
//   &:hover {
//     background: deeppink;
//   }
// `
//
// export const SpanText = styled.span`
//   background: blueviolet;
//   color: #ffffff;
//
//   ${NameText}:hover & {
//     color: #000;
//   }
// `




export const EmailText = styled.p`
  font-size: 22px;
  color: orange;

  &:hover {
    background: deeppink;
  }
`

export const SpanText = styled.span`
  background: ${({ isRed }) => isRed ? 'red' : 'yellow'};
  color: #4d4a4a;
`

export const NameText = styled.p`
  font-size: 25px;
  color: #9a326a;

  &:hover ${SpanText} {
    color: aqua;


  //&:hover {
  //  background: chartreuse;
  //}

`
