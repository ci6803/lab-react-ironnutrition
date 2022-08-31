import './App.css';
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import FoodBox from './components/FoodBox';
import AddFood from './components/AddFood';
import foods from './foods.json';
import Search from './components/Search';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [food, setFood] = useState(foods);
  const [displayFood, setDisplayFood] = useState(foods);

  const addNewFood = (newfood) => {
    const updatedFoods = [newfood, ...food];
    setFood(updatedFoods);
    setDisplayFood(updatedFoods);
  };

  const serachResults = (search) => {
    let filterFoods = food.filter((food) => {
      return food.name.toLowerCase().includes(search.toLowerCase());
    });
    setDisplayFood(filterFoods);
  };

  const deleteFood = (foodName) => {
    const filteredFood = food.filter((food) => food.name !== foodName);
    console.log('name', foodName);
    console.log(filteredFood);
    setFood(filteredFood);
    setDisplayFood(filteredFood);
  };

  return (
    <div className="App">
      <AddFood addFood={addNewFood} />

      <Button>Hide Form / Add New Food</Button>

      {/* Display Search component here */}
      <Search serachResults={serachResults} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
        {/* <FoodBox food={displayFood} /> */}
        {displayFood.map((food) => {
          return (
            <div key={uuidv4()}>
              <FoodBox food={food} deleteFood={deleteFood} />
            </div>
          );
        })}
      </Row>
    </div>
  );
}

export default App;
