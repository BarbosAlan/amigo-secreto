var amigos = [];
let list = document.querySelector(".name-list");

function adicionarAmigo()
{
    let input = document.getElementById("amigo");
    
    if (input && input.value.trim() !== '')
    {
        amigos.push(input.value.trim());
        input.value = '';
        list.innerHTML = amigos.map(amigos => `<li>${amigos}</li>`).join('');
    }
}

function sortearAmigo()
{
    list.innerHTML = '';
    if (amigos.length === 0) {
        alert("Adicione amigos antes de sortear!");
        return;
    }
    let result = document.querySelector(".result-list");
    let index = Math.floor(Math.random() * amigos.length);
    let drawn = amigos[index];

    if (drawn !== undefined && drawn !== '')
        result.innerHTML = `o amigo sorteado é ${drawn}`;
    else
        result.innerHTML = `[ERROR]`;
}