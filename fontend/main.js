// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
var format = "image/png";
var map;
// Layers -> Chọn Layers cần hiện(Đến trang Edit Layer) -> Bounding Boxes
var minX = 16.805793762207;
var minY = 47.7233352661133;
var maxX = 22.5965824127197;
var maxY = 49.6232109069824;
//
var cenX = (minX + maxX) / 2;
var cenY = (minY + maxY) / 2;
var mapLat = cenY;
var mapLng = cenX;
var mapDefaultZoom = 6;
function initialize_map() {
  layerBG = new ol.layer.Tile({
    source: new ol.source.OSM({}),
  });
  var layerCMR_adm1 = new ol.layer.Image({
    source: new ol.source.ImageWMS({
      ratio: 1,
      url: "http://localhost:8080/geoserver/geoserver_demo/wms?",
      params: {
        FORMAT: format,
        VERSION: "1.1.1",
        STYLES: "",
        LAYERS: "gadm41_svk_2",
      },
    }),
  });
  var viewMap = new ol.View({
    center: ol.proj.fromLonLat([mapLng, mapLat]),
    zoom: mapDefaultZoom,
  });
  map = new ol.Map({
    target: "map",
    layers: [layerBG, layerCMR_adm1],
    view: viewMap,
  });
}

const mapELement = document.querySelector("#map");
const toolTip = document.querySelector(".tool_tip");

mapELement.addEventListener("mousemove", e=>{
  toolTip.classList.remove("hide_tool_tips");
  document.querySelector(".coordinateX").innerHTML = e.offsetX;
  document.querySelector(".coordinateY").innerHTML = e.offsetY;
  toolTip.style.top = e.offsetY + "px";
  toolTip.style.left = e.offsetX + "px";
})
