var EleMentZoom = function(){
	var _this = this;
	
	_this.param = {};
	
	_this.ofObj = {};
	
	_this.init = function(elementTag){
		if(!elementTag||elementTag==""||elementTag.length<=0){
			return false;
		}
		_this.svg = d3.select(elementTag);
		if(!_this.svg){
			return false;
		}
		var width = +_this.svg.attr("width"),
		height = +_this.svg.attr("height");

		_this.zoom = d3.zoom()
			.scaleExtent([1, 40])
			.translateExtent([[-100, -100], [width + 90, height + 100]])
			.on("zoom", _this.zoomed);

		var x = d3.scaleLinear()
			.domain([-1, width + 1])
			.range([-1, width + 1]);

		var y = d3.scaleLinear()
			.domain([-1, height + 1])
			.range([-1, height + 1]);

		_this.x=x;
		_this.y=y;
		
		_this.xAxis = d3.axisBottom(x)
			.ticks((width + 2) / (height + 2) * 30)
			.tickSize(height)
			.tickPadding(8 - height);

		_this.yAxis = d3.axisRight(y)
			.ticks(30)
			.tickSize(width)
			.tickPadding(8 - width);
		/**
		_this.view = _this.svg.append("rect")
			.attr("class", "view")
			.attr("x", 0.5)
			.attr("y", 0.5)
			.attr("width", width - 1)
			.attr("height", height - 1);
		**/
		_this.gX = _this.svg.append("g")
			.attr("class", "axis axis--x")
			.call(_this.xAxis);

		_this.gY = _this.svg.append("g")
			.attr("class", "axis axis--y")
			.call(_this.yAxis);

		d3.select("div[id$=drawMainDiv] button")
			.on("click", _this.resetted);

		_this.svg.call(_this.zoom);
	};
	
	_this.addToZoomed = function(obj) {
	  obj.attr("transform", d3.event.transform);
	};

	_this.zoomed = function() {
	  _this.ofObj.thatTransform = d3.event.transform;
	  /**_this.view.attr("transform", _this.ofObj.thatTransform);**/
	  _this.gX.call(_this.xAxis.scale(_this.ofObj.thatTransform.rescaleX(_this.x)));
	  _this.gY.call(_this.yAxis.scale(_this.ofObj.thatTransform.rescaleY(_this.y)));
	};

	_this.resetted = function() {
	  _this.svg.transition()
		  .duration(750)
		  .call(_this.zoom.transform, d3.zoomIdentity);
	};
};

var _EleMentZoom;

_EleMentZoom = new EleMentZoom();