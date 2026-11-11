import {Hero} from "./components/hero";
import { Categories } from "./components/categories";

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Hero />
      <Categories />
    </div>
  );
}
