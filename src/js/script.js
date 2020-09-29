// TODO: change to functions 
(function () {
    // move src from child img to parrent with class 'ibg', hide img (css)
    let ibgs = document.getElementsByClassName('ibg');
    if (ibgs.length) {
        for (let item of ibgs) {
            let imgSrc = item.children[0].attributes[0].value;
            item.style = `background-image: url("${imgSrc}");`;
        }
    }
    // toggle active from some collection elements with 'icon-menu' classes
    // let iconMenu = document.getElementsByClassName('icon-menu');
    // if(iconMenu.length){
    //     let collection = document.querySelectorAll('.icon-menu');
    //     collection.forEach(link => {
    //         link.addEventListener('click', event => {
    //             let target = event.target;
    //             if(target.classList.contains('acitve')) return;

    //             target.classList.add('active');
    //             collection.forEach(el => {
    //                 if(el !== target)
    //                     el.classList.remove('active');
    //             });
    //         });
    //     });
    // }
    let iconMenu = document.querySelector(".icon-menu");
    let body = document.querySelector("body");
    let menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", (e) => {
        iconMenu.classList.toggle("active");
        body.classList.toggle("lock");
        menuBody.classList.toggle("active");
    });

    const elems = '[id*=slider_page]',
        btnParent = '.slider__buttons',
        btnClass = 'slider__btn';

    const simpleSlider = (elems, btnParent, btnClass) => {
        elems = document.querySelectorAll(elems),
        btnParent = document.querySelector(btnParent),
        btnClass = btnClass || 'btn';

        let ul = document.createElement('ul');
        elems.forEach((el, i) => {
            let li = document.createElement('li');
            let btn = document.createElement('button');
            btn.className = btnClass;
            btn.setAttribute('id', `btn_${el.attributes.id.value}`);
            btn.addEventListener('click', btnClickHandle);
            li.append(btn);
            ul.append(li);
        });

        btnParent.append(ul);

        function btnClickHandle (e) {
            let target = e.target;
            if(target.classList.contains('acitve')) return;

            target.classList.add('active');
            elems.forEach(el => {
                if(el !== target)
                    el.classList.remove('active');
            });
        }

        
    }

    simpleSlider(elems, btnParent, btnClass);

}());