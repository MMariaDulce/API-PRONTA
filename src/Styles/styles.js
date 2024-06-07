import styled from 'styled-components';

 export const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;

export const WeatherInfo = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const City = styled.h2`
  margin-bottom: 10px;
`;

export const Temperature = styled.p`
  font-size: 18px;
  margin-bottom: 0;
`;
