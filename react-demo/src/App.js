import Navbar from './navbar/navbar';
import Product from './Product/Product';
import Test from './Test/Test';
import Lorem from './Lorem/Lorem';
import Xizmatlar from './Xizmatlar/Xizmatlar';
import Obuna from './Obuna/Obuna';
import Footer from './Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Test />
      <h1 style={{ display: 'flex', justifyContent: "center", marginBottom: "25px", marginTop: "25px" }}>купить iPhone в Ташкенте</h1>
      <h6 style={{marginLeft: "220px"}}>Самое популярное</h6>
      <Product />
      <Product />
      <Product />
      <Lorem/>
      <Test />
      <Lorem/>
      <Product />
      <Product />
      <Xizmatlar/>
      <Obuna/>
      <Footer/>
    </>
  );
}

export default App;
