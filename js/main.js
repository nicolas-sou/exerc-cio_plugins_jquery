$(document).ready(function(){
    $('#carrosel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(--) 00000-0000'
    })
    $('#CPF').mask('000.000.000-00', {
        placeholder: 'xxx.xxx.xxx-xx'
    })
    $('#CEP').mask('00000-000', {
        placeholder: '01000-000'
    })


    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email:true
            },
            telefone: {
                required: true
            },
            CPF: {
                required: true
            },
            CEP: {
                required: true
            },
            endereço: {
                required: true
            },
            veiculoDeInteresse: {
                required: false
            },
        },
        messages: {
            nome: 'Por favor, insira o seu Nome Completo'
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let camposIncorretos = validador.numberOfInvalids();
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000);
    })
})