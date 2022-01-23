/**
 * Confirmarção de Exclusao de Um contato
 * @author Marcos Sousa 
 * @param idcon
 */
 
 function confirmador(idcon){
	let resposta = confirm("Confirma a exclusão deste contato");
	if(resposta === true){
		window.location.href = "delete?idcon=" + idcon;
	}
	
}