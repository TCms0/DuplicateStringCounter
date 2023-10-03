var itemNames = require("./itemnames.json");
var UniqueItemsArray = [];
CheckDuplicates();
function CheckDuplicates() {
  for (var i = 0; i < itemNames.length; i++) {
    var Index = UniqueItemsArray.findIndex((x) => x.Name == itemNames[i]);
    if (Index != -1) {
      UniqueItemsArray[Index].Count++;
    } else {
      UniqueItemsArray.push({ Name: itemNames[i], Count: 1 });
    }
  }

  //console.log(UniqueItemsArray);
  var fs = require("fs");

  //Sort by count
  UniqueItemsArray.sort(function (a, b) {
    return b.Count - a.Count;
  });

  fs.writeFile("uniqueItems.json", JSON.stringify(UniqueItemsArray), function (err) {
    if (err) {
      console.log(err);
    }
  });
}
