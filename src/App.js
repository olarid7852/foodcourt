import './App.css';
import Order from './components/order/order';
import useFetchOrders from './hooks/UseFetchOrders';

function App() {
  const { data, loaded } = useFetchOrders("cbafcf5e-da29-4541-9274-193628fb6454");
  let orders = [];
  Object.values(data).forEach(page => {
    orders = [...orders, ...page]
  });

  return (
    <div className="App">
      <main>
        {!loaded && (<div>loading.........</div>)}
        {loaded && orders.map((order) => (
          <Order key={order.id} order={order} />
        ))}
      </main>
    </div>
  );
}

export default App;
