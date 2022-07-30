var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_BlockGroup_1 = new ol.format.GeoJSON();
var features_BlockGroup_1 = format_BlockGroup_1.readFeatures(json_BlockGroup_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BlockGroup_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BlockGroup_1.addFeatures(features_BlockGroup_1);
var lyr_BlockGroup_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BlockGroup_1, 
                style: style_BlockGroup_1,
                interactive: true,
                title: '<img src="styles/legend/BlockGroup_1.png" /> Block Group'
            });
var format_Tract_2 = new ol.format.GeoJSON();
var features_Tract_2 = format_Tract_2.readFeatures(json_Tract_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tract_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tract_2.addFeatures(features_Tract_2);
var lyr_Tract_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tract_2, 
                style: style_Tract_2,
                interactive: true,
                title: '<img src="styles/legend/Tract_2.png" /> Tract'
            });
var format_Zipcodes_3 = new ol.format.GeoJSON();
var features_Zipcodes_3 = format_Zipcodes_3.readFeatures(json_Zipcodes_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zipcodes_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zipcodes_3.addFeatures(features_Zipcodes_3);
var lyr_Zipcodes_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zipcodes_3, 
                style: style_Zipcodes_3,
                interactive: true,
                title: '<img src="styles/legend/Zipcodes_3.png" /> Zipcodes'
            });

lyr_OSMStandard_0.setVisible(true);lyr_BlockGroup_1.setVisible(true);lyr_Tract_2.setVisible(true);lyr_Zipcodes_3.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_BlockGroup_1,lyr_Tract_2,lyr_Zipcodes_3];
lyr_BlockGroup_1.set('fieldAliases', {'GISJOIN': 'GISJOIN', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'BLKGRPCE': 'BLKGRPCE', 'GEOID': 'GEOID', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Tract_2.set('fieldAliases', {'GISJOIN': 'GISJOIN', 'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'TRACTCE': 'TRACTCE', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Zipcodes_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ZIP': 'ZIP', 'ZIPCODE': 'ZIPCODE', 'COUNTY': 'COUNTY', 'ZIP_TYPE': 'ZIP_TYPE', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'COUNTY_NAM': 'COUNTY_NAM', 'PREFERRED_': 'PREFERRED_', });
lyr_BlockGroup_1.set('fieldImages', {'GISJOIN': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'BLKGRPCE': 'TextEdit', 'GEOID': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Tract_2.set('fieldImages', {'GISJOIN': 'TextEdit', 'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'TRACTCE': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'MTFCC': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Zipcodes_3.set('fieldImages', {'OBJECTID': 'Range', 'ZIP': 'Range', 'ZIPCODE': 'TextEdit', 'COUNTY': 'TextEdit', 'ZIP_TYPE': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'COUNTY_NAM': 'TextEdit', 'PREFERRED_': 'TextEdit', });
lyr_BlockGroup_1.set('fieldLabels', {'GISJOIN': 'no label', 'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'BLKGRPCE': 'no label', 'GEOID': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Tract_2.set('fieldLabels', {'GISJOIN': 'no label', 'STATEFP': 'no label', 'COUNTYFP': 'no label', 'TRACTCE': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'MTFCC': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Zipcodes_3.set('fieldLabels', {'OBJECTID': 'no label', 'ZIP': 'no label', 'ZIPCODE': 'no label', 'COUNTY': 'no label', 'ZIP_TYPE': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'COUNTY_NAM': 'no label', 'PREFERRED_': 'no label', });
lyr_Zipcodes_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});