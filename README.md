#Shift Changes to Source
- LFMB added spans to Ticker widget component located in the widgets folder that wrap the labels.
	- He also added classNames: ticker-label and ticker-stat to component
	- These changes should be ported over to the Addons folder especially if we ever want to merge folder back to master 


paneProperties.legendProperties.showLegend: false



#Views
Simple TradeView Component Hierarchy
- Header Row
	- Logo
	- Header Main Nav
	- Login/User ID/ Sign Out
- Secondary Row
	- Currency Pair Selector 
		- Dropdown menu
	- Buy Entrance
	- Sell Entrance
	- Reports Entrance
	- Settings Entrance
- Charts Wrapper 
	- Basic Market Indicators Wrapper
		- Last Price
		- 24 Hour Change
		- 24 Hour Volume
		- 24 Hour Low
		- 24 Hour High
	- Currency Pair Historic Line Area Chart Wrapper
		- Chart Header
			- Currency Pair
			- Latest Price
			- Time Interval Selector
				- 15m
				- 30m
				- 1h
				- 1d
				- 1y
				- All
		- Currency Chart Line Chart
			- Current Price Marker(?)
			- Chart
			- Time Intervals
			- Price Intervals
	- Wallet Wrapper
		- Wallet Header
		- Wallet Body Wrapper
			-

#chart.js in Widgets library
createChart = (dataFeed) => {
    const chartOptions = {
      symbol: this.state.currentPair || '',
      datafeed: dataFeed,
      library_path: AlphaPoint.config.charting_library || 'libs/charting_library_new/',
      width: '100%',
      //height: '100%',
      disableLogo: true,
      autosize: true,
      interval: '1',
      container_id: 'ap-trading-view-chart',
      timezone: 'exchange',
      locale: 'en',
      //debug: true,
      mainSeriesProperties: {
        style: 3,
        areaStyle: {
          color1: 'rgba(234, 203, 82, 0.5)',
          color2: 'rgba(234, 203, 82, 0)',
          linecolor: 'rgba(234, 203, 82, 1)',
        },
      },
      symbolWatermarkProperties: {
        color: 'rgba(0, 0, 0, 0)',
        transparency: 0,
      },      
      paneProperties: {
        legendProperties: {
          showLegend: false,
        }
      },
      volumePaneSize: 'tiny',
      disabled_features: [
        'header_widget',
        //'timeframes_toolbar',
        'control_bar',
        'edit_buttons_in_legend',
        'context_menus',
        'left_toolbar',
      ],
      overrides: {
        'mainSeriesProperties.style': 3,
        'mainSeriesProperties.areaStyle.linewidth': 2,
        'mainSeriesProperties.areaStyle.color1': 'rgba(234, 203, 82, 0.5)',
        'mainSeriesProperties.areaStyle.color2': 'rgba(234, 203, 82, 0)',
        'mainSeriesProperties.areaStyle.linecolor': 'rgba(234, 203, 82, 1)',
        'scalesProperties.lineColor': '#e3e3e3',
        'scalesProperties.textColor': '#414040',
        'symbolWatermarkProperties.transparency': 0,
        'symbolWatermarkProperties.color': 'rgba(0, 0, 0, 0)',
        'paneProperties.legendProperties.showLegend': false,
        'volumePaneSize': 'tiny',
      },
      ...AlphaPoint.config.chart,
    };
    this.chart = new TradingView.widget(chartOptions); // eslint-disable-line new-cap
  }
  (102, 65, 69, 151)
