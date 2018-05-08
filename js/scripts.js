//business logic
  function Contact(first, last)
  {
    this.firstName = first;
    this.lastName = last;
  }
  Contact.prototype.fullName = function()
  {
  return this.firstName + " " + this.lastName;
  }

  function Destination(country,city)
  {
    this.countryDest=country;
    this.cityDest= city;
  }
  Destination.prototype.finalDest=function ()
  {
  return this.countryDest+ " " + this.cityDest;
  }
  // user interface logic
  $(document).ready(function()
  {
    $("form#new-contact").submit(function(event)
    {
      event.preventDefault();

      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();

      var newContact = new Contact(inputtedFirstName, inputtedLastName);
       $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
    });
  // $(".contact").last().click(function()
    // {
    //  $("#show-contact").show();
    //  $("#show-contact h2").text(newContact.firstName);
    //  $(".first-name").text(newContact.firstName);
    //  $(".last-name").text(newContact.lastName);
    // });
    $("form#new-dest").submit(function (event) {
      event.preventDefault();

      var inputtedCountry = $("input#dest-one").val();
      var inputtedCity = $("input#dest-two").val();

      var newDest= new Destination(inputtedCountry,inputtedCity);
      $("ul#Destinations").append("<li><span class='contact'>"+ newDest.finalDest()+"</span></li>");
      $("input#dest-one").val("");
      $("input#dest-two").val("");
    });
  });
