function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var ano_user = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (ano_user.value.length == 0 || ano_user.value > ano_atual) {
        alert('Data inválida! Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('txtsex')
        var idade = ano_atual - Number(ano_user.value)
        var sexo = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            sexo = 'masculino'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca-m.jpg')
                res.innerHTML = `Criança do sexo ${sexo} com ${idade} anos`
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-m.jpg')
                res.innerHTML = `Jovem do sexo ${sexo} com ${idade} anos`
            } else if (idade < 60) {
                img.setAttribute('src', 'adulto-m.jpg')
                res.innerHTML = `Adulto do sexo ${sexo} com ${idade} anos`
            } else {
                img.setAttribute('src', 'idoso-m.jpg')
                res.innerHTML = `Idoso do sexo ${sexo} com ${idade} anos`
            }

        } else {
            sexo = 'feminino'
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'crianca-f.jpg')
                res.innerHTML = `Criança do sexo ${sexo} com ${idade} anos`
            } else if (idade < 21) {
                img.setAttribute('src', 'jovem-f.jpg')
                res.innerHTML = `Jovem do sexo ${sexo} com ${idade} anos`
            } else if (idade < 60) {
                img.setAttribute('src', 'adulto-f.jpg')
                res.innerHTML = `Adulto do sexo ${sexo} com ${idade} anos`
            } else {
                img.setAttribute('src', 'idoso-f.jpg')
                res.innerHTML = `Idoso do sexo ${sexo} com ${idade} anos`
            }
        }
        
        res.appendChild(img)
    }

}