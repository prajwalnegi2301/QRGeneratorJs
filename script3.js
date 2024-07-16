 const imageGenerated=document.getElementById('imageGenerated');

 function searchImage(){
   const query=document.getElementById('searchSpace').value;
   
   document.getElementById('searchSpace').value="";


   if(query.length===0){
      imageGenerated.alt=`Enter Value`;
   }

   imageGenerated.src =` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${query}`;

 }