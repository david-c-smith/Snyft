$('#button3').click(function() {
    $.ajax({
        type: 'POST',
        url: 'http://snyft.herokuapp.com/connect3'
    });
});
