
const transportNames = ["Queue 1", "Queue 2", "Queue 3", "Queue 4", "Queue 5", "Queue 6", "Queue 7", "Queue 8", "Queue 9", "Queue 10"];
const transportMph = [3.1, 18, 24, 19, 22, 10, 12, 18, 15, 9];
const transportRanges = [30, 7, 31, 18, 10, 13, 22, 15, 8, 6];
const transportImages = ["images/walk.png", "images/boosterboard.png", "images/evolve_bamboo.png", "images/onewheel.png", "images/mototec.png", "images/segway_mini_s.png", "images/segway_s_plus.png", "images/razor_scooter.png", "images/geo_blade.png", "images/hovertrax.png"];

inputText = 0
currentlySelected = -1

functionId = 0 //0 is distance to time, 1 is time to distance
transportId = -1
$(document).ready(function () {

    listTransportButtons()
    /*
    $("#submitButton").click(function () {
        inputText = $("#inputTextBox").val().trim(); //value from input text box
        updateAllCardTexts(inputText)


    });
    */

    /*
    $("#inputTextBox").keyup(function () {

        inputText = $("#inputTextBox").val().trim(); //value from input text box
        updateAllCardTexts(inputText)
        if (currentlySelected != -1) {
            updateSelectCardRange(currentlySelected)

        }

        checkForRange()
    });
    */

    /*
    //when clicking the transportation mode buttons
    $("[id|='transportButton']").click(function(){
        alert($(this).attr('id'))

        transportId = $(this).attr('id').split("-")[1] //transport ID from button id
        transportName = transportNames[transportId]

        //highlight the selected option
        for (let i = 0; i < 10; i++){

            $("#transportCard-"+i).removeClass("selectedTransport")
        }
        $("#transportCard-"+transportId).addClass("selectedTransport")

        
        //set the selected main card with the name
        $("#transportName").html(transportName)

        //set the selected main card with the correct image
        $("#transportImage").attr('src',transportImages[transportId])

        inputText = $("#inputTextBox").val().trim()

        //calculate the function
        
        for (let i = 0; i < 10; i++){
            
            $("#transportButtonText-"+i).html(getCardText(i))
        }
        

        //set the main card with the updated text calculation
        $("#transportText").html(getCardText(transportId))

        checkForRange()
        
      });
      */

    /*
    $("#distanceToTimeTabButton").click(function () {
        //alert($("#functionNav").val())
        $("#rentButton").hide()

        $("#threeColumn").hide().fadeIn();
        currentlySelected = -1;


        functionId = 0
        $("#transportText").html("")
        $("#inputTextBoxUnits").html("miles")

        $("#inputTitle").html("Distance")
        $("#inputInstructions").html("Enter distance to destination")



        //reset values
        inputText = $("#inputTextBox").val("")
        $("#transportButtonTextRange").html("")


        $("#transportName").html("Select Transport")
        $("#transportRangeText").html("")

        $("#transportImage").attr('src', "images/white.PNG")

        $("#fullTransportCard").removeClass("outOfRangeTransport")


        for (let i = 0; i < 10; i++) {

            $("#transportButtonText-" + i).html("")
            $("#transportButtonTextRange-" + i).html("")

        }

        for (let i = 0; i < 10; i++) {
            $("#transportCard-" + i).removeClass("outOfRangeTransport")

            $("#transportCard-" + i).removeClass("selectedTransport")
        }


    })

    $("#timeToDistanceTabButton").click(function () {
        //alert($("#functionNav").val())
        $("#rentButton").hide()

        $("#threeColumn").hide().fadeIn();

        currentlySelected = -1;


        functionId = 1
        $("#transportText").html("")
        $("#inputTextBoxUnits").html("minutes")

        $("#inputTitle").html("Time")
        $("#inputInstructions").html("Enter time to destination")


        //reset values
        inputText = $("#inputTextBox").val("")
        $("#transportName").html("Select Transport")
        $("#transportRangeText").html("")

        $("#transportImage").attr('src', "images/white.PNG")

        $("#fullTransportCard").removeClass("outOfRangeTransport")


        for (let i = 0; i < 10; i++) {

            $("#transportButtonText-" + i).html("")
            $("#transportButtonTextRange-" + i).html("")

        }

        for (let i = 0; i < 10; i++) {
            $("#transportCard-" + i).removeClass("outOfRangeTransport")

            $("#transportCard-" + i).removeClass("selectedTransport")
        }

    })
    */


});

