import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@black-ui/react";
import FormArea from "./components/FormArea";
import OverlayArea from "./components/OverlayArea";
import FeedbackArea from "./components/FeedbackArea";
import DataDisplayArea from "./components/DataDisplayArea";
import DisclosureArea from "./components/DisclosureArea";
import "@black-ui/react/dist/style.css";

function App() {
  return (
    <div>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>Form</Tab>
          <Tab>Overlay</Tab>
          <Tab>Feedback</Tab>
          <Tab>DataDisplay</Tab>
          <Tab>Disclosure</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FormArea />
          </TabPanel>
          <TabPanel>
            <OverlayArea />
          </TabPanel>
          <TabPanel>
            <FeedbackArea />
          </TabPanel>
          <TabPanel>
            <DataDisplayArea />
          </TabPanel>
          <TabPanel>
            <DisclosureArea />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
