let input = document.querySelector('input')
let button = document.querySelector('button')


let Users = [
    { id: 1, name: 'mmd' },
    { id: 2, name: 'ali' }
]

button.addEventListener('click', () => {
    let isLogin = Users.some((user) => {
        return input.value === user.name
    })

    let UserPromise = new Promise((resolve, reject) => {
        if (isLogin) {
            resolve()
        } else {
            reject()
        }
    })

    function Success() {
        console.log('Success ✔️');
    }
    function Error() {
        console.log('Error ❌');
    }

    UserPromise.then(Success).catch(Error).finally(() => { input.value = '' })
})





// function LoadExternalFile(cdn) {
//     return new Promise((resolve, reject) => {
//         const LinkTag = document.createElement('link')

//         LinkTag.rel = 'stylesheet'
//         LinkTag.href = cdn

//         LinkTag.onload = function () {
//             resolve('file loaded')
//         }
//         LinkTag.onerror = function () {
//             reject('file not loaded')
//         }

//         setTimeout(() => {
//             document.head.append(LinkTag)
//         }, 1000);
//     })
// }

// function res(succsess){
//     console.log(succsess);
// }

// function Notres(error){
//     console.log(error);
// }

// LoadExternalFile('style.css')
//     .then(res)
//     .catch(Notres)



// function saveVisitCount(){
//     if(localStorage.visitCount){
//         localStorage.visitCount=Number(localStorage.visitCount)+1
//     }else{
//         localStorage.visitCount=1
//     }
// }


// function DisplayVisitCount(){
//     const visitCount=localStorage.visitCount||0;
//     document.getElementById('visitCount').textContent=visitCount
// }

// saveVisitCount()
// DisplayVisitCount()

