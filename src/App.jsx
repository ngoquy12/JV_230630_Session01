import "./App.css";
import Index from "./components/manager-product";
import Banner from "./components/manager-product/Banner";
import Footer from "./components/manager-product/Footer";
import Header from "./components/manager-product/Header";
import ListProduct from "./components/manager-product/ListProduct";
import Navbar from "./components/manager-product/Navbar";

function App() {
  // Đây là khu vực để viết code javascript
  return (
    <>
      {/* <header>
        <h1 style={{ fontSize: 20 }} className="heading">
          Đây là thẻ header
        </h1>
        <h2>Năm nay tôi {age > 18 ? "đủ" : "chưa đủ"} tuổi</h2>
      </header>*/}
      {/* Bài 1 */}
      <Index />
      {/* Bài 2 */}
    </>
  );
}

export default App;
