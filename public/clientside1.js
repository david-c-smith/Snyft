$('#button1').click(function() {
    $.ajax({
        type: 'POST',
        url: 'http://localhost:8080/connect1'
    });
});
