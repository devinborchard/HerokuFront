
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



function Recipes(){
    const navigate  = useNavigate();
    const [filters, setFilters] = useState([])
    const [selectedFilters, setSelectedFilters] = useState([])

    useEffect(()=>{
        getFilterTags()
    }, [])

    const getFilterTags = async () => {
        console.log('GETTING NOW')
        const filterTags = await getFilterTagsRequest()
        console.log('TAGS: ', filterTags)
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

        console.log('FILTERS ACTIVE: ', selectedFilters)
    }

    const getRecipes = async (e) => {
        const recipes = await getRecipesRequest(selectedFilters)
        console.log('RECIPES RETURNED: ', recipes)
    }

    let filtersJsx = filters.map(filter => {
        return (
            <tr>
            <td><input className='filterCheckBox' type="checkbox" id={filter} onChange={handleFilterChange}></input></td>
            <td><p>{filter}</p></td>
            </tr>
        )
    })

    let recipesList = (
        <></>
    )

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
                <h1 style={{color:'white'}}>RECIPE DATA</h1>
                {recipesList}
            </div>
        </div>
        
    )

    
}

export default Recipes