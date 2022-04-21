import { BrowserRouter as BrowserRoute, Routes, Route } from "react-router-dom";

import Index from "../pages";

export default function Router() {
  return (
    <BrowserRoute>
      <Routes>
        {/* index page */}
        <Route path="/" element={<Index />} />
      </Routes>
    </BrowserRoute>
  );
}
