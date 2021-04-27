var shapefile = require("shapefile");
const fs = require("fs");

exports.getPost = (req, res, next) => {
  console.log("hi");

  shapefile
    .open(
      "C:/Users/HP/Desktop/gis-content/AMBAGRAH/BUILDING/BLOCK_BUILDING.shp"
    )
    .then((source) =>
      source.read().then(function log(result) {
        if (result.done) return;
        // console.log(result.value);
        return res.json({
          msg: result.value,
        });
        return source.read().then(log);
      })
    )
    .catch((error) => console.error(error.stack));

  /*
  var buffer = fs.readFileSync(
    "C:/Users/HP/Desktop/gis-content/AMBAGRAH/BUILDING/GOVERNMENT_OFFICE_BUILDING.shp"
  );

  console.log(shapeFileParser);
  //var shapeFile = shapeFileParser.parse(buffer);

  /*
  var shapeFile = shapeFileParser.parse(buffer);
  if (shapeFile.isValid()) {
    console.log(shapeFile.shapeFileHeader);
    console.log(shapeFile.ShapeRecords);
  } */
};
