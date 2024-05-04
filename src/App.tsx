import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@black-ui/react";
import FormArea from "./components/FormArea";

function App() {
  return (
    <div>
      <Tabs defaultIndex={0}>
        <TabList>
          <Tab>Form</Tab>
          <Tab>Overlay</Tab>
          <Tab>Data Display</Tab>
          <Tab>Disclosure</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <FormArea />
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
