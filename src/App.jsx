import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
    const user = true;
    return (
        <Routes>
            <Route path="/">
                <Route index element={<Home/>}/>
                <Route path="login">
                    <Route index element={user ? <Navigate to="/" replace={true} /> : <Login />}/>
                </Route>
                <Route path="register">
                    <Route index element={user ? <Navigate to="/" replace={true} /> : <Register />}/>
                </Route>
                <Route path="products">
                    <Route index element={<ProductList/>}/>
                    <Route path=":category" element={<ProductList/>}/>
                </Route>
                <Route path="product">
                    <Route path=":id" element={<Product/>}/>
                </Route>
                <Route path="/cart">
                    <Route index element={<Cart/>}/>
                </Route>
            </Route>
        </Routes>
    );
};
  
export default App;