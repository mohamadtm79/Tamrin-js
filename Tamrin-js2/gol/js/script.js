let _div = document.querySelectorAll('.div'); 
let img = document.querySelectorAll('div>img');
let button = document.getElementsByClassName('button')[0];
let _h1 = document.getElementsByTagName('h1');
let flag = false
let order = false;
let conter1 = 0;
let conter2 = 0;
button.addEventListener('click',()=>{
    if(flag == false){
        img[0].src = 'img/0.png'
        img[1].src = 'img/0.png'
        img[2].src = 'img/0.png'
        img[3].src = 'img/0.png'
        flag = true
       _h1[0].innerHTML = 'لطفا رودست مورد نظر کلیک کنید'
        order = true;
        order = parseInt(Math.random() * 4);
       _h1[2].style.backgroundColor = 'transparent'
       _h1[1].style.backgroundColor = 'transparent'
       _h1[1].innerHTML = `0`
       _h1[2].innerHTML = `0`
       _h1[3].innerHTML = `0`
        conter1 = 0;
        conter2 = 0;
    }
});
_div.forEach((item , val)=>{
    item.addEventListener('click',()=>{
        if(flag == true){
            if(val == order){
                console.log('ok');
                img[order].src = 'img/1.png'
                conter1++
               _h1[1].innerHTML = `امتیاز شما${conter1}`
                if(conter1 == 3){
                   _h1[3].innerHTML = `شما بردید`
                   _h1[1].style.backgroundColor = `red`
                   document.getElementsByTagName('h2')[0].innerHTML =' شما بردید'
                   document.getElementsByTagName('span')[0].style.display = 'flex';

                }
                else if(conter1 == 1){
                   _h1[1].style.backgroundColor = `green`
                }
                else if(conter1 == 2){
                   _h1[1].style.backgroundColor = '#bcff00'
                }
            }else{
                console.log('no');
                img[order].src = 'img/1.png'
                conter2++
               _h1[2].innerHTML = `امتیاز کامپیوتر${conter2}`
                if(conter2 == 3){
                   _h1[3].innerHTML = `شما باختید`
                   _h1[2].style.backgroundColor = 'red'
                   document.getElementsByTagName('h2')[0].innerHTML ='شما باختید'
                   document.getElementsByTagName('span')[0].style.display = 'flex';

                }
                else if(conter2 == 1){
                   _h1[2].style.backgroundColor = 'green'
                }
                else if(conter2 == 2){
                   _h1[2].style.backgroundColor = '#bcff00'
                }
            }   
            flag = false
            setTimeout(() => {
                img[0].src = 'img/0.png'
                img[1].src = 'img/0.png'
                img[2].src = 'img/0.png'
                img[3].src = 'img/0.png'
                order = parseInt(Math.random() * 4);
                flag = true
                if(conter1 == 3 || conter2 == 3){
                    flag = false
                }
            }, 2000);

        }
    })
})


