
   $('.formulaire2').hide()
   $('.formulaire3').hide()
$("#img1").on('click',function() {
   $('.formulaire').show()
   $('.formulaire2').hide()
})
$("#img2").on('click',function() {
   $('.formulaire').hide()
   $('.formulaire2').show()
})
$("#btn").on('click',function(){
   if($('#name').val()===''){
   alert("name invalid");
   }else if ($('#animal-type').val()===''){
alert("take animal type ");
}else 
if ($('#number').val()===null){
alert("giv me a number");
}else 
if ($('#phone').val()===''){
alert("please take your phone");
} else 
if ($('#phone').val().length!==8){
alert("a phone number composit betwin 8 digit");
}
else 
if ($('#Symptoms').val()===''){
alert("please take the Symptoms");
}else 
if($('#date').val()=='2020-11-11'){
   alert ('take your date')

}else if($('#region').val() =='none'){
   alert ('take region')
}else 
alert("god job !!!")
})
//************ */
$("#btn2").on('click',function(){
   if($('#name2').val()===''){
   alert("name invalid");
   }else if ($('#animal-type2').val()===''){
alert("take animal type ");
}else 
if ($('#phone2').val()===''){
alert("please take your phone");
} else 
if ($('#phone2').val().length!==8){
alert("a phone number composit betwin 8 digit");
}
else 
if ($('#Symptoms2').val()===''){
alert("please take the Symptoms");
}else 
if($('#date2').val()=='2020-11-11'){
   alert ('take your date')
}else
alert("god job !!!")
})
$('#modifier').on('click',function(){
   $('.formulaire2').hide()
   $('.formulaire3').show()
   $('#msg').empty()
})
$('#btn3').on('click',function(){
   $('#msg').empty()
   $('#msg').append(`<h3>${'your reservation is modified' }</h3>`)
})