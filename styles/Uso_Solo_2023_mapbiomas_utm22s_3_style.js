var size = 0;
var placement = 'point';
function categories_Uso_Solo_2023_mapbiomas_utm22s_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Agricultura':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(233,116,237,0.418)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Área Urbanizada':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(212,39,30,0.418)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Campo Alagado e Área Pantanosa':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(81,151,153,0.418)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Formação Campestre':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(214,188,116,0.418)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Formação Florestal':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(31,141,73,0.418)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Formação Savânica':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(125,201,117,0.418)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mosaico de Usos':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(255,239,195,0.418)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Outras Áreas não Vegetadas':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(219,77,79,0.418)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Pastagem':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(237,222,142,0.418)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rio, Lago e Oceano':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(37,50,228,0.418)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Silvicultura':
                    return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(122,89,0,0.418)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Uso_Solo_2023_mapbiomas_utm22s_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("Uso Solo");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 1.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Uso Solo") !== null) {
        labelText = String(feature.get("Uso Solo"));
    }
    
    var style = categories_Uso_Solo_2023_mapbiomas_utm22s_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
