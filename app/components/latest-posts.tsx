import { SearchBar } from "./search-bar"

export function LatestPosts() {
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