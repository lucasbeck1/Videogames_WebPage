// To Transform this js to md, change the file extension and uncomment.
/* 
# Project Upgrades

__Front:__    
cambiar ancho de cards ?  
card hover - mostrar logo de plataformas (ps, xbox, pc) en lugar de generos  
y los generos mostrarlos con el atributo title para cada card  
responsive image: width: 100%; max-width: 400px; height: auto;   
diseñar y animar logo landing  
landing (waves css)  
opción de elegir default image form  
cuando carga el home, incrementar el margin top del footer  
previsualizacion loading  
poner un onload a la imagen para que se muestre cuando esté cargada  
footer  
Firma LB creations   
estado global para filtros, ord, y pagina actual   
en el form agregar icono de x en los generos seleccionados     
clases para los colores y botones  ( * )     
añadir un filtro por plataforma  
añadir iconos  
mostrar iconos y links de plataformas (steam , xbox) en detail  
pedir dlcs del juego en details ?  
https://www.google.com/search?q=S.T.A.L.K.E.R.%3A+Call+of+Pripyat
pedir guia de logros mediante url personalizada en troppgy guides, xbox achievementes, etc  
pedir gameplay mediante url personalizada en youtube


__Back:__   
En los test de rutas modificar el timeout 2000ms de mocha porque da error a veces 
Optimizar datos proporcionados en llamado detail (llenar el detail por front haciendo un filter) y requieriendo solo los datos necesarios de los juegos externos 
Si no ejecutas Get genres depues de un reset, no agrega generos a los juegso creados  
Tener genres y juegos hardcodeados en json para alimentar por primera vez la db en caso de reset   
autorizacion,  
romper form por javascript - En static no pude  




__Deploy:__  
BrowserRouter (proyectos que se dependen de un servidor) - HashRouter (proyectos estáticos)  
github - solo static  
vercel - Concurrent Builds (1)  
railway - 500hs por mes  
render - a los 90 dias se cae la db y hay que crear una nueva - 1 solo proyecto 750hs/mes  
netlify - Concurrent Builds (1)  
glitch.io - 120hs de uso y mientras se edita activamente ?  



__Metodos interesantes:__  

- Lenguaje  
navigator  
navigator.language  
window.navigator.language  
navigator.browserLanguage  --->  undefined  

- Medidas pantalla  
window.screen  


- Medidas pantalla   
METER TAG  
<label for="disk_c">Disk usage C:</label>  
<meter id="disk_c" value="2" min="0" max="10">2 out of 10</meter><br>  
<label for="disk_d">Disk usage D:</label>  
<meter id="disk_d" value="0.6">60%</meter>  

PROGRESS TAG  
<label for="file">Downloading progress:</label>  
<progress id="file" value="32" max="100"> 32% </progress>  

*/
