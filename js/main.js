window.onload = function(){
    console.log("Initializing custom javascript.");
    window.onscroll = function (e) {  
    // called when the window is scrolled.  
        console.log("Event Scroll ", e.scrollTop);
        $(".animate-right").addClass("in-view");
    } 
};