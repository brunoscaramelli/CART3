ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:31982").setExtent([-20037508.342789, -20037508.342789, 20037508.342789, 20037508.342789]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Malha_CART_1 = new ol.format.GeoJSON();
var features_Malha_CART_1 = format_Malha_CART_1.readFeatures(json_Malha_CART_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Malha_CART_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Malha_CART_1.addFeatures(features_Malha_CART_1);
var lyr_Malha_CART_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Malha_CART_1, 
                style: style_Malha_CART_1,
                popuplayertitle: 'Malha_CART',
                interactive: true,
    title: 'Malha_CART<br />\
    <img src="styles/legend/Malha_CART_1_0.png" /> SP 225<br />\
    <img src="styles/legend/Malha_CART_1_1.png" /> SP 270<br />\
    <img src="styles/legend/Malha_CART_1_2.png" /> SP 327<br />\
    <img src="styles/legend/Malha_CART_1_3.png" /> SPA 007/327<br />\
    <img src="styles/legend/Malha_CART_1_4.png" /> SPA 026/327<br />\
    <img src="styles/legend/Malha_CART_1_5.png" /> SPA 247/225<br />\
    <img src="styles/legend/Malha_CART_1_6.png" /> SPA 277/225<br />\
    <img src="styles/legend/Malha_CART_1_7.png" /> SPA 392/270<br />\
    <img src="styles/legend/Malha_CART_1_8.png" /> SPA 424/270<br />\
    <img src="styles/legend/Malha_CART_1_9.png" /> SPA 440/270<br />\
    <img src="styles/legend/Malha_CART_1_10.png" /> SPA 441/270<br />\
    <img src="styles/legend/Malha_CART_1_11.png" /> SPA 471/270<br />\
    <img src="styles/legend/Malha_CART_1_12.png" /> SPA 552/270<br />\
    <img src="styles/legend/Malha_CART_1_13.png" /> SPA 553/270<br />\
    <img src="styles/legend/Malha_CART_1_14.png" /> SPA 576/270<br />\
    <img src="styles/legend/Malha_CART_1_15.png" /> SPA 586/270<br />\
    <img src="styles/legend/Malha_CART_1_16.png" /> SPA 597/270<br />\
    <img src="styles/legend/Malha_CART_1_17.png" /> SPA 608/270<br />\
    <img src="styles/legend/Malha_CART_1_18.png" /> SPA 619/270<br />\
    <img src="styles/legend/Malha_CART_1_19.png" /> SPA 634/270<br />\
    <img src="styles/legend/Malha_CART_1_20.png" /> SPA 637/270<br />\
    <img src="styles/legend/Malha_CART_1_21.png" /> SPA 652/270<br />'
        });
var format_km_cart_LO_2 = new ol.format.GeoJSON();
var features_km_cart_LO_2 = format_km_cart_LO_2.readFeatures(json_km_cart_LO_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_km_cart_LO_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_km_cart_LO_2.addFeatures(features_km_cart_LO_2);
var lyr_km_cart_LO_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_km_cart_LO_2, 
                style: style_km_cart_LO_2,
                popuplayertitle: 'km_cart_LO',
                interactive: true,
                title: '<img src="styles/legend/km_cart_LO_2.png" /> km_cart_LO'
            });
var format_Uso_Solo_2023_mapbiomas_utm22s_3 = new ol.format.GeoJSON();
var features_Uso_Solo_2023_mapbiomas_utm22s_3 = format_Uso_Solo_2023_mapbiomas_utm22s_3.readFeatures(json_Uso_Solo_2023_mapbiomas_utm22s_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Uso_Solo_2023_mapbiomas_utm22s_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uso_Solo_2023_mapbiomas_utm22s_3.addFeatures(features_Uso_Solo_2023_mapbiomas_utm22s_3);
var lyr_Uso_Solo_2023_mapbiomas_utm22s_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Uso_Solo_2023_mapbiomas_utm22s_3, 
                style: style_Uso_Solo_2023_mapbiomas_utm22s_3,
                popuplayertitle: 'Uso_Solo_2023_mapbiomas_utm22s',
                interactive: true,
    title: 'Uso_Solo_2023_mapbiomas_utm22s<br />\
    <img src="styles/legend/Uso_Solo_2023_mapbiomas_utm22s_3_0.png" /> Agricultura<br />\
    <img src="styles/legend/Uso_Solo_2023_mapbiomas_utm22s_3_1.png" /> Área Urbanizada<br />\
    <img src="styles/legend/Uso_Solo_2023_mapbiomas_utm22s_3_2.png" /> Campo Alagado e Área Pantanosa<br />\
    <img src="styles/legend/Uso_Solo_2023_mapbiomas_utm22s_3_3.png" /> Formação Campestre<br />\
    <img src="styles/legend/Uso_Solo_2023_mapbiomas_utm22s_3_4.png" /> Formação Florestal<br />\
    <img src="styles/legend/Uso_Solo_2023_mapbiomas_utm22s_3_5.png" /> Formação Savânica<br />\
    <img src="styles/legend/Uso_Solo_2023_mapbiomas_utm22s_3_6.png" /> Mosaico de Usos<br />\
    <img src="styles/legend/Uso_Solo_2023_mapbiomas_utm22s_3_7.png" /> Outras Áreas não Vegetadas<br />\
    <img src="styles/legend/Uso_Solo_2023_mapbiomas_utm22s_3_8.png" /> Pastagem<br />\
    <img src="styles/legend/Uso_Solo_2023_mapbiomas_utm22s_3_9.png" /> Rio, Lago e Oceano<br />\
    <img src="styles/legend/Uso_Solo_2023_mapbiomas_utm22s_3_10.png" /> Silvicultura<br />'
        });
