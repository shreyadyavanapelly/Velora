import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Orders.css";
const Orders = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    axios
    .get("http://localhost:5000/allOrders", { withCredentials: true })
    .then((response) => {
      console.log("Fetched orders:", response.data);
      setOrders(response.data);
    })
    .catch((error) => {
      console.error("Error fetching orders:", error);
    });
  }, []);
  if (orders.length === 0) {
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <Link to={"/"} className="btn">
          Get started
        </Link>
      </div>
    </div>
  );
}else{
  return (
    <div className="order-table">
      
        <table className="table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Mode</th>
              </tr>
          </thead>
          <tbody>
            {orders.map((order,index) => (
              <tr key={order._id}>
                <td>{order.name}</td>
                <td>{order.qty}</td>
                <td>{order.price}</td>
                <td>{order.mode}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  );
}
};

export default Orders;
