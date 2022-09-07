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
var format_Zone500mrondNatuurnetwerkexclusiefbebouwdekom_1 = new ol.format.GeoJSON();
var features_Zone500mrondNatuurnetwerkexclusiefbebouwdekom_1 = format_Zone500mrondNatuurnetwerkexclusiefbebouwdekom_1.readFeatures(json_Zone500mrondNatuurnetwerkexclusiefbebouwdekom_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone500mrondNatuurnetwerkexclusiefbebouwdekom_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone500mrondNatuurnetwerkexclusiefbebouwdekom_1.addFeatures(features_Zone500mrondNatuurnetwerkexclusiefbebouwdekom_1);
var lyr_Zone500mrondNatuurnetwerkexclusiefbebouwdekom_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zone500mrondNatuurnetwerkexclusiefbebouwdekom_1, 
                style: style_Zone500mrondNatuurnetwerkexclusiefbebouwdekom_1,
                interactive: false,
                title: '<img src="styles/legend/Zone500mrondNatuurnetwerkexclusiefbebouwdekom_1.png" /> Zone 500m rond Natuurnetwerk, exclusief bebouwde kom'
            });
var format_NatuurnetwerkNederlandBrabantregio_2 = new ol.format.GeoJSON();
var features_NatuurnetwerkNederlandBrabantregio_2 = format_NatuurnetwerkNederlandBrabantregio_2.readFeatures(json_NatuurnetwerkNederlandBrabantregio_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NatuurnetwerkNederlandBrabantregio_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NatuurnetwerkNederlandBrabantregio_2.addFeatures(features_NatuurnetwerkNederlandBrabantregio_2);
var lyr_NatuurnetwerkNederlandBrabantregio_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NatuurnetwerkNederlandBrabantregio_2, 
                style: style_NatuurnetwerkNederlandBrabantregio_2,
                interactive: false,
                title: '<img src="styles/legend/NatuurnetwerkNederlandBrabantregio_2.png" /> Natuurnetwerk Nederland/Brabant (regio)'
            });
var format_Zone500mrondNatura2000exclusiefbebouwdekom_3 = new ol.format.GeoJSON();
var features_Zone500mrondNatura2000exclusiefbebouwdekom_3 = format_Zone500mrondNatura2000exclusiefbebouwdekom_3.readFeatures(json_Zone500mrondNatura2000exclusiefbebouwdekom_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zone500mrondNatura2000exclusiefbebouwdekom_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zone500mrondNatura2000exclusiefbebouwdekom_3.addFeatures(features_Zone500mrondNatura2000exclusiefbebouwdekom_3);
var lyr_Zone500mrondNatura2000exclusiefbebouwdekom_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Zone500mrondNatura2000exclusiefbebouwdekom_3, 
                style: style_Zone500mrondNatura2000exclusiefbebouwdekom_3,
                interactive: false,
                title: '<img src="styles/legend/Zone500mrondNatura2000exclusiefbebouwdekom_3.png" /> Zone 500m rond Natura2000, exclusief bebouwde kom'
            });
var format_Natura2000gebiedenregio_4 = new ol.format.GeoJSON();
var features_Natura2000gebiedenregio_4 = format_Natura2000gebiedenregio_4.readFeatures(json_Natura2000gebiedenregio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Natura2000gebiedenregio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Natura2000gebiedenregio_4.addFeatures(features_Natura2000gebiedenregio_4);
var lyr_Natura2000gebiedenregio_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Natura2000gebiedenregio_4, 
                style: style_Natura2000gebiedenregio_4,
                interactive: false,
                title: '<img src="styles/legend/Natura2000gebiedenregio_4.png" /> Natura2000 gebieden (regio)'
            });
var format_Gemeentegrenzen_5 = new ol.format.GeoJSON();
var features_Gemeentegrenzen_5 = format_Gemeentegrenzen_5.readFeatures(json_Gemeentegrenzen_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gemeentegrenzen_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gemeentegrenzen_5.addFeatures(features_Gemeentegrenzen_5);
var lyr_Gemeentegrenzen_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gemeentegrenzen_5, 
                style: style_Gemeentegrenzen_5,
                interactive: false,
                title: '<img src="styles/legend/Gemeentegrenzen_5.png" /> Gemeentegrenzen'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Zone500mrondNatuurnetwerkexclusiefbebouwdekom_1.setVisible(true);lyr_NatuurnetwerkNederlandBrabantregio_2.setVisible(true);lyr_Zone500mrondNatura2000exclusiefbebouwdekom_3.setVisible(false);lyr_Natura2000gebiedenregio_4.setVisible(false);lyr_Gemeentegrenzen_5.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Zone500mrondNatuurnetwerkexclusiefbebouwdekom_1,lyr_NatuurnetwerkNederlandBrabantregio_2,lyr_Zone500mrondNatura2000exclusiefbebouwdekom_3,lyr_Natura2000gebiedenregio_4,lyr_Gemeentegrenzen_5];
