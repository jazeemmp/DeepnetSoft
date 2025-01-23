import { Toaster } from "sonner";
import HomePage from "./page/HomePage";

const App = () => {
  return (
    <>
      <HomePage />
      <Toaster richColors position="top-right" />
    </>
  );
};

export default App;
