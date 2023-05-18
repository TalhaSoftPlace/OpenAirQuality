import { Table } from 'semantic-ui-react';
import styled from 'styled-components';

export const CustomTable = styled(Table)`
  @media only screen and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
  }
`;
