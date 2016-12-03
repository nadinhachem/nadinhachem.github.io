function ajax_get(url, callback){
xmlhttp= new XMLHttpRequest();
  var b = document.getElementById("quotes");xmlhttp.onreadystatechange = function(){
  if(xmlhttp.readyState == 4 && xmlhttp.status == 200){

    console.log('respone Text: '+ xmlhttp.responseText);
    try{
      var data = JSON.parse(xmlhttp.responseText);


    }catch(err){
      console.log(err.message);
      return;
    }
    callback(data);
  }

}

xmlhttp.open("GET",url,true);
xmlhttp.send();
}

//ajax_get('data.json',callbackresult);


function callbackresult(data){
  var temp='';
  for(var i =0;i<data.length;i++)
  {
    temp=temp+"<ul><li> <i>"+data[i].content+"</i> by <b>"+data[i].author+"</b></li></ul>"
  }

    document.getElementById("quotes").innerHTML=temp;
}
