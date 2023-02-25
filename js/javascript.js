let $opciones = document.querySelectorAll(".menu-li")
let $nav = document.querySelector("#menu")


$opciones.forEach (opt => {
    opt.addEventListener("click", asignarHref)
})


function asignarHref (e) {
        console.log(e.target)
        switch (e.target.id) {
            case "resize":
                window.location.href = "pages/"
                break

            case "watermark":
                window.location.href = "pages/"
                break

            case "text":
                window.location.href = "pages/"
                break

            case "filter":
                window.location.href = "pages/"
                break
            }
            
}



