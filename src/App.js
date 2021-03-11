import "./App.css";

import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

import Img from "./img/bg1.jpg";

function App() {
  const styleBg = "red";

  return (
    <>
      <Header title="This is title" description="This is Description!" />
      <Layout
        urlBg={Img}
        title="This is title"
        description="This is Description!"
      />
      <Layout
        title="This is title"
        description="This is Description!"
        colorBg={styleBg}
      />
      <Layout
        title="This is title"
        description="This is Description!"
        urlBg={Img}
      />
      <Footer />
    </>
  );
}

export default App;