var format_UCs_CART_4 = new ol.format.GeoJSON();
var features_UCs_CART_4 = format_UCs_CART_4.readFeatures(json_UCs_CART_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_UCs_CART_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UCs_CART_4.addFeatures(features_UCs_CART_4);
var lyr_UCs_CART_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UCs_CART_4, 
                style: style_UCs_CART_4,
                popuplayertitle: 'UCs_CART',
                interactive: true,
    title: 'UCs_CART<br />\
    <img src="styles/legend/UCs_CART_4_0.png" /> APA Água Parada<br />\
    <img src="styles/legend/UCs_CART_4_1.png" /> APA Municipal do Rio Batalha<br />\
    <img src="styles/legend/UCs_CART_4_2.png" /> APA Rio Batalha<br />\
    <img src="styles/legend/UCs_CART_4_3.png" /> ARIE Leopoldo Magno Coutinho<br />\
    <img src="styles/legend/UCs_CART_4_4.png" /> APA do Timburi<br />\
    <img src="styles/legend/UCs_CART_4_5.png" /> Floresta Estadual de Assis<br />\
    <img src="styles/legend/UCs_CART_4_6.png" /> Refúgio de Vida Silvestre Aimorés<br />\
    <img src="styles/legend/UCs_CART_4_7.png" /> APA Vargem Limpa – Campo Novo<br />\
    <img src="styles/legend/UCs_CART_4_8.png" /> Estação Ecológica Assis<br />'
        });
var format_ZA_UCs_CART_5 = new ol.format.GeoJSON();
var features_ZA_UCs_CART_5 = format_ZA_UCs_CART_5.readFeatures(json_ZA_UCs_CART_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_ZA_UCs_CART_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZA_UCs_CART_5.addFeatures(features_ZA_UCs_CART_5);
var lyr_ZA_UCs_CART_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZA_UCs_CART_5, 
                style: style_ZA_UCs_CART_5,
                popuplayertitle: 'ZA_UCs_CART',
                interactive: true,
                title: '<img src="styles/legend/ZA_UCs_CART_5.png" /> ZA_UCs_CART'
            });
var format_APM_Batalha_CART_6 = new ol.format.GeoJSON();
var features_APM_Batalha_CART_6 = format_APM_Batalha_CART_6.readFeatures(json_APM_Batalha_CART_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_APM_Batalha_CART_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APM_Batalha_CART_6.addFeatures(features_APM_Batalha_CART_6);
var lyr_APM_Batalha_CART_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APM_Batalha_CART_6, 
                style: style_APM_Batalha_CART_6,
                popuplayertitle: 'APM_Batalha_CART',
                interactive: true,
                title: '<img src="styles/legend/APM_Batalha_CART_6.png" /> APM_Batalha_CART'
            });
var format_Estados_7 = new ol.format.GeoJSON();
var features_Estados_7 = format_Estados_7.readFeatures(json_Estados_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Estados_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estados_7.addFeatures(features_Estados_7);
var lyr_Estados_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estados_7, 
                style: style_Estados_7,
                popuplayertitle: 'Estados',
                interactive: true,
                title: '<img src="styles/legend/Estados_7.png" /> Estados'
            });
var format_Municipios_AII_8 = new ol.format.GeoJSON();
var features_Municipios_AII_8 = format_Municipios_AII_8.readFeatures(json_Municipios_AII_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Municipios_AII_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_AII_8.addFeatures(features_Municipios_AII_8);
var lyr_Municipios_AII_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_AII_8, 
                style: style_Municipios_AII_8,
                popuplayertitle: 'Municipios_AII',
                interactive: true,
                title: '<img src="styles/legend/Municipios_AII_8.png" /> Municipios_AII'
            });
var format_BARREIRAS_NEWJERSEY_9 = new ol.format.GeoJSON();
var features_BARREIRAS_NEWJERSEY_9 = format_BARREIRAS_NEWJERSEY_9.readFeatures(json_BARREIRAS_NEWJERSEY_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_BARREIRAS_NEWJERSEY_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BARREIRAS_NEWJERSEY_9.addFeatures(features_BARREIRAS_NEWJERSEY_9);
var lyr_BARREIRAS_NEWJERSEY_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BARREIRAS_NEWJERSEY_9, 
                style: style_BARREIRAS_NEWJERSEY_9,
                popuplayertitle: 'BARREIRAS_NEWJERSEY',
                interactive: true,
                title: '<img src="styles/legend/BARREIRAS_NEWJERSEY_9.png" /> BARREIRAS_NEWJERSEY'
            });
