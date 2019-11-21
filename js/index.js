//Width and height
var w = 500;
var h = 150;
		
var IndexPage = function(){
	var _this = this;
	
	_this.toLogin = function(){
		$("#login_shadow_layer").removeClass("hidden");
		$("#login_shadow_layer").addClass("show");
		$("#login_div").removeClass("hidden");
		$("#login_div").addClass("show");
	};
	_this.closeLogin = function(){
		$("#login_div").removeClass("show");
		$("#login_div").addClass("hidden");
		$("#login_shadow_layer").removeClass("show");
		$("#login_shadow_layer").addClass("hidden");
	};
	
	_this.drawBg = function(eleId,svgId,w,h){
		var eleIdDom;
		if(eleId&&eleId!=""&&eleId.length>0){
			eleIdDom = d3.select("#"+eleId);
		}else{
			return false;
		}
		var svg = eleIdDom.append("svg")
					.attr("id",svgId)
					.attr("viewBox", [0, 0, w, h])
					.attr("width", w)
					.attr("height", h);
		return svg;
	};
		
	_this.initDiv3SvgDefs = function(elementTag){
			var svg = d3.select(elementTag);
			if(!svg){
				return false;
			}
			var linearGradient = svg.append("defs")
								.append("linearGradient")
								.attr("id","gradient")
								.attr("x1","0%")
								.attr("y1","0%")
								.attr("x2","100%")
								.attr("y2","100%");
			linearGradient.append("stop")
						  .attr("offset","0.0%")
						  .attr("stop-color","#2c7bb6");
						  
			linearGradient.append("stop")
						  .attr("offset","12.5%")
						  .attr("stop-color","#00a6ca");
						  
			linearGradient.append("stop")
						  .attr("offset","25.0%")
						  .attr("stop-color","#00ccbc");
						  
			linearGradient.append("stop")
						  .attr("offset","37.5%")
						  .attr("stop-color","#90eb9d");
						  
			linearGradient.append("stop")
						  .attr("offset","50.0%")
						  .attr("stop-color","#ffff8c");
						  
			linearGradient.append("stop")
						  .attr("offset","62.5%")
						  .attr("stop-color","#f9d057");
						  
			linearGradient.append("stop")
						  .attr("offset","75.0%")
						  .attr("stop-color","#f29e2e");
						  
			linearGradient.append("stop")
						  .attr("offset","87.5%")
						  .attr("stop-color","#e76818");
						  
			linearGradient.append("stop")
						  .attr("offset","100.0%")
						  .attr("stop-color","#d7191c");
	};
		
		
		
	_this.unBindDragRect = function(){
			var svg = d3.select("#drawMainDiv svg[id=draw_bg_svg]");
			svg.selectAll("rect").on("mousedown",null).on("mouseup",null);
	};
		
	_this.bindDragRect = function(){
		var svg = d3.select("#drawMainDiv svg[id=draw_bg_svg]");
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
			debugger;
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
			debugger;
		});
		
	};
		
	_this.drawBgOnClick = function(drawBgEleId){
		var event = d3.select("#"+drawBgEleId).on("click",function(e){
			var e1 = d3.event;
			var x = e1.offsetX;
			var y = e1.offsetY;
			var drawId = DrawUtils.param.drawId;
			if(drawId && drawId.length>0){
				if('startCircle'==drawId){
					DrawUtils.drawStart('#drawMainDiv svg[id=draw_bg_svg]',x,y,50);
				}
				if('endCircle'==drawId){
					DrawUtils.drawEnd('#drawMainDiv svg[id=draw_bg_svg]',x,y,40);
				}
				if('rect'==drawId){
					DrawUtils.drawRect('#drawMainDiv svg[id=draw_bg_svg]',x,y,80,35);
				}
				if('rectRotate'==drawId){
					DrawUtils.drawRectRotate('#drawMainDiv svg[id=draw_bg_svg]',x,y,80,35);
				}
				if('arrow'==drawId){
					//DrawUtils.drawArrow('#drawMainDiv svg[id=draw_bg_svg]',x,y,80,35);
				}
				if('horitionalArrow'==drawId){
					//DrawUtils.drawHoritionalArrow('#drawMainDiv svg[id=draw_bg_svg]',x,y,80,35);
				}
				if('verticalArrow'==drawId){
					//DrawUtils.drawVerticalArrow('#drawMainDiv svg[id=draw_bg_svg]',x,y,80,35);
				}
				
			}
			
		});
		console.log(event);
	};
	
	_this.drawBgContextMenu = function(drawBgEleId){
		var event = d3.select("#"+drawBgEleId).on("contextmenu",function(e){
			d3.event.preventDefault();
		});
	};
	
	_this.drawBgMouseDown = function(drawBgEleId){
		var event = d3.select("#"+drawBgEleId).on("mousedown",function(e){
			if (d3.event.button != 0 && d3.event.buttons!=1){
				return false;
			}
			var e1 = d3.event;
			var x = e1.offsetX;
			var y = e1.offsetY;
			var drawId = DrawUtils.param.drawId;
			if(drawId && drawId.length>0){
				if('startCircle'==drawId){
					DrawUtils.drawStart('#drawMainDiv svg[id=draw_bg_svg]',x,y,50);
				}
				if('endCircle'==drawId){
					DrawUtils.drawEnd('#drawMainDiv svg[id=draw_bg_svg]',x,y,40);
				}
				if('rect'==drawId){
					DrawUtils.drawRect('#drawMainDiv svg[id=draw_bg_svg]',x,y,80,35);
				}
				if('rectRotate'==drawId){
					DrawUtils.drawRectRotate('#drawMainDiv svg[id=draw_bg_svg]',x,y,80,35);
				}
				if('arrow'==drawId){
					//DrawUtils.drawArrow('#drawMainDiv svg[id=draw_bg_svg]',x,y,80,35);
					DrawUtils.drawPathMoveTo(drawId,x,y);
				}
				if('horitionalArrow'==drawId){
					//DrawUtils.drawHoritionalArrow('#drawMainDiv svg[id=draw_bg_svg]',x,y,80,35);
					DrawUtils.drawPathMoveTo(drawId,x,y);
				}
				if('verticalArrow'==drawId){
					//DrawUtils.drawVerticalArrow('#drawMainDiv svg[id=draw_bg_svg]',x,y,80,35);
					DrawUtils.drawPathMoveTo(drawId,x,y);
				}
				
			}
		});
	};
	
	_this.drawBgMouseMove = function(drawBgEleId){
		var event = d3.select("#"+drawBgEleId).on("mousemove",function(e){
			var e1 = d3.event;
			var x = e1.offsetX;
			var y = e1.offsetY;
			var drawId = DrawUtils.param.drawId;
			if(drawId && drawId.length>0){
				DrawUtils.drawPathLineTo(drawId,x,y);
			}
		});
	};
	
	_this.drawBgMouseUp = function(drawBgEleId){
		var event = d3.select("#"+drawBgEleId).on("mouseup",function(e){
			if (d3.event.button != 0 && d3.event.buttons!=1){
				return false;
			}
			var e1 = d3.event;
			var x = e1.offsetX;
			var y = e1.offsetY;
			var drawId = DrawUtils.param.drawId;
			if(drawId && drawId.length>0){
				DrawUtils.drawPathMouseUpClearData(drawId,x,y);
			}
		});
	};
		
	_this.bodyOnClick2 = function(){
		var event = d3.select("#drawMainDiv").on("click",function(e){
			var e1 = d3.event;
			var x = e1.offsetX;
			var y = e1.offsetY;
			//drawRect3(x,y);
			_this.unBindDragRect();
			_this.bindDragRect();
			debugger;
		});
		debugger;
		console.log(event);
	};
		
	_this.bodyOnDbClick = function(){
		var event = d3.select("#drawMainDiv").on("dblclick",function(e){
			var e1 = d3.event;
			var x = e1.offsetX;
			var y = e1.offsetY;
			//drawRect3(x,y);
			_this.unBindDragRect();
			_this.bindDragRect();
			debugger;
		});
		debugger;
		console.log(event);
	};
		
	_this.removeRect = function(){
		var svg = d3.select("#drawMainDiv svg[id=draw_bg_svg]");
		svg.selectAll("rect").on("mousedown",function(d,i){
			d3.select(this).remove();
		});
	};
	
	_this.dataObjToStr = function(dataObj){
		var str = "";
		if(dataObj && dataObj!=null && typeof(dataObj)=="object"){
			str += "{";
			str += ("id:"+dataObj.id+",")
			str += ("name:"+dataObj.name+",")
			str += ("type:"+dataObj.type+",")
			str += ("x:"+dataObj.x+",")
			str += ("y:"+dataObj.y+",")
			str += ("cx:"+dataObj.cx+",")
			str += ("cy:"+dataObj.cy+",")
			str += ("r:"+dataObj.r+",")
			str += ("width:"+dataObj.width+",")
			str += ("height:"+dataObj.height+",")
			str += ("preId:"+dataObj.preId+",")
			str += ("preObj:"+dataObj.preObj+",")
			str += ("nextId:"+dataObj.nextId+",")
			str += ("nextObj:"+dataObj.nextObj)
			str += "}";
		}
		return str;
	};
		
	_this.initLeftMenu = function(){
		var deleteEle = d3.select("#deleteEle").on("click",function(){
			if(d3.select("#deleteEle").property("checked") == true){
				_this.unBindDragRect();
				_this.removeRect();
			}else{
				//_this.unBindDragRect();
				//_this.bindDragRect();
			}
			
		});
		
		var selectSimpleShape = d3.select("#selectSimpleShape").on("click",function(){
			var selectClassDiv = d3.select("div[id$=graphMenu]").select("div[class=selectClass]");debugger;
			if(selectClassDiv != null && selectClassDiv && selectClassDiv.length>0){
				console.log("id="+selectClassDiv.attr("id"));
			}
		});
		
		d3.select("#drawGraghShape").on("click",function(e){
			var dataObjArray = _DrawDataObjFactory.getDataObjArray();
			var len = dataObjArray.length;
			for(var i=0;i<len;i++){
				var str = _this.dataObjToStr(dataObjArray[i]);
				console.log(str);
			}
		});
	};
		
	_this.rightShapeClick = function (val){
		var that = d3.select(this);
		var tempVal = val;
		
	};
		
	_this.initRightShapes = function(){
		DrawUtils.initShapes("graphMenu");
	};
		
	_this.initDivRightDivEvent = function (){
		d3.select("div[id$=graphMenu]").selectAll("div").on("click",function(){
			d3.select("div[id$=graphMenu]").selectAll("div").attr("class","");
			d3.select(this).attr("class","selectClass");
			var that = d3.select(this);
			var thatId = that.attr("id");
			DrawUtils.graphMenuOnSelect(thatId);
		});
	};
		
	
	_this.pageOnLoad = function(){
		$("#to_login").bind("click",function(){
			_this.toLogin();
		});
		$("#to_login_close").bind("click",function(){
			_this.closeLogin();
		});
		_this.initLeftMenu();
		_this.initRightShapes();
		_this.initDivRightDivEvent();
		var drawMainDiv = $("#drawMainDiv");
		var drawMainDivTemp = d3.select("#drawMainDiv");
		_this.drawBg("drawMainDiv","draw_bg_svg",$("div[id$=drawMainDiv]").width(),$("#drawMainDiv").height());
		
		_this.initDiv3SvgDefs("#drawMainDiv svg[id=draw_bg_svg]");
		
		//_EleMentZoom.init("#drawMainDiv svg[id=draw_bg_svg]");
		
		//_this.drawBgOnClick("drawMainDiv svg[id=draw_bg_svg]");
		_this.drawBgContextMenu("drawMainDiv svg[id=draw_bg_svg]");
		_this.drawBgMouseDown("drawMainDiv svg[id=draw_bg_svg]");
		_this.drawBgMouseMove("drawMainDiv svg[id=draw_bg_svg]");
		_this.drawBgMouseUp("drawMainDiv svg[id=draw_bg_svg]");
		//_this.bodyOnDbClick();
		$(window).bind('resize',function(){
			d3.selectAll("#graphMenu div").remove();
			d3.select("#drawMainDiv svg[id=draw_bg_svg]").remove();
			_this.pageOnLoad();
		});
	};
};
var _IndexPage = new IndexPage();