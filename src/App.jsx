import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import { useState, useEffect } from 'react'
import Recipes from './components/Recipes/Recipes';

function App() {
  const [recipes, setRecipes] = useState([]);


  useEffect(() => {
    fetch("./restaurant.json")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);

  console.log(recipes);

  return (
    <>
      <div className='lexen p-3 lg:p-5'>
        <Navbar></Navbar>
        <Banner></Banner>
        {/* recipes and services section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7'>
          {/* recipes */}
          <div className='col-span-1 md:col-span-1 lg:col-span-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7'>
              {recipes.map((recipe) => (
                  <Recipes
                  key={recipe.recipe_id} 
                  recipe={recipe}
                  ></Recipes>
                ))}
            </div>
            
          </div>
          {/* services */}
          <div className='col-span-1 md:col-span-1 lg:col-span-3'>

          </div>
        </div>
      </div>
    </>
  )
}

export default App
