class Home extends React.Component {
    render () {
        return (
            <div>
                <header>
                    <object class="navBar" data="nav.html"></object>
                </header>

                <main>
                    <div id="SideBar" class="sidebar" style="left: -200px">
                        <button class="btn btn-danger fechaSideBar" onclick="fechaSideBar()">×</button>
                        <a href="javascript:void(0)" class="dropdown">Cursos</a>
                        <div class="dropdown-content">
                            <a href="BD.html">Banco de Dados I</a>
                            <a href="DW.html">Desenvolvimento Web</a>
                        </div>
                        <a href="sobre.html">Sobre</a>
                    </div>
                    <span style="font-size:30px;cursor:pointer" onclick="abreSideBar()">☰</span>
                    <div class="panel">
                        <div class="panel-header">
                            <h1 class="center">PÁGINA PRINCIPAL</h1>
                        </div>
                        <div class="panel-body">
                            <h3>Programação Web</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quod natus voluptate iusto nesciunt,
                                impedit
                                id distinctio atque, praesentium odio recusandae? Voluptates reiciendis amet ut eum saepe? Velit,
                                laborum
                    qui.</p>
                            <img class="center border-blue border-round" src="Content/img/maxresdefault.jpg"
                                style="width: 400px; height: 200px;">
                            </img>
                        </div>

                        <section id="areaComentarios">
                            <div class="panel">
                                <div class="panel-header">
                                    <h1>&ensp;Comentários</h1>
                                </div>
                                <div class="panel-body">
                                    <table class="table table-hover" style="width: 100%">
                                        <thead>
                                            <tr>
                                                <th style="width: 20%">Nome</th>
                                                <th style="width: 65%">Comentário</th>
                                                <th style="width: 15%">Apagar</th>
                                            </tr>
                                        </thead>
                                        <tbody id="ComentariosFeitos">
                                            <tr>
                                                <td>João</td>
                                                <td>Grande Dia!</td>
                                                <td>
                                                    <button class="btn btn-danger" type="button"
                                                        onClick="ApagarComentario(this)">Apagar</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div class="panel">
                                <div class="panel-header">
                                    <h1>&ensp;Envie seu comentário</h1>
                                </div>
                                <div class="panel-body">
                                    <form action="post">
                                        <div class="form-group">
                                            <div class="label-input-group">
                                                <label for="NomeCompleto">Nome Completo</label>
                                                <input class="form-control" type="text" placeholder="Nome" name="NomeCompleto"
                                                    id="NomeCompleto" style="width: 350px">
                                                </input>
                                            </div>
                                            <div class="form-group">
                                                <textarea class="form-control" name="comentario" placeholder="Escreva seu comentário aqui!"
                                                    id="ComentarioText" cols="150" rows="10"></textarea>
                                            </div>
                                            <div class="form-group">
                                                <button type="button" id="enviarComentario" class="btn btn-success">Enviar</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
                <footer>
                    <div class="center">
                        <strong>Copyright© Guilherme Moraes 2019</strong>
                    </div>
                </footer>
            </div>
        );
    }
}
ReactDOM.render( <Home />, document.getElementById( 'root' ) );
