import { listingsTemplateA } from "../templates/listing.mjs";
// import { API_AUCTION_URL } from "../constants.mjs";

const listingsContainer = document.querySelector("#listings");

const select = document.querySelector("#filterList");

const date = new Date();

// const action = "/listings";

// const activeListingsEndURL = `${action}?_seller=true&_bids=true&_active=true`;
// const activeListingsURL = API_AUCTION_URL + activeListingsEndURL;

/**
 *This export function filters an array of listings by first listening for a change event, and then returns listings based on filter criteria set. The user can filter listings based on listings from the whole year, listings containing media content, listings with likes and listings with comments
 * @param {Array} listings An array of objects (listings).
 */

export function filterListings(listings) {
  select.addEventListener("change", () => {
    const filterValue = select.value;

    const listingsFilteredByDate = listings.filter((listing) => {
      if (filterValue === "active") {
        const endsAtDate = new Date(listing.endsAt);
        const endsAtDateString = endsAtDate.toLocaleString("en-US", {
          timeZone: "Europe/Stockholm",
        }); // adjust the timezone to match your location
        return new Date(endsAtDateString) >= date;
      } else if (filterValue === "2023") {
        const listingDate = new Date(listing.created);
        const currentYear = new Date().getFullYear();
        return listingDate.getFullYear() === currentYear;
      } else {
        return true;
      }
    });

    /**
     * This function renders the filtered listing result as HTML.
     * @param {Array} listingsFilteredByDate An array of filtered objects (listings).
     * @param {Element} listingsContainer An empty div container.
     */
    function renderListingFilterTemplate(
      listingsFilteredByDate,
      listingsContainer
    ) {
      listingsContainer.innerHTML = "";

      listingsContainer.append(
        ...listingsFilteredByDate.map(listingsTemplateA)
      );
    }

    renderListingFilterTemplate(listingsFilteredByDate, listingsContainer);
  });
}
