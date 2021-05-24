function addToggleSwitch() {
    console.log('reeeee');
    $('#nav-links').append("<li id='switch-li'></li>");
    $('#switch-li').append("<div class='custom-control custom-switch' id='toggle-container'></div>");
    $('#toggle-container').append("<input type='checkbox' class='custom-control-input' id='customSwitches' />");
    $('#toggle-container').append("<label class='custom-control-label' for='customSwitches'>Toggle this switch element</label>");  
}

$(document).ready(setTimeout(addToggleSwitch(),2000));