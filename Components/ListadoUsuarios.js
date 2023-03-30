function ListadoUsuarios(promps){
    //en promps recibimos la respuesta de la api
    //en promps.data están los datos a parsear
    
    const usuarios = promps.data
    //los tr que trae el componente table de boostrap se reemplazan
    //por el mapeo del resultado de la api para obtener el html
    return (`<table class="table">
                            <thead>
                            <tr>
                                <th scope="col">Id</th>
                                <th scope="col">Email</th>
                                <th scope="col">Firs_name</th>
                                <th scope="col">Last_name</th>
                                <th scope="col"></th>
                            </tr>
                            </thead>
                            <tbody>
                            ${usuarios.map(u => RowUser(u)).join('')}
                            </tbody>
                        </table>
                        <!--Paginadpr-->
                        ${Pagination(promps)}
                        `)
}
    
function RowUser(usuario){

    const usr = usuario;

    return(`<tr>
                <th scope="row">${usr.id}</th>
                <td>${usr.email}</td>
                <td>${usr.first_name}</td>
                <td>${usr.last_name}</td>
                <td>
                    <img src='${usr.avatar}'/>
                </td>
            </tr>`)
}

function Pagination (props) {
    const page = props.page;
    const per_page = props.per_page;
    const total = props.total;
    const total_pages = props.total_pages;
    //es lo mismo que escribir
    //const {page, per_page, total, total_paes} = props;

    return(`<nav aria-label="...">
                <ul class="pagination">
                   
                    <li class="page-item">
                        <a class="page-link" href="#">Previous</a>
                    </li>
                    ${Page(total_pages, page)}
                    <li class="page-item">
                        <a class="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
`)


}

//cuando el número de pagina coincide con el parametro page se pone 'active'
function Page(total_pages, page){
    let pages = '';
    for(let i=0; i < total_pages; i++) {
        pages += `<li class="page-item ${page === (i+1) ? 'active' : ''}" aria-current="page">
                    <a class="page-link" href="#">${(i+1)}</a>
                  </li>`
    }
    return pages;
}