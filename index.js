//Your code here
function justInvoke(returnThisAndArgs) {
 return returnThisAndArgs() 
}

function setThisWithCall(fn, thisValue, arg) {
  return fn.call(thisValue, arg)
}

function setThisWithApply(fn, thisValue, args) {
  return fn.apply(thisValue, args)
}

function returnNewFunctionOf() {
  
}