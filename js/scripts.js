(function () { 
		// Sngleton Class for the table
		var table = {
		noOfRows :20,
		noOfColumns:15,
		addRow : function () {
			this.noOfRows++;
		},
		addColumn : function() {
			this.noOfColumns++;
		},
		rowArray : new Array(),
		columnArray : new Array()
	};

	table.rowArray.length = table.noOfRows;
	table.columnArray.length = table.noOfColumns;
	
	var alpha = 65,beta = 65,loop = 0;
	// Drawing the table initially and assigning ID's to every element.
	for (var i = 0; i < table.noOfColumns; i++) {
		newHead = document.createElement('th');
		newHead.setAttribute('id','th_id_'+i);
		newHead.setAttribute('onclick','sortData('+i+')');
		textnode=document.createTextNode(String.fromCharCode(alpha));
		alpha++;
		document.getElementById('headtr').appendChild(newHead).appendChild(textnode);	
	}
	for (var i= 0;i<table.noOfRows;i++){
		var newRow = document.createElement('tr');
		newRow.setAttribute('id','id_'+i);
		document.getElementById('excelTable').appendChild(newRow);
		for (var j = 0; j < table.noOfColumns; j++) {
			newCell = document.createElement('td');
			newCell.setAttribute('id','id_'+i+'_'+j);
			document.getElementById('id_'+i).appendChild(newCell);
			newCell = document.createElement('input');
			newCell.setAttribute('type','text');
			newCell.setAttribute('onblur','updateCell('+i+','+j+')');
			document.getElementById('id_'+i+'_'+j).appendChild(newCell);
		};
	}
	

	addRow =function  () {
		i = table.noOfRows;
		table.addRow();
		var newRow = document.createElement('tr');
		newRow.setAttribute('id','id_'+i);
		document.getElementById('excelTable').appendChild(newRow);
		for (var j = 0; j < table.noOfColumns; j++) {
		newCell = document.createElement('td');
		newCell.setAttribute('id','id_'+i+'_'+j);
		document.getElementById('id_'+i).appendChild(newCell);
		newCell = document.createElement('input');
		newCell.setAttribute('type','text');
		newCell.setAttribute('onblur','updateCell('+i+','+j+')');
		document.getElementById('id_'+i+'_'+j).appendChild(newCell);
		}	
	}

	addColumn = function(){
		j = table.noOfColumns;
		table.addColumn();
		newHead = document.createElement('th');
		newHead.setAttribute('id','th_id_'+i);
		if (alpha<90 && loop ==0){
		textnode=document.createTextNode(String.fromCharCode(alpha));
		alpha++;
		if (alpha=91) {alpha=65;loop=1;};
		}
		else {
			textnode=document.createTextNode(String.fromCharCode(alpha)+String.fromCharCode(beta));
			beta++;
			if (beta==91) {alpha++;loop++;beta=65};
		}
		console.log(alpha)
		document.getElementById('headtr').appendChild(newHead).appendChild(textnode);	
		for (var i = 0; i < table.noOfRows; i++) {
		newCell = document.createElement('td');
		newCell.setAttribute('id','id_'+i+'_'+j);
		document.getElementById('id_'+i).appendChild(newCell);
		newCell = document.createElement('input');
		newCell.setAttribute('type','text');
		newCell.setAttribute('onblur','updateCell('+i+','+j+')');
		document.getElementById('id_'+i+'_'+j).appendChild(newCell);
		}
	}

	cellContent = new Array(table.noOfRows);
	for (var i = 0; i < cellContent.length; i++) {
		cellContent[i] = new Array(table.noOfColumns);
	}; 
	updateCell = function(i,j){
		cellContent[i][j] = document.getElementById('id_'+i+'_'+j).firstChild.value;
	}
	sortData = function(j){
		for (var l = 0; l < table.noOfRows-1 ; l++) {
			for (var q = 0; q < table.noOfColumns; q++) {
					if (cellContent[q][j]>cellContent[q+1][j]) {

						for (var k = 0; k < table.noOfColumns-q; k++) {
					
							var temp =cellContent[q][k];
							cellContent[q][k] = cellContent[q+1][k];
							element = document.getElementById('id_'+q+'_'+k);
							if(element.firstChild.value!="")
							element.firstChild.value = cellContent[q][k];
							
							cellContent[q+1][k]=temp;
							element = document.getElementById('id_'+(q+1)+'_'+k);
							if(element.firstChild.value!="")
							element.firstChild.value = cellContent[q+1][k];
							};
						};
				};
			};
	}

	})()