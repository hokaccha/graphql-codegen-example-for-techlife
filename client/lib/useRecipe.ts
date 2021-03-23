import { GraphQLClient } from "graphql-request";
import { useEffect, useState } from "react";
import { getSdk, Recipe } from "./generated/sdk";

const client = new GraphQLClient("http://localhost:8000/graphql");
const sdk = getSdk(client);

async function getRecipe({ id }: { id: number }) {
  const response = await sdk.getRecipe({ id });

  console.log(response.recipe.id); // name: number
  console.log(response.recipe.title); // name: string
  console.log(response.recipe.imageUrl); // imageUrl?: string

  // @ts-expect-error
  console.log(response.recipe.foo); // Property 'foo' does not exist

  return response.recipe;
}

export function useRecipe({ id }: { id: number }): Recipe | null {
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    getRecipe({ id }).then((recipe) => setRecipe(recipe));
  }, [id]);

  return recipe;
}
