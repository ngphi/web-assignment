import Highcharts from 'highcharts/highstock'
import {compose} from 'redux'

export const mapFloatWithTime = compose(mapWithTime,parseFloat);

function mapWithTime(data){
	return [
		(new Date()).getTime(),
		data,
	];
}

const staticConfig = {
    rangeSelector: {
        buttons: [{
            count: 1,
            type: 'minute',
            text: '1M'
        }, {
            count: 5,
            type: 'minute',
            text: '5M'
        }, {
            type: 'all',
            text: 'All'
        }],
        inputEnabled: false,
        selected: 0
	},
	xAxis: {
        type: 'datetime',
    }
};

export function createChart(element,name = '',title = ''){

	let config = {};

	config.chart = {
		renderTo : element,
	};

	config.title = {
		text : title,
	};

	config.series = [{
		name : name,
		data : [],
	}];

	const initialConfig = Object.assign({},staticConfig,config);

	let chart = new Highcharts.StockChart(initialConfig);

	function addNewPoint(data){

		let series = chart.series[0];

        series.addPoint(mapFloatWithTime(data));
	}

	return {
		addNewPoint,
	}

}