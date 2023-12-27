import Toggle from './Toggle';
import DashboardWrapper from './DashboardWrapper';
import Navigation from './Navigation';

const DashboardSidebar = () => {
  return (
    <DashboardWrapper>
      <Toggle />
      <Navigation />
    </DashboardWrapper>
  );
};
export default DashboardSidebar;
