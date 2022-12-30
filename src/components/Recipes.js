
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate  } from 'react-router-dom';
import {
    Link
  } from "react-router-dom";
import { colors } from '../assets/styles';
import { 
    getFilterTagsRequest,
    getRecipesRequest 
} from '../utils/requests';
import RecipeHeader from './RecipeHeader';
import { setUser } from '../reducers/slices';



function Recipes(){
    const navigate  = useNavigate();
    const dispatch = useDispatch();
    

    const user = useSelector((state) => state.user.value)

    const [filters, setFilters] = useState([])
    const [selectedFilters, setSelectedFilters] = useState([])
    const [selectedRecipes, setSelectedRecipes] = useState([])
    const [fullQueryCount, setFullQueryCount] = useState(0)
    const [selectedRecipesRange, setSelectedRecipesRage] = useState([]) //array with start index, then the limit of items


    useEffect(()=>{
        try{
        getFilterTags()
        const storeduser = window.localStorage.getItem('user')
        if(storeduser){
            const loggedInUser = JSON.parse(window.localStorage.getItem('user'));
            if(loggedInUser){
                dispatch(setUser(loggedInUser))
            }
        }
        }catch(e){console.log(e)}
        
    }, [])

    const getFilterTags = async () => {
        //console.log('GETTING NOW')
        const filterTags = await getFilterTagsRequest()
        //console.log('TAGS: ', filterTags)
        setFilters(filterTags)
    }

    const handleFilterChange = (e) => {
        const filterToggled = e.target.id
        if(!selectedFilters.includes(filterToggled)){
            let newSelectedFilters = selectedFilters
            newSelectedFilters.push(filterToggled)
            setSelectedFilters(newSelectedFilters)
        }else{
            let newSelectedFilters = selectedFilters
            const index = newSelectedFilters.indexOf(filterToggled);
            newSelectedFilters.splice(index, 1); // 2nd parameter means remove one item only
            setSelectedFilters(newSelectedFilters)
        }

        //console.log('FILTERS ACTIVE: ', selectedFilters)
    }

    const getMoreRecipes = async (e) => {
        let newSelectedRecipeRange = selectedRecipesRange
        if(newSelectedRecipeRange == []){ newSelectedRecipeRange = [0,100] }else{
            newSelectedRecipeRange[1] = newSelectedRecipeRange[1] + 100
        }
        const recipes = await getRecipesRequest(selectedFilters, newSelectedRecipeRange)

        setSelectedRecipes(recipes.data.formattedRows)
        setSelectedRecipesRage(newSelectedRecipeRange)
    }

    const getRecipes = async (e) => {
        let newSelectedRecipeRange = [0,100]
       
        const recipes = await getRecipesRequest(selectedFilters, newSelectedRecipeRange)
        setSelectedRecipes(recipes.data.formattedRows)
        //console.log('COUNT GOT: ', recipes.data)
        setFullQueryCount(parseInt(recipes.data.queryFullCount))
        setSelectedRecipesRage(newSelectedRecipeRange)
    }

    let filtersJsx = filters.map(filter => {
        return (
            <tr>
            <td><input className='filterCheckBox' type="checkbox" id={filter} onChange={handleFilterChange}></input></td>
            <td><p>{filter}</p></td>
            </tr>
        )
    })


    let recipesList = selectedRecipes.map((recipe,i) =>{

        let steps = recipe.steps.map((step,i)=> {
            return (
                <p>{i+1}. {step}</p>
            )
        })
        return(
            <div className='recipeCard' style={{backgroundColor: colors.light}}>
                <h3>{recipe.name}</h3>
                <p>time to make: {recipe.minutes} minutes</p>
                <p>{recipe.description}</p>
                <h4>Ingredients</h4>
                <p>{recipe.ingredients.join(', ')}</p>
                <h4>Steps</h4>
                {steps}
            </div>
        )
    })

    let getMoreRecipesButton
    //console.log('FULL COUNT: ', fullQueryCount)
    if(fullQueryCount){
        getMoreRecipesButton = (
            <button className='recipeButton' onClick={getMoreRecipes}>Get More</button>
        )
    }

    //console.log('USER: ', user)

    return(
        <div className = 'general'>
            
            <RecipeHeader></RecipeHeader>
            <div id="sideNav" className="sidenav">
                <button className='recipeButton' onClick={getRecipes}>Apply</button>
                <h3>Filters</h3>
                <table className='filterTable'>
                    <tbody>{filtersJsx}</tbody>
                </table>
                
            </div>
            <div className='recipeViewer'>
                <h1 style={{color:'white'}}>RECIPES</h1>
                {recipesList}
                {getMoreRecipesButton}
            </div>
        </div>
        
    )

    
}

export default Recipes