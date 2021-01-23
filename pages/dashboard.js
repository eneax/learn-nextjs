import React from 'react';

import { useAuth } from '@/lib/auth';

import DashboardContainer from '@/components/dashboardContainer';
import SiteTableSkeleton from '@/components/siteTableSkeleton';
import EmptyState from '@/components/emptyState';

const Dashboard = () => {
  const auth = useAuth();

  if (!auth.user) {
    return (
      <DashboardContainer>
        <SiteTableSkeleton />
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      <EmptyState />
    </DashboardContainer>
  );
};

export default Dashboard;
