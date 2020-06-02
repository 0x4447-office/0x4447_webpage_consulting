//
//  Helper function to return an object containing
//  parameters and corresponding variables given a url.
//
function get_url_parameters()
{
  //
  //  1.  Separate the site URL from the URL parameters.
  //
  let params = document.URL.split('?');
  
  //
  //  2.  Given a url, splitting with '?' should return
  //      an array of length >= 2 at least to have parameters.
  //
  if(params.length < 2)
  {
    console.info('There are no parameters');
    return null;
  }
  
  //
  //  3.  Every parameter in URL is separated with & so split
  //      the string.
  //
  let parameters = params[1].split('&');

  //
  //  4.  Now create a dictionary object contaning parameter key
  //      and value by splitting each parameter with '='.
  //
  let param_dict = {};

  //
  //  5.  Loop over each individual parameter that is in the URL.
  //
  parameters.forEach(function(parameter) {

    //
    //  1.  Split the parameter to optain the key and the value.
    //
    let separated = parameter.split('=');

    //
    //  2.  Make nice variables simple to understand.
    //
    let key = separated[0];
    let value = separated[1];

    //
    //  3.  Add data to the object.
    //
    param_dict[key] = value;

  });

  return param_dict
}