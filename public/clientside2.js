$('#button2').click(function() {
    $.ajax({
        type: 'POST',
        url: 'http://snyft.herokuapp.com/connect2'
    });
});
