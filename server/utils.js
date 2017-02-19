var convertToArray = (obj) => {
  if(obj instanceof Array){
    return obj;
  }
  var arr = [obj];
  return arr;
};

module.exports = {convertToArray};
