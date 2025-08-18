function onboardCustomer(customer, contact, agreement, review) {
  http.send("/onboarding/customer","POST", customer);
  http.send("/onboarding/contact", "POST", contact);
  http.send("/onboarding/agreement", "POST", agreement);
  http.send("/onboarding/review", "POST", review);
  return "200 OK";
}  

