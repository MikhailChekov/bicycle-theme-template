(function(){
    // move src from child img to parrent with class 'ibg', hide img (css)
    let ibgs = document.getElementsByClassName('ibg');
    if(ibgs.length){
        for (let item of ibgs) {
            let imgSrc = item.children[0].attributes[0].value;
            item.style = `background-image: url("${imgSrc}");`;
        }
    }
    // toggle active from some collection elements with 'icon-menu' classes
    let iconMenu = document.getElementsByClassName('icon-menu');
    if(iconMenu.length){
        let collection = document.querySelectorAll('.icon-menu');
        collection.forEach(link => {
            link.addEventListener('click', event => {
                let target = event.target;
                if(target.classList.contains('acitve')) return;

                target.classList.add('active');
                collection.forEach(el => {
                    if(el !== target)
                        el.classList.remove('active');
                });
            });
        });
    }
}());