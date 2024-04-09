import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Index, ErrorPage} from "./pages";
import {Statistic} from "./pages/statistic.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/stat" element={<Statistic />} />
        <Route path="/:error" element={<ErrorPage />} loader={(params) => (params)} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
