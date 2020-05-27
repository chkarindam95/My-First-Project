form name="ap_form" method="post"
action="/cgi-bin/articles/development/
  javascript/form-validation-with-javascript/contact_simple.cgi"
onsubmit="return myFunction ( );"><script type="text/javascript">
<!--

function myFunction ( )
{
    valid = true;

    if ( document.contact_form.contact_name.value == "" )
    {
        alert ( "Please enable access point' box." );
        valid = false;
    }

    return valid;
}

//-->
</script>