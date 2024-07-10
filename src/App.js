import { useState } from "react";
import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState(null);

  // Not able to hide paragraph when clicking tab again
  // function handleClickButton(tabId) {
  //   setActiveTab(tabId);
  // }

  // function handleClickButton(tabId) {
  //   setActiveTab((cur) => (cur === tabId ? null : tabId));
  // }

  function handleClickButton(tabId) {
    setActiveTab((cur) => (cur === null ? tabId : null));
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => handleClickButton("tab1")}>Tab1</button>
        <button onClick={() => handleClickButton("tab2")}>Tab2</button>
        <button onClick={() => handleClickButton("tab3")}>Tab3</button>
        <button onClick={() => handleClickButton("tab4")}>Tab4</button>
      </div>
      <div>
        {activeTab === "tab1" && (
          <Paragraph>P1 - Artificial intelligence (AI)</Paragraph>
        )}
        {activeTab === "tab2" && (
          <Paragraph>P2 - In the realm of finance</Paragraph>
        )}
        {activeTab === "tab3" && (
          <Paragraph>P3 - The entertainment industry</Paragraph>
        )}
        {activeTab === "tab4" && (
          <Paragraph>P4 - In the education sector</Paragraph>
        )}
      </div>
    </div>
  );
}

function Paragraph({ children }) {
  return <div className="paragraph">{children}</div>;
}
export default App;
