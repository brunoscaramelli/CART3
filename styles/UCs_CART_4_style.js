var size = 0;
var placement = 'point';
function categories_UCs_CART_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'APA Água Parada':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(233,172,73,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'APA Municipal do Rio Batalha':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(172,232,124,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(172,232,124,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'APA Rio Batalha':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(27,219,171,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(130,202,146,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ARIE Leopoldo Magno Coutinho':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(27,219,171,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(27,219,171,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'APA do Timburi':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(249,107,6,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.268}),fill: new ol.style.Fill({color: 'rgba(249,107,6,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Floresta Estadual de Assis':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(51,206,227,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 3.268}),fill: new ol.style.Fill({color: 'rgba(51,206,227,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Refúgio de Vida Silvestre Aimorés':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(194,55,237,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(194,55,237,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'APA Vargem Limpa – Campo Novo':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(198,207,104,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1.748}),fill: new ol.style.Fill({color: 'rgba(198,207,104,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Estação Ecológica Assis':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(39,255,1,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(39,255,1,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_UCs_CART_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Denominaç");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Denominaç") !== null) {
        labelText = String(feature.get("Denominaç"));
    }
    
    var style = categories_UCs_CART_4(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