function listTransportButtons() {
    // Get the element
    for (let i = 9; i >= 1; i--) {
        var elem = document.querySelector('#transportCard-0');

        // Create a copy of it
        var clone = elem.cloneNode(true);
        clone.id = 'transportCard-' + i;
        //clone.classList.add('outOfRangeTransport');

        var cloneButton = clone.querySelector("[id|='transportButton']");
        cloneButton.id = 'transportButton-' + i;
        var cloneButtonTitle = clone.querySelector("#transportButtonTitle")
        cloneButtonTitle.innerHTML = transportNames[i]
        //alert(transportNames[i])

        var cloneButtonImage = clone.querySelector("#transportButtonImage");
        cloneButtonImage.src = transportImages[i]

        var cloneButtonText = clone.querySelector("#transportButtonText-0");
        cloneButtonText.id = 'transportButtonText-' + i;


        var cloneButtonTextRange = clone.querySelector("#transportButtonTextRange-0");
        cloneButtonTextRange.id = 'transportButtonTextRange-' + i;

        //var cloneButtonTitle = clone.querySelector("")




        elem.after(clone);
        $("#" + clone.id).hide().fadeIn("slow");





    }
    $("#inventory_management_button").click(function () {
        //go to the inventory mangement screen
        window.location.href = 'inventory_management.html';

    });

    $("[id|='transportButton']").click(function () {
        //alert($(this).attr('id'))


        $("#fullCard").hide().fadeIn();


        transportId = $(this).attr('id').split("-")[1] //transport ID from button id
        transportName = transportNames[transportId]
        currentlySelected = transportId

        if (transportId == 0) {
            $("#rentButton").hide()
        } else {
            $("#rentButton").fadeIn()
        }
        //highlight the selected option
        for (let i = 0; i < 10; i++) {

            $("#transportCard-" + i).removeClass("selectedTransport")
        }
        $("#transportCard-" + transportId).addClass("selectedTransport")


        //set the selected main card with the name
        $("#transportName").html(transportName)

        //set the selected main card with the correct image
        $("#transportImage").attr('src', transportImages[transportId])

        inputText = $("#inputTextBox").val().trim()

        //calculate the function

        for (let i = 0; i < 10; i++) {

            $("#transportButtonText-" + i).html(getCardText(i))
        }

        //set the main card with the updated text calculation
        $("#transportText").html(getCardText(transportId))

        $("#transportRangeText").html("Max range: " + transportRanges[transportId])
        //alert(transportId)
        updateSelectCardRange(transportId)

        checkForRange()

    });

}



function updateSelectCardRange(transportId) {
    $("#fullTransportCard").removeClass("outOfRangeTransport")

    transportDistance = inputText
    if (functionId == 0) {
        transportDistance = inputText
    } else {
        transportDistance = (inputText / 60) * transportMph[transportId]
    }

    if (transportRanges[transportId] < transportDistance) {
        $("#transportRangeText").html("Out of range (> " + transportRanges[transportId] + " miles)")
        $("#fullTransportCard").addClass("outOfRangeTransport")
    } else {
        $("#fullTransportCard").removeClass("outOfRangeTransport")
        $("#transportRangeText").html("Max range: " + transportRanges[transportId]);


    }

}

function updateAllCardTexts(inputText) {
    for (let i = 0; i < 10; i++) {
        $("#transportCard-" + i).hide().fadeIn("fast");

        $("#transportButtonText-" + i).html(getCardText(i))
    }

    if (transportId != -1) {
        $("#transportText").html(getCardText(transportId))
    }

    //check for range
    checkForRange()

}