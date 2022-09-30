import X from "../images/cr7.jpg"
function PageCard(props){
    return      <div className="col-md-3 cards">
                    <div class="card">
                        <img src={props.Cardimg} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <a href="#">{props.x}</a>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item"><a href="#">{props.title}</a></li>
                            <li class="list-group-item C">{props.text}</li>
                            <li class="list-group-item">
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                            </li>
                        </ul>
                        <div class="card-body tandc">
                       <pre><i class="bi bi-clock"></i> {props.time}           <i class="bi bi-calendar3"></i> {props.calender}</pre>
                           
                            
                        </div>
                        </div>
                </div>
      
}
export default PageCard;