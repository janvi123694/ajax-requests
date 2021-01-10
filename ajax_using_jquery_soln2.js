
 function getImg(){
	$.get('https://dog.ceo/api/breeds/image/random',function(data){
	var imgUrl = data.message; 
	$("#dog-img").attr('src',imgUrl); 
    })
 }

 $("#fetch-dog-img-btn").click(getImg);