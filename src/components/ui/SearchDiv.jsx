import { COLORS } from '@styles';
import styled from 'styled-components';

const Search = styled.div`
position: absolute;
border: 1px solid ${COLORS.blue};
border-top: none;
border-radius: 10px;
width: 100%;
background-color: white;
padding: 0.5rem;
padding-top: 0;
z-index: 1000;
.search{
  margin: 0.5rem;
  button{
    width: 100%;
    border: none;
    text-align: left;
    background-color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    &:hover{
      color :${COLORS.blue};
      font-weight: 700;
      font-size: 15px;
  }
  }
}
.more{
  width: 100%;
  text-align: center;
  button{
    border: none;
    background-color: white;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    &:hover{
      color :${COLORS.blue};
      font-weight: 700;
      font-size: 15px;
  }
  }
}
`;

// eslint-disable-next-line react/prop-types
const SearchDiv = ({ children, btnMore, btnElement }) => {
  const result = (children);
  return (
    <Search>
      {result.map((element) => (
        <div key={element.id + element.name} className='search'>
          <button onClick={() => btnElement(element)}>
            {element.lastname + ' ' + element.name}
          </button>
        </div>
      ))}
      <div className='more'>
        <button onClick={() => btnMore()}>
          MORE
        </button>
      </div>
    </Search>
  );
};

export default SearchDiv;
