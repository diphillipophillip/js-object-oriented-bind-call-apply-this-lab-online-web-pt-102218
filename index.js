//Your code here
function justInvoke(returnThisAndArgs) {
 return returnThisAndArgs() 
}

function setThisWithCall(fn, thisValue, arg) {
  return setThisWithCall.call(fn, thisValue, arg)
}