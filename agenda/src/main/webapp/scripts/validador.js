/**
 * Validação de Formulario
 *@author Marcos Sousa 
 *
 */
 
 function validar(){
	let nome = frmContato.nome.value;
	let fone = frmContato.fone.value;
	
	if(nome === ""){
		alert('Prencha o Campo Nome');
		frmContato.nome.focus();
		return false;
	}else if(fone ===""){
		alert('Prencha o Campo Fone');
		frmContato.fone.focus();
		return false;
	} else{
		document.forms["frmContato"].submit();
	}
	
}
 