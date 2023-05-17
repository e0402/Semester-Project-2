import * as listeners from "./handlers/index.mjs";

const path = location.pathname;

switch (path) {
  case "/profile/login/":
    listeners.setFormLoginListener();
    break;
  case "/profile/register/":
    listeners.setFormRegistrationListener();
    break;
  case "/listing/create/":
    listeners.setCreateListingFormListener();
    break;
  case "/listing/edit/":
    listeners.setUpdateListingListener();
    break;
  case "/profile/edit/":
    listeners.setUpdateProfileListener();
    break;
  case "/listings/":
    listeners.readListings();
    break;
  case "/listing/":
    listeners.readListing();
    break;
  case "/listing/bid/":
    listeners.readBidOnListing();
    listeners.setUpdateProfileListener();
    listeners.setBidOnListingFormListener();
    break;
  case "/profile/":
    listeners.readProfile();
    break;
  case "/home/index.html":
    listeners.readListingsHomePage();
    break;
}
