var DrawDataObj = function(){
	var _this = this;
	_this.id="";
	_this.name="";
	_this.type="";
	_this.x=0;
	_this.y=0;
	_this.cx=0;
	_this.cy=0;
	_this.r=0;
	_this.width=0;
	_this.height=0;
	_this.path = null;
	_this.pathStartX=0;
	_this.pathStartY=0;
	_this.pathEndX=0;
	_this.pathEndY=0;
	_this.preId="";
	_this.preObj={};
	_this.nextId="";
	_this.nextObj={};
	return _this;
};

var DrawDataObjFactory = function(){
	var _this = this;
	_this.dataObjIdArray = [];
	_this.dataObjArray = [];
	_this.dataObjs = {};
	_this.dataNodeIdArray = [];
	_this.dataNodeArray = [];
	_this.dataNodes = {};
	_this.dataLineIdArray = [];
	_this.dataLineArray = [];
	_this.dataLines = {};
	_this.currentDataObj = {};
	
	_this.getDataObjIdArray = function(){
		return _this.dataObjIdArray;
	};
	_this.getDataObjArray = function(){
		return _this.dataObjArray;
	};
	_this.getDataObjs = function(){
		return _this.dataObjs;
	};
	_this.getDataNodeIdArray = function(){
		return _this.dataNodeIdArray;
	};
	_this.getDataNodeArray = function(){
		return _this.dataNodeArray;
	};
	_this.getDataNodes = function(){
		return _this.dataNodes;
	};
	_this.getDataLineIdArray = function(){
		return _this.dataLineIdArray;
	};
	_this.getDataLineArray = function(){
		return _this.dataLineArray;
	};
	_this.getDataLines = function(){
		return _this.dataLines;
	};
	_this.getCurrentDataObj = function(){
		return _this.currentDataObj;
	};
	_this.UUID = function(withLine){
        var withLineVal = withLine; //带不带横线
        var len = 36; //长度为36
        var radix = 16; //16进制
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid = [], i;
        radix = radix || chars.length;
        if (withLineVal) {
            var r;
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';
            for (i = 0; i < len; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random() * 16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        } else {
            for (i = 0; i < len; i++) {
                uuid[i] = chars[0 | Math.random() * radix];
            }
        }
        return uuid.join('');
	};
	
	_this.getFullDate = function(){
		var nowDate=new Date();
		var year = nowDate.getFullYear();
		var month = nowDate.getMonth()+1;
		var dayOfMonth = nowDate.getDate();
		var hour = nowDate.getHours();
		var minute = nowDate.getMinutes();
		var second = nowDate.getSeconds();
		var millisecond = nowDate.getMilliseconds();
		var dateData = ""+year+""+month+""+dayOfMonth+""+hour+""+minute+""+second+""+millisecond;
		console.log("dateData="+dateData);
		return dateData;
	};
	
	_this.getFullDateWithDivider = function(dayDiv,hourDiv){
		var nowDate=new Date();
		var year = nowDate.getFullYear();
		var month = nowDate.getMonth()+1;
		var dayOfMonth = nowDate.getDate();
		var hour = nowDate.getHours();
		var minute = nowDate.getMinutes();
		var second = nowDate.getSeconds();
		var millisecond = nowDate.getMilliseconds();
		var dateData = ""+year+""+dayDiv+""+month+""+dayDiv+""+dayOfMonth+" "+hour+""+hourDiv+""+minute+""+hourDiv+""+second+""+hourDiv+""+millisecond;
		console.log("dateData="+dateData);
		return dateData;
	};
	
	_this.generateId = function(prefix){
		var prefix = prefix||"";
		var id = prefix + _this.getFullDate() + Math.round(Math.random()*100);
		return id;
	};
	_this.createDrawDataObj = function(type,x,y,cx,cy,r,w,h,startX,startY,endX,endY){
		var dataObj = new DrawDataObj();
		//console.log("dataObj="+dataObj);
		var id = _this.generateId(type);
		dataObj.id = id;
		dataObj.name = type + _this.UUID(false);
		dataObj.type = type;
		dataObj.x = x;
		dataObj.y = y;
		dataObj.cx = cx;
		dataObj.cy = cy;
		dataObj.r = r;
		dataObj.width = w;
		dataObj.height = h;
		dataObj.pathStartX = startX;
		dataObj.pathStartY = startY;
		dataObj.pathEndX = endX;
		dataObj.pathEndY = endY;
		
		_this.currentDataObj = dataObj;
		_this.dataObjIdArray.push(id);
		_this.dataObjArray.push(dataObj);
		_this.dataObjs[id] = dataObj;
		/**
		if('arrow'==type){
			_this.dataLineIdArray.push(id);
			_this.dataLineArray.push(dataObj);
			_this.dataLines[id] = dataObj;
		}else if('horitionalArrow'==type){
			_this.dataLineIdArray.push(id);
			_this.dataLineArray.push(dataObj);
			_this.dataLines[id] = dataObj;
		}else if('verticalArrow'==type){
			_this.dataLineIdArray.push(id);
			_this.dataLineArray.push(dataObj);
			_this.dataLines[id] = dataObj;
		}else{
			_this.dataNodeIdArray.push(id);
			_this.dataNodeArray.push(dataObj);
			_this.dataNodes[id] = dataObj;
		}
		**/
		return dataObj;
	};
	
	_this.saveDataNode = function(dataObj){
		_this.dataNodeIdArray.push(dataObj.id);
		_this.dataNodeArray.push(dataObj);
		_this.dataNodes[dataObj.id] = dataObj;
	};
	_this.updateDataNode = function(dataObj){
		_this.dataNodeArray.splice(_this.dataNodeArray.indexOf(_this.dataNodes[dataObj.id]),1);
		_this.dataNodeArray.push(dataObj);
		_this.dataNodes[dataObj.id] = dataObj;
	};
	
	_this.saveDataLine = function(dataObj){
		_this.dataLineIdArray.push(dataObj.id);
		_this.dataLineArray.push(dataObj);
		_this.dataLines[dataObj.id] = dataObj;
	};
	_this.updateDataLine = function(dataObj){
		_this.dataLineArray.splice(_this.dataLineArray.indexOf(_this.dataLines[dataObj.id]),1);
		_this.dataLineArray.push(dataObj);
		_this.dataLines[dataObj.id] = dataObj;
	};
	
	_this.getDrawDataObjById = function(dataObjId){
		if(dataObjId && dataObjId!="" && dataObjId.length>0){
			return _this.dataObjs[dataObjId];
		}else{
			return null;
		}
	};
	_this.updateDrawDataObj = function(dataObj){
		if(dataObj && typeof(dataObj)=="object"){
			_this.dataObjArray.splice(_this.dataObjArray.indexOf(_this.dataObjs[dataObj.id]),1);
			_this.dataObjArray.push(dataObj);
			_this.dataObjs[dataObj.id]=dataObj;
			/**
			if('arrow'==dataObj.type){
				_this.dataLineArray.splice(_this.dataLineArray.indexOf(_this.dataLines[dataObj.id]),1);
				_this.dataLineArray.push(dataObj);
				_this.dataLines[dataObj.id] = dataObj;
			}else if('horitionalArrow'==dataObj.type){
				_this.dataLineArray.splice(_this.dataLineArray.indexOf(_this.dataLines[dataObj.id]),1);
				_this.dataLineArray.push(dataObj);
				_this.dataLines[dataObj.id] = dataObj;
			}else if('verticalArrow'==dataObj.type){
				_this.dataLineArray.splice(_this.dataLineArray.indexOf(_this.dataLines[dataObj.id]),1);
				_this.dataLineArray.push(dataObj);
				_this.dataLines[dataObj.id] = dataObj;
			}else{
				_this.dataNodeArray.splice(_this.dataNodeArray.indexOf(_this.dataNodes[dataObj.id]),1);
				_this.dataNodeArray.push(dataObj);
				_this.dataNodes[dataObj.id] = dataObj;
			}
			**/
			return _this.dataObjs[dataObj.id];
		}
	};
};
var _DrawDataObjFactory = new DrawDataObjFactory();