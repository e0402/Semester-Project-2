import * as listeners from "./handlers/index.mjs";

const path = location.pathname;

if (path === "/profile/login/") {
  listeners.setFormLoginListener();
} else if (path === "/profile/register/") {
  listeners.setFormRegistrationListener();
} else if (path === "/listing/create/") {
  listeners.setCreateListingFormListener();
} else if (path === "/listing/edit/") {
  listeners.setUpdateListingListener();
} else if (path === "/profile/edit/") {
  listeners.setUpdateProfileListener();
} else if (path === "/listings/") {
  listeners.readListings();
} else if (path === "/listing/") {
  listeners.readListing();
} else if (path === "/listing/bid/") {
  listeners.readBidOnListing();
  listeners.setUpdateProfileListener();
  listeners.setBidOnListingFormListener();
} else if (path === "/profile/") {
  listeners.readProfile();
} else if (path === "/home/index.html") {
  listeners.readListingsHomePage();
}
