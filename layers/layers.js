var wms_layers = [];

var format_batusempadan_0 = new ol.format.GeoJSON();
var features_batusempadan_0 = format_batusempadan_0.readFeatures(json_batusempadan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_batusempadan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_batusempadan_0.addFeatures(features_batusempadan_0);
var lyr_batusempadan_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_batusempadan_0, 
                style: style_batusempadan_0,
                popuplayertitle: 'batusempadan',
                interactive: true,
                title: '<img src="styles/legend/batusempadan_0.png" /> batusempadan'
            });
var format_tandasempadan13clean_1 = new ol.format.GeoJSON();
var features_tandasempadan13clean_1 = format_tandasempadan13clean_1.readFeatures(json_tandasempadan13clean_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tandasempadan13clean_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tandasempadan13clean_1.addFeatures(features_tandasempadan13clean_1);
var lyr_tandasempadan13clean_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tandasempadan13clean_1, 
                style: style_tandasempadan13clean_1,
                popuplayertitle: 'tanda sempadan 13 clean',
                interactive: true,
                title: '<img src="styles/legend/tandasempadan13clean_1.png" /> tanda sempadan 13 clean'
            });
var format_LOTFINAL_2 = new ol.format.GeoJSON();
var features_LOTFINAL_2 = format_LOTFINAL_2.readFeatures(json_LOTFINAL_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LOTFINAL_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LOTFINAL_2.addFeatures(features_LOTFINAL_2);
var lyr_LOTFINAL_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LOTFINAL_2, 
                style: style_LOTFINAL_2,
                popuplayertitle: 'LOT FINAL',
                interactive: true,
                title: '<img src="styles/legend/LOTFINAL_2.png" /> LOT FINAL'
            });

lyr_batusempadan_0.setVisible(true);lyr_tandasempadan13clean_1.setVisible(true);lyr_LOTFINAL_2.setVisible(true);
var layersList = [lyr_batusempadan_0,lyr_tandasempadan13clean_1,lyr_LOTFINAL_2];
lyr_batusempadan_0.set('fieldAliases', {'B': 'B', 'U': 'U', });
lyr_tandasempadan13clean_1.set('fieldAliases', {'B': 'B', 'U': 'U', });
lyr_LOTFINAL_2.set('fieldAliases', {'NO_LOT': 'NO_LOT', 'AREA': 'AREA', 'NO LOT': 'NO LOT', 'layer': 'layer', 'path': 'path', 'tsp — ha': 'tsp — ha', 'tsp — _1': 'tsp — _1', 'tsp — pe': 'tsp — pe', });
lyr_batusempadan_0.set('fieldImages', {'B': '', 'U': '', });
lyr_tandasempadan13clean_1.set('fieldImages', {'B': '', 'U': '', });
lyr_LOTFINAL_2.set('fieldImages', {'NO_LOT': 'TextEdit', 'AREA': 'TextEdit', 'NO LOT': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'tsp — ha': 'TextEdit', 'tsp — _1': 'TextEdit', 'tsp — pe': 'TextEdit', });
lyr_batusempadan_0.set('fieldLabels', {'B': 'inline label - always visible', 'U': 'header label - visible with data', });
lyr_tandasempadan13clean_1.set('fieldLabels', {'B': 'no label', 'U': 'no label', });
lyr_LOTFINAL_2.set('fieldLabels', {'NO_LOT': 'header label - visible with data', 'AREA': 'no label', 'NO LOT': 'no label', 'layer': 'no label', 'path': 'no label', 'tsp — ha': 'no label', 'tsp — _1': 'no label', 'tsp — pe': 'no label', });
lyr_LOTFINAL_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});