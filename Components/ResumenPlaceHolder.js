function TotalPorExtension(Comentarios){

    const Cantidades = [];

    let Elemento   = {idExt: ' ', 
                        cantExt: 0};
    const Extensiones = [];
    let idx = 0;
    Comentarios.forEach(comentario => {
        const longEmail = comentario.email.length;
        const pos1 = comentario.email.indexOf("@");
        const pos2 = comentario.email.indexOf(".",pos1);
        const longExt = longEmail-pos2;
        const extension = comentario.email.substring(pos2, longEmail);
        Extensiones.push(extension);
     });
     

     //console.log(Extensiones)

     Extensiones.sort();
     
     let extAnt = Extensiones[0];
     let cant = 1;
     Extensiones.forEach(ext => {
       if (ext === extAnt)
       {
            cant +=1;
        }
        else
        {
           //Elemento.idExt = extAnt;
           //Elemento.cantExt = cant; 
           //Cantidades.push(Elemento);
           Cantidades.push({extAnt,cant});
           
           cant = 1; 
           extAnt = ext
        }
    })
    
    //Elemento.idExt = extAnt;
    //Elemento.cantExt = cant; 
    //Cantidades.push(Elemento);
    Cantidades.push({extAnt,cant});
    

    //console.log(Cantidades);
    const html = ResumenHtml(Cantidades);
    return html;
}

function ResumenHtml(Extensiones){
    return (`<table class="table">
    <thead>
    <tr>
        <th scope="col">Extension</th>
        <th scope="col">Cantidad</th>
    </tr>
    </thead>
    <tbody>
    ${Extensiones.map(a => RowExtension(a)).join('')}
    </tbody>
</table>
`)
}

function RowExtension(Extension){

    const ext = Extension;

    return(`<tr>
                <th scope="row">${ext.extAnt}</th>
                <td>${ext.cant}</td>
            </tr>`)
}