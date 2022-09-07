import Meal from '../meal/meal';
import './order.css';


export default function Order(props) {
  const order = props.order
  const meals = order.calculated_order.meals.reduce((meals, currMeal) => {
    currMeal.meals.forEach((meal) => { meals.push(meal) });
    return meals;
  }, [])
  const noOfBrands = meals.reduce((brandSet, meal) => {
    brandSet.add(meal.brand.id);
    return brandSet;
  }, new Set()).size;
  const noOfMeals = meals.length;
  return (
    <div className='order'>
      <div>
        <div className="order-header">
          <div>
            <div>{order.order_code.toUpperCase()}</div>
            {order.rider && <div>{order.rider.first_name} {order.rider.last_name}</div>}
            {!order.rider && <div>AAAAaaa</div>}
          </div>
          <div>{noOfBrands} brands, {noOfMeals} items</div>
          <div>In progress</div>
        </div>
        <div className="order-body">
          {meals.map((meal, index) => (
            <Meal key={index} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  )
}