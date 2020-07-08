$(document).ready(() => {
    //scrolling animation
    const $win = $(window);
    //get all the pages
    const scrollContainers = $(".scroll");
    $win.on("scroll resize", () => {
        //get the scroll position which will be the size of the screen minus 500px
        let scrollPosition = $win.scrollTop() + $win.height() - 500;
        //loop through all the pages and check if scroll position is in the page
        scrollContainers.each((index, element) => {
            $element = $(element);
            //get page top position relative to the document
            let elementTop = $element.position().top;
            //get page bottom position relative to the document
            let elementBottom = $element.position().top + $element.outerHeight();
            //checking if scroll position is within the page top and bottm position
            if(scrollPosition >= elementTop && scrollPosition <= elementBottom){
                //add class that will animate the content inside the page
                $element.children(".hidden").addClass("fadeIn");
                $element.children(".leftBigFruit").addClass("slideRight");
                $element.children(".rightBigFruit").addClass("slideLeft");
            }
        });
    });
    //triggering onscroll onload aswell
    $win.trigger("scroll");
});