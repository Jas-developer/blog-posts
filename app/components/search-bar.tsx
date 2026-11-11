'use client'
import { useRouter } from "next/navigation";

export function SearchBar() {

    const router = useRouter();

    function handleSearch(event: React.SubmitEvent<HTMLFormElement>){
        event.preventDefault();
        const searchInput = event.currentTarget.elements.namedItem("search") as HTMLInputElement;
        router.push(`/posts?search=${searchInput.value}`);
    }

    return(
       <form onSubmit={handleSearch} method="POST">
         <input type="text"
         placeholder="Search"
         name="search" />
         <button>
            Search
         </button>
       </form>
    )
}