// import react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

// import layouts
import RootLayouts from "./layouts/RootLayouts";
import { Bus, Home, Profile, Map } from "./pages";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayouts />}>
        <Route path="/" element={<Home />} />
        <Route path="/ticket" element={<Map />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/bus" element={<Bus />} />
      </Route>,
    ),
  );
  return <RouterProvider router={router} />;
};

export default App;
