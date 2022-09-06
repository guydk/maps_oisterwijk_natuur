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
                interactive: true,
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
                interactive: true,
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
                interactive: true,
                title: '<img src="styles/legend/gemeentegrensowijk_3.png" /> gemeentegrensowijk'
            });
var format_NNN_owijkregio_4 = new ol.format.GeoJSON();
var features_NNN_owijkregio_4 = format_NNN_owijkregio_4.readFeatures(json_NNN_owijkregio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NNN_owijkregio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NNN_owijkregio_4.addFeatures(features_NNN_owijkregio_4);
var lyr_NNN_owijkregio_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NNN_owijkregio_4, 
                style: style_NNN_owijkregio_4,
                interactive: true,
                title: '<img src="styles/legend/NNN_owijkregio_4.png" /> NNN_owijkregio'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_N2000Owijk_rand500m_cutout_1.setVisible(true);lyr_N2000_gemOisterwijk_2.setVisible(true);lyr_gemeentegrensowijk_3.setVisible(true);lyr_NNN_owijkregio_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_N2000Owijk_rand500m_cutout_1,lyr_N2000_gemOisterwijk_2,lyr_gemeentegrensowijk_3,lyr_NNN_owijkregio_4];
lyr_N2000Owijk_rand500m_cutout_1.set('fieldAliases', {'fid': 'fid', 'naam_n2k': 'naam_n2k', 'vhn_new': 'vhn_new', 'nr': 'nr', 'bescherming': 'bescherming', 'sitecode_v': 'sitecode_v', 'sitecode_h': 'sitecode_h', 'status': 'status', 'kadaster': 'kadaster', 'staatscourant': 'staatscourant', });
lyr_N2000_gemOisterwijk_2.set('fieldAliases', {'fid': 'fid', 'naam_n2k': 'naam_n2k', 'vhn_new': 'vhn_new', 'nr': 'nr', 'bescherming': 'bescherming', 'sitecode_v': 'sitecode_v', 'sitecode_h': 'sitecode_h', 'status': 'status', 'kadaster': 'kadaster', 'staatscourant': 'staatscourant', });
lyr_gemeentegrensowijk_3.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'gemeentenaam': 'gemeentenaam', });
lyr_NNN_owijkregio_4.set('fieldAliases', {'fid': 'fid', 'primaryindex': 'primaryindex', 'inspireID_LocalId': 'inspireID_LocalId', 'inspireID_Namespace': 'inspireID_Namespace', 'inspireID_Version': 'inspireID_Version', 'legalFoundationDocument_nil': 'legalFoundationDocument_nil', 'legalFoundationDate': 'legalFoundationDate', 'legalFoundationDocument_Date': 'legalFoundationDocument_Date', 'legalFoundationDocument_Title': 'legalFoundationDocument_Title', 'siteDesignation_nilReason': 'siteDesignation_nilReason', 'designationScheme': 'designationScheme', 'designation': 'designation', 'percentageUnderDesignation': 'percentageUnderDesignation', 'siteName_Language': 'siteName_Language', 'siteName_Spelling': 'siteName_Spelling', 'siteProtectionClassification': 'siteProtectionClassification', });
lyr_N2000Owijk_rand500m_cutout_1.set('fieldImages', {'fid': 'TextEdit', 'naam_n2k': 'TextEdit', 'vhn_new': 'TextEdit', 'nr': 'TextEdit', 'bescherming': 'TextEdit', 'sitecode_v': 'TextEdit', 'sitecode_h': 'TextEdit', 'status': 'TextEdit', 'kadaster': 'TextEdit', 'staatscourant': 'TextEdit', });
lyr_N2000_gemOisterwijk_2.set('fieldImages', {'fid': 'TextEdit', 'naam_n2k': 'TextEdit', 'vhn_new': 'TextEdit', 'nr': 'TextEdit', 'bescherming': 'TextEdit', 'sitecode_v': 'TextEdit', 'sitecode_h': 'TextEdit', 'status': 'TextEdit', 'kadaster': 'TextEdit', 'staatscourant': 'TextEdit', });
lyr_gemeentegrensowijk_3.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'gemeentenaam': 'TextEdit', });
lyr_NNN_owijkregio_4.set('fieldImages', {'fid': 'TextEdit', 'primaryindex': 'TextEdit', 'inspireID_LocalId': 'TextEdit', 'inspireID_Namespace': 'TextEdit', 'inspireID_Version': 'TextEdit', 'legalFoundationDocument_nil': 'TextEdit', 'legalFoundationDate': 'TextEdit', 'legalFoundationDocument_Date': 'TextEdit', 'legalFoundationDocument_Title': 'TextEdit', 'siteDesignation_nilReason': 'TextEdit', 'designationScheme': 'TextEdit', 'designation': 'TextEdit', 'percentageUnderDesignation': 'TextEdit', 'siteName_Language': 'TextEdit', 'siteName_Spelling': 'TextEdit', 'siteProtectionClassification': 'TextEdit', });
lyr_N2000Owijk_rand500m_cutout_1.set('fieldLabels', {'fid': 'no label', 'naam_n2k': 'no label', 'vhn_new': 'no label', 'nr': 'no label', 'bescherming': 'no label', 'sitecode_v': 'no label', 'sitecode_h': 'no label', 'status': 'no label', 'kadaster': 'no label', 'staatscourant': 'no label', });
lyr_N2000_gemOisterwijk_2.set('fieldLabels', {'fid': 'no label', 'naam_n2k': 'no label', 'vhn_new': 'no label', 'nr': 'no label', 'bescherming': 'no label', 'sitecode_v': 'no label', 'sitecode_h': 'no label', 'status': 'no label', 'kadaster': 'no label', 'staatscourant': 'no label', });
lyr_gemeentegrensowijk_3.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'gemeentenaam': 'no label', });
lyr_NNN_owijkregio_4.set('fieldLabels', {'fid': 'no label', 'primaryindex': 'no label', 'inspireID_LocalId': 'no label', 'inspireID_Namespace': 'no label', 'inspireID_Version': 'no label', 'legalFoundationDocument_nil': 'no label', 'legalFoundationDate': 'no label', 'legalFoundationDocument_Date': 'no label', 'legalFoundationDocument_Title': 'no label', 'siteDesignation_nilReason': 'no label', 'designationScheme': 'no label', 'designation': 'no label', 'percentageUnderDesignation': 'no label', 'siteName_Language': 'no label', 'siteName_Spelling': 'no label', 'siteProtectionClassification': 'no label', });
lyr_NNN_owijkregio_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});