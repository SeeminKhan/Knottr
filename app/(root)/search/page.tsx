import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs";

import UserCard from "@/components/cards/UserCard";
import Searchbar from "@/components/shared/Searchbar";
import Pagination from "@/components/shared/Pagination";

import { fetchUser, fetchUsers } from "@/lib/actions/user.actions";

async function Page({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  // Get the current user
  const user = await currentUser();
  
  // Redirect to login if the user is not authenticated
  if (!user) {
    redirect("/login");
    return null;
  }

  // Fetch user information
  const userInfo = await fetchUser(user.id);

  // Redirect to onboarding if the user is not onboarded
  if (!userInfo?.onboarded) {
    redirect("/onboarding");
    return null;
  }

  // Define default values for search and pagination
  const searchQuery = searchParams.q || ""; // Default to empty search if no query
  const pageNumber = searchParams?.page ? +searchParams.page : 1;

  // Handle fetching users with error handling
  let result;
  try {
    result = await fetchUsers({
      userId: user.id,
      searchString: searchQuery,
      pageNumber,
      pageSize: 25,
    });
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return <p className='error-text'>Error loading users. Please try again later.</p>;
  }

  return (
    <section>
      <h1 className='head-text mb-10'>Search</h1>

      {/* Search bar for filtering users */}
      <Searchbar routeType='search' />

      <div className='mt-14 flex flex-col gap-9'>
        {/* Handle cases where no users are found */}
        {result.users.length === 0 ? (
          <p className='no-result'>No Results Found</p>
        ) : (
          <>
            {/* Render user cards for the search results */}
            {result.users.map((person) => (
              <UserCard
                key={person.id}
                id={person.id}
                name={person.name}
                username={person.username}
                imgUrl={person.image}
                personType='User'
              />
            ))}
          </>
        )}
      </div>

      {/* Pagination controls */}
      <Pagination
        path='search'
        pageNumber={pageNumber}
        isNext={result.isNext}
      />
    </section>
  );
}

export default Page;
