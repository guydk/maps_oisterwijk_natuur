var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_N2000Owijk_rand500m_cutout_1 = new ol.format.GeoJSON();
var features_N2000Owijk_rand500m_cutout_1 = format_N2000Owijk_rand500m_cutout_1.readFeatures(json_N2000Owijk_rand500m_cutout_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N2000Owijk_rand500m_cutout_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N2000Owijk_rand500m_cutout_1.addFeatures(features_N2000Owijk_rand500m_cutout_1);
var lyr_N2000Owijk_rand500m_cutout_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_N2000Owijk_rand500m_cutout_1, 
                style: style_N2000Owijk_rand500m_cutout_1,
                interactive: false,
                title: '<img src="styles/legend/N2000Owijk_rand500m_cutout_1.png" /> N2000Owijk_rand500m_cutout'
            });
var format_N2000_gemOisterwijk_2 = new ol.format.GeoJSON();
var features_N2000_gemOisterwijk_2 = format_N2000_gemOisterwijk_2.readFeatures(json_N2000_gemOisterwijk_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_N2000_gemOisterwijk_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_N2000_gemOisterwijk_2.addFeatures(features_N2000_gemOisterwijk_2);
var lyr_N2000_gemOisterwijk_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_N2000_gemOisterwijk_2, 
                style: style_N2000_gemOisterwijk_2,
                interactive: false,
                title: '<img src="styles/legend/N2000_gemOisterwijk_2.png" /> N2000_gemOisterwijk'
            });
var format_gemeentegrensowijk_3 = new ol.format.GeoJSON();
var features_gemeentegrensowijk_3 = format_gemeentegrensowijk_3.readFeatures(json_gemeentegrensowijk_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_gemeentegrensowijk_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_gemeentegrensowijk_3.addFeatures(features_gemeentegrensowijk_3);
var lyr_gemeentegrensowijk_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_gemeentegrensowijk_3, 
                style: style_gemeentegrensowijk_3,
                interactive: false,
                title: '<img src="styles/legend/gemeentegrensowijk_3.png" /> gemeentegrensowijk'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_N2000Owijk_rand500m_cutout_1.setVisible(true);lyr_N2000_gemOisterwijk_2.setVisible(true);lyr_gemeentegrensowijk_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_N2000Owijk_rand500m_cutout_1,lyr_N2000_gemOisterwijk_2,lyr_gemeentegrensowijk_3];
lyr_N2000Owijk_rand500m_cutout_1.set('fieldAliases', {'fid': 'fid', 'naam_n2k': 'naam_n2k', 'vhn_new': 'vhn_new', 'nr': 'nr', 'bescherming': 'bescherming', 'sitecode_v': 'sitecode_v', 'sitecode_h': 'sitecode_h', 'status': 'status', 'kadaster': 'kadaster', 'staatscourant': 'staatscourant', });
lyr_N2000_gemOisterwijk_2.set('fieldAliases', {'fid': 'fid', 'naam_n2k': 'naam_n2k', 'vhn_new': 'vhn_new', 'nr': 'nr', 'bescherming': 'bescherming', 'sitecode_v': 'sitecode_v', 'sitecode_h': 'sitecode_h', 'status': 'status', 'kadaster': 'kadaster', 'staatscourant': 'staatscourant', });
lyr_gemeentegrensowijk_3.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'gemeentenaam': 'gemeentenaam', });
lyr_N2000Owijk_rand500m_cutout_1.set('fieldImages', {'fid': 'TextEdit', 'naam_n2k': 'TextEdit', 'vhn_new': 'TextEdit', 'nr': 'TextEdit', 'bescherming': 'TextEdit', 'sitecode_v': 'TextEdit', 'sitecode_h': 'TextEdit', 'status': 'TextEdit', 'kadaster': 'TextEdit', 'staatscourant': 'TextEdit', });
lyr_N2000_gemOisterwijk_2.set('fieldImages', {'fid': 'TextEdit', 'naam_n2k': 'TextEdit', 'vhn_new': 'TextEdit', 'nr': 'TextEdit', 'bescherming': 'TextEdit', 'sitecode_v': 'TextEdit', 'sitecode_h': 'TextEdit', 'status': 'TextEdit', 'kadaster': 'TextEdit', 'staatscourant': 'TextEdit', });
lyr_gemeentegrensowijk_3.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'gemeentenaam': 'TextEdit', });
lyr_N2000Owijk_rand500m_cutout_1.set('fieldLabels', {'fid': 'no label', 'naam_n2k': 'no label', 'vhn_new': 'no label', 'nr': 'no label', 'bescherming': 'no label', 'sitecode_v': 'no label', 'sitecode_h': 'no label', 'status': 'no label', 'kadaster': 'no label', 'staatscourant': 'no label', });
lyr_N2000_gemOisterwijk_2.set('fieldLabels', {'fid': 'no label', 'naam_n2k': 'no label', 'vhn_new': 'no label', 'nr': 'no label', 'bescherming': 'no label', 'sitecode_v': 'no label', 'sitecode_h': 'no label', 'status': 'no label', 'kadaster': 'no label', 'staatscourant': 'no label', });
lyr_gemeentegrensowijk_3.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'gemeentenaam': 'no label', });
lyr_gemeentegrensowijk_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});