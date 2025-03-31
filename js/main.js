document.querySelector('button').addEventListener('click', getWizard)


function getWizard(){
    const wizard = document.querySelector('input').value
    const url = `https://potterapi-fedeperin.vercel.app/en/characters?search=${wizard}`

    fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('h2').innerText = data[0].fullName
            document.querySelector('img').src = data[0].image

            const spellUrl = `https://hp-api.onrender.com/api/spells`

            fetch(spellUrl)
            .then(res => res.json())
            .then(spell => {
            console.log(spell)
            document.querySelector('h3').innerText = spell[3].name
            document.querySelector('h4').innerText = spell[3].description
            })
            .catch(err => {
                console.log(`error ${err}`)
            });

        })
        .catch(err => {
            console.log(`error ${err}`)
    });
}