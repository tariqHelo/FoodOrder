import { useEffect , useState } from 'react';
import classes from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

// const DUMMY_MEALS = [
//   {
//     id: 'm1',
//     name: 'Sushi',
//     description: 'Finest fish and veggies',
//     price: 22.99,
//   },
//   {
//     id: 'm2',
//     name: 'Schnitzel',
//     description: 'A german specialty!',
//     price: 16.5,
//   },
//   {
//     id: 'm3',
//     name: 'Barbecue Burger',
//     description: 'American, raw, meaty',
//     price: 12.99,
//   },
//   {
//     id: 'm4',
//     name: 'Green Bowl',
//     description: 'Healthy...and green...',
//     price: 18.99,
//   },
// ];

const AvailableMeals = () => {
   const [meals, setmeals] = useState([]);
   const [isLeading, setIsLeading] = useState(true);
   const [httpError, sethttpError] = useState();
   useEffect(() => {
     const fetchMeals = async () => {
       const response = await fetch('https://foodapp-95955-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json')

       if(!response.ok){
         throw new Error("Something went Error !");

       }

       const responsedData = await response.json();
       const loadedMeals = [];
       for (const key in responsedData) {
         loadedMeals.push({
           id:key,
           name:responsedData[key].name,
           description:responsedData[key].description,
           price:responsedData[key].price,
         });
       }
       setmeals(loadedMeals);
       setIsLeading(false)
     };

    
    fetchMeals().catch((error) => {
      setIsLeading(false);
      sethttpError(error.message)
    });

   }, [])

  
  if (isLeading){
    return <section className={classes.MealsIsLoading}>
      Loading.....
    </section>
  } 

  if(httpError){
    return <section className={classes.MealsError}>
      {httpError}
    </section>
  }


  const mealslist = meals.map((meal) => 
    <MealItem 
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price} 
    />
    )

  return <section className={classes.meals}>
    <Card>
      <ui>{mealslist}</ui>
    </Card>
  </section>

};

export default AvailableMeals