var format_FD_CART_dissolvido_10 = new ol.format.GeoJSON();
var features_FD_CART_dissolvido_10 = format_FD_CART_dissolvido_10.readFeatures(json_FD_CART_dissolvido_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_FD_CART_dissolvido_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FD_CART_dissolvido_10.addFeatures(features_FD_CART_dissolvido_10);
var lyr_FD_CART_dissolvido_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FD_CART_dissolvido_10, 
                style: style_FD_CART_dissolvido_10,
                popuplayertitle: 'FD_CART_dissolvido',
                interactive: true,
                title: '<img src="styles/legend/FD_CART_dissolvido_10.png" /> FD_CART_dissolvido'
            });
var format_AII_CART_11 = new ol.format.GeoJSON();
var features_AII_CART_11 = format_AII_CART_11.readFeatures(json_AII_CART_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AII_CART_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AII_CART_11.addFeatures(features_AII_CART_11);
var lyr_AII_CART_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AII_CART_11, 
                style: style_AII_CART_11,
                popuplayertitle: 'AII_CART',
                interactive: true,
                title: '<img src="styles/legend/AII_CART_11.png" /> AII_CART'
            });
var format_AID_CART_dissolvido_12 = new ol.format.GeoJSON();
var features_AID_CART_dissolvido_12 = format_AID_CART_dissolvido_12.readFeatures(json_AID_CART_dissolvido_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AID_CART_dissolvido_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AID_CART_dissolvido_12.addFeatures(features_AID_CART_dissolvido_12);
var lyr_AID_CART_dissolvido_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AID_CART_dissolvido_12, 
                style: style_AID_CART_dissolvido_12,
                popuplayertitle: 'AID_CART_dissolvido',
                interactive: true,
                title: '<img src="styles/legend/AID_CART_dissolvido_12.png" /> AID_CART_dissolvido'
            });
var format_Areas_Contaminadas_SP_28_08_24_CART_13 = new ol.format.GeoJSON();
var features_Areas_Contaminadas_SP_28_08_24_CART_13 = format_Areas_Contaminadas_SP_28_08_24_CART_13.readFeatures(json_Areas_Contaminadas_SP_28_08_24_CART_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Areas_Contaminadas_SP_28_08_24_CART_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Areas_Contaminadas_SP_28_08_24_CART_13.addFeatures(features_Areas_Contaminadas_SP_28_08_24_CART_13);
var lyr_Areas_Contaminadas_SP_28_08_24_CART_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Areas_Contaminadas_SP_28_08_24_CART_13, 
                style: style_Areas_Contaminadas_SP_28_08_24_CART_13,
                popuplayertitle: 'Areas_Contaminadas_SP_28_08_24_CART',
                interactive: true,
                title: '<img src="styles/legend/Areas_Contaminadas_SP_28_08_24_CART_13.png" /> Areas_Contaminadas_SP_28_08_24_CART'
            });
var format_Instalacoes_Apoio_CART_14 = new ol.format.GeoJSON();
var features_Instalacoes_Apoio_CART_14 = format_Instalacoes_Apoio_CART_14.readFeatures(json_Instalacoes_Apoio_CART_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Instalacoes_Apoio_CART_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Instalacoes_Apoio_CART_14.addFeatures(features_Instalacoes_Apoio_CART_14);
var lyr_Instalacoes_Apoio_CART_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Instalacoes_Apoio_CART_14, 
                style: style_Instalacoes_Apoio_CART_14,
                popuplayertitle: 'Instalacoes_Apoio_CART',
                interactive: true,
    title: 'Instalacoes_Apoio_CART<br />\
    <img src="styles/legend/Instalacoes_Apoio_CART_14_0.png" /> Centro de Controle Operacional – CCO<br />\
    <img src="styles/legend/Instalacoes_Apoio_CART_14_1.png" /> Serviço de Atendimento ao Usuário – SAU<br />\
    <img src="styles/legend/Instalacoes_Apoio_CART_14_2.png" /> Praça de Pedágio<br />\
    <img src="styles/legend/Instalacoes_Apoio_CART_14_3.png" /> Companhia da Polícia Rodoviária<br />\
    <img src="styles/legend/Instalacoes_Apoio_CART_14_4.png" /> Posto da Polícia Rodoviária<br />\
    <img src="styles/legend/Instalacoes_Apoio_CART_14_5.png" /> Passarela<br />\
    <img src="styles/legend/Instalacoes_Apoio_CART_14_6.png" /> Ponto de Ônibus<br />\
    <img src="styles/legend/Instalacoes_Apoio_CART_14_7.png" /> Posto de Pesagem Misto – PPM<br />\
    <img src="styles/legend/Instalacoes_Apoio_CART_14_8.png" /> Posto Geral de Fiscalização – PGF<br />'
        });
