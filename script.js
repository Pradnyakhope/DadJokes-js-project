


// let joke = fetch('https://api.api-ninjas.com/v1/dadjokes', {
//     headers: {
//         'X-Api-Key': 'fqyOcD61ApkfTSbL7Pbhvw==ZusGc0AcmTSM3khG'
//     }
// })

// joke.then(res => res.json())
//     .then(response => {
//         console.log(response);

// })
let joke1= document.getElementById('Dad-1')
let joke2= document.getElementById('Dad-2')
let joke3= document.getElementById('Dad-3')

let dad1Btn = document.getElementById('Wdad-1')
let dad2Btn = document.getElementById('Wdad-2')
let dad3Btn = document.getElementById('Wdad-3')
let laugh = document.getElementById('audio');
let img = document.getElementById('img');

async function getDadJokes() {
    try {
        let joke = await fetch('https://api.api-ninjas.com/v1/dadjokes', {
            headers: {
                'X-Api-Key': 'fqyOcD61ApkfTSbL7Pbhvw==ZusGc0AcmTSM3khG'
            }
        });
        let res = await joke.json();
        return res;
    } catch (error) {
        console.log(error);
    }
}

async function fetchJokes(){
    // let a= await getDadJokes().then(joke => joke[0].joke);
    // console.log(a);
    
    joke1.innerText= `Dad-1 :${await getDadJokes().then(joke => joke[0].joke)}`
    joke2.innerText= `Dad-2 :${await getDadJokes().then(joke => joke[0].joke)}`
    joke3.innerText= `Dad-3 :${await getDadJokes().then(joke => joke[0].joke)}`
}

dad1Btn.addEventListener('click',function(){
    img.src='https://media.tenor.com/RAAbLf9JenAAAAAC/laugh-anime.gif';
    dad1Btn.innerText='';
    dad2Btn.innerText='';
    dad3Btn.innerText='';
    laugh.play();
    setTimeout(() => {
        window.location.reload();
    }, 3000);
})
dad2Btn.addEventListener('click',function(){
    img.src='https://i.pinimg.com/originals/08/34/15/0834153562cc93fa75fd060396b6dee2.gif';
    dad1Btn.innerText='';
    dad2Btn.innerText='';
    dad3Btn.innerText='';
    laugh.play();
    setTimeout(() => {
        window.location.reload();
    }, 3000);
})
dad3Btn.addEventListener('click',function(){
    img.src='https://i.pinimg.com/originals/4d/f1/8e/4df18e92e572823631919cf33de69900.gif';
    dad1Btn.innerText='';
    dad2Btn.innerText='';
    dad3Btn.innerText='';
    laugh.play();
    setTimeout(() => {
        window.location.reload();
    }, 3000);
})
window.onload=fetchJokes();
// getDadJokes().then(joke => console.log(joke[0].joke));

