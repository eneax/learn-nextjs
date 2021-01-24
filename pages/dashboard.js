import React from 'react';
import useSWR from 'swr';

import { useAuth } from '@/lib/auth';
import fetcher from '@/utils/fetcher';

import DashboardContainer from '@/components/dashboardContainer';
import SiteTableSkeleton from '@/components/siteTableSkeleton';
import SiteTable from '@/components/siteTable';
import EmptyState from '@/components/emptyState';

const Dashboard = () => {
  const auth = useAuth();
  const { data } = useSWR('/api/sites', fetcher);
  console.log(data);

  if (!data) {
    return (
      <DashboardContainer>
        <SiteTableSkeleton />
      </DashboardContainer>
    );
  }

  return (
    <DashboardContainer>
      {data.sites ? <SiteTable sites={data.sites} /> : <EmptyState />}
    </DashboardContainer>
  );
};

export default Dashboard;
