document.querySelector('button').addEventListener('click', getWizard)
const section = document.querySelector('section')

function getWizard(){
    const name = document.querySelector('input').value
    const url = `https://potterapi-fedeperin.vercel.app/en/houses/random`

    document.querySelector('input').value = ""
    document.querySelector('section').innerHTML = ""

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const house = data.house
            document.querySelector('h2').innerText = `${name} is sorted to ${house}!`
            document.querySelector('h4').innerText = `Mascot: ${data.emoji}`

            const housemateUrl = `https://hp-api.onrender.com/api/characters/house/${house}`

            fetch(housemateUrl)
            .then(res => res.json())
            .then(housemate => {
            console.log(housemate)
            for(let i = 0; i < 5; i++){
                let img = document.createElement('img')
                console.log(img)
                img.src = housemate[i].image
                section.appendChild(img)
                img.style.height = '325px'
                img.style.margin = '10px'
                img.style.borderRadius = '10px'
                document.querySelector('h3').innerText = "Some great wizards in your house:"
            }
            })
            .catch(err => {
                console.log(`error ${err}`)
            });

        })
        .catch(err => {
            console.log(`error ${err}`)
    });
}