//create map
const map = L.map('mapid').setView([-8.0524282,-34.9130201], 16)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    
})

let marker;

// create and add marker
map.on('click', function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]') .value = lat;
    document.querySelector('[name=lng]') .value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon tileLayer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)
})

// upload photos
function addPhotoField() {
    // Pegar container de fotos #images e duplicar .new-image
    const container = document.querySelector('#images')

    const fieldsContainer = document.querySelectorAll('.new-upload')

    const newFieldContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true)

    // Verificar se está vazio e se estiver não adicionar
    const input =  newFieldContainer.children[0]

    if(input.value == "") {
        return
    }

    //Limpar o campo de
    input.value = ""

    //adicionar mais um campo
    container.appendChild(newFieldContainer)
}

function deleteField(event) {
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length < 2) {
        span.parentNode.children[0].value = ""
        return
    }

    // deletar o campo de
    span,parentNode.remove();
}


// seleção sim e não
function toggleSelect(event) {
    // retirar class .active
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })

    // colocar class .active
    const button = event.currentTarget
    button.classList.add('active')
    

    // atualizar o input hidden com o valor
    const input = document.querySelector('[name="open_on_weekends"]')

    // verificar se sim ou nao

    input.value = button.dataset.value

}

