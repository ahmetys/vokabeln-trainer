import AppRoutes from "./AppRoutes";
import Header from "./components/Header";
import TabMenu from "./components/TabMenu";
function App() {
  return (
    <>
      <div className="container p-0">
        <Header></Header>
        <div className="tab-content" id="pills-tabContent">
          <AppRoutes></AppRoutes>
        </div>
        <TabMenu></TabMenu>
      </div>
    </>
  );
}

export default App;
