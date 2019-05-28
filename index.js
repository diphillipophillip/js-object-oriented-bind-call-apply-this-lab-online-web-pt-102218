//Your code here
function justInvoke(returnThisAndArgs) {
 return returnThisAndArgs() 
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(fn, thisValue, arg)
}