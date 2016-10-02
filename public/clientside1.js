$('#button1').click(function() {
    $.ajax({
        type: 'POST',
        url: 'https://snyft.herokuapp.com/connect1'
    });
});
