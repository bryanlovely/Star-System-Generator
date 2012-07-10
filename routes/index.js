
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render(
  	'index',
  	{
  		title: 'Express',
  		items: {"one":"foo", "two":"bar", "three":"bark"},
  		json: JSON.stringify(spaceCharts.systemType.getChartStructure())
  	}
  );

  console.log( "=========" );
  console.log( spaceCharts.systemType.getChartStructure() );
  console.log( "=========" );
  console.log( JSON.stringify(spaceCharts.systemType.getChartStructure()) );
  console.log( "=========" );

};

