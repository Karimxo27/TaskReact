import Logo from "../images/logo.svg"
function Navbar(){
    return<div><nav class="navbar navbar-expand-lg ">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">   <img src={Logo}></img> </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Demos</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pages</a>
          </li>
          <li class="nav-item ">
          <a class="nav-link" href="#">Accounts</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Megamenu</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        
        </form>
      </div>
    </div>
  </nav>

    </div>
}
export default Navbar;