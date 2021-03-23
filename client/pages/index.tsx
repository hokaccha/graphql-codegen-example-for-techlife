import { FC } from "react";
import { useRecipe } from "../lib/useRecipe";

const TopPage: FC = () => {
  const recipe = useRecipe({ id: 100 });

  return <div>{recipe ? <h1>{recipe.title}</h1> : "loading...."}</div>;
};

export default TopPage;
