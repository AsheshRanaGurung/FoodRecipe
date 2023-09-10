import axios from "axios";
import { useEffect, useState } from "react";
import RecipeCard from "./components/RecipeCard";

const App = () => {
    const [recipe, setRecipe] = useState("chicken")
    const [recipeList, setRecipeList] = useState([])
    const baseURL = "https://api.edamam.com";

    // const APP_ID = import.meta.env.VITE_APP_ID;
    // const APP_KEY = import.meta.env.VITE_APP_KEY;

    const APP_ID = "e119e0c8";
    const APP_KEY = "f5bbc911201ddaa8b732d93b5c886884";

    useEffect(() => {

        axios.get(`${baseURL}/search?q=${recipe}&app_id=${APP_ID}&app_key=${APP_KEY}`).then((response) => {
            setRecipeList(response.data.hits)
        }).catch(() => { })
    }, [])

    return (
        <RecipeCard recipeList={recipeList} />
    );
};

export default App;
