$(function() {

    /**
     * Matches US phone number format
     *
     * where the area code may not start with 1 and the prefix may not start with 1
     * allows '-' or ' ' as a separator and allows parens around area code
     * some people may want to put a '1' in front of their number
     *
     * 1(212)-999-2345 or
     * 212 999 2344 or
     * 212-999-0983
     *
     * but not
     * 111-123-5434
     * and not
     * 212 123 4567
     */
    $.validator.addMethod( "phoneUS", function( phone_number, element ) {
        phone_number = phone_number.replace( /\s+/g, "" );
        return this.optional( element ) || phone_number.length > 9 &&
            phone_number.match( /^(\+?1-?)?(\([2-9]([02-9]\d|1[02-9])\)|[2-9]([02-9]\d|1[02-9]))-?[2-9]([02-9]\d|1[02-9])-?\d{4}$/ );
    }, "Please enter a valid phone number" );


    $("#register-form").validate({
        rules: {
            
            name: {
                required: true,
                lettersonly: true,
                nowhitespace: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true,
                minlength: 5
            },
            phoneUS: {
                required: true,
                phoneUS: true
            }

        },
        messages: {
            name: {
                required: 'Please your full name.',
                minlength: 'The name you have entered is not long enough.'
            },
            email: {
                required: 'Please enter your email address.',
                email: 'Please enter a <em>valid</em> email address.',
                minlength: 'The email you have entered is not long enough.'
            },
            phoneUS: {
                required: 'Please enter your phone number.'
            }
        }
    });
});