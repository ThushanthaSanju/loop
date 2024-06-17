import { Layout } from "antd";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import AppContent from "./pages/AppContent";

const App = () => {
  return (
    <Layout style={{ background: "#99d68d" }}>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </Layout>
  );
};

export default App;
