$(function () {

    var alreadyField = false;

    let states = ["Alaska",
        "Alabama",
        "Arkansas",
        "American Samoa",
        "Arizona",
        "California",
        "Colorado",
        "Connecticut",
        "District of Columbia",
        "Delaware",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Iowa",
        "Idaho",
        "Illinois",
        "Indiana",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Massachusetts",
        "Maryland",
        "Maine",
        "Michigan",
        "Minnesota",
        "Missouri",
        "Mississippi",
        "Montana",
        "North Carolina",
        "North Dakota",
        "Nebraska",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "Nevada",
        "New York",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Virginia",
        "Virgin Islands",
        "Vermont",
        "Washington",
        "Wisconsin",
        "West Virginia",
        "Wyoming"]


    //This function work when the page loading at the first time    
    function initDialog() {
        clearDialog();

        //Draw all the country in the dialog div BUT not show them yet 
        //(display:none)
        for (let index = 0; index < states.length; index++) {
            $(".dialog").append('<div>' + states[index] + '</div>');
        }
    }

    //This func clear the dialog div from all results
    function clearDialog() {
        $(".dialog").empty();
    }

    //Get the all list of Country when the search field is empty & clicked
    $('.autoCompleted input').click(function () {
        if (!alreadyField) {
            $('.dialog').addClass('open');
        }
    })

    //Draw the country name from the clicked DIV - in the search field
    $('body').on('click', '.dialog > div', function () {
        $('.autoCompleted input').val($(this).text()).focus();
        $('.autoCompleted .close').addClass('visible');
        alreadyField = true;
    })

    //Click on Cancel button - clear the search field and 
    $('.autoCompleted .close').click(function () {
        alreadyField = false;
        $('.dialog').addClass('open');
        $('.autoCompleted input').val('').focus();
        $(this).removeClass('visible'); //Hide the Cancel Button
    })

    //Find and Match country function
    function match(str) {
        clearDialog();
        for (let index = 0; index < states.length; index++) {
            userStr = str.toLowerCase();
            arraytStr = states[index].toLowerCase();

            if (arraytStr.startsWith(userStr)) {
                $(".dialog").append('<div>' + states[index] + '</div>');
            }
        }
    }

    //At the moment the user write in the search field - this function 
    //will start to work
    $('.autoCompleted input').on('input', function () {
        $('.dialog').addClass('open');
        alreadyField = false;
        match($(this).val());
    })

    //The event.target - give as the target where the event happend
    $('body').click(function (event) {

        //If the user click anything but input field or 
        //Cancel button - then close the dialog div (by remove the 'open' class)
        if (!$(event.target).is("input, .close")) {
            $(".dialog").removeClass("open");
        }
    })

    //
    $('input').keydown(function (e) {
        if (e.keyCode == 40) {
            // $('.dialog open div').focus();
            //alert("hey");
            $('.dialog open div').setAttribute("id", "fuc");
        }
    });

    initDialog();
})