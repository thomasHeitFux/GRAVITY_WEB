function ReferentialNavBar(){
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Gravity</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link fw-bold" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Clients
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">Contact</a>
            </li>
          </ul>
         <div>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
            <a href=""></a>
         </div>
        </div>
      </nav>
    )
}

export default ReferentialNavBar