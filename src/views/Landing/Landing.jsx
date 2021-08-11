import React from 'react'
import styled from 'styled-components';

const LandingPage = () => {
  const Table = styled.div`
    margin: 30px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    color: #267384;
  `;

  const TableHeader = styled.div`
    background: #F6F9FC;
    height: 60px;
    border-bottom: 1px solid #D4DFE4;
    display: flex;
    align-items: center;
    padding: 0px 30px;
  `;

  const TableBody = styled.div`
    height: 60px;
    background: #FFF;
  `;

  return (
    <Table>
      <TableHeader>
        <h4>Companies by Sectors</h4>
      </TableHeader>
      <TableBody />
    </Table>
  )
}

export default LandingPage;