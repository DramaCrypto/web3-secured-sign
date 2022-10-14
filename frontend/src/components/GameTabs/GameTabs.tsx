import React from 'react'
import { Box, Tab, Tabs } from '@mui/material'
import { SectionContainer } from '../../styles/components/gameTabs';
import TrendingPanel from './TrendingPanel';
import TopStreamPanel from './TopStreamPanel';
import OnlinePanel from './OnlinePanel';
import HighlightPanel from './HighlightPanel';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}
  
const GameTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <SectionContainer>
      <Box sx={{
        borderBottom: '1px solid var(--light-white-color)',
      }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label='Trending' />
          <Tab label='Top Streams' />
          <Tab label='Currently Online' />
          <Tab label='Global Highlights' />
        </Tabs>
      </Box>
      
      <TabPanel value={value} index={0}>
        <TrendingPanel />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TopStreamPanel />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <OnlinePanel />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <HighlightPanel />
      </TabPanel>
    </SectionContainer>
  )
}

export default GameTabs
