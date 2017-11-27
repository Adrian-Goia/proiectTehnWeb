    var form = $('#ajax-contact');

    var formMessages = $('#form-messages');

    $(form).submit(function(e) {

        e.preventDefault();

        var formData = $(form).serialize();

        $.ajax({
            type: 'POST',
            url: '../ajax.php',
            data: formData
        })
            .done(function(response) {

                $(formMessages).text(response);

                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            })

    });

