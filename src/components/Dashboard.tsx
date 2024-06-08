import React from 'react';
import styled from 'styled-components';
import ActivityChart from './ActivityChart';

const DashboardContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Dashboard: React.FC = () => {
  return (
    <DashboardContainer>
      <h1>Developer Activity Dashboard</h1>
      <ActivityChart />
    </DashboardContainer>
  );
};

export default Dashboard;
