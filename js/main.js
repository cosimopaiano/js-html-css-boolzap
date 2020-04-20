/**
 * Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e
 * cliccando icona ‘invia il testo’ viene aggiunto al thread sopra, come messaggio verde (ricordate focus() )
 * Messaggi visibili inizialmente sono inseriti statici nell’HTML
 * Usate un template nell’html e clone() per l’ inserimento del messaggio da fare in JS
*/

$(document).ready(function () {

  // referenze icona ed input
  var inputSend = $('.bottom-bar-chat input');
  var iconChange = $('.bottom-bar-chat i:last-child');


  // cambio icona microfono/aereo
  inputSend.on('focus blur', function(){
    iconChange.toggleClass('fas fa-microphone fas fa-paper-plane');

  });

  // invio messaggio con click
  $('#app').on('click', '.bottom-bar-chat i:last-child', function() {

    // clonazione template
    var messageTemplates = $('.templates .message-sent').clone();

    var sendMessage = inputSend.val().trim();
    console.log(sendMessage);

    if (sendMessage !== '') {
      // invio messaggio con clone
      messageTemplates.children().children('h5').text(sendMessage);
      $('.message-view ul').append(messageTemplates);
      // reset input
      inputSend.val('');
    }
  });


  inputSend.keyup(function (e) {
    // clono il template
    var messageTemplates = $('.templates .message-sent').clone();
    var sendMessage = inputSend.val().trim();

    if (sendMessage !== '' && e.which == 13 ) {
     messageTemplates.children().children('h5').text(sendMessage);
     $('.message-view ul').append(messageTemplates);
     // reset input
     inputSend.val('');
    }

  });



}); //end Ready
