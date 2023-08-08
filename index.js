const widgets = document.querySelectorAll('.widgets');
widgets.forEach((widget) => {

    widget.addEventListener('click', () => {
        location.reload()
    });

});