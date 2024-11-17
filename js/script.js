
// to scrolled top
let toTopEl = document.querySelector(".to_top");

window.onscroll = () => {
    if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
    ) {
        toTopEl.style.display = "flex";
    } else {
        toTopEl.style.display = "none";
    }
};

toTopEl.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

});


// counter up

let funFactElement = document.getElementById("fun_fact");
let counterElement = document.querySelectorAll(".counter");
let counterElementArray = Array.from(counterElement);

let counterFunc = () => {
    counterElementArray.map((counterEl) => {
        //number collect from user
        let countEndNumber = counterEl.dataset.counted;
        //cunting calculation
        let countingNum = 0;

        let counterUp = () => {
            countingNum++;
            counterEl.innerHTML = countingNum + "%";
            if (countingNum == countEndNumber) {
                clearInterval(timing);
                return;
            }
        };

        let timing = setInterval(() => {
            counterUp();
        }, 60);
    });
};

funFactElement.addEventListener("mousemove", counterFunc, { once: true });

// slick slider 
$('.hero_banner_slide').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: false,
    autoplay: true,
});


$('.recent_work_slider').slick({
    lazyLoad: 'ondemand',
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    lazyLoad: 'progressive',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});


// slider setting for testimonial
$('.testimonial_content').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.testimonial_clints_profile'
});
$('.testimonial_clints_profile').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    asNavFor: '.testimonial_content',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        }

    ]
});




// gsap start 



