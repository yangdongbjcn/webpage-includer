$(document).ready(function(){

var str='\
IPC分类号\n\
G06F16/242 | G06F16/28 | G06F16/25 | G06F16/245\n\
H04W12/02 | H04W12/04 | H04W24/02 | H04W24/04\n\
H04W24/02 | H04W24/08\n\
H04L29/08\n\
H04W36/00 | H04W36/08\n\
H04L29/12\n\
G06F3/06\n\
H04L12/26\n\
H04W64/00 | H04W24/04\n\
H04L29/06\n\
G06F17/30\n\
G06F17/30\n\
H04W24/00 | H04W80/00 | H04W92/00\n\
H04W24/02 | H04W24/04\n\
H04L29/06 | H04Q3/00\n\
H04L29/08\n\
H04W4/14 | H04L1/00\n\
H04L1/00 | H04L1/18\n\
H04L12/24 | H04L29/06 | H04L29/08\n\
H04W36/00\n\
';

	$('#input_text').val(str);
	$('#result_text').val('');
	
	$('#submit').click(function(){
		var p_url = g_var.gs_yd_text + 'TextLines/apiGetIpc1';
		var p_data = {
			text: $('#input_text').val()
		};
		p_callback = function(data, status){
			var regReturn = new RegExp('rrrrnnnn', "g");
			t_data = data.replace(regReturn,"\r\n" );
			$('#result_text').val(t_data);
		};
		$.post(p_url, p_data, p_callback);
	});/*click function*/
});



