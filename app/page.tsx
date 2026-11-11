import {Hero} from "./components/hero";
import { Categories } from "./components/categories";
import { LatestPosts } from "./components/latest-posts";
import { getCategories } from "./lib/queries";



export default async function Home() {

  const categories = await getCategories();

  return (
    <div className="flex flex-col items-center justify-center  py-2">
      <Hero />
      <Categories categories={categories} />
      <LatestPosts/>
    </div>
  );
}