var format_recursos_hidricos_CART_15 = new ol.format.GeoJSON();
var features_recursos_hidricos_CART_15 = format_recursos_hidricos_CART_15.readFeatures(json_recursos_hidricos_CART_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_recursos_hidricos_CART_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_recursos_hidricos_CART_15.addFeatures(features_recursos_hidricos_CART_15);
var lyr_recursos_hidricos_CART_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_recursos_hidricos_CART_15, 
                style: style_recursos_hidricos_CART_15,
                popuplayertitle: 'recursos_hidricos_CART',
                interactive: true,
    title: 'recursos_hidricos_CART<br />\
    <img src="styles/legend/recursos_hidricos_CART_15_0.png" /> Captação Assis<br />\
    <img src="styles/legend/recursos_hidricos_CART_15_1.png" /> Captação Bauru<br />\
    <img src="styles/legend/recursos_hidricos_CART_15_2.png" /> Captação Ourinhos<br />\
    <img src="styles/legend/recursos_hidricos_CART_15_3.png" /> <br />'
        });
var format_recursos_hidricos_CART_intercepta_16 = new ol.format.GeoJSON();
var features_recursos_hidricos_CART_intercepta_16 = format_recursos_hidricos_CART_intercepta_16.readFeatures(json_recursos_hidricos_CART_intercepta_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_recursos_hidricos_CART_intercepta_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_recursos_hidricos_CART_intercepta_16.addFeatures(features_recursos_hidricos_CART_intercepta_16);
var lyr_recursos_hidricos_CART_intercepta_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_recursos_hidricos_CART_intercepta_16, 
                style: style_recursos_hidricos_CART_intercepta_16,
                popuplayertitle: 'recursos_hidricos_CART_intercepta',
                interactive: true,
                title: '<img src="styles/legend/recursos_hidricos_CART_intercepta_16.png" /> recursos_hidricos_CART_intercepta'
            });
var format_APPs_CART_17 = new ol.format.GeoJSON();
var features_APPs_CART_17 = format_APPs_CART_17.readFeatures(json_APPs_CART_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_APPs_CART_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APPs_CART_17.addFeatures(features_APPs_CART_17);
var lyr_APPs_CART_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APPs_CART_17, 
                style: style_APPs_CART_17,
                popuplayertitle: 'APPs_CART',
                interactive: true,
                title: '<img src="styles/legend/APPs_CART_17.png" /> APPs_CART'
            });
var format_Pontos_sensiveis_CART_18 = new ol.format.GeoJSON();
var features_Pontos_sensiveis_CART_18 = format_Pontos_sensiveis_CART_18.readFeatures(json_Pontos_sensiveis_CART_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Pontos_sensiveis_CART_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pontos_sensiveis_CART_18.addFeatures(features_Pontos_sensiveis_CART_18);
var lyr_Pontos_sensiveis_CART_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pontos_sensiveis_CART_18, 
                style: style_Pontos_sensiveis_CART_18,
                popuplayertitle: 'Pontos_sensiveis_CART',
                interactive: true,
                title: '<img src="styles/legend/Pontos_sensiveis_CART_18.png" /> Pontos_sensiveis_CART'
            });
var format_Infra_linear_CART_19 = new ol.format.GeoJSON();
var features_Infra_linear_CART_19 = format_Infra_linear_CART_19.readFeatures(json_Infra_linear_CART_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Infra_linear_CART_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infra_linear_CART_19.addFeatures(features_Infra_linear_CART_19);
var lyr_Infra_linear_CART_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infra_linear_CART_19, 
                style: style_Infra_linear_CART_19,
                popuplayertitle: 'Infra_linear_CART',
                interactive: true,
                title: '<img src="styles/legend/Infra_linear_CART_19.png" /> Infra_linear_CART'
            });
var format_AIA_CART_20 = new ol.format.GeoJSON();
var features_AIA_CART_20 = format_AIA_CART_20.readFeatures(json_AIA_CART_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_AIA_CART_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AIA_CART_20.addFeatures(features_AIA_CART_20);
var lyr_AIA_CART_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AIA_CART_20, 
                style: style_AIA_CART_20,
                popuplayertitle: 'AIA_CART',
                interactive: true,
                title: '<img src="styles/legend/AIA_CART_20.png" /> AIA_CART'
            });
var format_Ruidos_CART_21 = new ol.format.GeoJSON();
var features_Ruidos_CART_21 = format_Ruidos_CART_21.readFeatures(json_Ruidos_CART_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:31982'});
var jsonSource_Ruidos_CART_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ruidos_CART_21.addFeatures(features_Ruidos_CART_21);
var lyr_Ruidos_CART_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ruidos_CART_21, 
                style: style_Ruidos_CART_21,
                popuplayertitle: 'Ruidos_CART',
                interactive: true,
    title: 'Ruidos_CART<br />\
    <img src="styles/legend/Ruidos_CART_21_0.png" /> 235,200<br />\
    <img src="styles/legend/Ruidos_CART_21_1.png" /> 235,250<br />\
    <img src="styles/legend/Ruidos_CART_21_2.png" /> 235,300<br />\
    <img src="styles/legend/Ruidos_CART_21_3.png" /> 235,400<br />\
    <img src="styles/legend/Ruidos_CART_21_4.png" /> 235,450<br />\
    <img src="styles/legend/Ruidos_CART_21_5.png" /> 235,500<br />\
    <img src="styles/legend/Ruidos_CART_21_6.png" /> 285,600<br />'
        });
