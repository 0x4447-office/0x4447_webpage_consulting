//
//  Helper function to return an object containing
//  parameters and corresponding variables given a url.
//
function get_url_parameters()
{
  let params = document.URL.split('?');
  
  //
  //  1.  Given a url, splitting with '?' should return
  //  an array of length >= 2 at least to have parameters
  //
  if( params.length<2 )
  {
    console.log('There are no parameters');
    return null
  }
  
  //
  //  2.  Every parameter in URL is separated with & so split
  //  the string
  //
  let parameters = params[1].split('&');

  //
  //  3.  Now create a dictionary object contaning parameter key
  //  and value by splitting each parameter with '='
  //
  let param_dict = {};

  parameters.forEach(function(elem,idx){
    let separated = elem.split('=');
    let key = separated[0];
    let value = separated[1];
    param_dict[key] = value;
  });

  return param_dict
}