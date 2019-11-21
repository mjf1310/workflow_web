var DrawUtils = function(){
	var _this = this;
	
	_this.param = {};
	
	_this.edge = {};
	
	_this.unBindDragRect = function(eleM){
		var svg;
		if(eleM&&eleM!=""&&eleM.length>0){
			svg = d3.select(eleM);
		}else{
			return false;
		}
		svg.selectAll("rect").on("mousedown",null).on("mouseup",null);
	};
		
	_this.bindDragRect = function(eleM){
		var svg;
		if(eleM&&eleM!=""&&eleM.length>0){
			svg = d3.select(eleM);
		}else{
			return false;
		}
		svg.selectAll("rect").on("mousedown",function(d,i){
			var e1 = d3.event;
			var offsetX = e1.offsetX;
			var offsetY = e1.offsetY;
			var x = e1.x;
			var y = e1.y;
			d3.select(this) 
			.attr("transform", function (d) {
				return "translate(" + x + ", " + y + ")";
			});
		}).on("mouseup",function(d,i){
			var e1 = d3.event;
			var offsetX = e1.offsetX;
			var offsetY = e1.offsetY;
			var x = e1.x;
			var y = e1.y;
			d3.select(this) 
			.attr("transform", function (d) {
				return "translate(" + x + ", " + y + ")";
			});
		});
		
	};
	
	_this.dragPath = function(){
		var x0,y0,x1,y1,x2,y2;
		var dragstarted = function(d) {
			var e1 = d3.event;
			var offsetX = e1.offsetX;
			var offsetY = e1.offsetY;
			x0 = e1.x;
			y0 = e1.y;
			d3.select(this).raise().attr("stroke", "blue");
		};
		
		var dragged = function(d) {
			var e1 = d3.event;
			var offsetX = e1.offsetX;
			var offsetY = e1.offsetY;
			x1 = e1.x;
			y1 = e1.y;
			//console.log("x0="+x0+",y0="+y0+",x1="+x1+",y1="+y1);
			var dx = x1-x0;
			var dy = y1-y0;
			var id = d3.select(this).attr("id");
			console.log("id="+id);
			console.log("d="+d3.select(this).attr("d"));
			var drawDataObj = _DrawDataObjFactory.getDrawDataObjById(id);
			if(drawDataObj && typeof(drawDataObj)=="object"){
				/**drawDataObj.x = x1;
				drawDataObj.y = y1;
				var startX = drawDataObj.pathStartX;
				var startY = drawDataObj.pathStartY;
				drawDataObj.pathStartX = startX+dx;
				drawDataObj.pathStartY = startY+dy;
				var endX = drawDataObj.pathEndX;
				var endY = drawDataObj.pathEndY;
				drawDataObj.pathEndX = endX+dx;
				drawDataObj.pathEndY = endY+dy;
				_DrawDataObjFactory.updateDrawDataObj(drawDataObj);**/
			}
			d3.select(this) 
			.attr("transform", function (d) {
				return "translate(" + dx + ", " + dy + ")";
			});
			console.log("d="+d3.select(this).attr("d"));
		};
		
		var dragended = function(d) {
			var e1 = d3.event;
			var offsetX = e1.offsetX;
			var offsetY = e1.offsetY;
			x2 = e1.x;
			y2 = e1.y;
			//console.log("x0="+x0+",y0="+y0+",x2="+x2+",y2="+y2);
			d3.select(this).attr("stroke", "black");
		};
		
		return d3.drag()
		  .on("start", dragstarted)
		  .on("drag", dragged)
		  .on("end", dragended);
	};
	
	_this.dragRect = function(){
		var dragstarted = function(d) {
			d3.select(this).raise().attr("stroke", "black");
		};
		
		var dragged = function(d) {
			var e1 = d3.event;
			var offsetX = e1.offsetX;
			var offsetY = e1.offsetY;
			var x = e1.x;
			var y = e1.y;
			var id = d3.select(this).attr("id");
			console.log("id="+id);
			var drawDataObj = _DrawDataObjFactory.getDrawDataObjById(id);
			if(drawDataObj && typeof(drawDataObj)=="object"){
				drawDataObj.x = x;
				drawDataObj.y = y;
				var w = drawDataObj.width;
				var h = drawDataObj.height;
				drawDataObj.cx = x+w/2;
				drawDataObj.cy = y+h/2;
				_DrawDataObjFactory.updateDrawDataObj(drawDataObj);
			}
			d3.select(this).attr("x",x).attr("y",y);
		};
		
		var dragended = function(d) {
			d3.select(this).attr("stroke", "blue");
		};
		
		return d3.drag()
		  .on("start", dragstarted)
		  .on("drag", dragged)
		  .on("end", dragended);
	};
	
	_this.dragCircle = function(){
		var dragstarted = function(d) {
			d3.select(this).raise().attr("stroke", "black");
		};
		
		var dragged = function(d) {
			var e1 = d3.event;
			var offsetX = e1.offsetX;
			var offsetY = e1.offsetY;
			var x = e1.x;
			var y = e1.y;
			var id = d3.select(this).attr("id");
			console.log("id="+id);
			var drawDataObj = _DrawDataObjFactory.getDrawDataObjById(id);
			if(drawDataObj && typeof(drawDataObj)=="object"){
				drawDataObj.cx = x;
				drawDataObj.cy = y;
				_DrawDataObjFactory.updateDrawDataObj(drawDataObj);
			}
			d3.select(this).attr("cx",x).attr("cy",y);
			
		};
		
		var dragended = function(d) {
			d3.select(this).attr("stroke", "blue");
		};
		
		return d3.drag()
		  .on("start", dragstarted)
		  .on("drag", dragged)
		  .on("end", dragended);
	};
	
	_this.dragText = function(){
		var dragstarted = function(d) {
			d3.select(this).raise().attr("stroke", "black");
		};
		
		var dragged = function(d) {
			var e1 = d3.event;
			var offsetX = e1.offsetX;
			var offsetY = e1.offsetY;
			var x = e1.x;
			var y = e1.y;
			var id = d3.select(this).attr("id");
			console.log("id="+id);
			var drawDataObj = _DrawDataObjFactory.getDrawDataObjById(id);
			if(drawDataObj && typeof(drawDataObj)=="object"){
				drawDataObj.x = x;
				drawDataObj.y = y;
				_DrawDataObjFactory.updateDrawDataObj(drawDataObj);
			}
			d3.select(this).attr("x",x).attr("y",y);
		};
		
		var dragended = function(d) {
			d3.select(this).attr("stroke", "blue");
		};
		
		return d3.drag()
		         .on("start", dragstarted)
		         .on("drag", dragged)
		         .on("end", dragended);
	};
	
	_this.addZoomTransform = function(){
		var zoomed = function(){
			d3.select(this).attr("transform", d3.event.transform);
		};
		
		return d3.zoom()
				 .on("zoom",zoomed);
	};
	
	_this.addClick = function(e){
		console.log("e="+e);
		//to prevent call of Draw Data through svg
		d3.event.stopPropagation();
		//to prevent dragging of svg in firefox
		d3.event.preventDefault();
		var e1 = d3.event;
		console.log(e1.button);
		var coords = d3.mouse(e1.currentTarget);
		console.log(coords);
		d3.select(this).attr("stroke", "#00FF00");
	};
	
	_this.contextMenu = function(e){
		console.log("e="+e);
		var currentObj = d3.select(d3.event.currentTarget);
		var currentObjNode = currentObj.node();
		var parentNode = currentObjNode.parentNode;
		parentNode.outerHTML = "";
		debugger;
	};
	
	_this.pauseEvent = function(e){
		if(e.stopPropagation) e.stopPropagation();
		if(e.preventDefault) e.preventDefault();
		e.cancelBubble=true;
		e.returnValue=false;
		return false;
	};
	
	_this.d3PauseEvent = function(e){
		//to prevent call of Draw Data through svg
		d3.event.stopPropagation();
		//to prevent dragging of svg in firefox
		d3.event.preventDefault();
	};
	_this.graphMouseDown = function(e){
		if (d3.event.button != 0 && d3.event.buttons!=1){
			return false;
		}
		
		/**
		 * mouseup事件失效的解决方案
		 */
		_this.d3PauseEvent(e);
		
		var drawId = _this.param.drawId;
		/**var self = $(e.currentTarget);**/
		var self = d3.select(d3.event.currentTarget);
		var id = self.attr("id");
		if(drawId && drawId.length>0){
			/**var offsetX = e.offsetX;
			var offsetY = e.offsetY;
			var x = e.pageX;
			var y = e.pageY;**/
			var e1 = d3.event;
			var offsetX = e1.offsetX;
			var offsetY = e1.offsetY;
			var x = e1.x;
			var y = e1.y;
			var drawDataObj;
			if('arrow'==drawId){
				drawDataObj  = _DrawDataObjFactory.createDrawDataObj("arrow",x,y,x+50,y+45,0,w,h,x+50,y+10,x+50,y+80);
			}else if('horitionalArrow'==drawId){
				drawDataObj  = _DrawDataObjFactory.createDrawDataObj("horitionalArrow",x,y,x+50,y+45,0,w,h,x+50,y+10,x+85,y+85);
			}else if('verticalArrow'==drawId){
				drawDataObj  = _DrawDataObjFactory.createDrawDataObj("verticalArrow",x,y,x+50,y+45,0,w,h,x+50,y+10,x+85,y+80);
			}else{
				return;
			}
			
			var drawDataObjVal = _DrawDataObjFactory.getDrawDataObjById(id);
			if(drawDataObjVal && typeof(drawDataObjVal)=="object"){
				drawDataObj.preId = drawDataObjVal.id;
				drawDataObj.preObj = drawDataObjVal;
				
				drawDataObjVal.nextId = drawDataObj.id;
				drawDataObjVal.nextObj = drawDataObj;
				_this.edge.prefObj = drawDataObjVal;
			}
			_this.edge.drawDataObj = drawDataObj;
			_this.edge.currentObj = drawDataObj;
			_this.edge.pathData = [];
			var data = [];
			data.push(x);
			data.push(y);
			_this.edge.pathData.push(data);
			var path = d3.path();
		    path.moveTo(x,y);
			_this.edge.path = path;
		}
	};
	
	_this.graphMouseUp = function(e){
		if (d3.event.button != 0 && d3.event.buttons!=1){
			return false;
		}
		/**
		 * mouseup事件失效的解决方案
		 */
		_this.d3PauseEvent(e);
		
		/**var self = $(e.currentTarget);**/
		var self = d3.select(d3.event.currentTarget);
		var id = self.attr("id");
		var drawId = _this.param.drawId;
		if(drawId && drawId.length>0){
			var svg = d3.select("#drawMainDiv svg[id=draw_bg_svg]");
			if('arrow'==drawId){
				var g = svg.append("g");
				var pathObj = g.append("path");
				_this.edge.path.closePath();
				pathObj.attr("id",_this.edge.drawDataObj.id)
					   .attr("name",_this.edge.drawDataObj.name)
					   .attr("d", _this.edge.path)
					   .attr("fill","none")
					   .attr("stroke","#00FF00")
					   .attr("stroke-width",3)
					   //.call(_this.addZoomTransform())
					   .call(_this.dragPath());
				pathObj.on("mousedown",function(e){
					_this.addClick(e);
				});
				
				_this.edge.drawDataObj.path = _this.edge.path;
				var drawDataObjVal = _DrawDataObjFactory.getDrawDataObjById(id);
				if(drawDataObjVal && typeof(drawDataObjVal)=="object"){
					_DrawDataObjFactory.updateDrawDataObj(_this.edge.prefObj);
				    _DrawDataObjFactory.updateDataNode(_this.edge.prefObj);
					
					_this.edge.nextObj = drawDataObjVal;
					_this.edge.drawDataObj.nextId = drawDataObjVal.id;
					_this.edge.drawDataObj.nextObj = drawDataObjVal;
					_DrawDataObjFactory.updateDrawDataObj(_this.edge.drawDataObj);
					
					drawDataObjVal.preId = _this.edge.drawDataObj.id;
					drawDataObjVal.preObj = _this.edge.drawDataObj;
					_DrawDataObjFactory.updateDrawDataObj(drawDataObjVal);
					_DrawDataObjFactory.updateDataNode(drawDataObjVal);
				}
				
				_DrawDataObjFactory.saveDataLine(_this.edge.drawDataObj);
				//pathObj.call(_this.addZoomTransform());
				return g.node();
			}
			if('horitionalArrow'==drawId){
				var g = svg.append("g");
				var pathObj = g.append("path");
				_this.edge.path.closePath();
				pathObj.attr("id",_this.edge.drawDataObj.id)
					   .attr("name",_this.edge.drawDataObj.name)
					   .attr("d", _this.edge.path)
					   .attr("fill","none")
					   .attr("stroke","#00FF00")
					   .attr("stroke-width",3)
					   //.call(_this.addZoomTransform())
					   .call(_this.dragPath());
				pathObj.on("mousedown",function(e){
					_this.addClick(e);
				});
				
				var drawDataObjVal = _DrawDataObjFactory.getDrawDataObjById(id);
				if(drawDataObjVal && typeof(drawDataObjVal)=="object"){
					_DrawDataObjFactory.updateDrawDataObj(_this.edge.prefObj);
				    _DrawDataObjFactory.updateDataNode(_this.edge.prefObj);
					
					_this.edge.nextObj = drawDataObjVal;
					_this.edge.drawDataObj.nextId = drawDataObjVal.id;
					_this.edge.drawDataObj.nextObj = drawDataObjVal;
					_DrawDataObjFactory.updateDrawDataObj(_this.edge.drawDataObj);
					
					drawDataObjVal.preId = _this.edge.drawDataObj.id;
					drawDataObjVal.preObj = _this.edge.drawDataObj;
					_DrawDataObjFactory.updateDrawDataObj(drawDataObjVal);
					_DrawDataObjFactory.updateDataNode(drawDataObjVal);
				}
				
				_this.edge.drawDataObj.path = _this.edge.path;
				_DrawDataObjFactory.saveDataLine(_this.edge.drawDataObj);
				//pathObj.call(_this.addZoomTransform());
				return g.node();
			}
			if('verticalArrow'==drawId){
				var g = svg.append("g");
				var pathObj = g.append("path");
				_this.edge.path.closePath();
				pathObj.attr("id",_this.edge.drawDataObj.id)
					   .attr("name",_this.edge.drawDataObj.name)
					   .attr("d", _this.edge.path)
					   .attr("fill","none")
					   .attr("stroke","#00FF00")
					   .attr("stroke-width",3)
					   //.call(_this.addZoomTransform())
					   .call(_this.dragPath());
				pathObj.on("mousedown",function(e){
					_this.addClick(e);
				});
				
				var drawDataObjVal = _DrawDataObjFactory.getDrawDataObjById(id);
				if(drawDataObjVal && typeof(drawDataObjVal)=="object"){
					_DrawDataObjFactory.updateDrawDataObj(_this.edge.prefObj);
				    _DrawDataObjFactory.updateDataNode(_this.edge.prefObj);
					
					_this.edge.nextObj = drawDataObjVal;
					_this.edge.drawDataObj.nextId = drawDataObjVal.id;
					_this.edge.drawDataObj.nextObj = drawDataObjVal;
					_DrawDataObjFactory.updateDrawDataObj(_this.edge.drawDataObj);
					
					drawDataObjVal.preId = _this.edge.drawDataObj.id;
					drawDataObjVal.preObj = _this.edge.drawDataObj;
					_DrawDataObjFactory.updateDrawDataObj(drawDataObjVal);
					_DrawDataObjFactory.updateDataNode(drawDataObjVal);
				}
				
				_this.edge.drawDataObj.path = _this.edge.path;
				_DrawDataObjFactory.saveDataLine(_this.edge.drawDataObj);
				//pathObj.call(_this.addZoomTransform());
				return g.node();
			}
		}
	};
	
	_this.dynamicCreateContextMenu = function(eleMId){
		if(eleMId && eleMId!="" && eleMId.length>0){
			$.contextMenu({
				selector: '#'+eleMId, 
				build: function($trigger, e) {
					// this callback is executed every time the menu is to be shown
					// its results are destroyed every time the menu is hidden
					// e is the original contextmenu event, containing e.pageX and e.pageY (amongst other data)
					return {
						callback: function(key, options) {
							var m = "clicked: " + key;
							window.console && console.log(m) || alert(m); 
						},
						items: {
							"edit": {name: "Edit", icon: "edit"},
							"cut": {name: "Cut", icon: "cut"},
							"copy": {name: "Copy", icon: "copy"},
							"paste": {name: "Paste", icon: "paste"},
							"delete": {name: "Delete", icon: "delete"},
							"sep1": "---------",
							"quit": {name: "Quit", icon: function($element, key, item){ return 'context-menu-icon context-menu-icon-quit'; }}
						}
					};
				}
			});
		}
	};
	
	_this.onMouseEvent = function(eleMId){
		if(eleMId && eleMId!="" && eleMId.length>0){
			$("#"+eleMId).on("mouseup",function(e){
				_this.graphMouseUp(e);
			});
			$("#"+eleMId).on("mousedown",function(e){
				_this.graphMouseDown(e);
			});
			$("#"+eleMId).on("mouseleave",function(e){
				return _this.pauseEvent(e);
			});
		}
	};
	
	_this.drawStart = function(eleM,x,y,r){
		var svg;
		if(eleM&&eleM.length>0){
			svg = d3.select(eleM);
		}else{
			return false;
		}
		var startDataObj = _DrawDataObjFactory.createDrawDataObj("startCircle",x,y,x+r,y+r,r,0,0,0,0,0,0);
		_DrawDataObjFactory.saveDataNode(startDataObj);
		
		var g = svg.append("g");
		var startObj = g.append("circle");
		startObj.attr("id",startDataObj.id)
				.attr("name",startDataObj.name)
				.attr("cx", x+r)
				.attr("cy", y+r)
				.attr("r", r)
				.attr("opacity","0.5")
				.attr("fill","#F0E68C")
				.attr('stroke','blue')
				.attr('stroke-width',1);
				//.call(_this.addZoomTransform())
				//.call(_this.dragCircle());
		startObj.on("mouseup",function(e){
			_this.graphMouseUp(e);
		});
		startObj.on("mousedown",function(e){
			_this.graphMouseDown(e);
		});
		
		/**_this.onMouseEvent(startDataObj.id);**/
		/**
		startObj.on("contextmenu",function(e){
			_this.contextMenu(e);
		});**/
		
		//startObj.call(_this.dragCircle());
		/**startObj.call(_this.addZoomTransform());**/
		/**
		var startObjNode = startObj.node();
		startObjNode.onmousedown=_this.graphMouseDown;
		startObjNode.onmouseup=_this.graphMouseUp;
		**/
		_this.dynamicCreateContextMenu(startDataObj.id);
		
		var startTextDataObj = _DrawDataObjFactory.createDrawDataObj("startText",x+r/2,y+r,x,y,r,0,0,0,0,0,0);
		
		g.append("text")
			.attr("id",startTextDataObj.id)
			.attr("name",startTextDataObj.name)
			.attr("x",x+r/2)
			.attr("y",y+r)
			.attr("font-family","STSong")
			.attr("font-size","30")
			.attr("fill","blue")
			.attr("stroke","black")
			.text("开始")
			//.call(_this.addZoomTransform())
			.call(_this.dragText());
		//console.log(_DrawDataObjFactory.getDataObjArray());
		//console.log(_DrawDataObjFactory.getDataObjs());
		//console.log(_DrawDataObjFactory.getDataObjIdArray());
		//debugger;
		return g.node();
	};
	_this.drawEnd = function(eleM,x,y,r){
		var svg;
		if(eleM&&eleM.length>0){
			svg = d3.select(eleM);
		}else{
			return false;
		}
		var endDataObj1 = _DrawDataObjFactory.createDrawDataObj("endCircle",x,y,x+r,y+r,r+10,0,0,0,0,0,0);
		var endDataObj2 = _DrawDataObjFactory.createDrawDataObj("endCircle",x,y,x+r,y+r,r,0,0,0,0,0,0);
		_DrawDataObjFactory.saveDataNode(endDataObj1);
		_DrawDataObjFactory.saveDataNode(endDataObj2);
		
		var g = svg.append("g");
		var endObj1 = g.append("circle"); // <-B
		endObj1.attr("id",endDataObj1.id)
			.attr("name",endDataObj1.name)
			.attr("cx", x+r)
			.attr("cy", y+r)
			.attr("r", r+10)
			.attr("opacity","0.5")
			.attr("fill","#808000")
			.attr('stroke','blue')
			.attr('stroke-width',1);
			//.call(_this.addZoomTransform())
			//.call(_this.dragCircle());
		
		endObj1.on("mouseup",function(e){
			_this.graphMouseUp(e);
		});
		endObj1.on("mousedown",function(e){
			_this.graphMouseDown(e);
		});
		/**_this.onMouseEvent(endDataObj1.id);**/
		
		//endObj1.call(_this.dragCircle());
		/**endObj1.call(_this.addZoomTransform());**/
		/**
		var endObj1Node = endObj1.node();
		endObj1Node.onmousedown=_this.graphMouseDown;
		endObj1Node.onmouseup=_this.graphMouseUp;
		**/
		_this.dynamicCreateContextMenu(endDataObj1.id);
		
		var endObj2 = g.append("circle"); // <-B
		endObj2.attr("id",endDataObj2.id)
			   .attr("name",endDataObj2.name)
			   .attr("cx", x+r)
			   .attr("cy", y+r)
			   .attr("r", r)
			   .attr("opacity","0.5")
			   .attr("fill","#808000")
			   .attr('stroke','blue')
			   .attr('stroke-width',1);
			   //.call(_this.addZoomTransform())
			   //.call(_this.dragCircle());
		
		endObj2.on("mouseup",function(e){
			_this.graphMouseUp(e);
		});
		endObj2.on("mousedown",function(e){
			_this.graphMouseDown(e);
		});
		/**_this.onMouseEvent(endDataObj2.id);**/
		
		//endObj2.call(_this.dragCircle());
		/**endObj2.call(_this.addZoomTransform());**/
		/**
		var endObj2Node = endObj2.node();
		endObj2Node.onmousedown=_this.graphMouseDown;
		endObj2Node.onmouseup=_this.graphMouseUp;
		**/
		_this.dynamicCreateContextMenu(endDataObj2.id);
		
		var endTextDataObj = _DrawDataObjFactory.createDrawDataObj("endText",x+r/2,y+r,x,y,r,0,0,0,0,0,0);
		g.append("text")
			.attr("id",endTextDataObj.id)
			.attr("name",endTextDataObj.name)
			.attr("x",x+r/2)
			.attr("y",y+r)
			.attr("font-family","STSong")
			.attr("font-size","30")
			.attr("fill","blue")
			.attr("stroke","black")
			.text("结束")
			//.call(_this.addZoomTransform())
			.call(_this.dragText());
		return g.node();
	};
	_this.drawRect = function(eleM,x,y,w,h){
		var svg;
		if(eleM&&eleM.length>0){
			svg = d3.select(eleM);
		}else{
			return false;
		}
		var rectDataObj = _DrawDataObjFactory.createDrawDataObj("rect",x,y,x+w/2,y+h/2,0,w,h,0,0,0,0);
		_DrawDataObjFactory.saveDataNode(rectDataObj);
		
		var g = svg.append("g");
		var rectObj = g.append("rect");
		rectObj.attr("id",rectDataObj.id)
			   .attr("name",rectDataObj.name)
			   .attr("x", x)
			   .attr("y", y)
			   .attr("width", w)
			   .attr("height", h)
			   .attr("rx",10)
			   .attr("ry",10)
			   .attr('fill','#FFFFFF')
			   .attr('stroke','blue')
			   .attr('stroke-width',1);
		       //.call(_this.addZoomTransform())
			   //.call(_this.dragRect());
		
		rectObj.on("mouseup",function(e){
			_this.graphMouseUp(e);
		});
		rectObj.on("mousedown",function(e){
			_this.graphMouseDown(e);
		});
		
		/**_this.onMouseEvent(rectDataObj.id);**/
		
		//rectObj.call(_this.dragRect());
		/**rectObj.call(_this.addZoomTransform());**/
		/**
		var rectObjNode = rectObj.node();
		rectObjNode.onmousedown=_this.graphMouseDown;
		rectObjNode.onmouseup=_this.graphMouseUp;
		**/
		_this.dynamicCreateContextMenu(rectDataObj.id);
		
		return g.node();
	};
	_this.drawRectRotate = function(eleM,x,y,w,h){
		var svg;
		if(eleM&&eleM.length>0){
			svg = d3.select(eleM);
		}else{
			return false;
		}
		
		var rectRotateDataObj = _DrawDataObjFactory.createDrawDataObj("rectRotate",x,y,x+w/2,y+h/2,0,w,h,x+50,y+30,x+50,y+30);
		_DrawDataObjFactory.saveDataNode(rectRotateDataObj);
		
		var g = svg.append("g");
		var path = d3.path();
		    path.moveTo(x+50,y+30)
		    path.lineTo(x+20,y+50)
		    path.lineTo(x+50,y+70)
		    path.lineTo(x+80,y+50)
		    path.lineTo(x+50,y+30)
			path.closePath();
			
		var pathObj = g.append("path");
		pathObj.attr("id",rectRotateDataObj.id)
		       .attr("name",rectRotateDataObj.name)
		       .attr("d",path)
		       .attr("fill","#FF00EE")
		       .attr("stroke","#000000")
		       .attr("stroke-width",3);
		       //.call(_this.addZoomTransform())
		       //.call(_this.dragPath());
		
		pathObj.on("mouseup",function(e){
			_this.graphMouseUp(e);
		});
		pathObj.on("mousedown",function(e){
			_this.graphMouseDown(e);
		});
		
		/**_this.onMouseEvent(rectRotateDataObj.id);**/
		
		//pathObj.call(_this.dragPath());
		/**pathObj.call(_this.addZoomTransform());**/
		/**
		var pathObjNode = pathObj.node();
		pathObjNode.onmousedown=_this.graphMouseDown;
		pathObjNode.onmouseup=_this.graphMouseUp;
		**/
		_this.dynamicCreateContextMenu(rectRotateDataObj.id);
		
		return g.node();
	};
	_this.drawArrow = function(eleM,x,y,w,h){
		var svg;
		if(eleM&&eleM.length>0){
			svg = d3.select(eleM);
		}else{
			return false;
		}
		
		var arrowDataObj = _DrawDataObjFactory.createDrawDataObj("arrow",x,y,x+50,y+45,0,w,h,x+50,y+10,x+50,y+80);
		var g = svg.append("g");
		var path = d3.path();
		    path.moveTo(x+50,y+10)
		    path.lineTo(x+50,y+80)
		    path.lineTo(x+45,y+80)
		    path.lineTo(x+50,y+90)
		    path.lineTo(x+55,y+80)
			path.lineTo(x+50,y+80)
			path.closePath();
			
		var pathObj = g.append("path");
		pathObj.attr("id",arrowDataObj.id)
			   .attr("name",arrowDataObj.name)
			   .attr("d", path)
			   .attr("fill","#FF00EE")
			   .attr("stroke","#000000")
			   .attr("stroke-width",3)
			   //.call(_this.addZoomTransform())
			   .call(_this.dragPath());
	    pathObj.on("mousedown",function(e){
			_this.addClick(e);
		});
		/**pathObj.call(_this.addZoomTransform());**/
		return g.node();
	};
	_this.drawHoritionalArrow = function(eleM,x,y,w,h){
		var svg;
		if(eleM&&eleM.length>0){
			svg = d3.select(eleM);
		}else{
			return false;
		}
		var horitionalArrowDataObj = _DrawDataObjFactory.createDrawDataObj("horitionalArrow",x,y,x+50,y+45,0,w,h,x+50,y+10,x+85,y+85);
		
		var g = svg.append("g");
		var path = d3.path();
		    path.moveTo(x+50,y+10)
		    path.lineTo(x+85,y+10)
		    path.lineTo(x+85,y+80)
		    path.lineTo(x+80,y+80)
		    path.lineTo(x+85,y+85)
			path.lineTo(x+90,y+80)
			path.lineTo(x+85,y+80)
			path.lineTo(x+85,y+10)
			path.lineTo(x+50,y+10)
			path.closePath();
		var pathObj = g.append("path");
		pathObj.attr("id",horitionalArrowDataObj.id)
		       .attr("name",horitionalArrowDataObj.name)
		       .attr("d",path)
		       .attr("fill","#FF00EE")
		       .attr("stroke","#000000")
		       .attr("stroke-width",3)
		       //.call(_this.addZoomTransform())
		       .call(_this.dragPath());
		pathObj.on("mousedown",function(e){
			_this.addClick(e);
		});
		/**pathObj.call(_this.addZoomTransform());**/
		return g.node();
	};
	_this.drawVerticalArrow = function(eleM,x,y,w,h){
		var svg;
		if(eleM&&eleM.length>0){
			svg = d3.select(eleM);
		}else{
			return false;
		}
		var verticalArrowDataObj = _DrawDataObjFactory.createDrawDataObj("verticalArrow",x,y,x+50,y+45,0,w,h,x+50,y+10,x+85,y+80);
		
		var g = svg.append("g");
		var path = d3.path();
		    path.moveTo(x+50,y+10)
		    path.lineTo(x+50,y+80)
		    path.lineTo(x+85,y+80)
		    path.lineTo(x+85,y+85)
		    path.lineTo(x+95,y+80)
			path.lineTo(x+85,y+75)
			path.lineTo(x+85,y+80)
			path.lineTo(x+50,y+80)
			path.closePath();
		var pathObj = g.append("path");
		pathObj.attr("id",verticalArrowDataObj.id)
		       .attr("name",verticalArrowDataObj.name)
		       .attr("d",path)
		       .attr("fill","#FF00EE")
		       .attr("stroke","#000000")
		       .attr("stroke-width",3)
		       //.call(_this.addZoomTransform())
		       .call(_this.dragPath());
		pathObj.on("mousedown",function(e){
			_this.addClick(e);
		});
		/**pathObj.call(_this.addZoomTransform());**/
		return g.node();
	};
	
	_this.drawPathMoveTo = function(drawId,x,y){
		if(drawId && drawId.length>0){
			if('arrow'==drawId && _this.edge.path){
				var data = [];
				data.push(x);
				data.push(y);
				_this.edge.pathData.splice(0);
				_this.edge.pathData.push(data);
				_this.edge.path.moveTo(x,y);
			}
			if('horitionalArrow'==drawId && _this.edge.path){
				var data = [];
				data.push(x);
				data.push(y);
				_this.edge.pathData.splice(0);
				_this.edge.pathData.push(data);
				_this.edge.path.moveTo(x,y);
			}
			if('verticalArrow'==drawId && _this.edge.path){
				var data = [];
				data.push(x);
				data.push(y);
				_this.edge.pathData.splice(0);
				_this.edge.pathData.push(data);
				_this.edge.path.moveTo(x,y);
			}
		}
	};
	
	_this.drawPathLineTo = function(drawId,x,y){
		if(drawId && drawId.length>0){
			if('arrow'==drawId && _this.edge.path){
				var data = [];
				data.push(x);
				data.push(y);
				_this.edge.pathData.push(data);
				_this.edge.path.lineTo(x,y);
			}
			if('horitionalArrow'==drawId && _this.edge.path){
				var data = [];
				data.push(x);
				data.push(y);
				_this.edge.pathData.push(data);
				_this.edge.path.lineTo(x,y);
			}
			if('verticalArrow'==drawId && _this.edge.path){
				var data = [];
				data.push(x);
				data.push(y);
				_this.edge.pathData.push(data);
				_this.edge.path.lineTo(x,y);
			}
		}
	};
	
	_this.drawPathMouseUpClearData = function(drawId,x,y){
		if(drawId && drawId.length>0){
			if('arrow'==drawId){
				_this.edge.drawDataObj = null;
			    _this.edge.pathData = null;
				_this.edge.path = null;
			}
			if('horitionalArrow'==drawId){
				_this.edge.drawDataObj = null;
			    _this.edge.pathData = null;
				_this.edge.path = null;
			}
			if('verticalArrow'==drawId){
				_this.edge.drawDataObj = null;
			    _this.edge.pathData = null;
				_this.edge.path = null;
			}
		}
	};
	
	_this.graphMenuOnSelect = function(thatId){
		_this.param.drawId = thatId;
		if("originalArrow"==thatId){
			var dataNodeArray = _DrawDataObjFactory.getDataNodeArray();
			var len = dataNodeArray.length;
			for(var i=0;i<len;i++){
				var dataNode = dataNodeArray[i];
				var type = dataNode.type;
				
				//d3.select("#"+dataNode.id).on("mousedown",null).on("mouseup",null);
				
				if("startCircle"==type||"endCircle"==type){
					d3.select("#"+dataNode.id).call(_this.dragCircle());
				}
				if("rect"==type){
					d3.select("#"+dataNode.id).call(_this.dragRect());
				}
				if("rectRotate"==type){
					d3.select("#"+dataNode.id).call(_this.dragPath());
				}
				
			}
			
		}
		if("arrow"==thatId||"horitionalArrow"==thatId||"verticalArrow"==thatId){
			var dataNodeArray = _DrawDataObjFactory.getDataNodeArray();
			var len = dataNodeArray.length;
			for(var i=0;i<len;i++){
				var dataNode = dataNodeArray[i];
				d3.select("#"+dataNode.id).call(d3.drag().on("start", null).on("drag", null).on("end", null));
				/**d3.select("#"+dataNode.id).on("mousedown",function(e){
					_this.graphMouseDown(e);
				}).on("mouseup",function(e){
					_this.graphMouseUp(e);
				});**/
			}
		}
	};
	
	_this.initShapes = function(eleMId){
			var width = 100,
				height = 100;
				
			var	svg = d3.select('#'+eleMId).append("div")
				.attr("id","originalArrow")
				.attr("height", height)
				.attr("width", width)
				.append("svg");
				svg.attr("height", height)
					.attr("width", width);    
			var g =	svg.append("g");
			g.append("path")
				.attr("d", "M50 20,L50 60,L45 60,L50 70,L55 60,L50 60 z")// <-G
				.attr("fill","#FF00EE")
				.attr("stroke","#000000")
				.attr("stroke-width",3)
				.attr("transform", function (d) {
					return "rotate(135,50 50)";
				});
			
			svg = d3.select('#'+eleMId).append("div")
				.attr("id","startCircle")
				.attr("height", height)
				.attr("width", width)
				.append("svg");
				svg.attr("height", height)
					.attr("width", width);    
			g = svg.append("g");
			
			g.append("circle") // <-B
				.attr("cx", 50)
				.attr("cy", 50)
				.attr("r", 45)
				.attr("opacity","0.5");
			g.append("text")
				.attr("x",20)
				.attr("y",60)
				.attr("font-family","STSong")
				.attr("font-size","30")
				.attr("fill","blue")
				.attr("stroke","black")
				.text("开始");
				
			svg = d3.select('#'+eleMId).append("div")
				.attr("id","endCircle")
				.attr("height", height)
				.attr("width", width)
				.append("svg");
				svg.attr("height", height)
					.attr("width", width);    
			g =	svg.append("g");
			
			g.append("circle") // <-B
				.attr("cx", 50)
				.attr("cy", 50)
				.attr("r", 45)
				.attr("opacity","0.5")
				.attr("fill","#00ffdb1a");
			
			g.append("circle") // <-B
				.attr("cx", 50)
				.attr("cy", 50)
				.attr("r", 35)
				.attr("opacity","0.5");
			
			g.append("text")
				.attr("x",20)
				.attr("y",60)
				.attr("font-family","STSong")
				.attr("font-size","30")
				.attr("fill","blue")
				.attr("stroke","black")
				.text("结束");
			
			svg = d3.select('#'+eleMId).append("div")
				.attr("id","rect")
				.attr("height", height)
				.attr("width", width)
				.append("svg");
				svg.attr("height", height)
					.attr("width", width);    
			g =	svg.append("g");
			g.append("rect")
				.attr("x", 10) // <-C
				.attr("y", 10)
				.attr("width", 80) // <-D
				.attr("height", 80)
				.attr("rx", 5); // <-E
			/**	
			svg = d3.select("#"+eleMId).append("div")
				.attr("id","polygon")
				.append("svg");
				svg.attr("height", height+"px")
					.attr("width", width+"px");    
				svg.append("g");
			svg.append("polygon")
				.attr("points", "30,200 130,50 230,200");**/ // <-F
			
			svg = d3.select('#'+eleMId).append("div")
				.attr("id","rectRotate")
				.attr("height", height)
				.attr("width", width)
				.append("svg");
				svg.attr("height", height)
					.attr("width", width);    
			g =	svg.append("g");
				
			g.append("path")
			   .attr("d","M50 30,L20 50,L50 70,L80 50,L50 30 z")
			   .attr("fill","#FF00EE")
			   .attr("stroke","#000000")
			   .attr("stroke-width",3);
			
			svg = d3.select('#'+eleMId).append("div")
				.attr("id","arrow")
				.attr("height", height)
				.attr("width", width)
				.append("svg");
				svg.attr("height", height)
					.attr("width", width);    
			g =	svg.append("g");
			g.append("path")
				.attr("d", "M50 10,L50 80,L45 80,L50 90,L55 80,L50 80 z")// <-G
				.attr("fill","#FF00EE")
				.attr("stroke","#000000")
				.attr("stroke-width",3); 
			
			svg = d3.select('#'+eleMId).append("div")
				.attr("id","horitionalArrow")
				.attr("height", height)
				.attr("width", width)
				.append("svg");
				svg.attr("height", height)
					.attr("width", width);    
			g =	svg.append("g");
			g.append("path")
				.attr("d", "M50 10,L85 10,L85 80,L80 80,L85 85,L90 80,L85 80,L85 10,L50 10 z")// <-G
				.attr("fill","#FF00EE")
				.attr("stroke","#000000")
				.attr("stroke-width",3); 
			
			svg = d3.select('#'+eleMId).append("div")
				.attr("id","verticalArrow")
				.attr("height", height)
				.attr("width", width)
				.append("svg");
				svg.attr("height", height)
					.attr("width", width);    
			g =	svg.append("g");
			g.append("path")
				.attr("d", "M50 10,L50 80,L85 80,L85 85,L95 80,L85 75,L85 80,L50 80,L50 10 z")// <-G
				.attr("fill","#FF00EE")
				.attr("stroke","#000000")
				.attr("stroke-width",3); 
		};
		
};

var DrawUtils = new DrawUtils();