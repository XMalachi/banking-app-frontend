import styled from "styled-components/macro";

export const Container = styled.div`
  
  display: flex;
  width: 100%;

  @media (min-width: 1000px) {
    width: 50vw;
  }
  
`;
export const Entity = styled.div`
  color: #070707;
  border-bottom: 1px solid rgb(177, 212, 224);
  max-width: 690px;
  width: 99%;
  margin-bottom: 10px;
  margin: auto;
  &:first-of-type {
    margin-top: 1.5em;
  }
`;
export const Inner = styled.div`
  padding: 0 0 0 0;
  width: 650px;
  margin: auto;
  flex-direction: column;
  display: flex;
  @media (min-width: 1000px) {
    padding: 0 40px 0 0;
    width: 700px;
  }
`;

// .. midnight blue: rgb(20, 93, 160)
// .. dark blue rgb(12, 45, 72)
// .. plain blue rgb(46, 139, 192)
// .. baby blue rgb(177, 212, 224)
export const Question = styled.div`
  font-size: 20px;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 2px;
  display: flex;
  font-weight: normal;
  padding: 0.75em 1.12em;
  align-items: center;
  @media (min-width: 700px) {
    font-size: 24px;
    
  }
`;
export const Text = styled.p`
  max-height: 1190px;
  
  font-size: 1em;
  color: rgb(177, 212, 224);
  font-weight: 300;
  line-height: 25px;
  
  background: rgb(12, 45, 72);
  transition: max-height 0.23s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.9em 2.1em 0.7em 1.4em;
  user-select: none;
  white-space: pre-wrap;
  @media (min-width: 700px) {
    font-size: 1em;
    line-height: 25px;

  }
`;
export const Header = styled.h2`
  color: rgb(12, 45, 72);
  line-height: 2;
  margin-top: 0 !important;
  font-size: 40px;
  margin-bottom: 0px;
  text-align: left;
  @media (max-width: 600px) {
    font-size: 33px;
  }
  color: #070707;
`;