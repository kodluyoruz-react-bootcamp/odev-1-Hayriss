import computeSourceMap from "sucrase/dist/computeSourceMap";
import getData from "./lib/service";


var userWithPosts = getData(1);
userWithPosts.then(function(x){
  console.log(x);
});