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

    /**
     * Usage: simpleSlider(elems, btnParetn[,btnClass])
     * elems - string, define container with elems;
     * btnParent - string, define btn container (should be 'ul'), where generate btns 
     * with className - btnClass;
    */
    const simpleSlider = (elems, btnParent, btnClass) => {
        elems = document.querySelectorAll(elems),
        btnParent = document.querySelector(btnParent),
        btnClass = btnClass || 'slider_btn';
        let position = 0;

        // hide extra elems
        for(let i = 0; i < elems.length; i++){
            if(i !== position){
                elems[i].style.display = "none";
            }
        }
        
        //create Btn's + create id to elems and connect with btn's.
        elems.forEach((el, i) => {
            let li = document.createElement('li');
            let btn = document.createElement('button');
            btn.className = btnClass;
            btn.setAttribute('id', `slider_btn_${i}`);
            btn.addEventListener('click', btnClickHandle);
            el.setAttribute('id', `slider_element_${i}`);   
            el.addEventListener('click', elemClickHandle);
            if(i === position){ btn.classList.add('active');}
            li.append(btn);
            btnParent.append(li);
        });
        

        function showElem (pos, prevPos) {
            elems[pos].style.display = "block";
            btnParent.children[pos].children[0].classList.add('active');
            if(pos !== prevPos){
                elems[prevPos].style.display = "none";
                btnParent.children[prevPos].children[0].classList.remove('active');
            }
        }

        function elemClickHandle (e) {
            let prevPos = position;
            let posNumber = parseInt(e.currentTarget.id.match(/\d+/));
            ((++posNumber) > elems.length - 1) ? 
            position = 0 :
            position = posNumber;
            showElem(position, prevPos);
        }

        function btnClickHandle (e) {
            let prevPos = position;
            position = parseInt(e.target.id.match(/\d+/));
            showElem(position, prevPos);
        }
    }

    const elems = '.slider__item',
    btnParent = '.slider__buttons',
    btnClass = 'slider__btn';

    simpleSlider(elems, btnParent, btnClass);

}());