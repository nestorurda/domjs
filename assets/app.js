/* <div class="py-5 text-center">
    <img class="d-block mx-auto mb-4" src="/docs/4.3/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72">
    <h2>Checkout form</h2>
    <p class="lead">Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without compconsting it.</p>
  </div> */
function header() {
    const div = document.createElement("div");
    div.className = 'py-5 text-center';
    const img = document.createElement('img');
    const h2 = document.createElement('h2');
    img.className = 'd-block mx-auto mb-4'
    img.src = 'assets/bootstrap-solid.svg';
    img.width = 72;
    img.height = 72;
    const p = document.createElement('p');
    p.className = 'lead';
    h2.appendChild(document.createTextNode('Checkout form'))
    p.appendChild(document.createTextNode('Below is an example form built entirely with Bootstrap’s form controls. Each required form group has a validation state that can be triggered by attempting to submit the form without compconsting it.'));
    div.appendChild(img);
    div.appendChild(h2)
    div.appendChild(p);
    return div
};
document.querySelector('#header').append(header())


/* <div class="col-md-8 order-md-1">
<h4 class="mb-3">Billing address</h4>
<form class="needs-validation" novalidate>
  <div class="row">
    <div class="col-md-6 mb-3">
      <label for="firstName">First name</label>
      <input type="text" class="form-control" id="firstName" placeholder="" value="" required>
      <div class="invalid-feedback">
        Valid first name is required.
      </div>
    </div>
    <div class="col-md-6 mb-3">
      <label for="lastName">Last name</label>
      <input type="text" class="form-control" id="lastName" placeholder="" value="" required>
      <div class="invalid-feedback">
        Valid last name is required.
      </div>
    </div>
  </div>

  <div class="mb-3">
    <label for="username">Username</label>
    <div class="input-group">
      <div class="input-group-prepend">
        <span class="input-group-text">@</span>
      </div>
      <input type="text" class="form-control" id="username" placeholder="Username" required>
      <div class="invalid-feedback" style="width: 100%;">
        Your username is required.
      </div>
    </div>
  </div>

  <div class="mb-3">
    <label for="email">Email <span class="text-muted">(Optional)</span></label>
    <input type="email" class="form-control" id="email" placeholder="you@example.com">
    <div class="invalid-feedback">
      Please enter a valid email address for shipping updates.
    </div>
  </div>

  <div class="mb-3">
    <label for="address">Address</label>
    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required>
    <div class="invalid-feedback">
      Please enter your shipping address.
    </div>
  </div>

  <div class="mb-3">
    <label for="address2">Address 2 <span class="text-muted">(Optional)</span></label>
    <input type="text" class="form-control" id="address2" placeholder="Apartment or suite">
  </div>

  <div class="row">
    <div class="col-md-5 mb-3">
      <label for="country">Country</label>
      <select class="custom-select d-block w-100" id="country" required>
        <option value="">Choose...</option>
        <option>United States</option>
      </select>
      <div class="invalid-feedback">
        Please select a valid country.
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label for="state">State</label>
      <select class="custom-select d-block w-100" id="state" required>
        <option value="">Choose...</option>
        <option>California</option>
      </select>
      <div class="invalid-feedback">
        Please provide a valid state.
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label for="zip">Zip</label>
      <input type="text" class="form-control" id="zip" placeholder="" required>
      <div class="invalid-feedback">
        Zip code required.
      </div>
    </div>
  </div> */
