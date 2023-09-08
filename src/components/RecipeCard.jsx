import React from 'react'
import style from "../recipe.module.css";
import {Box, Grid, Image, Text} from "@chakra-ui/react"
import { Spinner } from "@chakra-ui/spinner";
const RecipeCard = ({recipeList}) => {
  return (
    <>
    {recipeList.length ===0?
<Box  display="flex"  justifyContent={"center"} width="100%">
<Spinner

  size='xl'
/>
</Box>
    :
    <Grid templateColumns='repeat(2, 1fr)' gap={6}>
        {recipeList.map((food,index)=>{
            return(
              <>
                <div key={index} className={style.recipe}>
                    
                <Text>
                {food.recipe.label}
    
                </Text> 
                <Image className={style.image} alt="food image" src={food.recipe.image}/>
                    
                    </div>
              </>
            )

        })
       }
        
    </Grid>
}
        </>
   
  )
}

export default RecipeCard