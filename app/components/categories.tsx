import { Category } from "../lib/types";
import Link from "next/link";

export function Categories({categories}: {categories: Category[]}) {
    return (
        <div className="flex flex-col items-center justify-center  py-2">
            <h1>Categories</h1>
            <ul>
                {categories.map((category) => (
                    <li key={category.id} className="flex flex-shrink-0">
                        <Link href={`/post?categories=${category.slug}`}>
                         {category.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}