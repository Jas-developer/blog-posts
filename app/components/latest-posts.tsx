import { SearchBar } from "./search-bar"
import { Post } from "../lib/types";

type LatestPostsProps = {
    posts: Post[];
    title?: string;
    searchTerm?: string;
    pageInfo: { startCursor: string | null ; endCursor: string | null; hasNextPage: boolean; hasPreviousPage: boolean; };
    category?: string;
}

export function LatestPosts({ posts, title, searchTerm, pageInfo, category }: LatestPostsProps) {
    return(
        <div className="mb-8 ">
            <div>
                <h2>
                    Latest posts
                </h2>
                <div>
                    <SearchBar/>
                </div>
            </div>
            Latest post here
        </div>
    )
}