//on ready handler
$(document).on('ready', function() {
	//form validation
	$('#order-form').validate({
        submitHandler: function(form) {
            form.submit();
        },
        onfocusout: function(element) {
         $(element).valid();
        },
		
		rules: {
			"your-name": {
				required: true,
				maxlength: 128,
				lettersonly: true
			},
		
			"your-address": {
				required: true
			},
			
			"your-city": {
				required: true
			},
			
			"your-state": {
				required: true,
				maxlength: 2,
				lettersonly: true
			},
			
			"your-zip": {
				required: true,
				maxlength: 5,
				digits: true
			},
			
			"card-holder-name": {
				required: true,
				lettersonly: true,
				maxlength: 128
			},
			
			"card-number": {
				required: true,
				creditcard: true
			},
			
			"expiry-month": {
				required: true
			},
			
			"expiry-year": {
				required: true
			},
			
			"cvv": {
				required: true,
				maxlength: 3,
				digits: true
			},
		}
	});
	
	// Tooltips
    $('label span.glyphicon').tooltip();
});
