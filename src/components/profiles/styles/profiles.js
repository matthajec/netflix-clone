import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
`

export const Title = styled.h1`
  width: 100%;
  color: #fff;
  font-size: 48px;
  text-align: center;
  font-weight: 500;
`

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: row;
`

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
  transition: all .2s;
  
  &:hover {
      font-weight: bold;
      color: #e5e5e5;
  }
`

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  cursor: pointer;
  transition: all .2s;
`

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  list-style-type: none;
  text-align: center;
  margin-right: 30px;
  
  &:hover > ${Picture} {
      box-shadow: 0px 0px 10px 3px rgba(255,255,255,1);
  }
  
  &:hover ${Name} {
      font-weight: bold;
      color: white;
  }
  
  &:last-of-type {
      margin-right: 0;
  }
`