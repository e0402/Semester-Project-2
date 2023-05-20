import * as templates from "../templates/index.mjs";
import * as listingMethods from "../api/listings/index.mjs";

const url = new URL(location.href);
const id = url.searchParams.get("id");

/**
 * This export function renders single listing with ID as parameter using listingtemplate from templates/listing.mjs.
 */

export async function readBidOnListing() {
  const listing = await listingMethods.getListing(id);
  const bidOnListingContainer = document.querySelector("#auctionListing");

  templates.renderBidOnListingTemplate(listing, bidOnListingContainer);
}