function form() {
    //declaracion
    const div = document.createElement("div");
    div.classname = "col-md-8 order-md-1";
    const h4 = document.createElement("h4");
    h4.className = "mb-3";
    const form = document.createElement("form");
    form.className = "needs-validation.was-validates";
    form.noValidate = true;
    const row = document.createElement("row");
    row.className = "row";
    const divName = document.createElement("div");
    divName.className = "col-md-6 mb-3";
    const labelName = document.createElement("label");
    labelName.htmlFor = "firstName";
    const input = document.createElement("input");
    input.type = "text";
    input.className = "form-control";
    input.id = "firstName";
    input.required = true;
    const invalidName = document.createElement("div");
    invalidName.className = "invalid-feedback";
    const divLast = document.createElement("div");
    divLast.className = "col-md-6 mb-3";
    const labelLast = document.createElement("label");
    labelLast.htmlFor = "lastName";
    const inputLast = document.createElement("input");
    inputLast.type = "text";
    inputLast.className = "form-control";
    inputLast.id = "lastName";
    const invalidLast = document.createElement("div");
    invalidLast.className = "invalid-feedback";
    const divUser = document.createElement("div");
    divUser.className = "col-md-6 mb-3";
    const labelUser = document.createElement("label");
    labelUser.htmlFor = "username";
    const inputOne = document.createElement("div");
    inputOne.className = "input-group";
    const inputPrepend = document.createElement("div");
    inputPrepend.className = "input-group-prepend";
    const at = document.createElement("span");
    at.className = "input-group-text";
    const inputUser = document.createElement("input");
    inputUser.type = "text";
    inputUser.className = "form-control";
    inputUser.id = "username";
    inputUser.placeholder = "Username";
    const invalidUser = document.createElement("div");
    invalidUser.className = "invalid-feedback";
    const divEmail = document.createElement("div");
    divEmail.className = "col-12 mb-3";
    const labelEmail = document.createElement("label");
    labelEmail.htmlFor = "email";
    const spanEmail = document.createElement("span");
    spanEmail.className = "ml-2 text-muted";
    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.className = "form-control";
    inputEmail.id = "email";
    inputEmail.placeholder = "you@example.com";
    const invalidEmail = document.createElement("div");
    invalidEmail.className = "invalid-feedback";
    const divAddress = document.createElement("div");
    const labelAdress = document.createElement("label");
    labelAdress.htmlFor = "address";
    const inputAddress = document.createElement("input");
    inputAddress.type = "text";
    inputAddress.className = "form-control";
    inputAddress.id = "address";
    inputAddress.placeholder = "1234 Main St";
    const invalidAdress = document.createElement("div");
    invalidAdress.className = "invalid-feedback";
    divAdressTwo = document.createElement("div");
    divAdressTwo.className = "mb-3";
    const labelAdressTwo = document.createElement("label");
    labelAdressTwo.htmlFor = "address2";
    const inputAddressTwo = document.createElement("input");
    inputAddressTwo.type = "text";
    inputAddressTwo.className = "form-control";
    inputAddressTwo.id = "address2";
    inputAddressTwo.placeholder = "Apartment or suite";
    const row_2 = document.createElement("div");
    row_2.className = "row";
    const divCountry = document.createElement("div");
    divCountry.className = "col-md-5 mb-3";
    const labelCountryOne = document.createElement("label");
    labelCountryOne.htmlFor = "country";
    const selectCountryOne = document.createElement("select");
    selectCountryOne.className = "custom-select d-block w-100";
    selectCountryOne.id = "country";
    selectCountryOne.required = true;
    const optionCountryOne = document.createElement("option");
    const optionCountryTwo = document.createElement("option");
    const divCountryTwo = document.createElement("div");
    divCountryTwo.className = "invalid-feedback";
    const divState = document.createElement("div");
    divState.className = "col-md-4 mb-3";
    const labelStateOne = document.createElement("label");
    labelStateOne.htmlFor = "state";
    const selectStateOne = document.createElement("select");
    selectStateOne.className = "custom-select d-block w-100";
    selectStateOne.id = "state";
    selectStateOne.required = true;
    const optionStateOne = document.createElement("option");
    const optionStateTwo = document.createElement("option");
    const divStateTwo = document.createElement("div");
    divStateTwo.className = "invalid-feedback";
    const divZip = document.createElement("div");
    divZip.className = "col-md-3 mb-3";
    const labelZip = document.createElement("label");
    labelZip.htmlFor = "zip";
    const inputZip = document.createElement("input");
    inputZip.type = "text";
    inputZip.className = "form-control";
    inputZip.id = "zip";
    inputZip.required = true
    const divZipInvalid = document.createElement("div");
    divZipInvalid.className = "invalid-feedback";
    // Append
    div.appendChild(h4);
    h4.appendChild(document.createTextNode("Billing address"));

    div.appendChild(form);

    form.appendChild(row);
    row.appendChild(divName);

    labelName.appendChild(document.createTextNode("First Name"));
    divName.appendChild(labelName);
    divName.appendChild(input);
    invalidName.appendChild(document.createTextNode("Valid first name is required."));
    divName.appendChild(invalidName);
    row.appendChild(divLast);

    labelLast.appendChild(document.createTextNode("Last name"));
    divLast.appendChild(labelLast);
    divLast.appendChild(inputLast);
    invalidLast.appendChild(document.createTextNode("Valid last name is required."));
    divLast.appendChild(invalidLast);
    row.appendChild(divUser);

    labelUser.appendChild(document.createTextNode("Username"));
    divUser.appendChild(labelUser);
    divUser.appendChild(inputOne);
    inputOne.appendChild(inputPrepend);
    at.appendChild(document.createTextNode("@"));
    inputPrepend.appendChild(at);
    inputOne.appendChild(inputUser);
    invalidUser.appendChild(document.createTextNode("Your username is required."));

    labelEmail.appendChild(document.createTextNode("Email"));
    row.appendChild(divEmail);
    divEmail.appendChild(labelEmail);
    spanEmail.appendChild(document.createTextNode("(Optional)"));
    labelEmail.appendChild(spanEmail);
    divEmail.appendChild(inputEmail);
    invalidEmail.appendChild(document.createTextNode("Please enter a valid email address for shipping updates."));
    divEmail.appendChild(invalidEmail);

    row.appendChild(divAddress);

    labelAdress.appendChild(document.createTextNode("Address"));
    divEmail.appendChild(labelAdress);
    divEmail.appendChild(inputAddress);
    invalidAdress.appendChild(document.createTextNode("Please enter your shipping address."));
    divAddress.appendChild(invalidAdress);

    row.appendChild(divAdressTwo);

    labelAdressTwo.appendChild(document.createTextNode("Address 2"));
    divEmail.appendChild(labelAdressTwo);
    divEmail.appendChild(inputAddressTwo);

    div.appendChild(row_2);

    row_2.appendChild(divCountry);
    labelCountryOne.appendChild(document.createTextNode("Country"));
    divCountry.appendChild(labelCountryOne);
    divCountry.appendChild(selectCountryOne);
    optionCountryOne.appendChild(document.createTextNode("Choose..."));
    selectCountryOne.appendChild(optionCountryOne);
    optionCountryTwo.appendChild(document.createTextNode("United States"));
    selectCountryOne.appendChild(optionCountryTwo);
    divCountryTwo.appendChild(document.createTextNode("Please select a valid country"));
    divCountry.appendChild(divCountryTwo);

    row_2.appendChild(divState);

    labelStateOne.appendChild(document.createTextNode("State"));
    divState.appendChild(labelStateOne);
    divState.appendChild(selectStateOne);
    optionStateOne.appendChild(document.createTextNode("Choose..."));
    selectStateOne.appendChild(optionStateOne);
    optionStateTwo.appendChild(document.createTextNode("California"));
    selectStateOne.appendChild(optionStateTwo);
    divStateTwo.appendChild(document.createTextNode("Please provide a valid State"));
    divState.appendChild(divStateTwo);

    row_2.appendChild(divZip);

    labelZip.appendChild(document.createTextNode("Zip"));
    divZip.appendChild(labelZip);
    divZip.appendChild(inputZip);
    divZipInvalid.appendChild(document.createTextNode("Zip code required."));
    divZip.appendChild(divZipInvalid);

    return div
}
document.querySelector('#form').append(form())