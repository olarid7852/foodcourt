import "./meal.css";


export default function Meal(props) {
  const meal = props.meal;
  return (
    <div className="meal">
      <div className="meal-header">{meal.brand.name}</div>
      <div className="meal-body">
        <div className="meal-note">
        {meal.order_note && <div><span className="bold">Note:</span> {meal.order_note}</div>}
        </div>
        <div className="meal-details">
          <div className="meal-quantity">
            <div className="meal-checkbox"></div> {meal.quantity} x
          </div>
          <div>
            <div className="meal-name">{meal.name}</div>
            <div>
              {meal.addons.map((addon, index) => (
                <div className="addon" key={index}>
                  <div className="meal-checkbox"></div>
                  {addon.meal_data.name}
                  <span>x {addon.quantity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}