var group_SuscetibilidadeAmbiental = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Suscetibilidade Ambiental'});
var group_Linha = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Linha'});
var group_Pontos = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Pontos'});
var group_subgroup1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'sub-group1'});
var group_QuilombosNh = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Quilombos (N há)'});
var group_CavidadesNaturaisNh = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Cavidades Naturais (N há)'});
var group_TerraIndgenasNh = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Terra Indígenas (N há)'});
var group_UGRHI = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'UGRHI'});
var group_Rudo = new ol.layer.Group({
                                layers: [lyr_Ruidos_CART_21,],
                                fold: "open",
                                title: 'Ruído'});
var group_AIAs = new ol.layer.Group({
                                layers: [lyr_AIA_CART_20,],
                                fold: "open",
                                title: 'AIAs'});
var group_InfraestruturaCompartilhada = new ol.layer.Group({
                                layers: [lyr_Infra_linear_CART_19,],
                                fold: "open",
                                title: 'Infraestrutura Compartilhada'});
var group_RecursosHdricos = new ol.layer.Group({
                                layers: [lyr_recursos_hidricos_CART_15,lyr_recursos_hidricos_CART_intercepta_16,lyr_APPs_CART_17,lyr_Pontos_sensiveis_CART_18,],
                                fold: "open",
                                title: 'Recursos Hídricos'});
var group_InstalaesdeApoio = new ol.layer.Group({
                                layers: [lyr_Instalacoes_Apoio_CART_14,],
                                fold: "open",
                                title: 'Instalações de Apoio'});
var group_reasContaminadas = new ol.layer.Group({
                                layers: [lyr_Areas_Contaminadas_SP_28_08_24_CART_13,],
                                fold: "open",
                                title: 'Áreas Contaminadas'});
var group_FDADAAIDeAII = new ol.layer.Group({
                                layers: [lyr_FD_CART_dissolvido_10,lyr_AII_CART_11,lyr_AID_CART_dissolvido_12,],
                                fold: "open",
                                title: 'FD (ADA), AID e AII'});
var group_DivisoentrePistas = new ol.layer.Group({
                                layers: [lyr_BARREIRAS_NEWJERSEY_9,],
                                fold: "open",
                                title: 'Divisão entre Pistas'});
var group_Geografia = new ol.layer.Group({
                                layers: [lyr_Estados_7,lyr_Municipios_AII_8,],
                                fold: "open",
                                title: 'Geografia'});
var group_readeProteodeManancial = new ol.layer.Group({
                                layers: [lyr_APM_Batalha_CART_6,],
                                fold: "open",
                                title: 'Área de Proteção de Manancial'});
var group_UCs = new ol.layer.Group({
                                layers: [lyr_UCs_CART_4,lyr_ZA_UCs_CART_5,],
                                fold: "open",
                                title: 'UCs'});
var group_UsodoSoloereaUrbanizada = new ol.layer.Group({
                                layers: [lyr_Uso_Solo_2023_mapbiomas_utm22s_3,],
                                fold: "open",
                                title: 'Uso do Solo e Área Urbanizada'});
var group_Rodovia = new ol.layer.Group({
                                layers: [lyr_Malha_CART_1,lyr_km_cart_LO_2,],
                                fold: "open",
                                title: 'Rodovia'});
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatellite_0,],
                                fold: "open",
                                title: 'BaseMaps'});

