import React from "react";

import StatusPie from "./StatusPieChart";
import PriorityPendingPieChart from "./PriorityPendingPieChart";

const AnalyticsCharts = ({ userTasks = [] }) => {

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

      <StatusPie userTasks={userTasks} />

      <PriorityPendingPieChart userTasks={userTasks} />

    </div>
  );
};

export default AnalyticsCharts;