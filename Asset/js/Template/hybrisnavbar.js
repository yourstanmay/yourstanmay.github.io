$(function () {
    var bar = '';
    bar += '<!-- Hybris Navbar -->';
    bar += '<h4>';
    bar += '            <a class="btn mt-2 ' + (window.location.href.indexOf("Hybris_2205_SPA.html") > -1 ? "neon-button" : "btn-primary") + '" href="../Hybris_2205_SPA.html">Hybris2205 Spartacus Setup</a>';
    bar += '            <a class="btn mt-2 ' + (window.location.href.indexOf("Hybris_Core.html") > -1 ? "neon-button" : "btn-primary") + '" href="../Hybris_Core.html">Hybris1905 Core Setup</a>';
    bar += '            <a class="btn mt-2 ' + (window.location.href.indexOf("CustomExtention_IDE_Debug.html") > -1 ? "neon-button" : "btn-primary") + '" href="../Hybris/CustomExtention_IDE_Debug.html">CustomExtention |IDE |Debug setup</a>';
    bar += '            <a class="btn mt-2 ' + (window.location.href.indexOf("DataModeling_Interceptor.html") > -1 ? "neon-button" : "btn-primary") + '" href="../Hybris/DataModeling_Interceptor.html">Data Modeling & Interceptor</a>';
    bar += '            <a class="btn mt-2 ' + (window.location.href.indexOf("CREATE_CUSTOM_API_FROM_OCC_EXTENSION_AND_DIFFERENT_LAYERS_IN_HYBRIS%20.html") > -1 ? "neon-button" : "btn-primary") + '" href="../Hybris/CREATE_CUSTOM_API_FROM_OCC_EXTENSION_AND_DIFFERENT_LAYERS_IN_HYBRIS .html">Custom API, DTO and Different Layers in SAP Hybris</a>';
    bar += '            <a class="btn mt-2 ' + (window.location.href.indexOf("convertor&populator.html") > -1 ? "neon-button" : "btn-primary") + '" href="../Hybris/convertor&populator.html">Converters & Populators</a>';
    bar += '            <a class="btn mt-2 ' + (window.location.href.indexOf("Backoffice_Customization.html") > -1 ? "neon-button" : "btn-primary") + '" href="../Hybris/Backoffice_Customization.html">Backoffice Customization</a>';
    bar += '            <a class="btn mt-2 ' + (window.location.href.indexOf("EMAIL_SERVICE.html") > -1 ? "neon-button" : "btn-primary") + '" href="../Hybris/EMAIL_SERVICE.html">Email Service</a>';
    bar += '            <a class="btn mt-2 ' + (window.location.href.indexOf("Integration_in_SAP_Hybris.html") > -1 ? "neon-button" : "btn-primary") + '" href="../Hybris/Integration_in_SAP_Hybris.html">Integation in SAP Hybris</a>';
    bar += '            <a class="btn mt-2 ' + (window.location.href.indexOf("Persistance_Hook_In_Integration.html") > -1 ? "neon-button" : "btn-primary") + '" href="../Hybris/Persistance_Hook_In_Integration.html">Persistance Hook for Integation Object</a>';
    bar += '            <a class="btn mt-2 ' + (window.location.href.indexOf("SOLR_IN_SAP_HYBRIS.html") > -1 ? "neon-button" : "btn-primary") + '" href="../Hybris/SOLR_IN_SAP_HYBRIS.html">SOLR (Facet, Value Provider, Indexing, Searching)</a>';
    bar += '        </h4>';


    $("#hybrisnavbar").html(bar);

    var id = getValueByName("id");
    $("#" + id).addClass("active");
});

function getValueByName(name) {
    var url = document.getElementById('nav-bar').getAttribute('src');
    var param = new Array();
    if (url.indexOf("?") != -1) {
        var source = url.split("?")[1];
        items = source.split("&");
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var parameters = item.split("=");
            if (parameters[0] == "id") {
                return parameters[1];
            }
        }
    }
}