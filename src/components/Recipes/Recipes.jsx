import PropTypes from 'prop-types';
import { IoMdTimer } from "react-icons/io";
import { FaFire } from "react-icons/fa";
// import Ingredient from '../Ingredient/Ingredient';

const Recipes = ({recipe}) => {
  // console.log(typeof(recipe))
  return (
    <div>
      <div className="card bg-base-100 shadow-xl h-[630px]">
        <figure className='p-4'><img src={recipe.recipe_image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{recipe.recipe_name}</h2>
          <p className='text-gray-400'>{recipe.short_description}</p>
          {/* ingredients */}
          <div>
            <p>Ingredients: {recipe.ingredients.length}</p>
            {
              recipe.ingredients.map((ingredient, index) => (
                <div key={index}>
                  <p>{index+1}. {ingredient}</p>
                </div>
              ))
            }
          </div>
          <div className='flex justify-between'>
            <p className='flex items-center'><IoMdTimer />{recipe.preparing_time}</p>
            <p className='flex items-center'><FaFire />{recipe.calories}</p>
          </div>
          <div className="card-actions">
            <button className="btn btn-primary bg-green-500 border-none text-white">Want to Cook</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;

Recipes.propTypes = {
  recipe: PropTypes.object,
}