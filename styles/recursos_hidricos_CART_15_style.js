var size = 0;
var placement = 'point';
function categories_recursos_hidricos_CART_15(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Captação Assis':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(51,206,227,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Captação Bauru':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(51,206,227,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Captação Ourinhos':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(51,206,227,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 3.268}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(51,206,227,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.128}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_recursos_hidricos_CART_15 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Sensível");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("Nome") !== null) {
        labelText = String(feature.get("Nome"));
    }
    
    var style = categories_recursos_hidricos_CART_15(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