lyr_Zone500mrondNatuurnetwerkexclusiefbebouwdekom_1.set('fieldAliases', {'fid': 'fid', 'primaryindex': 'primaryindex', 'inspireID_LocalId': 'inspireID_LocalId', 'inspireID_Namespace': 'inspireID_Namespace', 'inspireID_Version': 'inspireID_Version', 'legalFoundationDocument_nil': 'legalFoundationDocument_nil', 'legalFoundationDate': 'legalFoundationDate', 'legalFoundationDocument_Date': 'legalFoundationDocument_Date', 'legalFoundationDocument_Title': 'legalFoundationDocument_Title', 'siteDesignation_nilReason': 'siteDesignation_nilReason', 'designationScheme': 'designationScheme', 'designation': 'designation', 'percentageUnderDesignation': 'percentageUnderDesignation', 'siteName_Language': 'siteName_Language', 'siteName_Spelling': 'siteName_Spelling', 'siteProtectionClassification': 'siteProtectionClassification', });
lyr_NatuurnetwerkNederlandBrabantregio_2.set('fieldAliases', {'fid': 'fid', 'primaryindex': 'primaryindex', 'inspireID_LocalId': 'inspireID_LocalId', 'inspireID_Namespace': 'inspireID_Namespace', 'inspireID_Version': 'inspireID_Version', 'legalFoundationDocument_nil': 'legalFoundationDocument_nil', 'legalFoundationDate': 'legalFoundationDate', 'legalFoundationDocument_Date': 'legalFoundationDocument_Date', 'legalFoundationDocument_Title': 'legalFoundationDocument_Title', 'siteDesignation_nilReason': 'siteDesignation_nilReason', 'designationScheme': 'designationScheme', 'designation': 'designation', 'percentageUnderDesignation': 'percentageUnderDesignation', 'siteName_Language': 'siteName_Language', 'siteName_Spelling': 'siteName_Spelling', 'siteProtectionClassification': 'siteProtectionClassification', });
lyr_Zone500mrondNatura2000exclusiefbebouwdekom_3.set('fieldAliases', {'fid': 'fid', 'naam_n2k': 'naam_n2k', 'vhn_new': 'vhn_new', 'nr': 'nr', 'bescherming': 'bescherming', 'sitecode_v': 'sitecode_v', 'sitecode_h': 'sitecode_h', 'status': 'status', 'kadaster': 'kadaster', 'staatscourant': 'staatscourant', });
lyr_Natura2000gebiedenregio_4.set('fieldAliases', {'fid': 'fid', 'naam_n2k': 'naam_n2k', 'vhn_new': 'vhn_new', 'nr': 'nr', 'bescherming': 'bescherming', 'sitecode_v': 'sitecode_v', 'sitecode_h': 'sitecode_h', 'status': 'status', 'kadaster': 'kadaster', 'staatscourant': 'staatscourant', });
lyr_Gemeentegrenzen_5.set('fieldAliases', {'fid': 'fid', 'code': 'code', 'gemeentenaam': 'gemeentenaam', });
lyr_Zone500mrondNatuurnetwerkexclusiefbebouwdekom_1.set('fieldImages', {'fid': 'TextEdit', 'primaryindex': 'TextEdit', 'inspireID_LocalId': 'TextEdit', 'inspireID_Namespace': 'TextEdit', 'inspireID_Version': 'TextEdit', 'legalFoundationDocument_nil': 'TextEdit', 'legalFoundationDate': 'TextEdit', 'legalFoundationDocument_Date': 'TextEdit', 'legalFoundationDocument_Title': 'TextEdit', 'siteDesignation_nilReason': 'TextEdit', 'designationScheme': 'TextEdit', 'designation': 'TextEdit', 'percentageUnderDesignation': 'TextEdit', 'siteName_Language': 'TextEdit', 'siteName_Spelling': 'TextEdit', 'siteProtectionClassification': 'TextEdit', });
lyr_NatuurnetwerkNederlandBrabantregio_2.set('fieldImages', {'fid': 'TextEdit', 'primaryindex': 'TextEdit', 'inspireID_LocalId': 'TextEdit', 'inspireID_Namespace': 'TextEdit', 'inspireID_Version': 'TextEdit', 'legalFoundationDocument_nil': 'TextEdit', 'legalFoundationDate': 'TextEdit', 'legalFoundationDocument_Date': 'TextEdit', 'legalFoundationDocument_Title': 'TextEdit', 'siteDesignation_nilReason': 'TextEdit', 'designationScheme': 'TextEdit', 'designation': 'TextEdit', 'percentageUnderDesignation': 'TextEdit', 'siteName_Language': 'TextEdit', 'siteName_Spelling': 'TextEdit', 'siteProtectionClassification': 'TextEdit', });
lyr_Zone500mrondNatura2000exclusiefbebouwdekom_3.set('fieldImages', {'fid': 'TextEdit', 'naam_n2k': 'TextEdit', 'vhn_new': 'TextEdit', 'nr': 'TextEdit', 'bescherming': 'TextEdit', 'sitecode_v': 'TextEdit', 'sitecode_h': 'TextEdit', 'status': 'TextEdit', 'kadaster': 'TextEdit', 'staatscourant': 'TextEdit', });
lyr_Natura2000gebiedenregio_4.set('fieldImages', {'fid': 'TextEdit', 'naam_n2k': 'TextEdit', 'vhn_new': 'TextEdit', 'nr': 'TextEdit', 'bescherming': 'TextEdit', 'sitecode_v': 'TextEdit', 'sitecode_h': 'TextEdit', 'status': 'TextEdit', 'kadaster': 'TextEdit', 'staatscourant': 'TextEdit', });
lyr_Gemeentegrenzen_5.set('fieldImages', {'fid': 'TextEdit', 'code': 'TextEdit', 'gemeentenaam': 'TextEdit', });
lyr_Zone500mrondNatuurnetwerkexclusiefbebouwdekom_1.set('fieldLabels', {'fid': 'no label', 'primaryindex': 'no label', 'inspireID_LocalId': 'no label', 'inspireID_Namespace': 'no label', 'inspireID_Version': 'no label', 'legalFoundationDocument_nil': 'no label', 'legalFoundationDate': 'no label', 'legalFoundationDocument_Date': 'no label', 'legalFoundationDocument_Title': 'no label', 'siteDesignation_nilReason': 'no label', 'designationScheme': 'no label', 'designation': 'no label', 'percentageUnderDesignation': 'no label', 'siteName_Language': 'no label', 'siteName_Spelling': 'no label', 'siteProtectionClassification': 'no label', });
lyr_NatuurnetwerkNederlandBrabantregio_2.set('fieldLabels', {'fid': 'no label', 'primaryindex': 'no label', 'inspireID_LocalId': 'no label', 'inspireID_Namespace': 'no label', 'inspireID_Version': 'no label', 'legalFoundationDocument_nil': 'no label', 'legalFoundationDate': 'no label', 'legalFoundationDocument_Date': 'no label', 'legalFoundationDocument_Title': 'no label', 'siteDesignation_nilReason': 'no label', 'designationScheme': 'no label', 'designation': 'no label', 'percentageUnderDesignation': 'no label', 'siteName_Language': 'no label', 'siteName_Spelling': 'no label', 'siteProtectionClassification': 'no label', });
lyr_Zone500mrondNatura2000exclusiefbebouwdekom_3.set('fieldLabels', {'fid': 'no label', 'naam_n2k': 'no label', 'vhn_new': 'no label', 'nr': 'no label', 'bescherming': 'no label', 'sitecode_v': 'no label', 'sitecode_h': 'no label', 'status': 'no label', 'kadaster': 'no label', 'staatscourant': 'no label', });
lyr_Natura2000gebiedenregio_4.set('fieldLabels', {'fid': 'no label', 'naam_n2k': 'no label', 'vhn_new': 'no label', 'nr': 'no label', 'bescherming': 'no label', 'sitecode_v': 'no label', 'sitecode_h': 'no label', 'status': 'no label', 'kadaster': 'no label', 'staatscourant': 'no label', });
lyr_Gemeentegrenzen_5.set('fieldLabels', {'fid': 'no label', 'code': 'no label', 'gemeentenaam': 'no label', });
lyr_Gemeentegrenzen_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});