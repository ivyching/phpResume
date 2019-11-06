'use strict';

var data_array = {
    "JP" : 0,
    "PY" : 0,
    "CO" : 0,
    "VE" : 0,
    "CL" : 0,
    "SR" : 0,
    "BO" : 0,
    "EC" : 0,
    "AR" : 0,
    "GY" : 0,
    "BR" : 0,
    "PE" : 0,
    "UY" : 0,
    "FK" : 0,
};

class RunVectormap {
    constructor(time){
        this.renderVectorMap();
        this.refreshData();
        setInterval(this.refreshData, time);
    }
    renderVectorMap() {
        var self =this;
        jQuery('#vector-map').vectorMap({
            map: ['world_mill_en'],
            backgroundColor: '#fff',
            regionStyle: {
                initial: {
                    fill: '#c4c4c4'
                },
                hover: {
                    "fill-opacity": 1
                }
            },
            // focusOn: {
            //     x: 0.8,
            //     y: 0.5,
            //     scale: 5,
            //     animate: true
            // },
            series: {
                regions: [{
                    values: data_array,
                    scale: ['#85a8b6', '#4d7686'],
                    normalizeFunction: 'polynomial'
                }]
            },
            onRegionLabelShow: function (e, el, code) {
                if (typeof data_array[code] == 'undefined') {
                    e.preventDefault();
                } else {
                    var countrylbl = data_array[code];
                    el.html(el.html() + ': ' + countrylbl + '');
                }
            }
        });
    }

    refreshData(){

    }
}

module.exports = RunVectormap;