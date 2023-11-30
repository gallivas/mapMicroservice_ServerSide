var geocoder;
var map;

function codeAddress() {
  // Get the selected country from the dropdown
  var countrySelect = document.getElementById('country');
  var selectedCountry = countrySelect.value;
  // Redirect to the displayCountry.html page with the selected country as a parameter
  window.location.href = `displayCountry.html?country=${selectedCountry}`;
  displayMap(selectedCountry);
}

async function displayMap(selectedCountry) {
  const { Map } = await google.maps.importLibrary("maps");
  const { Geocoder } = await google.maps.importLibrary("geocoding");
  geocoder = new Geocoder();
  geocoder.geocode( { address : selectedCountry}, function(results, status) {
    if (status == 'OK') {
      let latitude = results[0].geometry.location.lat();  // I fixed this by adding () after lat and lng
      let longitude = results[0].geometry.location.lng();
      console.log(latitude);
      console.log(selectedCountry);
      map = new Map(document.getElementById("map"), {
        center: { lat: latitude, lng: longitude },
        zoom: 5,
      });
    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  })

}
