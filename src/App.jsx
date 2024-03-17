import './App.css'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import { useState, useEffect } from 'react'
import Recipes from './components/Recipes/Recipes';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [recipes, setRecipes] = useState([]);

  const [cart, setCart] = useState([]);

  const [cookingCart, setCookingCart] = useState([]);

  const handleCart = (srecipes) => {
    const isExists = cart.find((psrecipes) => psrecipes.recipe_id == srecipes.recipe_id);
    if (!isExists) {
      setCart([...cart, srecipes]);
      // toast.success("Recipe Added");
    } else {
      toast.warn("Recipe Already Added");
    }
  };


  useEffect(() => {
    fetch("./restaurant.json")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
      });
  }, []);


  const handleAddRemove = (wantedfood, recipe_id) => {
    const leftRecipe = cart.filter((cookingRecipe) => cookingRecipe.recipe_id != recipe_id);
    setCart(leftRecipe);

    const cookingExists = cookingCart.find((cookingrecipes) => cookingrecipes.recipe_id == recipe_id);
    if (!cookingExists) {
      setCookingCart([...cookingCart, wantedfood]);
    }else{
      setCookingCart([...cookingCart, wantedfood]);
    }
    
  };

  return (
    <>
      <div className='lexen p-3 lg:p-5'>
        <Navbar></Navbar>
        <Banner></Banner>
        {/* recipes and services section */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-7 gap-8'>
          {/* recipes */}
          <div className='col-span-1 md:col-span-1 lg:col-span-4'>
            <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7'>
              {recipes.map((recipe) => (
                  <Recipes
                  handleCart={handleCart}
                  key={recipe.recipe_id} 
                  recipe={recipe}
                  ></Recipes>
                ))}
            </div>
            
          </div>
          {/* services */}
          <div className='col-span-1 md:col-span-1 lg:col-span-3 border-2 rounded-xl'>
              {/* pending services */}
              <div>
                <p className='text-2xl text-center font-bold p-3'>Want to cook: {cart.length}</p>
                <table className='text-gray-600 w-full'>
                  <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                  </thead>
                  {cart.map((wantedfood, index) => (
                  <tbody key={index}>
                    <tr className=' bg-gray-200 text-center'>
                      <th className=' p-4'>{index+1}</th>
                      <td>{wantedfood.recipe_name.slice(0,25)}</td>
                      <td>{wantedfood.preparing_time}</td>
                      <td>{wantedfood.calories}</td>
                      <td><button onClick={() => handleAddRemove(wantedfood, wantedfood.recipe_id)} className='btn btn-primary m-3 bg-green-500 border-none'>Preparing</button></td>
                    </tr>  
                  </tbody> 
                  ))} 
                </table>
                <ToastContainer />
              </div>
              <div className='divider px-4'></div>
              {/* preparing services */}
              <div>
                <p className='text-2xl text-center font-bold p-3'>Currently cooking: {cookingCart.length}</p>
                <table className='text-gray-600 w-full'>
                  <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                  </thead>
                  {cookingCart.map((wantedfood, index) => (
                  <tbody key={index}>
                    <tr className=' bg-gray-200 text-center'>
                      <th className=' p-4'>{index+1}</th>
                      <td>{wantedfood.recipe_name.slice(0,25)}</td>
                      <td>{wantedfood.preparing_time}</td>
                      <td>{wantedfood.calories}</td>
                    </tr>  
                  </tbody> 
                  ))} 
                </table>
                <ToastContainer />
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
