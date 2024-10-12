import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Management from "./pages/Management";
import BotPersonalizer from "./pages/BotPersonalizer";
import Utilities from "./pages/Utilities";
import Premium from "./pages/Premium";
import SocialAlerts from "./pages/SocialAlerts";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/management" element={<Management />} />
        <Route path="/bot-personalizer" element={<BotPersonalizer />} />

        <Route path="/utilities" element={<Utilities />} />
        <Route path="/premium" element={<Premium />} />
        <Route path="/social-alerts" element={<SocialAlerts />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Routes>
    </Layout>
  );
};

export default App;
