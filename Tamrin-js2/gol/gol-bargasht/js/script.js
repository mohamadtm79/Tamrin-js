let _div = document.querySelectorAll('.div');
let _img = document.querySelectorAll('div>img')
let random = false;

// _img.forEach((item , val)=>{
//     item.addEventListener('click',()=>{
//         if(val == random){
//             console.log("کامپیوتر برد");
//         }else{
//             console.log("کامپیوترباخت");
//         }
//     });
// });


// document.getElementsByClassName('button')[0].addEventListener('click',()=>{
//     random = true;
//     random = parseInt(Math.random()*4);
//     _img[random].src = 'img/1.png'
//     _img.forEach((item , val)=>{
//         item.addEventListener('click',()=>{
//             item.src = 'img/1.png'
//         });
//     });
//     console.log(random);
// })
let conter = 0
let conter2 = 0
let flag = false
let button = document.getElementsByClassName('button')[0];
button.addEventListener('click',()=>{
    if(flag == false){
        _img[0].src = 'img/0.png';
        _img[1].src = 'img/0.png';
        _img[2].src = 'img/0.png';
        _img[3].src = 'img/0.png';
        document.getElementsByTagName("h1")[1].innerHTML = '0'
        document.getElementsByTagName("h1")[2].innerHTML = '0'
        flag = true
        conter = 0
        conter2 = 0
    }
})
_img.forEach((item , val)=>{
    item.addEventListener('click',()=>{
        if(flag == true){
            item.src = 'img/1.png'
            random = true
            setTimeout(() => {
                setTimeout(() => {
                    random = parseInt(Math.random()*4);
                    _img[random].style.border = '2px solid red'
                    if (random == val){
                        console.log("gool");
                        conter++
                        document.getElementsByTagName("h1")[1].innerHTML = `کامپیوتر:${conter}`
                    }else{
                        console.log("bakhti");
                        conter2++
                        document.getElementsByTagName("h1")[2].innerHTML = `شما:${conter2}`
                    }
                }, 1000);
                flag = false
                setTimeout(() => {
                    flag = true
                    item.src = 'img/0.png'
                    _img[random].style.border = 'transparent' 
                    if(conter == 3 || conter2 == 3){
                        flag = false
                        if(conter == 3){
                            document.getElementsByTagName('h2')[0].innerHTML = `کامپیوتر برنده شد`
                        }else{
                            document.getElementsByTagName('h2')[0].innerHTML = `شمابردین`

                        }
                        document.getElementsByTagName('span')[0].style.display = 'flex'
                    }
                }, 2000);
                if(button.addEventListener('click',function(){
                    document.getElementsByTagName("h1")[2].innerHTML = '0'
                    conter = 0
                    conter2 = 0
                    document.getElementsByTagName("h1")[1].innerHTML = '0'
                }));
            }, 100);
        }
    });
});