lyr_GoogleSatellite_0.setVisible(true);lyr_Malha_CART_1.setVisible(true);lyr_km_cart_LO_2.setVisible(true);lyr_Uso_Solo_2023_mapbiomas_utm22s_3.setVisible(true);lyr_UCs_CART_4.setVisible(true);lyr_ZA_UCs_CART_5.setVisible(true);lyr_APM_Batalha_CART_6.setVisible(true);lyr_Estados_7.setVisible(true);lyr_Municipios_AII_8.setVisible(true);lyr_BARREIRAS_NEWJERSEY_9.setVisible(true);lyr_FD_CART_dissolvido_10.setVisible(true);lyr_AII_CART_11.setVisible(true);lyr_AID_CART_dissolvido_12.setVisible(true);lyr_Areas_Contaminadas_SP_28_08_24_CART_13.setVisible(true);lyr_Instalacoes_Apoio_CART_14.setVisible(true);lyr_recursos_hidricos_CART_15.setVisible(true);lyr_recursos_hidricos_CART_intercepta_16.setVisible(true);lyr_APPs_CART_17.setVisible(true);lyr_Pontos_sensiveis_CART_18.setVisible(true);lyr_Infra_linear_CART_19.setVisible(true);lyr_AIA_CART_20.setVisible(true);lyr_Ruidos_CART_21.setVisible(true);
var layersList = [group_BaseMaps,group_Rodovia,group_UsodoSoloereaUrbanizada,group_UCs,group_readeProteodeManancial,group_Geografia,group_DivisoentrePistas,group_FDADAAIDeAII,group_reasContaminadas,group_InstalaesdeApoio,group_RecursosHdricos,group_InfraestruturaCompartilhada,group_AIAs,group_Rudo];
lyr_Malha_CART_1.set('fieldAliases', {'Rodovia': 'Rodovia', });
lyr_km_cart_LO_2.set('fieldAliases', {'Rodovia': 'Rodovia', 'km': 'km', });
lyr_Uso_Solo_2023_mapbiomas_utm22s_3.set('fieldAliases', {'Rodovia': 'Rodovia', 'Área': 'Área', 'Uso Solo': 'Uso Solo', });
lyr_UCs_CART_4.set('fieldAliases', {'Categoria': 'Categoria', 'Esfera': 'Esfera', 'Órgão': 'Órgão', 'Denominaç': 'Denominaç', 'Proteção': 'Proteção', 'Legislacao': 'Legislacao', });
lyr_ZA_UCs_CART_5.set('fieldAliases', {'id': 'id', 'nome': 'nome', 'abrev': 'abrev', });
lyr_APM_Batalha_CART_6.set('fieldAliases', {'Nome': 'Nome', 'Legislaç�': 'Legislaç�', 'Zoneamento': 'Zoneamento', });
lyr_Estados_7.set('fieldAliases', {'CD_UF': 'CD_UF', 'NM_UF': 'NM_UF', 'SIGLA_UF': 'SIGLA_UF', 'NM_REGIAO': 'NM_REGIAO', 'AREA_KM2': 'AREA_KM2', });
lyr_Municipios_AII_8.set('fieldAliases', {'CD_MUN': 'CD_MUN', 'NM_MUN': 'NM_MUN', 'SIGLA_UF': 'SIGLA_UF', 'AREA_KM2': 'AREA_KM2', });
lyr_BARREIRAS_NEWJERSEY_9.set('fieldAliases', {'Seq': 'Seq', 'Cod': 'Cod', 'Tipo': 'Tipo', 'KM': 'KM', 'Sentido': 'Sentido', 'Rodovia': 'Rodovia', 'sp': 'sp', 'Via': 'Via', 'Lado': 'Lado', 'fOAE': 'fOAE', 'lat1': 'lat1', 'long1': 'long1', 'fix1': 'fix1', 'Altura1': 'Altura1', 'Espelho1': 'Espelho1', 'lat2': 'lat2', 'long2': 'long2', 'fix2': 'fix2', 'Altura2': 'Altura2', 'Espelho2': 'Espelho2', 'obs2': 'obs2', 'comprim': 'comprim', 'comp qgis': 'comp qgis', 'dif': 'dif', });
lyr_FD_CART_dissolvido_10.set('fieldAliases', {'Name': 'Name', 'Rodovia': 'Rodovia', });
lyr_AII_CART_11.set('fieldAliases', {'Rodovia': 'Rodovia', });
lyr_AID_CART_dissolvido_12.set('fieldAliases', {'Rodovia': 'Rodovia', });
lyr_Areas_Contaminadas_SP_28_08_24_CART_13.set('fieldAliases', {'Classifica': 'Classifica', 'Grupo de C': 'Grupo de C', 'Medidas de': 'Medidas de', 'Rodovia': 'Rodovia', 'Km': 'Km', 'Distância': 'Distância', 'RazaoSocia': 'RazaoSocia', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Instalacoes_Apoio_CART_14.set('fieldAliases', {'Rodovia': 'Rodovia', 'Estrutura': 'Estrutura', 'km': 'km', });
lyr_recursos_hidricos_CART_15.set('fieldAliases', {'Sensibilid': 'Sensibilid', 'Captação': 'Captação', 'Km_inicio': 'Km_inicio', 'Km_fim': 'Km_fim', 'Sentido': 'Sentido', 'x': 'x', 'y': 'y', 'Rodovia': 'Rodovia', 'Num': 'Num', 'Nome': 'Nome', 'Municipio': 'Municipio', 'Classe_uso': 'Classe_uso', 'Sensível': 'Sensível', 'Distancia': 'Distancia', });
lyr_recursos_hidricos_CART_intercepta_16.set('fieldAliases', {'Rodovia': 'Rodovia', 'km inicial': 'km inicial', 'nome': 'nome', 'Sensível': 'Sensível', 'dist sensi': 'dist sensi', });
lyr_APPs_CART_17.set('fieldAliases', {'Sensibilid': 'Sensibilid', 'Captação': 'Captação', 'Km_inicio': 'Km_inicio', 'Km_fim': 'Km_fim', 'Sentido': 'Sentido', 'x': 'x', 'y': 'y', 'Rodovia': 'Rodovia', 'Num': 'Num', 'Nome': 'Nome', 'Municipio': 'Municipio', 'Classe_uso': 'Classe_uso', 'Sensível': 'Sensível', 'Distancia': 'Distancia', 'layer': 'layer', 'path': 'path', });
lyr_Pontos_sensiveis_CART_18.set('fieldAliases', {'Rodovia': 'Rodovia', 'km': 'km', 'P_sensivel': 'P_sensivel', });
lyr_Infra_linear_CART_19.set('fieldAliases', {'Situacao': 'Situacao', 'Infra': 'Infra', 'Descricao': 'Descricao', 'km': 'km', 'Rodovia': 'Rodovia', });
lyr_AIA_CART_20.set('fieldAliases', {'Rodovia': 'Rodovia', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Tipo': 'Tipo', 'Nº': 'Nº', 'Emissao': 'Emissao', 'Enquad': 'Enquad', 'Valor': 'Valor', 'Status': 'Status', 'Processo': 'Processo', });
lyr_Ruidos_CART_21.set('fieldAliases', {'Rodovia': 'Rodovia', 'Com_Sem Al': 'Com_Sem Al', 'Ocupacao': 'Ocupacao', 'RPC': 'RPC', 'Mitigacao': 'Mitigacao', 'km': 'km', });
lyr_Malha_CART_1.set('fieldImages', {'Rodovia': '', });
lyr_km_cart_LO_2.set('fieldImages', {'Rodovia': '', 'km': '', });
lyr_Uso_Solo_2023_mapbiomas_utm22s_3.set('fieldImages', {'Rodovia': '', 'Área': '', 'Uso Solo': '', });
lyr_UCs_CART_4.set('fieldImages', {'Categoria': '', 'Esfera': '', 'Órgão': '', 'Denominaç': '', 'Proteção': '', 'Legislacao': '', });
lyr_ZA_UCs_CART_5.set('fieldImages', {'id': '', 'nome': '', 'abrev': '', });
lyr_APM_Batalha_CART_6.set('fieldImages', {'Nome': '', 'Legislaç�': '', 'Zoneamento': '', });
lyr_Estados_7.set('fieldImages', {'CD_UF': '', 'NM_UF': '', 'SIGLA_UF': '', 'NM_REGIAO': '', 'AREA_KM2': '', });
lyr_Municipios_AII_8.set('fieldImages', {'CD_MUN': '', 'NM_MUN': '', 'SIGLA_UF': '', 'AREA_KM2': '', });
lyr_BARREIRAS_NEWJERSEY_9.set('fieldImages', {'Seq': '', 'Cod': '', 'Tipo': '', 'KM': '', 'Sentido': '', 'Rodovia': '', 'sp': '', 'Via': '', 'Lado': '', 'fOAE': '', 'lat1': '', 'long1': '', 'fix1': '', 'Altura1': '', 'Espelho1': '', 'lat2': '', 'long2': '', 'fix2': '', 'Altura2': '', 'Espelho2': '', 'obs2': '', 'comprim': '', 'comp qgis': '', 'dif': '', });
lyr_FD_CART_dissolvido_10.set('fieldImages', {'Name': '', 'Rodovia': '', });
lyr_AII_CART_11.set('fieldImages', {'Rodovia': '', });
lyr_AID_CART_dissolvido_12.set('fieldImages', {'Rodovia': '', });
lyr_Areas_Contaminadas_SP_28_08_24_CART_13.set('fieldImages', {'Classifica': '', 'Grupo de C': '', 'Medidas de': '', 'Rodovia': '', 'Km': '', 'Distância': '', 'RazaoSocia': '', 'Latitude': '', 'Longitude': '', });
lyr_Instalacoes_Apoio_CART_14.set('fieldImages', {'Rodovia': '', 'Estrutura': '', 'km': '', });
lyr_recursos_hidricos_CART_15.set('fieldImages', {'Sensibilid': '', 'Captação': '', 'Km_inicio': '', 'Km_fim': '', 'Sentido': '', 'x': '', 'y': '', 'Rodovia': '', 'Num': '', 'Nome': '', 'Municipio': '', 'Classe_uso': '', 'Sensível': '', 'Distancia': '', });
lyr_recursos_hidricos_CART_intercepta_16.set('fieldImages', {'Rodovia': '', 'km inicial': '', 'nome': '', 'Sensível': '', 'dist sensi': '', });
lyr_APPs_CART_17.set('fieldImages', {'Sensibilid': '', 'Captação': '', 'Km_inicio': '', 'Km_fim': '', 'Sentido': '', 'x': '', 'y': '', 'Rodovia': '', 'Num': '', 'Nome': '', 'Municipio': '', 'Classe_uso': '', 'Sensível': '', 'Distancia': '', 'layer': '', 'path': '', });
lyr_Pontos_sensiveis_CART_18.set('fieldImages', {'Rodovia': '', 'km': '', 'P_sensivel': '', });
lyr_Infra_linear_CART_19.set('fieldImages', {'Situacao': '', 'Infra': '', 'Descricao': '', 'km': '', 'Rodovia': '', });
lyr_AIA_CART_20.set('fieldImages', {'Rodovia': '', 'Longitude': '', 'Latitude': '', 'Tipo': '', 'Nº': '', 'Emissao': '', 'Enquad': '', 'Valor': '', 'Status': '', 'Processo': '', });
lyr_Ruidos_CART_21.set('fieldImages', {'Rodovia': '', 'Com_Sem Al': '', 'Ocupacao': '', 'RPC': '', 'Mitigacao': '', 'km': '', });
lyr_Malha_CART_1.set('fieldLabels', {'Rodovia': 'no label', });
lyr_km_cart_LO_2.set('fieldLabels', {'Rodovia': 'no label', 'km': 'no label', });
lyr_Uso_Solo_2023_mapbiomas_utm22s_3.set('fieldLabels', {'Rodovia': 'no label', 'Área': 'no label', 'Uso Solo': 'no label', });
lyr_UCs_CART_4.set('fieldLabels', {'Categoria': 'no label', 'Esfera': 'no label', 'Órgão': 'no label', 'Denominaç': 'no label', 'Proteção': 'no label', 'Legislacao': 'no label', });
lyr_ZA_UCs_CART_5.set('fieldLabels', {'id': 'no label', 'nome': 'no label', 'abrev': 'no label', });
lyr_APM_Batalha_CART_6.set('fieldLabels', {'Nome': 'no label', 'Legislaç�': 'no label', 'Zoneamento': 'no label', });
lyr_Estados_7.set('fieldLabels', {'CD_UF': 'no label', 'NM_UF': 'no label', 'SIGLA_UF': 'no label', 'NM_REGIAO': 'no label', 'AREA_KM2': 'no label', });
lyr_Municipios_AII_8.set('fieldLabels', {'CD_MUN': 'no label', 'NM_MUN': 'no label', 'SIGLA_UF': 'no label', 'AREA_KM2': 'no label', });
lyr_BARREIRAS_NEWJERSEY_9.set('fieldLabels', {'Seq': 'no label', 'Cod': 'no label', 'Tipo': 'no label', 'KM': 'no label', 'Sentido': 'no label', 'Rodovia': 'no label', 'sp': 'no label', 'Via': 'no label', 'Lado': 'no label', 'fOAE': 'no label', 'lat1': 'no label', 'long1': 'no label', 'fix1': 'no label', 'Altura1': 'no label', 'Espelho1': 'no label', 'lat2': 'no label', 'long2': 'no label', 'fix2': 'no label', 'Altura2': 'no label', 'Espelho2': 'no label', 'obs2': 'no label', 'comprim': 'no label', 'comp qgis': 'no label', 'dif': 'no label', });
lyr_FD_CART_dissolvido_10.set('fieldLabels', {'Name': 'no label', 'Rodovia': 'no label', });
lyr_AII_CART_11.set('fieldLabels', {'Rodovia': 'no label', });
lyr_AID_CART_dissolvido_12.set('fieldLabels', {'Rodovia': 'no label', });
lyr_Areas_Contaminadas_SP_28_08_24_CART_13.set('fieldLabels', {'Classifica': 'no label', 'Grupo de C': 'no label', 'Medidas de': 'no label', 'Rodovia': 'no label', 'Km': 'no label', 'Distância': 'no label', 'RazaoSocia': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', });
lyr_Instalacoes_Apoio_CART_14.set('fieldLabels', {'Rodovia': 'no label', 'Estrutura': 'inline label - always visible', 'km': 'no label', });
lyr_recursos_hidricos_CART_15.set('fieldLabels', {'Sensibilid': 'no label', 'Captação': 'no label', 'Km_inicio': 'no label', 'Km_fim': 'no label', 'Sentido': 'no label', 'x': 'no label', 'y': 'no label', 'Rodovia': 'no label', 'Num': 'no label', 'Nome': 'no label', 'Municipio': 'no label', 'Classe_uso': 'no label', 'Sensível': 'no label', 'Distancia': 'no label', });
lyr_recursos_hidricos_CART_intercepta_16.set('fieldLabels', {'Rodovia': 'no label', 'km inicial': 'no label', 'nome': 'no label', 'Sensível': 'no label', 'dist sensi': 'no label', });
lyr_APPs_CART_17.set('fieldLabels', {'Sensibilid': 'no label', 'Captação': 'no label', 'Km_inicio': 'no label', 'Km_fim': 'no label', 'Sentido': 'no label', 'x': 'no label', 'y': 'no label', 'Rodovia': 'no label', 'Num': 'no label', 'Nome': 'no label', 'Municipio': 'no label', 'Classe_uso': 'no label', 'Sensível': 'no label', 'Distancia': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Pontos_sensiveis_CART_18.set('fieldLabels', {'Rodovia': 'inline label - always visible', 'km': 'no label', 'P_sensivel': 'no label', });
lyr_Infra_linear_CART_19.set('fieldLabels', {'Situacao': 'no label', 'Infra': 'no label', 'Descricao': 'no label', 'km': 'no label', 'Rodovia': 'no label', });
lyr_AIA_CART_20.set('fieldLabels', {'Rodovia': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Tipo': 'no label', 'Nº': 'no label', 'Emissao': 'no label', 'Enquad': 'no label', 'Valor': 'no label', 'Status': 'no label', 'Processo': 'no label', });
lyr_Ruidos_CART_21.set('fieldLabels', {'Rodovia': 'no label', 'Com_Sem Al': 'no label', 'Ocupacao': 'no label', 'RPC': 'no label', 'Mitigacao': 'no label', 'km': 'no label', });
lyr_Ruidos_CART_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});