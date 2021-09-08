

    $('.button').on('click', async function (event) {
        event.preventDefault();
        $('#textNasa').css("display", "none");
        let inputDate = $('#date').val();
        let url = `https://api.nasa.gov/planetary/apod?api_key=DwTrbcTBufGFpHSx305HaaB0NAjbIJtS5uB007jd&date=${inputDate}`
        let api = await fetch(url).then(response => response.json());
        $('body').css("background-image", `url(${api.url})`);
        $('body').css("background-repeat", "no-repeat");
        $('body').css("background-size", "cover");
        $('.content').css('display', 'block');
        $('.titleNasa').html(`${api.title}`);
        $('.textNasa').html(`(${api.explanation})`);
    });
