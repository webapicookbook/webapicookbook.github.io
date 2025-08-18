function getDocument(url) {
  var args = {};
  args.url = url;
  args.callbackFunction = ajaxComplete;
  args.context = "processLinks";
  args.headers = {'accept':'application/vnd.collection+json'}
  
  ajax.httpGet(args}
  
  // later ...
  
function ajaxComplete(response,headers,context,status,msg)
{
  switch(status) {...} // handle status
  switch(context) {...} // dispatch to context
}  

